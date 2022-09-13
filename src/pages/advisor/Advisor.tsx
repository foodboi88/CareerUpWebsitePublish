import { Button } from 'antd'
import React, { useState } from 'react'
import CCareerAdvisor from '../../components/CCareerAdvisor'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import CUniAdvisor from '../../components/CUniAdvisor'

const Advisor = () => {
    const [confirm1Show,setConfirm1Show] = useState(true);
    const [confirm2Show,setConfirm2Show] = useState(false);
    const [careerAdvisorShow,setCareerAdvisorShow] = useState(false)
    const [uniAdvisorShow,setUniAdvisorShow] = useState(false)
    return (
        <div>
            <CHeader />
                {
                    confirm1Show && 
                    <div>
                        <div>Bạn đã lựa chọn được ngành nghề</div>
                        <div>ngành nghề ưa thích chưa nhỉ</div>
                        <div style={{display:'flex'}}>
                            <Button type='primary' 
                                onClick={()=>{
                                    setUniAdvisorShow(true);
                                    setConfirm1Show(false)
                                    
                                }
                            }>Rồi</Button>
                            <Button type='primary' danger
                                onClick={()=>{
                                    setConfirm2Show(true);
                                    setConfirm1Show(false)
                                }}
                            >Chưa</Button>
                        </div>
                    </div>
                }
                {
                    confirm2Show && 
                    <div>
                        <div>Hãy cùng làm 1 vài</div>
                        <div>câu hỏi trắc nghiệm để</div>
                        <div>xác định nguyện vọng phù hợp</div>
                        <div>với bạn nhé</div>
                        <div style={{display:'flex'}}>
                            <Button type='primary' onClick={()=>{
                                setConfirm2Show(false);
                                setCareerAdvisorShow(true)
                            }}>Bắt đầu thôi</Button>
                        </div>
                    </div>
                }
                {
                    careerAdvisorShow && 
                    <CCareerAdvisor
                        showUniAdvisor = {setUniAdvisorShow}
                        showCareerAdvisor = {setCareerAdvisorShow}
                    />
                }

                {
                    uniAdvisorShow && 
                    <CUniAdvisor/>
                }
            <CFooter />
        </div>
    )
}

export default Advisor