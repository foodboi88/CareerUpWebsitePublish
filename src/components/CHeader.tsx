import React, {useState,useEffect} from 'react'
import Logo from '../images/CareerUp.png'
import {Button, Dropdown, Menu, Switch} from 'antd'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useHistory } from 'react-router'
import { useDispatchRoot, useSelectorRoot } from '../redux/store'
import { setHeaderStatusRequest } from '../redux/controller'
import {Link} from 'react-router-dom'
import Advisor from '../pages/advisor/Advisor'
import AdvisorApi from '../api/Advisor/advisor.api'
import { IUser } from '../common/define-identity'
import { NotificationOutlined, SmileOutlined, UnorderedListOutlined } from '@ant-design/icons'

interface Myprops{
  activeWhat: React.MutableRefObject<string>
}


const CHeader = (props: Myprops) => {
  const history = useHistory();
  const dispatch = useDispatchRoot();
  const { headerState } = useSelectorRoot(state => state.header);
  const userInfoJSON = localStorage.getItem('userInfo')
  const [greeting,setGreeting] = useState('')
  let userInfo: IUser;

  useEffect(()=>{
    if(userInfoJSON) {
      console.log(userInfoJSON)
      userInfo = JSON.parse(userInfoJSON)
    }
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      console.log('good morning')
      setGreeting('Good morning :3')
    } else if (curHr < 18) {
      console.log('good afternoon')
      setGreeting('Good afternoon :3')
    } else {
      console.log('good evening')
      setGreeting('Good evening :3')
    }
  })

  const [visible, setVisible] = useState(false);
    const handleMenuClick = (e: any) => {
        if (e.key === '1' || e.key === '3') {
        setVisible(false);
        }
    };

    // const toggle = () => {
    //     setIsOnModal(!isOnModal);
    // };

    const handleVisibleChange = (flag: boolean) => {
        setVisible(flag);
    };

  

  console.log(headerState);
 
  return (
    <div className='shadow-5 header' >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',width:'151px',height:'54px',marginTop:'10px', marginBottom:'8px'}}
            onClick={()=> history.push('/home')}
      >
        <img src={Logo}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop:'22px', marginBottom:'22px'}}>
        <div onClick={()=> {
          dispatch(setHeaderStatusRequest(1))
          console.log(headerState);

          // console.log(process.env)
          
        }}><a href='/home' className={`hearder-link ${props.activeWhat.current==='home'? 'hearder-link-active': ''}`}>Trang chủ</a></div>
        <div style={{marginLeft:'48px'}} onClick={()=> {
          dispatch(setHeaderStatusRequest(2))
          

        }}><a href='/advisor' className={`hearder-link ${props.activeWhat.current==='advisor'? 'hearder-link-active': ''}`} >Tư vấn</a></div>
        <div style={{marginLeft:'48px'}} onClick={()=> history.push('/ask_expert')}>
          <a href='/ask_expert' className={`hearder-link ${props.activeWhat.current==='askExpert'? 'hearder-link-active': ''}`} >Hỏi chuyên gia</a>
        </div>
        <div style={{marginLeft:'48px'}}><a className='hearder-link' >Về chúng tôi</a></div>
      </div>
      {
        userInfoJSON? 
        <div style={{display:'flex'}}>
            <div style={{marginTop: "20px", marginRight: "15px"}}>
              <div style={{fontSize: "15px",fontWeight:700}}>Xin chào, {JSON.parse(userInfoJSON).user_name}</div>
              <div style={{fontSize: "10px"}}>{greeting}</div>
            </div>
            <div style={{marginTop: "1px", marginRight: "8px"}}>
              <Dropdown 
                  onVisibleChange={handleVisibleChange} 
                  visible={visible}
                  overlay={
                  <Menu
                  onClick={handleMenuClick}
                      items={[
                      {
                          key: '1',
                          label: (
                          <div>
                              <a target="_blank" rel="noopener noreferrer" >
                              Cài đặt tài khoản
                              </a>
                          </div>
                          
                          ),
                      },
                      // {
                      //     key: '2',
                      //     label: (
                      //     <div>
                      //         <a onClick={()=>{
                      //         setIsOnModal(true);
                      //         // history.push("/register")
                      //         }}>
                      //         Tạo tài khoản mới 
                      //         </a>
                      //     </div>
                      //     ),
                      // },
                      {
                          key: '2',
                          label: (
                          <div className='flex-row'>
                              <p>
                              Theme
                              </p>
                              <Switch checkedChildren="Sáng" unCheckedChildren="Tối" defaultChecked />
                          </div>
                          ),
                      },
                      {
                          type: "divider",
                      },
                      {
                          key: '3',
                          label: (
                          <a  onClick={()=>{
                              localStorage.removeItem('token');
                              localStorage.removeItem('userInfo')

                              
                              history.push('/');
                              window.location.reload();
                          }}>
                              Đăng xuất
                          </a>
                          ),
                      },
                      
                      ]}
                  />
                  } 
                  placement="bottom" 
                  arrow 
                  trigger={["click"]}

              >
                  <div className='mr-2 mt-4' style={{cursor:'pointer'}} onClick={(e) => e.preventDefault()}><UnorderedListOutlined style={{fontSize:'25px'}} /></div>
              </Dropdown>
            </div>
            
            
        </div>
        :
        <div style={{display: 'flex', flexDirection: 'row', marginRight:'136px'}}>

            <div style={{marginTop:'22px'}}><a href='/'>Đăng nhập</a></div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:'17px', marginTop:'12px', marginBottom:'12px'}}>
                <MDBBtn rounded className='mx-2' color='info' onClick={()=>{history.push('/register')}}>Đăng ký</MDBBtn>
            </div>
        </div>
      }
    </div>
  )
}

export default CHeader