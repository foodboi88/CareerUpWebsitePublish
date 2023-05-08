import React from 'react';
import { FacebookFilled, TwitterSquareFilled, GoogleSquareFilled, InstagramFilled, LinkedinFilled, GithubFilled, HomeFilled, PhoneFilled } from '@ant-design/icons';
import { MDBFooter, MDBContainer, MDBRow, MDBIcon } from 'mdb-react-ui-kit';
import { Image } from 'antd';
import Logo from '../images/CareerUp.png'
import FaceIcon from '../images/facebook.png'
import InstagramIcon from '../images/insta.png'
import TiktokIcon from '../images/tiktok.png'



export default function App() {
    return (
        <MDBFooter className='text-center text-lg-start text-muted'>
            <section className='footer-content'>
                <div className='text-center text-md-start mt-5'>
                    <div style={{ margin: '0 100px' }} className='d-flex mt-3'>
                        <div style={{ width: 300 }} className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src={Logo} />
                            </h6>
                            <p style={{color: '#646A6C'}}>
                            CareerUp - Nền tảng lựa chọn trường đại học.
                            </p>
                            <div className='d-flex'>
                                <HomeFilled style={{ marginRight: 20 }} />
                                <p>460 KĐình, TXuân, TP HN</p>
                            </div>
                            <div className='d-flex'>
                                <PhoneFilled style={{ marginRight: 20 }} />
                                <p>0987654321</p>
                            </div>
                        </div>

                        <div style={{ width: 120 }} className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-warning'>Tư vấn</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nhân sự
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Marketing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Kinh doanh
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Thiết kế
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Lập trình
                                </a>
                            </p>
                        </div>

                        <div style={{ width: 120 }} className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-warning'>Thông tin</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Tìm kiếm
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Kết nối
                                </a>
                            </p>
                        </div>

                        <div style={{ width: 240 }} className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-warning'>Cung cấp kỹ năng</h6>
                            <p>
                                Kỹ năng hướng nghiệp
                            </p>
                            <p>
                                Kỹ năng chuyên môn
                            </p>
                            <p>
                                Kỹ năng mềm
                            </p>
                        </div>

                        <div style={{ width: 240 }} className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-warning'>Về chúng tôi</h6>
                            <p>
                                Tầm nhìn và sứ mệnh
                            </p>
                            <p>
                                Giá trị cốt lõi
                            </p>
                        </div>

                        <div style={{ width: 250 }} className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-warning' >Theo dõi chúng tôi</h6>
                            <div>
                                <a href="https://www.facebook.com/careerupteamd19ptit">
                                    <img className='icon-footer' src={FaceIcon} />
                                </a>
                                <a href="https://www.tiktok.com/@dai_hoc_la_chuyen_nho">
                                <img className='icon-footer' src={TiktokIcon} />
                                </a>
                                <img className='icon-footer' src={InstagramIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MDBFooter>
    );
}