
import { Avatar, List, message } from 'antd';
import Link from 'antd/lib/typography/Link';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import resulstCareerImg from '../images/results_career_img.png';
import CCareerDetailModel from './CCareerDetailModel';
import CCollegeAdvisor from './CCollegeAdvisor';
import CUnitCareerModel from './CUnitCareerModel';

interface ResultsCareer {
    key: number;
    career: string;
}

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
    const [isShow, setIsShow] = useState<boolean>(true);
    const [isShowDetailCareerModal, setIsShowDetailCareerModal] = useState<boolean>(false);
    const [isShowUnitCareerModal, setIsShowUnitCareerModal] = useState<boolean>(false);

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    const onClickCareerDetail = () => {
        setIsShowDetailCareerModal(true);
    }

    const onClickCareerUnit = () => {
        setIsShowUnitCareerModal(true);
    }

    const ontoggle = (e: any) => {
        setIsShow(e);
    }
    return (
        <div>
            {isShow &&
                <div>
                    <div className='div-advisor-content div-center' >
                        <h1 className='title-advisor-intro' style={{ marginBottom: -10 }}>Nhóm nghề</h1>
                        <h1 className='title-advisor-intro color-title'>Làm việc với con người</h1>
                        <img src={resulstCareerImg} />
                    </div>
                    <List className='list-results-career'
                        header={<div style={{ fontSize: 25 }}>Kết quả tìm kiếm thuộc nhóm ngành này</div>}
                    >
                        <VirtualList
                            data={data}
                            itemKey="email"
                        >
                            {(item: ResultsCareer) => (
                                <List.Item key={item.key}>
                                    <List.Item.Meta
                                        title={<Link onClick={onClickCareerUnit} style={{ fontSize: 20 }}>{item.career}</Link>}
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
                    />
                </div>
            }
            {!isShow && <CCollegeAdvisor />}

        </div >
    )
}

export default CResultsCareer