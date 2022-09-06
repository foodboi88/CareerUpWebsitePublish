import React from 'react'
import Logo from '../images/CareerUp.png'
import {Button} from 'antd'

const CHeader = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom:'5px solid red'}}>
      <div style={{marginLeft:'136px',width:'151px',height:'48px',marginTop:'8px'}}>
        <img src={Logo}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop:'22px'}}>
        <div><a>Trang chủ</a></div>
        <div style={{marginLeft:'48px'}}><a>Tư vấn</a></div>
        <div style={{marginLeft:'48px'}}><a>Thông tin tuyển sinh</a></div>
        <div style={{marginLeft:'48px'}}><a>Về chúng tôi</a></div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginRight:'136px'}}>
        <div style={{marginTop:'22px'}}><a>Đăng nhập</a></div>
        <div style={{marginLeft:'17px',marginTop:'12px'}}>
          <Button type="primary" shape="round" >
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CHeader