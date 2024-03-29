
import { Avatar, List, message, Rate } from 'antd';
import Link from 'antd/lib/typography/Link';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import AdvisorApi from '../api/Advisor/advisor.api';
import { getSpecializedOfSchoolResponse, Personality, personalityLst, Specialized, suitablePersonality, Unit } from '../common/define-type';
import LamViecVoiConNguoi from '../images/Career_LamViecVoiConNguoi.png';
import HinhHocMauSacThietKe from '../images/Career_HinhHocMauSacThietKe.png'
import NgonNgu from '../images/Career_NgonNgu.png'
import PhanTichLogic from '../images/Career_PhanTichLogic.png'
import TheChatCoKhi from '../images/Career_TheChatCoKhi.png'
import { useSelectorRoot } from '../redux/store';
import CCareerDetailModel from './CCareerDetailModel';
import CCollegeAdvisor from './CCollegeAdvisor';
import CUnitCareerModel from './CUnitCareerModel';

interface test {
    key: number,
    career: string
}

interface Myprops {
    specializedLst: suitablePersonality[],
    setOpenUniAdvisor: React.Dispatch<React.SetStateAction<boolean>>
}

interface DataType {
    key: number;
    college: string;
    score: number;
    ranking: any;
    details: any;
}
let dataSource: DataType[] = [];
const CResultsCareer = (props: Myprops) => {
    // const { specializedLst} = useSelectorRoot(state => state.advisor);

    const [isShow, setIsShow] = useState<boolean>(true);
    const [isShowDetailCareerModal, setIsShowDetailCareerModal] = useState<boolean>(false);
    const [isShowUnitCareerModal, setIsShowUnitCareerModal] = useState<boolean>(false);
    const [personality, setPersonality] = useState<Personality>(
        {
            id: '0',
            name: 'Loading....'
        }
    );

    const [suitableCareer, setSuitableCareer] = useState<suitablePersonality>()
    const [clickedSpecialized, setClickedSpecialized] = useState<Specialized>()
    const [unitLst, setUnitLst] = useState<Unit[]>([])
    const [specializedOfSchoolLst, setSpecializedOfSchoolLst] = useState<getSpecializedOfSchoolResponse[]>([])
    const [srcResultImage, setSrcResultImage] = useState('');
    const [similarSpecialized, setSimilarSpecialized] = useState<Specialized[]>([])

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        // let max = 0;
        // let personality: suitablePersonality;
        // props.specializedLst.forEach(item => {
        //     if (max < item.score) {
        //         max = item.score
        //         personality = item
        //         console.log(item)
        //     }
        // })
        console.log(props.specializedLst)
        if (props.specializedLst !== null && props.specializedLst !== undefined && props.specializedLst.length > 0) {
            let max = 0;
            for (let index = 0; index < props.specializedLst.length; index++) {
                if (props.specializedLst[index].score > max) {
                    max = props.specializedLst[index].score;
                    setSuitableCareer(props.specializedLst[index])
                    if(props.specializedLst[index].personality==='NHÓM NGHỀ LÀM VIỆC VỚI CON NGƯỜI') setSrcResultImage(LamViecVoiConNguoi)
                    else if(props.specializedLst[index].personality==='NHÓM NGHỀ PHÂN TÍCH – LOGIC') setSrcResultImage(PhanTichLogic)
                    else if(props.specializedLst[index].personality==='NHÓM NGHỀ THỂ CHẤT – CƠ KHÍ') setSrcResultImage(TheChatCoKhi)
                    else if(props.specializedLst[index].personality==='NHÓM NGHỀ HÌNH HỌC – MÀU SẮC - THIẾT KẾ') setSrcResultImage(HinhHocMauSacThietKe)
                    else if(props.specializedLst[index].personality==='NHÓM NGHỀ NGÔN NGỮ') setSrcResultImage(NgonNgu)
                }
            }
        }
    }, [])

    useEffect(() => {
        console.log(suitableCareer?.specializeds);
    })

    const onClickCareerDetail = (item: Specialized) => {
        setIsShowDetailCareerModal(true);
        setClickedSpecialized(item)
    }

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

    const ontoggle = (e: any) => {
        setIsShow(e);
    }

    const onGetSpecializedOfSchoolLst = (e: getSpecializedOfSchoolResponse[]) => {
        setSpecializedOfSchoolLst(e);
        if (e) {
            for (let i = 0; i < e.length; i++) {
                dataSource.push({
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
    const onCloseAdvisor = () => {

    }

    return (
        <div className='div-career-advisor-result'>
            {isShow &&
                <div>
                    <div className='div-advisor-content div-center ' >
                        <h1 className='title-advisor-intro' style={{ marginBottom: -10 }}>Nhóm nghề</h1>
                        <h1 className='title-advisor-intro color-title'>{suitableCareer?.personality}</h1>
                        <img src={srcResultImage}/>
                    </div>
                    <List className='list-results-career'
                        header={<div style={{ fontSize: 25 }}>Kết quả tìm kiếm thuộc nhóm ngành này</div>}
                    >
                        <VirtualList
                            data={suitableCareer ? suitableCareer.specializeds : []}
                            itemKey="email"
                        >
                            {(item: Specialized, index) => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        title={<Link onClick={() => onClickCareerUnit(item)} style={{ fontSize: 20 }}>{index + 1}. {item.specialized_name}</Link>}
                                    />
                                    <Link onClick={()=>onClickCareerDetail(item)} style={{ fontStyle: 'normal', fontWeight: 400, fontSize: 20, color: '#FFB507' }}>Xem chi tiết</Link>
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
                        setOpenUniAdvisor={props.setOpenUniAdvisor}
                        toogle={ontoggle}
                        clickedSpecialized={clickedSpecialized}
                        unitLst={unitLst}
                        onGetSpecializedOfSchoolLst={onGetSpecializedOfSchoolLst}
                        onCloseAdvisor={onCloseAdvisor}
                        specializedLst={suitableCareer ? suitableCareer.specializeds : []}
                        onGetSimilarSpecialized={onGetSimilarSpecialized}
                    />
                </div>
            }
            {!isShow && <CCollegeAdvisor
                specializedOfSchoolLst={specializedOfSchoolLst}
                dataSource={dataSource}
                similarSpecialized={similarSpecialized}
            />}
            

        </div >
    )
}

export default CResultsCareer