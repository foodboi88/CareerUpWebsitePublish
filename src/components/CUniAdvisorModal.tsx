import { CloseOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Modal, Space, Table } from 'antd';
import React from 'react';

interface MyProps {
    isShow: boolean
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
}
interface DataType {
    key: string;
    college: string;
    career: string;
    careerCode: string;
    ranking: string;
}
const dataSource = [
    {
        key: '1',
        college: 'Đại học FPT',
        career: 'Công nghệ thông tin',
        careerCode: 'CNTT',
        ranking: 'Đáng học',
    },
    {
        key: '2',
        college: 'Đại học Bách Khoa',
        career: 'Công nghệ thông tin',
        careerCode: 'CNTT',
        ranking: 'Đáng học',
    },
    {
        key: '3',
        college: 'Đại học Công nghệ',
        career: 'Công nghệ thông tin',
        careerCode: 'CNTT',
        ranking: 'Đáng học',
    },
    {
        key: '4',
        college: 'HVCN Bưu Chính Viễn Thông',
        career: 'Công nghệ thông tin',
        careerCode: 'CNTT',
        ranking: 'Đáng học',
    },
    {
        key: '5',
        college: 'Học viện Kỹ thuật Quân sự',
        career: 'Công nghệ thông tin',
        careerCode: 'CNTT',
        ranking: 'Bình thường',
    },
    {
        key: '6',
        college: 'Đại học Hà Nội',
        career: 'Công nghệ thông tin',
        careerCode: 'CNTT',
        ranking: 'Bình thường',
    },
];

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'Trường',
        dataIndex: 'college',
        key: 'college',
    },
    {
        title: 'Ngành',
        dataIndex: 'career',
        key: 'career',
    },
    {
        title: 'Mã ngành',
        dataIndex: 'careerCode',
        key: 'careerCode',
    },
    {
        title: 'Xếp hạng',
        dataIndex: 'ranking',
        key: 'ranking',
    },
    {
        title: 'Chi tiết',
        key: 'viewDetails',
        render: () => (
            <Space size="middle">
                <a>Xem chi tiết</a>
            </Space>
        ),
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
                        <div><h5>Danh sách các trường</h5></div>
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