import { CloseOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Modal, Space, Table } from 'antd';
import React from 'react';
import detailCareerImg from '../images/detal_career_tmp.png'
import Temporary_Career from '../images/Temporary_Career.png'
import { Specialized } from '../common/define-type';

interface MyProps {
    isShow: boolean
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    clickedSpecialized: Specialized 
}

const CCareerDetailModel = ({ isShow, setIsShowModal,clickedSpecialized }: MyProps) => {


    return (
        <div >
            <Modal
                className='career-advisor-modal detail-career-modal'
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
                        <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 600 }}><h5>{clickedSpecialized.specialized_name}</h5></div>
                        <p style={{ color: '#646A6C' }}>{clickedSpecialized.specialized_description}</p>
                        <img style={{ width: '100%' }} src={Temporary_Career} />
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CCareerDetailModel