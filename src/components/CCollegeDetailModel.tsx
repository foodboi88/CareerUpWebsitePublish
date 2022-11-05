import { CloseOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Modal, Space, Table } from 'antd';
import React from 'react';
import detailCareerImg from '../images/detal_career_tmp.png'

interface MyProps {
    isShow: boolean
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const CCollegeDetailModel = ({ isShow, setIsShowModal }: MyProps) => {


    return (
        <div >
            <Modal
                className='career-advisor-modal detail-career-modal'
                visible={isShow}
                footer={false}
                closable={false}
                onCancel={() => setIsShowModal(!isShow)}
                maskClosable={true}

            >
                
                <div>
                    <div className='career-advisor-modal-title' style={{ display: 'flex', justifyContent: 'end' }}>
                        <div><CloseOutlined style={{ fontSize: 20 }} alt="" onClick={() => setIsShowModal(false)} /></div>
                    </div>
                    <div className='career-advisor-modal-content'>
                        <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}><h5>Bác sĩ y khoa</h5></div>
                        <p style={{ color: '#646A6C' }}>Bác sĩ y khoa khám và chữa bệnh cho những người bị ốm, bệnh tật hoặc tai nạn thương tật khác. Họ cũng tiến hành nghiên cứu, cải tiến và phát triển các khái niệm, lí thuyết và phương pháp phòng và khám chữa bệnh, làm công tác giảng dạy chuyên môn và tuyên truyền giáo dục sức khỏe.</p>
                        <img style={{ width: '100%' }} src={detailCareerImg} />
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CCollegeDetailModel