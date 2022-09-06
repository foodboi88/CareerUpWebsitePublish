
import { MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit'
const CCareerAdvisor = () => {
    return (
        <div
            className='CCareerAdvisor'
            style={{
                width: '1440px',
                height: '720px',
                left: '0px',
                top: '320px',
                margin: '10px auto',
            }}>
            <div style={{ display: 'flex', margin: '10px auto', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '720px', height: '72px', borderRadius: 12, opacity: '1' }}>
                <MDBBtn
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '240px', height: '72px', borderRadius: '12px', marginRight: 10 }}>
                    <MDBIcon style={{ fontSize: 15 }} fas icon="suitcase" />
                    <p style={{ margin: '0 10px', fontSize: 14 }}>Tư vấn ngành</p>
                </MDBBtn>
                <MDBBtn
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '240px', height: '72px', borderRadius: '12px', marginRight: 10 }}
                >
                    <MDBIcon style={{ fontSize: 15 }} fas icon="school" />
                    <p style={{ margin: '0 10px', fontSize: 14 }}>Tư vấn trường</p>
                </MDBBtn>
                <MDBBtn
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '240px', height: '72px', borderRadius: '12px' }}
                >
                    <MDBIcon style={{ fontSize: 15 }} fas icon="calendar-alt" />
                    <p style={{ margin: '0 10px', fontSize: 14 }}>Đặt lịch tư vấn</p>
                </MDBBtn>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '50px 20px 100px 140px', alignItems: 'center', width: '768px', height: '504px', borderRadius: 12, opacity: '1', backgroundColor: '#FFFFFF' }}>
                <h3 className='title-advisor' style={{ margin: '70px 0 20px' }}>Vui lòng điền thông tin để được hỗ trợ tư vấn!</h3>
                <div className="d-flex flex-row align-items-center mb-4 ">
                    <p style={{ width: 100, margin: '0 10px', fontSize: 18, fontWeight: 600 }}>Tên trường: </p>
                    <MDBInput style={{ width: 400 }} label='Nhập tên trường' id='form1' type='text' />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                    <p style={{ width: 100, margin: '0 10px', fontSize: 18, fontWeight: 600 }}>Điểm thi: </p>
                    <MDBInput style={{ width: 400 }} label='Nhập điểm thi' id='form1' type='number' min={1} />
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                    <p style={{ width: 100, margin: '0 10px', fontSize: 18, fontWeight: 600 }}>Tổ hợp: </p>
                    <MDBInput style={{ width: 400 }} label='Nhập tổ hợp' id='form1' type='text' />
                </div>
                <MDBBtn style={{ width: 400, height: 40,  margin: '20px 10px', backgroundColor: '#FFB507', borderRadius: 12 }}>Tìm kiếm thông tin</MDBBtn>
            </div>
        </div>

    )
}

export default CCareerAdvisor