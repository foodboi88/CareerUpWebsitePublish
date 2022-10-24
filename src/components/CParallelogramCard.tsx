import React from 'react'
import "../App.scss";
import "antd/dist/antd.css";

interface MyProps{
    imgSrc: string,
    name: string,
    role: string,
    quote?: string,
}



const CParallelogramCard = (props: MyProps) => {
  return (
    <div style={{display:'flex'}} >
        <div 
        className='box-shadow'
        style={{
            borderTop: '1px solid #E0E0E0',
            borderLeft: '1px solid #E0E0E0',
            borderBottom: '1px solid #E0E0E0',
            borderRadius:'12px 0px 0px 12px',
            width:'280px',
            height: '280px',
            transform: 'skewX(-8deg)',
            transformOrigin: 'top',
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img
                style={{

                    borderRadius:'12px',
                    transformOrigin: 'top',
                    margin: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'skewX(5deg)'
                }}
                src={props.imgSrc}
            />
        </div>
        <div 
        className='box-shadow'
        style={{
            borderTop: '1px solid #E0E0E0',
            borderRight: '1px solid #E0E0E0',
            borderBottom: '1px solid #E0E0E0',
            borderRadius:'0px 12px 12px 0px',
            width:'450px',
            height: '280px',
            transform: 'skewX(-8deg)',
            transformOrigin: 'top',
            margin: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{fontWeight: 600, fontSize: '20px'}}>
                {props.name}
            </div>
            <div style={{fontWeight: 400, fontSize: '14px'}}>
                {props.role}
            </div>
            <div style={{fontWeight: 400, fontSize: '14px'}}>
                {props.quote}
            </div>
        </div>
    </div>
  )
}

export default CParallelogramCard