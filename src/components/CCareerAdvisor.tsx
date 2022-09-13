import { Button, Checkbox } from 'antd';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Question, QuestionChoice } from '../common/define-type'

interface MyProps{
    showUniAdvisor: React.Dispatch<React.SetStateAction<boolean>>
    showCareerAdvisor: React.Dispatch<React.SetStateAction<boolean>>
}

const questionLst: Question[] = [
    {
        content: "Bạn có thích trêu chó không",
        choiceLst: [
            {
                content:"Đam mê luôn ý chứ"
            },
            {
                content:"Kó"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content:"Tát chết cmnl"
            },
            {
                content:"Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content:"Tát chết cmnl"
            },
            {
                content:"Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content:"Tát chết cmnl"
            },
            {
                content:"Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content:"Tát chết cmnl"
            },
            {
                content:"Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content:"Tát chết cmnl"
            },
            {
                content:"Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    },
    {
        content: "Sẽ làm gì nếu nyc đòi quay lại",
        choiceLst: [
            {
                content:"Tát chết cmnl"
            },
            {
                content:"Nạnh nùng từ chối"
            }
        ],
        pickedChoice: null
    }
]



const CCareerAdvisor = (props: MyProps) => { 
    const history = useHistory();
    const [showQuestion,setShowQuestion] = useState(true);
    const [showResult,setShowResult] = useState(false);
    const [currentQuestionIndex,setCurrentQuestionIndex] = useState<number>(0);
    const [currentChoice,setCurrentChoice] = useState<string>();
  return (
    <div>
        
        {
            showQuestion &&
            <>
                <div>Câu {currentQuestionIndex}:</div>
                <div>{questionLst[currentQuestionIndex].content}</div>
                {
                    questionLst[currentQuestionIndex].choiceLst.map(item =>(
                        <>
                            <Checkbox 
                                
                                // key={item.label}
                                onChange={()=>{
                                    questionLst[currentQuestionIndex].pickedChoice = item;
                                    setCurrentChoice(item.content);
                                    console.log(questionLst[currentQuestionIndex].pickedChoice);
                                }}
                                checked={item.content === currentChoice}
                                value={item.content}
                            />
                            <div>{item.content}</div>
                        </>
                    ))
                }
                {
                    currentQuestionIndex < questionLst.length - 1 && 
                    <>
                        <Button onClick={()=>{
                            setCurrentQuestionIndex(currentQuestionIndex-1)
                        }}>Quay lại</Button>
                        <Button onClick={()=>{
                            setCurrentQuestionIndex(currentQuestionIndex+1)
                        }}>Tiếp tục</Button>
                    </>
                }
                {
                    currentQuestionIndex >= questionLst.length - 1 && 
                    <>
                        <Button onClick={()=>{
                            setCurrentQuestionIndex(currentQuestionIndex-1)
                        }}>Quay lại</Button>
                        <Button onClick={()=>{
                            setShowResult(true)
                            setShowQuestion(false)
                        }}>Xem kết quả</Button>
                    </>
                }
            </>
        }
        {
            showResult &&
            <div>
                <div>Bạn phù hợp với các ngành</div>
                <div>
                    Chọn một ngành để xem nguyện vọng phù hợp với bản thân mình nha
                </div>
                <div onClick={()=>{
                    props.showCareerAdvisor(false);
                    props.showUniAdvisor(true);
                }}>Bác sĩ</div>
                <div onClick={()=>{
                    props.showCareerAdvisor(false);
                    props.showUniAdvisor(true);
                }}>Thiết kế</div>
                <div onClick={()=>{
                    props.showCareerAdvisor(false);
                    props.showUniAdvisor(true);
                }}>Marketing</div>
                <div onClick={()=>{
                    props.showCareerAdvisor(false);
                    props.showUniAdvisor(true);
                }}>Kỹ sư cầu đường</div>
            </div>
        }
        
    </div>
  )
}

export default CCareerAdvisor