import React from 'react';
import Button from './Button';

const FourthSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/images/3.jpg)', // 设置背景图片
      backgroundSize: 'cover', // 背景图片覆盖整个区域
      backgroundPosition: 'center', // 背景图片居中
      padding: '40px 20px',
      textAlign: 'center',
      height: '700px', // 设置高度
    }}>
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: '#FFFFFF', // 设置字体颜色为白色
        margin: '0',
      }}>Sapling Surrogacy</h2>
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: '#FFFFFF', // 设置字体颜色为白色
        marginTop: '22px',
      }}>欢迎单身父母和LGBTQ群体</h2>
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

export default FourthSection; 