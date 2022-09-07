
import { Button, Checkbox, Form, Input, Select } from 'antd'
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
const CCareerAdvisor = () => {

    const { Option } = Select;


    return (
        <div
            className='CCareerAdvisor'
            style={{
                width: '1440px',
                height: '720px',
                left: '0px',
                top: '320px',
                margin: '10px auto',
            }}>
            <div style={{ display: 'flex', margin: '10px auto', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '720px', height: '50px', borderRadius: 12, opacity: '1' }}>
                <MDBBtn
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '200px', height: '50px', borderRadius: '12px', marginRight: 10 }}>
                    <MDBIcon style={{ fontSize: 15 }} fas icon="suitcase" />
                    <p style={{ margin: '0 10px', fontSize: 14 }}>Tư vấn ngành</p>
                </MDBBtn>
                <MDBBtn
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '200px', height: '50px', borderRadius: '12px', marginRight: 10 }}
                >
                    <MDBIcon style={{ fontSize: 15 }} fas icon="school" />
                    <p style={{ margin: '0 10px', fontSize: 14 }}>Tư vấn trường</p>
                </MDBBtn>
                <MDBBtn
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '200px', height: '50px', borderRadius: '12px' }}
                >
                    <MDBIcon style={{ fontSize: 15 }} fas icon="calendar-alt" />
                    <p style={{ margin: '0 10px', fontSize: 14 }}>Đặt lịch tư vấn</p>
                </MDBBtn>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '50px 20px 100px 140px', alignItems: 'center', width: '768px', height: '504px', borderRadius: 12, opacity: '1', backgroundColor: '#FFFFFF' }}>
                <h3 className='title-advisor' style={{ margin: '70px 0 20px' }}>Vui lòng điền thông tin để được hỗ trợ tư vấn!</h3>
                <Form
                    name="form_advisor"
                >
                    <Form.Item
                        style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                        label="Tên trường: "
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên trường' }]}

                    >
                        <Input autoComplete="off" style={{ width: 400, borderRadius: 12 }} placeholder='Nhập tên trường' id='form1' type='text' />
                    </Form.Item>

                    <Form.Item
                        style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                        label="Điểm thi: "
                        name="score"
                        rules={[{ required: true, message: 'Vui lòng nhập điểm thi' }]}
                    >
                        <Input autoComplete="off" style={{ width: 400, borderRadius: 12 }} placeholder='Nhập điểm thi' id='form1' type='number' min={1} />

                    </Form.Item>

                    <Form.Item
                        style={{ margin: '25px auto', fontSize: 20, fontWeight: 600 }}
                        label="Tổ hợp: "
                        name="combination"
                        rules={[{ required: true, message: 'Vui lòng chọn tổ hợp thi' }]}
                    >
                        <Select
                            style={{ width: 400, borderRadius: 12 }}
                            mode="multiple"
                            placeholder="Chọn tổ hợp thi"
                            filterOption={(input, option) =>
                                (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                            }
                        >
                            <Option value="A00">A00</Option>
                            <Option value="A01">A01</Option>
                            <Option value="A02">A02</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Tìm kiếm thông tin
                        </Button>
                    </Form.Item>
                </Form>  </div>
        </div>

    )
}

export default CCareerAdvisor