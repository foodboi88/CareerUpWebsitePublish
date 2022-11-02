
import { Rate, Select, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { getSpecializedOfSchoolResponse } from '../common/define-type';
import iconDown from '../images/icon_down.png';
import CCareerDetailModel from './CCareerDetailModel';
import CLoadingIcon from './CLoadingIcon';

interface DataType {
    key: number;
    college: string;
    score: number;
    ranking: any;
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
let data: DataType[] = [
    {
        key: 1,
        college: 'Đại học FPT',
        score: 27,
        ranking: <Rate disabled defaultValue={5} />,
    },

];
interface MyProps {
    specializedOfSchoolLst: getSpecializedOfSchoolResponse[]
    dataSource: DataType[]
}
const CCollegeAdvisor = (props: MyProps) => {
    const { Option } = Select;
    const [isShowCollegeDetailModel, setIsShowCollegeDetailModel] = useState<boolean>(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    useEffect(() => {
        console.log(props.specializedOfSchoolLst);
        console.log(props.dataSource);
        console.log(data);
        data = props.dataSource;
        
    })
    setTimeout(() => {
        setShowLoading(false)
    }, 10000);
    // useEffect(() => {
    //     setShowLoading(false)
    // }, [data])
    return (
        <div className='college-advisor'>
            <div style={{ background: 'white' }}>
                <div style={{ width: '90em' }}>
                    <div style={{ display: 'flex', background: 'white', padding: '40px 100px' }}>
                        <div className='career-advisor-modal-title' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div className='title-advisor-intro' style={{ fontSize: 24 }}>{props.specializedOfSchoolLst ? props.specializedOfSchoolLst[0]?.specialized_of_school_name : 'Ngành'}</div>
                            <Select
                                className='career-section'
                                placeholder="Chọn khu vực"
                            >
                                <Option value="Hà Nội">Hà Nội</Option>
                                <Option value="Sài Gòn">Sài Gòn</Option>
                                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                            </Select>
                        </div>
                    </div>
                    <div >
                        <Table
                            onRow={() => {
                                return {
                                    onClick: () => {
                                        setIsShowCollegeDetailModel(true)
                                    },
                                };
                            }}
                            dataSource={data}
                            columns={columns} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, cursor: 'pointer' }}>
                        <div style={{ marginRight: 10, color: '#11B8F7' }}>Xem Thêm </div>
                        <img src={iconDown} style={{ height: '4.5px', width: '9px' }} />
                    </div>
                </div>
                {/* <div style={{ width: '90em' }}>
                    <div style={{ display: 'flex', background: 'white', padding: '40px 100px' }}>
                        <div className='career-advisor-modal-title' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div className='title-advisor-intro' style={{ fontSize: 24 }}>Ngành tương tự: Bác sĩ y học cổ truyền <strong style={{ color: '#FFB507' }}>(tương tự 75%)</strong> </div>
                            <Select
                                className='career-section'
                                placeholder="Chọn khu vực"
                            >
                                <Option value="Hà Nội">Hà Nội</Option>
                                <Option value="Sài Gòn">Sài Gòn</Option>
                                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                            </Select>
                        </div>
                    </div>
                    <div >
                        <Table
                            onRow={() => {
                                return {
                                    onClick: () => {
                                        setIsShowCollegeDetailModel(true)
                                    },
                                };
                            }}
                            dataSource={props.dataSource}
                            columns={columns} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, cursor: 'pointer' }}>
                        <div style={{ marginRight: 10, color: '#11B8F7' }}>Xem Thêm </div>
                        <img src={iconDown} style={{ height: '4.5px', width: '9px' }} />
                    </div>
                </div> */}
            </div>
            <CCareerDetailModel
                isShow={isShowCollegeDetailModel}
                setIsShowModal={setIsShowCollegeDetailModel}
            />
            {
                showLoading &&
                <CLoadingIcon />
            }
        </div >
    )
}

export default CCollegeAdvisor