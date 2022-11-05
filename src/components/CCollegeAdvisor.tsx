
import { List, Rate, Select, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { getSpecializedOfSchoolResponse, Specialized, suitablePersonality, Unit } from '../common/define-type';
import iconDown from '../images/icon_down.png';
import CCareerDetailModel from './CCareerDetailModel';
import CLoadingIcon from './CLoadingIcon';
import VirtualList from 'rc-virtual-list';
import Link from 'antd/lib/typography/Link';
import AdvisorApi from '../api/Advisor/advisor.api';
import CUnitCareerModel from './CUnitCareerModel';
import CCareerSchoollDetailModel from './CCareerSchoolDetailModel';
import CCareerSchoolDetailModel from './CCareerSchoolDetailModel';

interface DataType {
    key: number;
    college: string;
    score: number;
    ranking: any;
    details: any;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Trường',
        dataIndex: 'college',
        key: 'college',
    },
    {
        title: 'Điểm',
        dataIndex: 'score',
        key: 'score',
    },

    {
        title: 'Đánh giá',
        dataIndex: 'ranking',
        key: 'ranking',
    },
];
interface MyProps {
    specializedOfSchoolLst: getSpecializedOfSchoolResponse[]
    dataSource: DataType[]
    similarSpecialized: Specialized[]
}

let dataSourceSimilar: DataType[] = [];
const CCollegeAdvisor = (props: MyProps) => {
    const { Option } = Select;
    const [isShowCollegeDetailModel, setIsShowCollegeDetailModel] = useState<boolean>(false)
    const [showLoading, setShowLoading] = useState(true);
    const [clickedSpecialized, setClickedSpecialized] = useState<Specialized>()
    const [isShowUnitCareerModal, setIsShowUnitCareerModal] = useState<boolean>(false);
    const [unitLst, setUnitLst] = useState<Unit[]>([])
    const [isShowDetailCareerModal, setIsShowDetailCareerModal] = useState<boolean>(false);
    const [isShowCollegeSchoolDetailModel, setIsShowCollegeSchoolDetailModel] = useState<boolean>(false);

    const [isShow, setIsShow] = useState<boolean>(true);
    const [specializedOfSchoolLst, setSpecializedOfSchoolLst] = useState<getSpecializedOfSchoolResponse[]>([])
    const [suitableCareer, setSuitableCareer] = useState<suitablePersonality>()
    const [similarSpecialized, setSimilarSpecialized] = useState<Specialized[]>([])
    const [detailSchool, setDetailSchool] = useState<any>('')
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    useEffect(() => {
        console.log(props.specializedOfSchoolLst);
        console.log(props.dataSource);
        // data = props.dataSource;

    })
    const onClickCareerUnit = async (item: Specialized) => {
        setClickedSpecialized(item);
        console.log(item);
        setIsShowUnitCareerModal(true);

        await AdvisorApi.getUnit().then((data: any) => {
            console.log(data.data)
            // dispatch(sendAnswersRequest(data.data))
            setUnitLst(data.data);
        })
    }

    const onClickCareerDetail = (item: Specialized) => {
        setIsShowDetailCareerModal(true);
        setClickedSpecialized(item)
    }

    const ontoggle = (e: any) => {
        setIsShow(e);
    }

    const onGetSpecializedOfSchoolLst = (e: getSpecializedOfSchoolResponse[]) => {
        setSpecializedOfSchoolLst(e);
        if (e) {
            for (let i = 0; i < e.length; i++) {
                dataSourceSimilar.push({
                    key: i + 1,
                    college: e[i].school.school_name,
                    score: e[i].units[0].mark_units[0].mark,
                    ranking: <Rate disabled defaultValue={5} />,
                    details: e[i].school.school_description

                })
            }
        }
    }
    const onGetSimilarSpecialized = (e: Specialized[]) => {
        setSimilarSpecialized(e)
    }
    // useEffect(() => {
    //     setShowLoading(false)
    // }, [data])
    return (
        <div className='college-advisor'>
            <div style={{ background: 'white' }}>
                <div style={{ width: '90em' }}>
                    <div style={{ display: 'flex', background: 'white', padding: '40px 100px' }}>
                        <div className='career-advisor-modal-title' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div className='title-advisor-intro' style={{ fontSize: 24 }}>{props.specializedOfSchoolLst ? props.specializedOfSchoolLst[0]?.specialized_of_school_name : ''}</div>
                        </div>
                    </div>
                    <div >
                        {props.dataSource.length === 0 ?
                            <div className='title-advisor-intro' style={{ fontSize: 24, textAlign: 'center' }}>Không có dữ liệu</div>
                            : <Table
                                onRow={(item) => {
                                    return {
                                        onClick: () => {
                                            setIsShowCollegeSchoolDetailModel(true)
                                            setDetailSchool(item)
                                        },
                                    };
                                }}
                                dataSource={props.dataSource.length ? props.dataSource : []}
                                columns={columns} />}

                    </div>
                </div>
                <div style={{ width: '90em' }}>
                    <div style={{ display: 'flex', background: 'white', padding: '40px 100px' }}>
                        <div className='career-advisor-modal-title' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div className='title-advisor-intro' style={{ fontSize: 24 }}>Ngành tương tự: </div>
                        </div>
                    </div>
                    <div >
                        <List className='list-results-career college-advisor-list' style={{ backgroundColor: 'white', padding: '0px 100px !important' }}
                        >
                            <VirtualList
                                data={props.similarSpecialized ? props.similarSpecialized : []}
                                itemKey="email"
                            >
                                {(item: Specialized, index) => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            title={<Link onClick={() => onClickCareerUnit(item)} style={{ fontSize: 20 }}>{index + 1}. {item.specialized_name}</Link>}
                                        />
                                        <Link onClick={() => onClickCareerDetail(item)} style={{ fontStyle: 'normal', fontWeight: 400, fontSize: 20, color: '#FFB507' }}>Xem chi tiết</Link>
                                    </List.Item>
                                )}
                            </VirtualList>
                        </List>
                        {
                            clickedSpecialized &&
                            <CCareerDetailModel
                                clickedSpecialized={clickedSpecialized}
                                isShow={isShowDetailCareerModal}
                                setIsShowModal={setIsShowDetailCareerModal}
                            />
                        }
                        <CUnitCareerModel
                            isShow={isShowUnitCareerModal}
                            setIsShowModal={setIsShowUnitCareerModal}
                            toogle={ontoggle}
                            clickedSpecialized={clickedSpecialized}
                            unitLst={unitLst}
                            onGetSpecializedOfSchoolLst={onGetSpecializedOfSchoolLst}
                            specializedLst={suitableCareer ? suitableCareer.specializeds : []}
                            onGetSimilarSpecialized={onGetSimilarSpecialized}
                        />
                    </div>
                </div>
            </div>
            <CCareerSchoolDetailModel
                clickedSchool={detailSchool}
                isShow={isShowCollegeSchoolDetailModel}
                setIsShowModal={setIsShowCollegeSchoolDetailModel}
            />
            {/* {
                showLoading &&
                <CLoadingIcon />
            } */}
        </div >
    )
}

export default CCollegeAdvisor