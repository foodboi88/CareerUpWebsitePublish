import { Button, Card, Carousel, Image } from 'antd'
import Meta from 'antd/lib/card/Meta';
import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'
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

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const expertFollowedData: any = [
    {
        key: 1,
        image: '/src/images/chuyen_gia_1.png',
        name: 'Nguyễn Quốc Trí',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
    },
    {
        key: 2,
        image: '/src/images/chuyen_gia_2.png',
        name: 'Vương Khánh Ly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
    },
    {
        key: 3,
        image: '/src/images/chuyen_gia_3.png',
        name: 'Nguyễn Thị Hoa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
    },
]
const expertRecommendData: any = [
    {
        key: 1,
        image: '/src/images/chuyen_gia_1.png',
        name: 'Nguyễn Quốc Trí',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
    },
    {
        key: 2,
        image: '/src/images/chuyen_gia_2.png',
        name: 'Vương Khánh Ly',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
    },
    {
        key: 3,
        image: '/src/images/chuyen_gia_3.png',
        name: 'Nguyễn Thị Hoa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra mauris.'
    },
]
const AskExpert = () => {
    return (
        <div>
            <CHeader />
            <div className='div-video-ask-expert'>
                <div className='d-v-ask-expert-content'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=FfqWUzvv1xU'
                        controls={true}
                        playing={true}
                    />
                    <div style={{ padding: 20, width: '35%' }}>
                        <h3 className='div-video-ask-expert-title'>Tóm tắt nội dung</h3>
                        <div className='div-video-ask-expert-text' >
                            <AudioFilled />
                            <div className='div-video-ask-expert-text-detail' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est vestibulum nibh cursus.</div>
                        </div>
                        <div className='div-video-ask-expert-text'>
                            <AudioFilled />
                            <div className='div-video-ask-expert-text-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est vestibulum nibh cursus.</div>
                        </div>
                        <div className='div-video-ask-expert-text'>
                            <AudioFilled />
                            <div className='div-video-ask-expert-text-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est vestibulum nibh cursus.</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Button className='bnt-ask-expert-content' type='primary'>Khám phá ngay<ArrowRightOutlined /></Button>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ marginTop: '100px', marginLeft: '300px', marginRight: '300px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Shorts</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Tư vấn tuyển sinh</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Image
                        width={300}
                        src="/src/images/tuvantuyensinh1.png"
                        preview={false}
                    />
                    <Image
                        width={300}
                        src="/src/images/tuvantuyensinh2.png"
                        preview={false}
                    />
                    <Image
                        width={300}
                        src="/src/images/tuvantuyensinh3.png"
                        preview={false}
                    />
                </div>

            </div>
            <div style={{ marginTop: '100px', marginLeft: '300px', marginRight: '300px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Chuyên gia</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Bạn đã theo dõi</div>
                </div>
                <div className='div-expert-followed' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <Carousel > */}
                        {/* <div> */}
                            {expertFollowedData.map((expert: any) => {
                                return <Card
                                    hoverable
                                    headStyle={{ borderRadius: '12px' }}
                                    style={{ width: 350, borderRadius: '12px' }}
                                    cover={
                                        <Image
                                            style={{ borderRadius: '10px' }}
                                            src={expert.image}
                                            preview={false} />
                                    }
                                    actions={[
                                        <div className='action-cart-ask-expert'>Đặt lịch</div>,
                                    ]}
                                >
                                    <Meta title={expert.name} description={expert.description} />

                                </Card>
                            })}
                        {/* </div> */}
                    {/* </Carousel> */}
                </div>

            </div>
            <div style={{ marginTop: '100px', marginLeft: '300px', marginRight: '300px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <div style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Các chức năng</div>
                    <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '150%' }}>Hỗ trợ tư vấn</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card
                        hoverable
                        headStyle={{ borderRadius: '12px' }}
                        style={{ width: 430, height: 430, borderRadius: '12px' }}
                        cover={<img style={{ borderRadius: '12px' }} alt="example" src={Function1} />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 430, height: 430, borderRadius: '12px' }}
                        cover={<img style={{ borderRadius: '12px' }} alt="example" src={Function1} />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 430, height: 430, borderRadius: '12px' }}
                        cover={<img style={{ borderRadius: '12px' }} alt="example" src={Function1} />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>

            </div>
            <div >
                <div style={{ zIndex: 10, position: 'absolute', marginTop: '-208px' }}>
                    <img src={BornReason} />
                </div>
                <div style={{ backgroundColor: '#D4F6FF', width: '100%', height: '520px', marginTop: '209px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ marginLeft: '631px', marginRight: '135px' }}>
                        <div style={{ fontSize: '32px', fontWeight: '500', lineHeight: '30px', background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Lý do
                        </div>
                        <div style={{ fontSize: '48px', fontWeight: '600', lineHeight: '72px' }}>
                            Ra đời của CAREERUP
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: '400', lineHeight: '30px', marginTop: '14px' }}>
                            Dự án của chúng tôi bắt đầu từ cảm hứng của bốn bạn trẻ sinh viên, với hy vọng giúp đỡ các bạn sinh viên đang đứng giữa ngã ba lựa chọn của tương lai. Sản phẩm đã trải qua rất nhiều giai đoạn khó khăn, kể từ khi lắng nghe được nỗi đau của mỗi người học sinh cho tới khi ý tưởng được ra đời và đang dần hoàn thiện. Dù tiềm lực của team là nhỏ bé nhưng tôi tin với ước mơ đẹp đẽ, một ngày không xa những câu hỏi nan giải sẽ có lời giải đáp tốt nhất.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ padding: 100 }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '500', fontSize: '32px', lineHeight: '150%' }}>Nhóm</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: '600', fontSize: '48px', lineHeight: '150%', marginBottom: '30px' }}>Phát triển dự án</div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <div >
                            <CParallelogramCard
                                imgSrc={DeveloperHC}
                                name="Hoang Chu"
                                role='AI Developer'
                            />
                            <CParallelogramCard
                                imgSrc={DeveloperHC}
                                name="Hoang Chu"
                                role='AI Developer'
                            />
                        </div>
                        <div >
                            <CParallelogramCard
                                imgSrc={DeveloperHC}
                                name="Hoang Chu"
                                role='AI Developer'
                            />
                            <CParallelogramCard
                                imgSrc={DeveloperHC}
                                name="Hoang Chu"
                                role='AI Developer'
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div style={{
                backgroundImage: `url(${JoinBackground})`,
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '544px',
                width: '100%'
            }}>
                <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '64px', color: 'white', marginTop: '180px' }}>
                    Tham gia cộng đồng của chúng tôi trên
                </div>
                <div style={{ fontWeight: '600', fontSize: '48px', lineHeight: '64px', color: 'white', marginBottom: '32px' }}>
                    blog CAREER UP.
                </div>
                <MDBBtn
                    rounded
                    style={{ width: '320px', height: '64px', fontSize: '32px', fontWeight: '400', }} className='mx-2' color='light'
                >
                    <p style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}><a target='_blank' href='https://www.facebook.com/careerupteamd19ptit'>Đi tới Career Up</a></p>
                </MDBBtn>
            </div>
            <CFooter
            />
        </div>
    )
}

export default AskExpert