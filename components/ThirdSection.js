import React from 'react';
import Button from './Button';

const ThirdSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/images/2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '40px 20px',
      textAlign: 'center',
      height: '700px',
    }}>
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: '#FFFFFF',
        margin: '0',
      }}>成为代孕母亲</h2>
      <p style={{
        fontFamily: 'FZShuiYunS-M-GB',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '28px',
        color: '#FFFFFF',
        margin: '22px 0 0 0',
      }}>成为代孕妈妈，最高可获报酬105,000+美元</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
      }}>
        <Button style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          padding: '0',
          fontSize: '18px',
          fontFamily: 'FZShuiYunS-B-GB',
          fontWeight: '400',
          lineHeight: '36px',
          border: 'none',
          cursor: 'pointer',
          color: '#000000',
          width: '133px',
          height: '36px',
          marginRight: '10px',
        }}>了解更多</Button>
        <Button style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          padding: '0',
          fontSize: '18px',
          fontFamily: 'FZShuiYunS-B-GB',
          fontWeight: '400',
          lineHeight: '36px',
          border: 'none',
          cursor: 'pointer',
          color: '#000000',
          width: '133px',
          height: '36px',
        }}>申请通道</Button>
      </div>
    </div>
  );
};

export default ThirdSection; 