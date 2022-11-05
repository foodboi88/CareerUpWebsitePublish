import { Button, Card, Image, List } from 'antd'
import Meta from 'antd/lib/card/Meta';
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useRef, useState } from 'react'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import HomeImage1 from '../../images/HomeImage1.png'
import Function1 from '../../images/Function1.png'
import BornReason from '../../images/BornReason.png'
import DeveloperHC from '../../images/DeveloperHC.png'
import JoinBackground from '../../images/JoinBackground.png'
import { AudioFilled, ArrowRightOutlined, SettingOutlined } from '@ant-design/icons';
import "../../App.scss";
import "antd/dist/antd.css";
import CParallelogramCard from '../../components/CParallelogramCard';
import ReactPlayer from 'react-player';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import tuvantuyensinh1 from '../../images/tuvantuyensinh1.png'
import tuvantuyensinh2 from '../../images/tuvantuyensinh2.png'
import tuvantuyensinh3 from '../../images/tuvantuyensinh3.png'
import chuyengia1 from '../../images/chuyen_gia_1.png'
import chuyengia2 from '../../images/chuyen_gia_2.png'
import chuyengia3 from '../../images/chuyen_gia_3.png'
import chuyengia4 from '../../images/chuyen_gia_4.png'
import chuyengia5 from '../../images/chuyen_gia_5.png'
import chuyengia6 from '../../images/chuyen_gia_6.png'
import chuyengia7 from '../../images/chuyen_gia_7.png'
import chuyengia8 from '../../images/chuyen_gia_8.png'
import chuyengia9 from '../../images/chuyen_gia_9.png'
import chuyengia10 from '../../images/chuyen_gia_10.png'
import chuyengia11 from '../../images/chuyen_gia_11.png'
import chuyengia12 from '../../images/chuyen_gia_12.png'
import chuyengia13 from '../../images/chuyen_gia_13.png'
import chuyengia14 from '../../images/chuyen_gia_14.png'
import chuyengia15 from '../../images/chuyen_gia_15.png'
import chuyengia16 from '../../images/chuyen_gia_16.png'
import chuyengia17 from '../../images/chuyen_gia_17.png'
import chuyengia18 from '../../images/chuyen_gia_18.png'
import chuyengia19 from '../../images/chuyen_gia_19.png'
import chuyengia20 from '../../images/chuyen_gia_20.png'
import chuyengia21 from '../../images/chuyen_gia_21.png'

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
// const eventData: any = [
//     {
//         src: "../../images/tuvantuyensinh1.png"
//     },
//     {
//         src: "../../images/tuvantuyensinh2.png"
//     },
//     {
//         src: "../../images/tuvantuyensinh3.png"
//     },
//     {
//         src: "../../images/tuvantuyensinh1.png"
//     },
//     {
//         src: "../../images/tuvantuyensinh2.png"
//     },
//     {
//         src: "../../images/tuvantuyensinh3.png"
//     },
// ];
// const expertFollowedData: any = [
//     {
//         key: 1,
//         image: '../../images/chuyen_gia_1.png',
//         name: 'Nguyễn Quốc Trí',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 2,
//         image: '../../images/chuyen_gia_2.png',
//         name: 'Vương Khánh Ly',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 3,
//         image: '../../images/chuyen_gia_3.png',
//         name: 'Nguyễn Thị Hoa',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 1,
//         image: '../../images/chuyen_gia_1.png',
//         name: 'Nguyễn Quốc Trí',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 2,
//         image: '../../images/chuyen_gia_2.png',
//         name: 'Vương Khánh Ly',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 3,
//         image: '../../images/chuyen_gia_3.png',
//         name: 'Nguyễn Thị Hoa',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
// ];
// const expertRecommendData: any = [
//     {
//         key: 1,
//         image: '../../images/chuyen_gia_4.png',
//         name: 'Hà Thị Hồng Ngân',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 2,
//         image: '../../images/chuyen_gia_5.png',
//         name: 'Phạm Văn Thuận',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 3,
//         image: '../../images/chuyen_gia_6.png',
//         name: 'Hồ Đức Thuận',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 1,
//         image: '../../images/chuyen_gia_4.png',
//         name: 'Hà Thị Hồng Ngân',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 2,
//         image: '../../images/chuyen_gia_5.png',
//         name: 'Phạm Văn Thuận',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
//     {
//         key: 3,
//         image: '../../images/chuyen_gia_6.png',
//         name: 'Hồ Đức Thuận',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
//     },
// ];
// const exploreExpertData = [
//     {
//         img: '../../images/chuyen_gia_7.png',
//     },
//     {
//         img: '../../images/chuyen_gia_8.png',
//     },
//     {
//         img: '../../images/chuyen_gia_9.png',
//     },
//     {
//         img: '../../images/chuyen_gia_10.png',
//     },
//     {
//         img: '../../images/chuyen_gia_11.png',
//     },
//     {
//         img: '../../images/chuyen_gia_12.png',
//     },
//     {
//         img: '../../images/chuyen_gia_13.png',
//     },
//     {
//         img: '../../images/chuyen_gia_14.png',
//     },
//     {
//         img: '../../images/chuyen_gia_15.png',
//     },
//     {
//         img: '../../images/chuyen_gia_16.png',
//     },
//     {
//         img: '../../images/chuyen_gia_17.png',
//     },
//     {
//         img: '../../images/chuyen_gia_18.png',
//     },
//     {
//         img: '../../images/chuyen_gia_19.png',
//     },
//     {
//         img: '../../images/chuyen_gia_20.png',
//     },
//     {
//         img: '../../images/chuyen_gia_21.png',
//     },
// ];
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

