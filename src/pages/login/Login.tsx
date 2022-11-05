/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Button, Checkbox, Form, Image, Input, notification } from 'antd'
import Forgot_Password from "../../images/forgot_password.png"
import Logo from '../../images/CareerUp.png'
import LoginImage from '../../images/forgot_password.png'
import AppleIcon from "../../images/AppleIcon.png"
import FacebookIcon from "../../images/FacebookIcon.png"
import GoogleIcon from "../../images/GoogleIcon.png"
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
import { LoginRequest } from '../../common/define-identity'
import IdentityApi from '../../api/identity/identity.api'
// import { LoginRequest } from 'common/define-identity';
// import { useDispatchRoot, useSelectorRoot } from 'redux/store';
// import { loginRequest } from 'redux/controller';
export default function Login(): JSX.Element {
    const [rememberState,setRememberState] = useState<boolean>(false);
    const recentRegistration = localStorage.getItem('recentRegistration')
    const token = localStorage.getItem('token');
    const history = useHistory();

    console.log(recentRegistration)
    useEffect(()=>{
        if(token) history.push('/home')
    })
    // const dispatch = useDispatchRoot();
    // const isSuccess = useSelectorRoot(state => (state.login.statusCode));
    // useEffect( () => {
        
    //     const userToken = localStorage.getItem('token');
    //     console.log(isSuccess)
    //     if(isSuccess === "OK" && userToken !== null && userToken !== undefined){
    //     history.push('/calendar')
    //     }
    //     else if(isSuccess === "FAIL"){
    //     notification.open({
    //         message: 'Sai tài khoản mật khẩu',
    //         onClick: () => {
    //         console.log('Notification Clicked!');
    //         },
    //     });
    //     }
    // },[isSuccess])
    
    // const onFinish = async (account: LoginRequest): Promise<any> =>  {
    //     account.remember=rememberState;
    //     // console.log
    //     dispatch(loginRequest(account));
        
    // } 

    const onFinish = async (item: LoginRequest) => {
        console.log('hehehehe')
        localStorage.removeItem('recentRegistration')
        await IdentityApi.login(item).then((res: any)=>{
            console.log(res.data.access_token)
            localStorage.setItem('token',res.data.access_token)
            notification.open({
                message: 'Đăng nhập thành công rồi nhớ <3',
                description:
                  'Chúc bạn có trải nghiệm tư vấn nguyện vọng tốt nhất cùng CareerUp!',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
              history.push('/home')
        }).catch((err: any)=>{
            console.log(err)
            if(err.code==='ERR_NETWORK') {    
                notification.open({
                    message: 'Không có kết nối mạng!',
                    // description:
                    //   'Chúc bạn có trải nghiệm tư vấn nguyện vọng tốt nhất cùng CareerUp!',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
            else{
                notification.open({
                    message: 'Sai tài khoản hoặc mật khẩu!',
                    // description:
                    //   'Chúc bạn có trải nghiệm tư vấn nguyện vọng tốt nhất cùng CareerUp!',
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
        });
      
    }

    function onFinishFailed () {

    }

    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <div>
                <div style={{marginTop: "113.14px", marginLeft: "138px", marginBottom: "45.08px"}}>
                <Image preview={false} className='logo' src={Logo} alt="Logo" />
                </div>
                <div style={{ marginLeft: "138px",marginRight: "118px", display: "flex", justifyContent: "space-between"}}>
                <div>
                    <div style={{width: "220px",height: "56px",fontSize: "40px",letterSpacing: "0.5px", marginBottom:"30.6px"}}><b>Login</b></div>
                    <Form
                        style={{marginTop:'10px'}}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={(item)=>onFinish(item)}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='vertical'
                        size='large'
                    >
                    <Form.Item
                        label="Tên tài khoản"
                        name="username"
                        // rules={[
                        // {
                        //     required: true,
                        //     message: 'Vui lòng nhập email!',
                        // },{
                        //     type: 'email',
                        //     message: 'Nhập đúng định dạng email!'
                        // }
                        // ]}
                    >
                        <Input style={{borderRadius: "9px", width: "458px", height: "56.99px"}} placeholder={recentRegistration? recentRegistration: ''}/>
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        // rules={[
                        // {
                        //     required: true,
                        //     message: 'Vui lòng nhập mật khẩu!',
                        // },
                        // ]}
                    >
                        <Input.Password style={{borderRadius: "9px",width: "458px", height: "56.99px"}}/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        // className='ml-0'
                    >
                        <Checkbox onChange={()=> setRememberState(!rememberState)}>Nhớ mật khẩu</Checkbox>
                    </Form.Item>


                    <Form.Item
                        
                    >
                        <Button type="primary" htmlType="submit" style={{borderRadius: "9px",fontSize: "20px", background: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)', width: "458px", height: "56.99px"}}>
                            <b>Đăng nhập</b>
                        </Button>
                    </Form.Item>
                    </Form>
                    <div style={{textAlign: "center",width: "458px", height: "56.99px"}}>
                        <a style={{color: 'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)'}}>Quên mật khẩu</a>
                    </div>

                    <div style={{marginTop: "10px", fontSize: "30px"}}>
                    <div style={{color: "#CBCBCB"}} className='center_everything'><b>Hoặc</b></div>
                    <div className='center_everything'>
                        <Image preview={false} src={FacebookIcon}/>
                        <Image preview={false} src={GoogleIcon}/>
                        <Image preview={false} src={AppleIcon}/>
                    </div>
                    <div style={{fontSize: "20px"}} className='center_everything'>
                        <span>Bạn chưa có tài khoản?  </span>
                        <span>   </span>
                        <span><a style={{color:'#2dbef7'}} href="/register"> Đăng ký ngay</a></span>
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
            <div>
                <Image style={{marginTop: '185px'}} preview={false} src={LoginImage}/>
            </div>
            
        </div>
    )
}
