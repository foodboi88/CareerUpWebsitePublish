import React from 'react'
import Logo from '../images/CareerUp.png'
import {Button} from 'antd'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useHistory } from 'react-router'
import { useDispatchRoot } from '../redux/store'
import { setHeaderStatusRequest } from '../redux/controller'

const CHeader = () => {
  const history = useHistory();
  const dispatch = useDispatchRoot();
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',fontSize:'18px'}}
      className='shadow-5'
    >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:'136px',width:'151px',height:'54px',marginTop:'10px', marginBottom:'8px'}}
            onClick={()=> history.push('/home')}
      >
        <img src={Logo}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop:'22px', marginBottom:'22px'}}>
        <div onClick={()=> {
          dispatch(setHeaderStatusRequest(1))
          // console.log(process.env)
          history.push('/home')
          
        }}><a className='hearder-link'>Trang chủ</a></div>
        <div style={{marginLeft:'48px'}} onClick={()=> history.push('/advisor')}><a className='hearder-link' >Tư vấn</a></div>
        <div style={{marginLeft:'48px'}} onClick={()=> history.push('/ask_expert')}><a className='hearder-link' >Hỏi chuyên gia</a></div>
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