console.log(localStorage.getItem('userInfo'))

const AskExpert = () => {
    const askExpert = useRef('askExpert')

    return (
        <div>
            <CHeader
                activeWhat={askExpert}
            />

            <div className='div-video-ask-expert'>
                <div className='d-v-ask-expert-content'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=FfqWUzvv1xU'
                        controls={true}
                    // playing={true}
                    />
                    <div style={{ padding: 20, width: '35%' }}>
                        <h3 className='div-video-ask-expert-title'>Tóm tắt nội dung</h3>
                        <div className='div-video-ask-expert-text' >
                            <AudioFilled />
                            <div className='div-video-ask-expert-text-detail' >4 phương thức “vượt rào” để trở thành Newbie D22 ra lò rồi đây. <br></br>
                                Các bạn 2K4 đã sẵn sàng chưa nào?
                            </div>
                        </div>
                        <div className='div-video-ask-expert-text'>
                            <AudioFilled />
                            <div className='div-video-ask-expert-text-detail'>
                                ☘️ Xét tuyển thẳng theo quy chế tuyển sinh của Bộ GD&ĐT và theo Đề án tuyển sinh của Học viện <br></br>
                                ☘️Xét tuyển dựa vào kết quả thi tốt nghiệp THPT năm 2022<br></br>
                                ☘️Xét tuyển kết hợp theo Đề án tuyển sinh của Học viện<br></br>
                                ☘️ Xét tuyển dựa vào kết quả các kỳ thi đánh giá năng lực.
                            </div>
                        </div>
                        {/* <div className='div-video-ask-expert-text'>
                            <AudioFilled />
                            <div className='div-video-ask-expert-text-detail'>Bên cạnh chính sách học bổng miễn 100%, 50% học phí trong năm đầu tiên, năm 2022 Học viện Công nghệ Bưu chính Viễn thông còn ban hành chính sách học bổng đặc biệt lên tới 3 tỷ đồng.<br></br>
                        Hãy chuẩn bị hành trang thật kỹ với quyết tâm trở thành Newbie D22 - PTIT các bạn 2K4 nhé ✊✊✊</div>
                        </div> */}
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Button className='bnt-ask-expert-content' type='primary'>Khám phá ngay<ArrowRightOutlined /></Button>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ marginTop: '100px', marginLeft: '200px', marginRight: '200px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Shorts</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Tư vấn tuyển sinh</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Carousel
                        responsive={responsive}
                        ssr
                        infinite={false}
                        containerClass="first-carousel-container container"
                    >
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={<img style={{ borderRadius: '12px' }} alt="example" src={tuvantuyensinh1} />}

                        >
                        </Card>
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={<img style={{ borderRadius: '12px' }} alt="example" src={tuvantuyensinh2} />}

                        >
                        </Card>
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={<img style={{ borderRadius: '12px' }} alt="example" src={tuvantuyensinh3} />}

                        >
                        </Card>
                    </Carousel>
                </div>

            </div>
            <div style={{ marginTop: '100px', marginLeft: '200px', marginRight: '200px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Chuyên gia</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Bạn đã theo dõi</div>
                </div>
                <div className='div-expert-followed' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Carousel
                        responsive={responsive}
                        ssr
                        infinite={false}
                        containerClass="first-carousel-container container"
                    >
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={
                                <img
                                    alt="example"
                                    style={{ borderRadius: '10px' }}
                                    src={chuyengia1}
                                />
                            }
                            actions={[
                                <a href='https://careerupvideocall.glitch.me/'><div className='action-cart-ask-expert'>Gọi ngay</div></a>
                            ]}
                        >
                            <Meta title={'Nguyễn Quốc Trí'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'} />

                        </Card>
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={
                                <img
                                    alt="example"
                                    style={{ borderRadius: '10px' }}
                                    src={chuyengia2}
                                />
                            }
                            actions={[
                                <a href='https://careerupvideocall.glitch.me/'><div className='action-cart-ask-expert'>Gọi ngay</div></a>
                            ]}
                        >
                            <Meta title={'Vương Khánh Ly'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'} />

                        </Card>
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={
                                <img
                                    alt="example"
                                    style={{ borderRadius: '10px' }}
                                    src={chuyengia3}
                                />
                            }
                            actions={[
                                <a href='https://careerupvideocall.glitch.me/'><div className='action-cart-ask-expert'>Gọi ngay</div></a>
                            ]}
                        >
                            <Meta title={'Nguyễn Thị Hoa'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'} />

                        </Card>
                    </Carousel>
                </div>

            </div>
            <div style={{ marginTop: '100px', marginLeft: '200px', marginRight: '200px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Các chức năng</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Hỗ trợ tư vấn</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Carousel
                        responsive={responsive}
                        ssr
                        infinite={false}
                        containerClass="first-carousel-container container"
                    >
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={
                                <img
                                    alt="example"
                                    style={{ borderRadius: '10px' }}
                                    src={chuyengia4}
                                />
                            }
                            actions={[
                                <a href='https://careerupvideocall.glitch.me/'><div className='action-cart-ask-expert'>Gọi ngay</div></a>
                            ]}
                        >
                            <Meta title={'Hà Thị Hồng Ngân'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'} />

                        </Card>
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={
                                <img
                                    alt="example"
                                    style={{ borderRadius: '10px' }}
                                    src={chuyengia5}
                                />
                            }
                            actions={[
                                <a href='https://careerupvideocall.glitch.me/'><div className='action-cart-ask-expert'>Gọi ngay</div></a>
                            ]}
                        >
                            <Meta title={'Phạm Văn Thuận'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'} />

                        </Card>
                        <Card
                            hoverable
                            headStyle={{ borderRadius: '12px' }}
                            style={{ width: 350, borderRadius: '12px' }}
                            cover={
                                <img
                                    alt="example"
                                    style={{ borderRadius: '10px' }}
                                    src={chuyengia6}
                                />
                            }
                            actions={[
                                <a href='https://careerupvideocall.glitch.me/'><div className='action-cart-ask-expert'>Gọi ngay</div></a>
                            ]}
                        >
                            <Meta title={'Hồ Đức Thuận'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'} />

                        </Card>
                    </Carousel>
                </div>
            </div>
            <div style={{ background: '#f3f9fe', width: '100%', marginTop: 100, padding: '0 200px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ paddingTop: 50, background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Khám phá</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Chuyên gia khác</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 50 }}>
                    <div className="grid-container">
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia7}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia8}
                            style={{ cursor: 'pointer' }}
                        /></div><div className="grid-item"><img
                            alt="example"
                            src={chuyengia9}
                            style={{ cursor: 'pointer' }}
                        /></div><div className="grid-item"><img
                            alt="example"
                            src={chuyengia10}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia11}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia12}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia13}
                            style={{ cursor: 'pointer' }}
                        /></div><div className="grid-item"><img
                            alt="example"
                            src={chuyengia14}
                            style={{ cursor: 'pointer' }}
                        /></div><div className="grid-item"><img
                            alt="example"
                            src={chuyengia15}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia16}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia17}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia18}
                            style={{ cursor: 'pointer' }}
                        /></div><div className="grid-item"><img
                            alt="example"
                            src={chuyengia19}
                            style={{ cursor: 'pointer' }}
                        /></div><div className="grid-item"><img
                            alt="example"
                            src={chuyengia20}
                            style={{ cursor: 'pointer' }}
                        /></div>
                        <div className="grid-item"><img
                            alt="example"
                            src={chuyengia21}
                            style={{ cursor: 'pointer' }}
                        /></div>
                    </div>
                </div>
                <div className='loadMore'>
                    Xem tất cả
                </div>
            </div>
            <CFooter
            />
        </div>
    )
}

export default AskExpert