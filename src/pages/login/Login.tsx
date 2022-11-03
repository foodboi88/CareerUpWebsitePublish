/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Button, Checkbox, Form, Image, Input, notification } from 'antd'
import Logo from "../../images/logo.png";
import Forgot_Password from "../../images/forgot_password.png"
import AppleIcon from "../../images/AppleIcon.png"
import FacebookIcon from "../../images/FacebookIcon.png"
import GoogleIcon from "../../images/GoogleIcon.png"
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'
// import { LoginRequest } from 'common/define-identity';
// import { useDispatchRoot, useSelectorRoot } from 'redux/store';
// import { loginRequest } from 'redux/controller';
export default function Login(): JSX.Element {
    const [rememberState,setRememberState] = useState<boolean>(false);
    const history = useHistory();
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

    const onFinish = () => {
      history.push('/home')
    }

    function onFinishFailed () {

    }

    return (
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout='vertical'
                size='large'
                >
                <Form.Item
                    label="Email"
                    name="email"
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
                    <Input style={{borderRadius: "9px", width: "458px", height: "56.99px"}}/>
                </Form.Item>

                <Form.Item
                    label="Password"
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
                    className='ml-0'
                >
                    <Checkbox onChange={()=> setRememberState(!rememberState)}>Remember</Checkbox>
                </Form.Item>


                <Form.Item
                    
                >
                    <Button type="primary" htmlType="submit" style={{borderRadius: "9px",fontSize: "20px", backgroundColor:"#6265FF", width: "458px", height: "56.99px"}}>
                        <b>Login</b>
                    </Button>
                </Form.Item>
                </Form>
                <div style={{textAlign: "center",width: "458px", height: "56.99px"}}>
                <a style={{color: "#6265FF"}}>Forgot password</a>
                </div>
                <div style={{marginTop: "10px", fontSize: "30px"}}>
                <div style={{color: "#CBCBCB"}}><b>Or</b></div>
                <div>
                    <Image preview={false} src={FacebookIcon}/>
                    <Image preview={false} src={GoogleIcon}/>
                    <Image preview={false} src={AppleIcon}/>
                </div>
                <div style={{fontSize: "20px"}}>
                    <span>Bạn chưa có tài khoản?  </span>
                    <span><a style={{color: "#6265FF"}}>Đăng ký</a></span>
                </div>
                </div>
            </div>
            <div>
                <Image preview={false} src={Forgot_Password}/>
            </div>
            </div>
        </div>
    )
}
