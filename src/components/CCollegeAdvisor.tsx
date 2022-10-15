
import { Rate, Select, Space } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import iconDown from '../images/icon_down.png';
import CCareerDetailModel from './CCareerDetailModel';
interface DataType {
    key: string;
    college: string;
    score: number;
    ranking: any;
}
const dataSource = [
    {
        key: '1',
        college: 'Đại học FPT',
        score: 27,
        ranking: <Rate disabled defaultValue={5} />,
    },
    {
        key: '2',
        college: 'Đại học Bách Khoa',
        score: 26.75,
        ranking: <Rate disabled defaultValue={5} />,
    },
    {
        key: '3',
        college: 'Đại học Công nghệ',
        score: 26.55,
        ranking: <Rate disabled defaultValue={5} />,
    },
    {
        key: '4',
        college: 'HVCN Bưu Chính Viễn Thông',
        score: 26.05,
        ranking: <Rate disabled defaultValue={4} />,
    },
    {
        key: '5',
        college: 'Học viện Kỹ thuật Quân sự',
        score: 25.05,
        ranking: <Rate disabled defaultValue={4} />,
    },
    {
        key: '6',
        college: 'Đại học Hà Nội',
        score: 24.65,
        ranking: <Rate disabled defaultValue={3.5} />,
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
        title: 'Điểm',
        dataIndex: 'score',
        key: 'score',
    },

    {
        title: 'Đánh giá',
        dataIndex: 'ranking',
        key: 'ranking',
    },
];

const CCollegeAdvisor = () => {
    const { Option } = Select;
    const [isShowCollegeDetailModel, setIsShowCollegeDetailModel] = useState<boolean>(false)
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])


    return (
        <div className='college-advisor'>
            <div style={{ background: 'white' }}>
                <div style={{ width: '90em' }}>
                    <div style={{ display: 'flex', background: 'white', padding: '40px 100px' }}>
                        <div className='career-advisor-modal-title' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div className='title-advisor-intro' style={{ fontSize: 24 }}>Bác sĩ y khoa</div>
                            <Select
                                className='career-section'
                                placeholder="Chọn khu vực"
                            >
                                <Option value="Hà Nội">Hà Nội</Option>
                                <Option value="Sài Gòn">Sài Gòn</Option>
                                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                            </Select>
                        </div>
                    </div>
                    <div >
                        <Table
                            onRow={() => {
                                return {
                                    onClick: () => {
                                        setIsShowCollegeDetailModel(true)
                                    },
                                };
                            }}
                            dataSource={dataSource}
                            columns={columns} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, cursor: 'pointer' }}>
                        <div style={{ marginRight: 10, color: '#11B8F7' }}>Xem Thêm </div>
                        <img src={iconDown} style={{ height: '4.5px', width: '9px' }} />
                    </div>
                </div>
                <div style={{ width: '90em' }}>
                    <div style={{ display: 'flex', background: 'white', padding: '40px 100px' }}>
                        <div className='career-advisor-modal-title' style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <div className='title-advisor-intro' style={{ fontSize: 24 }}>Ngành tương tự: Bác sĩ y học cổ truyền <strong style={{ color: '#FFB507' }}>(tương tự 75%)</strong> </div>
                            <Select
                                className='career-section'
                                placeholder="Chọn khu vực"
                            >
                                <Option value="Hà Nội">Hà Nội</Option>
                                <Option value="Sài Gòn">Sài Gòn</Option>
                                <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                            </Select>
                        </div>
                    </div>
                    <div >
                        <Table
                            onRow={() => {
                                return {
                                    onClick: () => {
                                        setIsShowCollegeDetailModel(true)
                                    },
                                };
                            }}
                            dataSource={dataSource}
                            columns={columns} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, cursor: 'pointer' }}>
                        <div style={{ marginRight: 10, color: '#11B8F7' }}>Xem Thêm </div>
                        <img src={iconDown} style={{ height: '4.5px', width: '9px' }} />
                    </div>
                </div>
            </div>
            <CCareerDetailModel
                isShow={isShowCollegeDetailModel}
                setIsShowModal={setIsShowCollegeDetailModel}
            />
        </div >
    )
}

export default CCollegeAdvisor