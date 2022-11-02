
import { Avatar, List, message, Rate } from 'antd';
import Link from 'antd/lib/typography/Link';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import AdvisorApi from '../api/Advisor/advisor.api';
import { getSpecializedOfSchoolResponse, Personality, personalityLst, Specialized, suitablePersonality, Unit } from '../common/define-type';
import resulstCareerImg from '../images/results_career_img.png';
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
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        let max = 0;
        let personality: suitablePersonality;
        props.specializedLst.forEach(item => {
            if (max < item.score) {
                max = item.score
                personality = item
                console.log(item)
            }
        })
        console.log(props.specializedLst)
        if (props.specializedLst !== null && props.specializedLst !== undefined && props.specializedLst.length > 0) {
            let max = 0;
            for (let index = 0; index < props.specializedLst.length; index++) {
                if (props.specializedLst[index].score > max) {
                    max = props.specializedLst[index].score;
                    setSuitableCareer(props.specializedLst[index])
                }
            }
        }
    }, [])

    useEffect(() => {
        console.log(suitableCareer?.specializeds);
    })

    const onClickCareerDetail = () => {
        setIsShowDetailCareerModal(true);

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
                })
            }
        }
    }

    const onCloseAdvisor = () => {

    }
    // useEffect(()=>{
    //     let newPersonality: Personality = personality
    //     if(specializedLst) {
    //         newPersonality = personalityLst[parseInt(specializedLst[0].id,10)]
    //     }
    //     setPersonality(newPersonality)
    // },[specializedLst])

    return (
        <div className='div-career-advisor-result'>
            {isShow &&
                <div>
                    <div className='div-advisor-content div-center ' >
                        <h1 className='title-advisor-intro' style={{ marginBottom: -10 }}>Nhóm nghề</h1>
                        <h1 className='title-advisor-intro color-title'>{suitableCareer?.personality}</h1>
                        <img src={resulstCareerImg} />
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
                                    <Link onClick={onClickCareerDetail} style={{ fontStyle: 'normal', fontWeight: 400, fontSize: 20, color: '#FFB507' }}>Xem chi tiết</Link>
                                </List.Item>
                            )}
                        </VirtualList>
                    </List>
                    <CCareerDetailModel
                        isShow={isShowDetailCareerModal}
                        setIsShowModal={setIsShowDetailCareerModal}
                    />
                    <CUnitCareerModel
                        isShow={isShowUnitCareerModal}
                        setIsShowModal={setIsShowUnitCareerModal}
                        setOpenUniAdvisor={props.setOpenUniAdvisor}
                        toogle={ontoggle}
                        onGetSpecializedOfSchoolLst={onGetSpecializedOfSchoolLst}
                        clickedSpecialized={clickedSpecialized}
                        specializedLst={suitableCareer ? suitableCareer.specializeds : []}
                        unitLst={unitLst}
                        onCloseAdvisor={onCloseAdvisor}
                    />
                </div>
            }
            {!isShow && <CCollegeAdvisor
                specializedOfSchoolLst={specializedOfSchoolLst}
                dataSource={dataSource}
            />}

        </div >
    )
}

export default CResultsCareer