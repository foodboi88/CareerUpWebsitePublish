import React from 'react'
import Logo from '../images/CareerUp.png'
import {Button} from 'antd'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useHistory } from 'react-router'
import { useDispatchRoot, useSelectorRoot } from '../redux/store'
import { setHeaderStatusRequest } from '../redux/controller'
import {Link} from 'react-router-dom'
import Advisor from '../pages/advisor/Advisor'
import AdvisorApi from '../api/Advisor/advisor.api'

interface Myprops{
  activeWhat: React.MutableRefObject<string>
}

const CHeader = (props: Myprops) => {
  const history = useHistory();
  const dispatch = useDispatchRoot();
  const { headerState } = useSelectorRoot(state => state.header);

  console.log(headerState);
  return (
    <div className='shadow-5 header'>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:'136px',width:'151px',height:'54px',marginTop:'10px', marginBottom:'8px'}}
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
      <div style={{display: 'flex', flexDirection: 'row', marginRight:'136px'}}>
        <div style={{marginTop:'22px'}}><a>Đăng nhập</a></div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:'17px', marginTop:'12px', marginBottom:'12px'}}>
            <MDBBtn rounded className='mx-2' color='info'>Đăng ký</MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default CHeader