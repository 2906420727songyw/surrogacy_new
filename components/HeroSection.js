import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: '#FFFFFF',
        margin: '0',
        '@media (max-width: 768px)': {
          fontSize: '36px',
        }
      }}>成为准父母</h2>
      <p style={{
        fontFamily: 'FZShuiYunS-M-GB',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '28px',
        color: '#FFFFFF',
        margin: '22px 0 0 0',
        '@media (max-width: 768px)': {
          fontSize: '18px',
        }
      }}>套餐价格低至145,000美元</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
      }}>
        <button style={{
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
        }}>了解更多</button>
        <button style={{
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
        }}>代孕费用</button>
      </div>
    </div>
  );
};

export default HeroSection;