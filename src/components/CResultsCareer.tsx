
import { Avatar, List, message } from 'antd';
import Link from 'antd/lib/typography/Link';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import { Personality, personalityLst, Specialized } from '../common/define-type';
import resulstCareerImg from '../images/results_career_img.png';
import { useSelectorRoot } from '../redux/store';
import CCareerDetailModel from './CCareerDetailModel';
import CCollegeAdvisor from './CCollegeAdvisor';
import CUnitCareerModel from './CUnitCareerModel';



const data = [
    {
        key: 1,
        career: '1. Bác sĩ Y khoa'
    },
    {
        key: 2,
        career: '2. Y tá và hộ sinh'
    },
    {
        key: 3,
        career: '3. Bác sĩ Y học cổ truyền '
    },
    {
        key: 4,
        career: '4. Nha Sĩ'
    },
    {
        key: 5,
        career: '5. Chuyên gia phục hồi chức năng nghề nghiệp'
    },
    {
        key: 6,
        career: '6. Chuyên gia vật lý trị liệu'
    },
    {
        key: 7,
        career: '7. Chuyên gia dinh dưỡng'
    },
    {
        key: 8,
        career: '8. Bác sĩ thính học và trị liệu ngôn ngữ'
    },
    {
        key: 9,
        career: '9. Bác sĩ thính học và trị liệu ngôn ngữ'
    },
    {
        key: 10,
        career: '10. Giáo viên mầm non'
    },


]

const CResultsCareer = () => {
    const { specializedLst} = useSelectorRoot(state => state.advisor);

    const [isShow, setIsShow] = useState<boolean>(true);
    const [isShowDetailCareerModal, setIsShowDetailCareerModal] = useState<boolean>(false);
    const [isShowUnitCareerModal, setIsShowUnitCareerModal] = useState<boolean>(false);
    const [personality,setPersonality] = useState<Personality>(
        {
            id: '0',
            name: 'Loading....'
        }
    );
    const [clickedSpecialized,setClickedSpecialized] = useState<Specialized>()

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    const onClickCareerDetail = () => {
        setIsShowDetailCareerModal(true);
    }

    const onClickCareerUnit = (item: Specialized) => {
        setClickedSpecialized(item);
        setIsShowUnitCareerModal(true);
    }

    const ontoggle = (e: any) => {
        setIsShow(e);
    }

    useEffect(()=>{
        let newPersonality: Personality = personality
        if(specializedLst) {
            newPersonality = personalityLst[parseInt(specializedLst[0].id,10)]
        }
        setPersonality(newPersonality)
    },[specializedLst])

    return (
        <div className='div-career-advisor-result'>
            {isShow &&
                <div>
                    <div className='div-advisor-content div-center ' >
                        <h1 className='title-advisor-intro' style={{ marginBottom: -10 }}>Nhóm nghề</h1>
                        <h1 className='title-advisor-intro color-title'>{personality.name}</h1>
                        <img src={resulstCareerImg} />
                    </div>
                    <List className='list-results-career'
                        header={<div style={{ fontSize: 25 }}>Kết quả tìm kiếm thuộc nhóm ngành này</div>}
                    >
                        <VirtualList
                            data={specializedLst}
                            itemKey="email"
                        >
                            {(item: Specialized) => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        title={<Link onClick={()=>onClickCareerUnit(item)} style={{ fontSize: 20 }}>{item.name}</Link>}
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
                        toogle={ontoggle}
                        clickedSpecialized = {clickedSpecialized}
                    />
                </div>
            }
            {!isShow && <CCollegeAdvisor />}

        </div >
    )
}

export default CResultsCareer