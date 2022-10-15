import { Button, Card, Carousel } from 'antd'
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
import "../../App.scss";
import "antd/dist/antd.css";
import CParallelogramCard from '../../components/CParallelogramCard';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Home = () => {
    return (
        <div>
            <CHeader />
            <div>
                <Carousel
                    // autoplay
                    dotPosition='bottom'
                    draggable={true}
                >
                    {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
              <div style={{backgroundColor:'#D4F6FF'}}>
                <div>
                  Tư vấn ngành nghề
                  Nhanh và hiệu quả
                </div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit natus sed facilis</div>
                <div>
                  <MDBBtn rounded className='mx-2' color='info'>Đăng ký</MDBBtn>
                </div>
              </div>
              <div style={{backgroundColor:'#D4F6FF'}}>
                <img src={HomeImage1}/>
              </div>
            </div> */}
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
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
                <div style={{ padding: 100}}>
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

export default Home