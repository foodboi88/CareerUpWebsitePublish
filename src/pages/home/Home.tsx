import { Button, Card, Carousel } from 'antd'
import Meta from 'antd/lib/card/Meta';
import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useRef } from 'react'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import HomeImage1 from '../../images/HomeImage1.png'
import Function1 from '../../images/Function1.png'
import Function2 from '../../images/Function2.png'
import Function3 from '../../images/Function3.jpg'
import BornReason from '../../images/BornReason.png'
import DeveloperHC from '../../images/DeveloperHC.png'
import DeveloperHD from '../../images/DeveloperHD.png'
import DeveloperKN from '../../images/DeveloperKN.png'
import DeveloperAN from '../../images/DeveloperAN.png'
import Carousel1 from '../../images/Carousel1.png'


import JoinBackground from '../../images/JoinBackground.png'
import "../../App.scss";
import "antd/dist/antd.css";
import CParallelogramCard from '../../components/CParallelogramCard';
import AdvisorApi from '../../api/Advisor/advisor.api';
import { useHistory } from 'react-router';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Home = () => {
    const home = useRef('home')
    const history = useHistory();

    return (
        <div>
            <CHeader
                activeWhat={home}
            />

            <div className='content'>
                <div className='div-advisor-content' style={{ flexDirection: 'row' }}>
                    <div className='adjust_image_home'>
                        <div>
                            <h1 className='title-advisor-intro' style={{ padding: '210px 150px 0px' }}>Tư vấn ngành nghề</h1>
                            <h1 className='title-advisor-intro color-title' style={{ padding: '0px 150px', width: 1050 }}>Nhanh và hiệu quả</h1>
                            
                            <div style={{ display: 'flex', width: '30%', margin: '30px 150px' }}>
                                <Button style={{width: '200px'}} className='btn-choose-advisor2' type='primary'
                                    onClick={() => {
                                        history.push('/advisor')
                                    }}
                                >Đăng ký ngay</Button>
                            </div>
                        </div>
                    </div>
                    <div className='intro-home-image'>
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
                            style={{ width: 430, height: 564, borderRadius: '12px' }}
                            cover={<img style={{ borderRadius: '12px' }} alt="example" src={Function1} />}
                            onClick={() => {
                                history.push('/ask_expert')
                            }}
                        >
                            <p style={{ fontWeight: 600, fontSize: '20px' }}>Tư vấn trực tiếp cùng chuyên gia</p>
                            <p>Trò chuyện trực tiếp cùng chuyên gia có kinh nghiệm chuyên sâu về tuyển sinh sẽ giúp bạn giải quyết triệt để các vấn đề đang gặp phải</p>
                            <p style={{ marginTop: 118, fontWeight: 500, fontSize: 20, color: '#FFB507' }}>Trải nghiệm ngay</p>

                        </Card>
                        <Card
                            hoverable
                            style={{ width: 430, height: 564, borderRadius: '12px' }}
                            cover={<img style={{ borderRadius: '12px', height: 231 }} alt="example" src={Function2} />}
                            onClick={ ()=>{
                                    history.push('/advisor')
                                }
                            }
                        >
                            <p style={{ fontWeight: 600, fontSize: '20px' }}>Tư vấn nguyện vọng phù hợp với Trắc nghiệm nghề nghiệp ILO</p>
                            <p>Bạn chưa xác định được bản thân phù hợp với nguyện vọng nào ư? Đừng lo, chức năng này ra đời là dành cho bạn đó</p>
                            <p style={{ marginTop: 87, fontWeight: 500, fontSize: 20, color: '#FFB507' }}>Trải nghiệm ngay</p>

                        </Card>
                        <Card
                            hoverable
                            style={{ width: 430, height: 564, borderRadius: '12px' }}
                            cover={<img style={{ borderRadius: '12px', height: 231 }} alt="example" src={Function3} />}
                            onClick={
                                ()=>{
                                    history.push('advisor')
                                }
                            }
                        >
                            <p style={{ fontWeight: 600, fontSize: '20px' }}>Tư vấn nguyện vọng có chương trình đào tạo tương đồng bằng công nghệ AI</p>
                            <p>Bạn lo lắng mức điểm của mình khó đỗ được nguyện vọng mình mong muốn? CareerUp sẽ đưa ra các nguyện vọng có chương trình đào tạo tương tự với mức điểm mềm hơn để giúp các bạn có thể tiếp tục theo đuổi đam mê của mình</p>
                            <p style={{ fontWeight: 500, fontSize: 20, color: '#FFB507' }}>Trải nghiệm ngay</p>
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
                                Ra đời của Career Up
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
                        <div style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: '600', fontSize: '48px', lineHeight: '150%', marginBottom: '30px' }}>Phát triển sản phẩm</div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <div >
                                <CParallelogramCard
                                    imgSrc={DeveloperHC}
                                    name="Hoang Chu"
                                    role='AI Developer'

                                />
                                <CParallelogramCard
                                    imgSrc={DeveloperHD}
                                    name="Hieu Do"
                                    role='Front-End Developer'
                                />
                            </div>
                            <div >
                                <CParallelogramCard
                                    imgSrc={DeveloperKN}
                                    name="Kien Nguyen"
                                    role='Front-End Developer'
                                />
                                <CParallelogramCard
                                    imgSrc={DeveloperAN}
                                    name="Anh Nguyen"
                                    role='Back-End Developer'
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
                        Tham gia cộng đồng của chúng tôi 
                    </div>
                    <MDBBtn
                        rounded
                        style={{ width: '400px', height: '64px', fontSize: '32px', fontWeight: '400', }} className='mx-2' color='light'
                    >
                        <p style={{ background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}><a target='_blank' href='https://www.facebook.com/careerupteamd19ptit'>Đi tới Career Up</a></p>
                    </MDBBtn>
                </div>
            </div>
            <CFooter
            />
        </div>
    )
}

export default Home