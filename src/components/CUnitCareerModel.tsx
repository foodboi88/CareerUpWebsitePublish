import { CloseOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Specialized } from '../common/define-type';

interface MyProps {
    isShow: boolean
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    toogle: (e: boolean) => void,
    clickedSpecialized?: Specialized
}

const CUnitCareerModel = ({ isShow, setIsShowModal, toogle }: MyProps) => {

    const [isShowCollegeAdvisor, setIsShowDetailCareerModal] = useState<boolean>(false);
    const { Option } = Select;
    const [score, setScore] = useState<String>();
    const [combination, setCombination] = useState<String[]>();
    const [career, setCareer] = useState<String[]>();

    const [checkButtonSubmitted, setCheckButtonSubmitted] = useState<boolean>(false);

    useEffect(() => {
        if (!career || !score || !combination || combination.length == 0)
            setCheckButtonSubmitted(false);
        else
            setCheckButtonSubmitted(true);
    });

    const handleChangeCombination = (value: string[]) => {
        setCombination(value);
    };
    const handleChangeCareer = (value: string[]) => {
        setCareer(value);
    };
    return (
        <div >
            <Modal
                className='career-advisor-modal unit-career-modal'
                style={{ width: '100%' }}
                visible={isShow}
                footer={false}
                closable={false}
                onCancel={() => setIsShowModal(!isShow)}
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
                                    className='combination-section'
                                    style={{ width: 400, borderRadius: 12 }}
                                    mode="multiple"
                                    placeholder="Chọn tổ hợp thi"
                                    onChange={handleChangeCombination}
                                >
                                    <Option value="A00">A00</Option>
                                    <Option value="A01">A01</Option>
                                    <Option value="A02">A02</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                                label="Ngành: "
                                name="career"
                                rules={[{ required: true, message: 'Vui lòng chọn ngành' }]}
                            >
                                <Select
                                    className='career-section'
                                    style={{ width: 400, borderRadius: 12 }}
                                    placeholder="Chọn ngành"
                                    onChange={handleChangeCareer}
                                >
                                    <Option value="CNTT">Công nghệ thông tin</Option>
                                    <Option value="CNDPT">Công nghệ đa phương tiện</Option>
                                    <Option value="TTĐPT">Truyền thông đa phương tiện</Option>
                                    <Option value="MKT">Marketing</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item >
                                <Button disabled={!checkButtonSubmitted} type="primary" htmlType="submit" onClick={() => { setIsShowDetailCareerModal(true); setIsShowModal(false); toogle(false) }}>
                                    Tìm kiếm thông tin
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CUnitCareerModel