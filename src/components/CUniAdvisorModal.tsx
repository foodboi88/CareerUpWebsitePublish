import { CloseOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd';
import styled from 'styled-components'
import { Table as AntDTable } from 'antd'
import React from 'react';

interface MyProps {
    isShow: boolean
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const dataSource = [
    {
        key: '1',
        career: 'Công nghệ thông tin',
        score: 27,
        careerCode: 'CNTT',
    },
    {
        key: '2',
        career: 'Công nghệ đa phương tiện',
        score: 26.75,
        careerCode: 'CNĐPT',
    },
    {
        key: '3',
        career: 'Truyền thông đa phương tiện',
        score: 26.55,
        careerCode: 'TTĐPT',
    },
    {
        key: '4',
        career: 'Marketing',
        score: 26.05,
        careerCode: 'MKT',
    },
    {
        key: '5',
        career: 'Thương mại điện tử',
        score: 25.09,
        careerCode: 'TMĐT',
    },
];

const columns = [
    {
        title: 'Ngành',
        dataIndex: 'career',
        key: 'career',
    },
    {
        title: 'Điểm',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'Mã ngành',
        dataIndex: 'careerCode',
        key: 'careerCode',
    },
];



const CUniAdvisorModal = ({ isShow, setIsShowModal }: MyProps) => {


    return (
        <div >
            <Modal
                className='career-advisor-modal'
                visible={isShow}
                footer={false}
                closable={false}
                onCancel={() => setIsShowModal(!isShow)}
            >
                <div>
                    <div className='career-advisor-modal-title' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div><h5>Danh sách điểm các ngành</h5></div>
                        <div><CloseOutlined style={{ fontSize: 20 }} alt="" onClick={() => setIsShowModal(false)} /></div>
                    </div>
                </div>
                <div >
                    <Table dataSource={dataSource} columns={columns} />
                </div>
            </Modal>
        </div>
    )
}

export default CUniAdvisorModal