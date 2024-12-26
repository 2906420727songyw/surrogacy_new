import React from 'react';
import Button from './Button';

const ThirdSection = () => {
  return (
    <div style={{
      position: 'relative',
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
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 1,
      }} />
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: '#FFFFFF',
        margin: '0',
        zIndex: 2,
      }}>成为代孕母亲</h2>
      <p style={{
        fontFamily: 'FZShuiYunS-M-GB',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '28px',
        color: '#FFFFFF',
        margin: '22px 0 0 0',
        zIndex: 2,
      }}>成为代孕妈妈，最高可获报酬105,000+美元</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
        zIndex: 2,
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