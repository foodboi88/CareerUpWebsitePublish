import { Button, Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import AdvisorApi from '../../api/Advisor/advisor.api'
import { getSpecializedOfSchoolResponse, Specialized, Unit } from '../../common/define-type'
import CCareerAdvisor from '../../components/CCareerAdvisor'
import CCollegeAdvisor from '../../components/CCollegeAdvisor'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import CUniAdvisor from '../../components/CUniAdvisor'
import CUnitCareerModel from '../../components/CUnitCareerModel'

interface DataType {
    key: number;
    college: string;
    score: number;
    ranking: any;
}
let dataSource: DataType[] = [];
const Advisor = () => {
    const [confirm1Show, setConfirm1Show] = useState(true);
    const [confirm2Show, setConfirm2Show] = useState(false);
    const [careerAdvisorShow, setCareerAdvisorShow] = useState(false)
    const [uniAdvisorShow, setUniAdvisorShow] = useState(false)
    const [isShowUnitCareerModal, setIsShowUnitCareerModal] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(true);
    const [unitLst, setUnitLst] = useState<Unit[]>([])
    const [specializedLst, setSpecializedLst] = useState<Specialized[]>([])
    const [specializedOfSchoolLst, setSpecializedOfSchoolLst] = useState<getSpecializedOfSchoolResponse[]>([])

    const ontoggle = (e: any) => {
        setIsShow(e);
    }

    const onGetUnitAndSpecializedLst = async () => {
        await AdvisorApi.getUnit().then((data: any) => {
            console.log(data.data)
            // dispatch(sendAnswersRequest(data.data))
            setUnitLst(data.data);
        })

        await AdvisorApi.getSpecialized().then((data: any) => {
            console.log(data.data)
            // dispatch(sendAnswersRequest(data.data))
            setSpecializedLst(data.data);
        })
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

    const onCloseAdvisor = (e: boolean) => {
        setConfirm1Show(e)
    }
    return (
        <div>
            <CHeader />
            <div className='content'>
                {
                    confirm1Show &&
                    <div className='div-advisor-content' style={{ flexDirection: 'row' }}>
                        <div>
                            <h1 className='title-advisor-intro' style={{ padding: '50px 150px 0px' }}>Bạn đã chọn</h1>
                            <h1 className='title-advisor-intro color-title' style={{ padding: '0px 150px', width: 1050 }}>Ngành nghề phù hợp ?</h1>
                            <p style={{ fontSize: 20, fontWeight: 400, letterSpacing: 0, textAlign: 'left', padding: '0px 150px', width: 900 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur eros sed magna eu lacinia nulla habitant </p>
                            <div style={{ display: 'flex', width: '30%', margin: '30px 150px' }}>
                                <Button className='btn-choose-advisor' type='primary' style={{ marginRight: 30 }}
                                    onClick={() => {
                                        // setUniAdvisorShow(true);
                                        onGetUnitAndSpecializedLst();
                                        // onGetSpecializedLst();
                                        setIsShowUnitCareerModal(true);
                                    }
                                    }>Rồi</Button>
                                <Button className='btn-choose-advisor' type='primary'
                                    onClick={() => {
                                        setConfirm2Show(true);
                                        setConfirm1Show(false)
                                    }}
                                >Chưa</Button>
                            </div>
                        </div>
                        <div className='intro-advisor-image'>
                        </div>
                    </div>
                }
                {
                    confirm2Show &&
                    <div className='div-advisor-content div-center'>
                        <h1 className='title-advisor-intro' style={{ lineHeight: '100%' }} >Hãy cùng làm</h1>
                        <h1 className='title-advisor-intro color-title' style={{ lineHeight: '150%' }}>Trắc nghiệm nghề nghiệp</h1>
                        <h1 className='title-advisor-intro' style={{ lineHeight: '100%' }}>Xác định nguyện vọng phù hợp</h1>
                        <p style={{ fontSize: 20, textAlign: 'center', fontWeight: 400, letterSpacing: 0, padding: '0px 150px', width: 1300 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sed erat in duis maecenas non. Amet ac dolor nec habitant amet lacinia accumsan, quam dolor. Viverra eget orci risus arcu faucibus justo elementum mattis duis. Quis purus libero turpis sem at pulvinar nunc, aliquet imperdiet.</p>

                        <div style={{ display: 'flex' }}>
                            <Button className='btn-choose-advisor' style={{ width: 300 }} type='primary' onClick={() => {
                                setConfirm2Show(false);
                                setCareerAdvisorShow(true)
                            }}>Bắt đầu kiểm tra</Button>
                        </div>
                    </div>
                }
                {
                    careerAdvisorShow &&
                    <CCareerAdvisor
                        showUniAdvisor={setUniAdvisorShow}
                        showCareerAdvisor={setCareerAdvisorShow}
                    />
                }

                {
                    isShowUnitCareerModal &&
                    <CUnitCareerModel
                        isShow={isShowUnitCareerModal}
                        setIsShowModal={setIsShowUnitCareerModal}
                        setOpenUniAdvisor={setIsShowUnitCareerModal}
                        toogle={ontoggle}
                        clickedSpecialized={undefined}
                        unitLst={unitLst}
                        specializedLst={specializedLst}
                        onGetSpecializedOfSchoolLst={onGetSpecializedOfSchoolLst}
                        onCloseAdvisor={onCloseAdvisor}
                    />
                }
            </div>
            {!isShow && <CCollegeAdvisor
                specializedOfSchoolLst={specializedOfSchoolLst}
                dataSource={dataSource}
            />}
            <CFooter />
        </div>
    )
}

export default Advisor