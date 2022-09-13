import { Button, Checkbox } from 'antd';
import Link from 'antd/lib/typography/Link';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Question, QuestionChoice } from '../common/define-type'

interface MyProps {
    showUniAdvisor: React.Dispatch<React.SetStateAction<boolean>>
    showCareerAdvisor: React.Dispatch<React.SetStateAction<boolean>>
}

const questionLst: Question[] = [
    {
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content: "Đam mê luôn ý chứ"
            },
            {
                content: "Kó"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content: "Tát chết cmnl"
            },
            {
                content: "Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content: "Tát chết cmnl"
            },
            {
                content: "Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content: "Tát chết cmnl"
            },
            {
                content: "Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content: "Tát chết cmnl"
            },
            {
                content: "Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content: "Tát chết cmnl"
            },
            {
                content: "Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content: "Tát chết cmnl"
            },
            {
                content: "Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    }
]



const CCareerAdvisor = (props: MyProps) => {
    const history = useHistory();
    const [showQuestion, setShowQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [currentChoice, setCurrentChoice] = useState<string>();
    return (
        <div className='div-advisor-content' style={{ alignItems: 'flex-start', height: 400, paddingLeft: 200 }}>

            {
                showQuestion &&
                <>
                    <h1>Câu {currentQuestionIndex}:</h1>
                    <h4>{questionLst[currentQuestionIndex].content}</h4>
                    <div style={{ display: 'flex' }}>
                        {
                            questionLst[currentQuestionIndex].choiceLst.map(item => (
                                <div style={{ display: 'flex', padding: 20 }}>
                                    <input
                                        onChange={() => {
                                            questionLst[currentQuestionIndex].pickedChoice = item;
                                            setCurrentChoice(item.content);
                                            console.log(questionLst[currentQuestionIndex].pickedChoice);
                                        }}
                                        checked={item.content === currentChoice}
                                        value={item.content} className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label style={{ fontSize: 20 }} className="form-check-label" >{item.content}</label>

                                </div>
                            ))
                        }
                    </div>
                    {
                        currentQuestionIndex < questionLst.length - 1 &&
                        <div style={{ display: 'flex', paddingTop: 20, justifyContent: 'space-between', width: '400px' }}>
                            <Button className='btn-choose-career-advisor' type='primary' onClick={() => {
                                setCurrentQuestionIndex(currentQuestionIndex - 1)
                            }}>Quay lại</Button>
                            <Button className='btn-choose-career-advisor' type='primary' onClick={() => {
                                setCurrentQuestionIndex(currentQuestionIndex + 1)
                            }}>Tiếp tục</Button>
                        </div>
                    }
                    {
                        currentQuestionIndex >= questionLst.length - 1 &&
                        <div style={{ display: 'flex', paddingTop: 20, justifyContent: 'space-between', width: '400px' }}>
                            <Button className='btn-choose-career-advisor' type='primary' onClick={() => {
                                setCurrentQuestionIndex(currentQuestionIndex - 1)
                            }}>Quay lại</Button>
                            <Button style={{ width: 150 }} className='btn-choose-career-advisor' type='primary' onClick={() => {
                                setShowResult(true)
                                setShowQuestion(false)
                            }}>Xem kết quả</Button>
                        </div>
                    }
                </>
            }
            {
                showResult &&
                <div>
                    <h1>Bạn phù hợp với các ngành</h1>
                    <h2>
                        Chọn một ngành để xem nguyện vọng phù hợp với bản thân mình nha
                    </h2>
                    <div style={{ display: 'flex', paddingTop: 20, justifyContent: 'space-between' }}>
                        <Button style={{ fontSize: 20 }} type='link' onClick={() => {
                            props.showCareerAdvisor(false);
                            props.showUniAdvisor(true);
                        }}>Bác sĩ</Button>
                        <Button style={{ fontSize: 20 }} type='link' onClick={() => {
                            props.showCareerAdvisor(false);
                            props.showUniAdvisor(true);
                        }}>Thiết kế</Button>
                        <Button style={{ fontSize: 20 }} type='link' onClick={() => {
                            props.showCareerAdvisor(false);
                            props.showUniAdvisor(true);
                        }}>Marketing</Button>
                        <Button style={{ fontSize: 20 }} type='link' onClick={() => {
                            props.showCareerAdvisor(false);
                            props.showUniAdvisor(true);
                        }}>Kỹ sư cầu đường</Button>
                    </div>

                </div>
            }

        </div>
    )
}

export default CCareerAdvisor