import { Button } from 'antd'
import React, { useState } from 'react'
import CCareerAdvisor from '../../components/CCareerAdvisor'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import CUniAdvisor from '../../components/CUniAdvisor'

const Advisor = () => {
    const [confirm1Show, setConfirm1Show] = useState(true);
    const [confirm2Show, setConfirm2Show] = useState(false);
    const [careerAdvisorShow, setCareerAdvisorShow] = useState(false)
    const [uniAdvisorShow, setUniAdvisorShow] = useState(false)
    return (
        <div>
            <CHeader />
            {
                confirm1Show &&
                <div className='div-advisor-content' >
                    <h1 style={{ padding: 50 }}>Bạn đã lựa chọn được ngành nghề ngành nghề ưa thích chưa nhỉ ?</h1>
                    <div style={{ display: 'flex', width: '30%', justifyContent: 'space-between' }}>
                        <Button className='btn-choose-advisor' type='primary'
                            onClick={() => {
                                setUniAdvisorShow(true);
                                setConfirm1Show(false)

                            }
                            }>Rồi</Button>
                        <Button className='btn-choose-advisor' type='primary' danger
                            onClick={() => {
                                setConfirm2Show(true);
                                setConfirm1Show(false)
                            }}
                        >Chưa</Button>
                    </div>
                </div>
            }
            {
                confirm2Show &&
                <div className='div-advisor-content'>
                    <h1 style={{ padding: 50, width: 1000 }}>Hãy cùng làm 1 vài câu hỏi trắc nghiệm để xác định nguyện vọng phù hợp với bạn nhé</h1>
                    <div style={{ display: 'flex' }}>
                            <Button className='btn-choose-advisor' style={{ width: 300 }} type='primary' onClick={() => {
                            setConfirm2Show(false);
                            setCareerAdvisorShow(true)
                        }}>Bắt đầu thôi</Button>
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
                uniAdvisorShow &&
                <CUniAdvisor />
            }
            <CFooter />
        </div>
    )
}

export default Advisor