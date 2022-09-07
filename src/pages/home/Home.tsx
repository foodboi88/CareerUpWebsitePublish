import { Card, Carousel } from 'antd'
import Meta from 'antd/lib/card/Meta';
import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'
import CFooter from '../../components/CFooter'
import CHeader from '../../components/CHeader'
import HomeImage1 from '../../images/HomeImage1.png'
import Function1 from '../../images/Function1.png'
import BornReason from '../../images/BornReason.png'
import "../../App.scss";
import "antd/dist/antd.css";

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
        <CHeader/>
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
        <div style={{marginTop:'100px',marginLeft:'300px',marginRight:'300px'}}>
          <div style={{ marginBottom: '35px'}}>
            <div style={{background:'linear-gradient(97.96deg, #11B8F7 5.25%, #007BEE 90.88%)',WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',backgroundClip:'text', fontWeight:'500',fontSize:'32px', lineHeight:'150%'}}>Các chức năng</div>
            <div style={{ fontWeight:'600',fontSize:'48px', lineHeight:'150%'}}>Hỗ trợ tư vấn</div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <Card
              hoverable
              headStyle={{borderRadius: '12px'}}
              style={{ width: 350, borderRadius: '12px' }}
              cover={<img style={{borderRadius:'12px'}} alt="example" src={Function1} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 350, borderRadius: '12px'  }}
              cover={<img style={{borderRadius:'12px'}} alt="example" src={Function1} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
              hoverable
              style={{ width: 350, borderRadius: '12px'  }}
              cover={<img style={{borderRadius:'12px'}} alt="example" src={Function1} />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </div>

        </div>
        <div >
          <div style={{zIndex:10, position:'absolute',marginTop:'-208px'}}>
            <img src={BornReason}/>
          </div>
          <div style={{backgroundColor:'#D4F6FF',width:'100%',height:'520px',marginTop:'209px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{marginLeft:'631px', marginRight:'135px'}}>
              <div>
                Lý do
              </div>
              <div>
                Ra đời của CAREERUP
              </div>
              <div>
                Dự án của chúng tôi bắt đầu từ cảm hứng của bốn bạn trẻ sinh viên, với hy vọng giúp đỡ các bạn sinh viên đang đứng giữa ngã ba lựa chọn của tương lai. Sản phẩm đã trải qua rất nhiều giai đoạn khó khăn, kể từ khi lắng nghe được nỗi đau của mỗi người học sinh cho tới khi ý tưởng được ra đời và đang dần hoàn thiện. Dù tiềm lực của team là nhỏ bé nhưng tôi tin với ước mơ đẹp đẽ, một ngày không xa những câu hỏi nan giải sẽ có lời giải đáp tốt nhất.
              </div>
            </div>
          </div>
        </div>
        <div >Developers</div>
        <div >Join</div>
        <CFooter
        />
    </div>
  )
}

export default Home