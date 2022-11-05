import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import AdvisorApi from '../api/Advisor/advisor.api';
import { getSpecializedOfSchoolResponse, Specialized, Unit } from '../common/define-type';
import CLoadingIcon from './CLoadingIcon';

interface MyProps {
    isShow: boolean
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    toogle: (e: boolean) => void,
    clickedSpecialized?: Specialized,
    setOpenUniAdvisor?: React.Dispatch<React.SetStateAction<boolean>>
    specializedLst: Specialized[],
    unitLst: Unit[],
    onGetSpecializedOfSchoolLst: (e: getSpecializedOfSchoolResponse[]) => void,
    onCloseAdvisor?: (e: boolean) => void,
    onGetSimilarSpecialized: (e: Specialized[]) => void,
    
}

const CUnitCareerModel = ({ isShow, setIsShowModal, toogle, clickedSpecialized, setOpenUniAdvisor, specializedLst, unitLst, onGetSpecializedOfSchoolLst, onCloseAdvisor, onGetSimilarSpecialized }: MyProps) => {

    const [isShowCollegeAdvisor, setIsShowDetailCareerModal] = useState<boolean>(false);
    const { Option } = Select;
    const [score, setScore] = useState<string>('0');
    const [combination, setCombination] = useState<string>('');
    const [career, setCareer] = useState<string>('');
    const [specializedVal, setSpecializedVal] = useState<string>('');
    const [checkButtonSubmitted, setCheckButtonSubmitted] = useState<boolean>(false);
    const [clickedSpecializedName, setClickedSpecializedName] = useState<string>('');
    const [specializedOfSchool, setSpecializedOfSchool] = useState<getSpecializedOfSchoolResponse[]>()
    const [showLoading, setShowLoading] = useState(false);
    const [finalRes,setFinalRes] = useState<any>()

    useEffect(() => {
        if (clickedSpecialized) {
            console.log(clickedSpecialized.specialized_name);
            setSpecializedVal(clickedSpecialized.specialized_name)
            setCareer(clickedSpecialized.id);
        }

    }, [clickedSpecialized])

    useEffect(() => {
        if (!career || parseInt(score) < 1 || !combination || combination.length == 0)
            setCheckButtonSubmitted(false);
        else
            setCheckButtonSubmitted(true);
    });

    const handleChangeCombination = (value: string) => {
        setCombination(value);
    };
    const handleChangeCareer = (value: string) => {
        setCareer(value);
        console.log(value);
        setSpecializedVal(value)
    };

    const handleCaculateResult = async () => {
        setShowLoading(true);
        
        await AdvisorApi.getSpecializedOfSchool(career, score, combination)
            .then((data: any) => {
                console.log(data.data)
                // dispatch(sendAnswersRequest(data.data))
                onGetSpecializedOfSchoolLst(data.data);
                setSpecializedOfSchool(data.data)
                console.log('hihi')
            })

        await AdvisorApi.getSimilarSpecialized(career)
            .then((data: any) => {
                console.log(data.data) 
                setFinalRes(data)
                // dispatch(sendAnswersRequest(data.data))
                onGetSimilarSpecialized(data.data);
                console.log('hihi')
            })
    }

    useEffect(() => {
        if (finalRes) {
            if (onCloseAdvisor) onCloseAdvisor(false)
            if (setOpenUniAdvisor) setOpenUniAdvisor(true)
            setShowLoading(false)
            setIsShowModal(false); 
            toogle(false) 
            
        }
        console.log(finalRes);

    }, [finalRes])

    return (
        <div >
            <Modal
                className='career-advisor-modal unit-career-modal'
                style={{ width: '100%' }}
                open={isShow}
                footer={false}
                closable={false}
                onCancel={() => setIsShowModal(false)}
                maskClosable={true}
            >
                <div>
                    <div className='career-advisor-modal-title' style={{ display: 'flex', justifyContent: 'end' }}>
                        <div><CloseOutlined style={{ fontSize: 20 }} alt="" onClick={() => setIsShowModal(false)} /></div>
                    </div>
                    <div className='career-advisor-modal-content'>
                        <h3 className='title-advisor' style={{ margin: '70px 0 20px', textAlign: 'center' }}>Vui lòng điền thông tin để được hỗ trợ tư vấn!</h3>
                        <Form
                            name="form_advisor"
                            style={{ marginLeft: '10em' }}
                        >
                            <Form.Item
                                style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                                label="Điểm thi: "
                                name="score"
                                rules={[{ required: true, message: 'Vui lòng nhập điểm thi' }]}
                            >
                                <Input
                                    autoComplete="off"
                                    style={{ width: 400, borderRadius: 12 }}
                                    placeholder='Nhập điểm thi'
                                    id='form1'
                                    type='number'
                                    min={1}
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
                                />
                            </Form.Item>

                            <Form.Item
                                style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                                label="Khối thi: "
                                name="combination"
                                rules={[{ required: true, message: 'Vui lòng chọn khối thi' }]}
                            >
                                <Select
                                    className='career-section'
                                    style={{ width: 400, borderRadius: 12 }}
                                    placeholder="Chọn tổ hợp thi"
                                    onChange={handleChangeCombination}
                                    value={combination ? combination : null}
                                >
                                    {unitLst && unitLst.map((index) => (
                                        <Option value={index.unit_name}>{index.unit_name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                                label="Ngành: "
                                name="career"
                                className='career-label'
                                // rules={[{ required: true, message: 'Vui lòng chọn ngành' }]}
                            // initialValue={clickedSpecialized ? clickedSpecialized.specialized_name : null}
                            >
                                <div style={{ display: 'none' }}>{clickedSpecialized?.specialized_name}</div>
                                <Select
                                    className='career-section'
                                    style={{ width: 400, borderRadius: 12 }}
                                    placeholder="Chọn ngành"
                                    onChange={handleChangeCareer}
                                    // disabled={clickedSpecialized ? true : false}
                                    // defaultValue={clickedSpecialized ? clickedSpecialized.specialized_name   : null}
                                    // defaultValue={clickedSpecializedName ? clickedSpecializedName : null}
                                    // value={clickedSpecialized ? clickedSpecialized.specialized_name : null}
                                    value={specializedVal ? specializedVal : null}
                                >
                                    {specializedLst && specializedLst.map((index) => (
                                        <Option value={index.id}>{index.specialized_name}</Option>
                                    ))}
                                    {/* <Option value={clickedSpecialized ? clickedSpecialized.specialized_name : null} selected={true}>{clickedSpecialized ? clickedSpecialized.specialized_name : null}</Option> */}
                                    {/* <Option value="CNDPT">Công nghệ đa phương tiện</Option>
                                    <Option value="TTĐPT">Truyền thông đa phương tiện</Option>
                                    <Option value="MKT">Marketing</Option> */}
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button disabled={!checkButtonSubmitted} type="primary" htmlType="submit" onClick={() => { handleCaculateResult()}}>
                                    Tìm kiếm thông tin
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                {
                    showLoading &&
                    <CLoadingIcon/>      
                }              
            </Modal>
        </div>
    )
}

export default CUnitCareerModel