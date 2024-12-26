import React from 'react';

const SeventhSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `
        linear-gradient(0deg, rgba(192, 152, 109, 0.1), rgba(192, 152, 109, 0.1)),
        linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(/images/7.jpg)`, // 设置背景图片和颜色层
      backgroundSize: 'cover', // 背景图片覆盖整个区域
      backgroundPosition: 'center', // 背景图片居中
      padding: '20px', // 设置内边距
      textAlign: 'center',
      width: '100%', // 设置宽度为100%
      height: '500px', // 设置高度为500px
    }}>
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '60px',
        fontWeight: '400',
        lineHeight: '73.86px',
        color: '#FFFFFF', // 设置字体颜色
        margin: '0 0 20px 0',
      }}>Sapling Surrogacy</h2>
      <p style={{
        fontFamily: 'FZShuiYunS-M-GB',
        fontSize: '60px',
        fontWeight: '400',
        lineHeight: '73.86px',
        color: '#FFFFFF',
        margin: '0 0 22px 0',
      }}>
        0%利润投入基金会帮助更多家庭圆梦
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
      }}>
        <button style={{
          backgroundColor: '#FFFFFF',
          color: '#000000', // 设置按钮文字颜色
          border: 'none',
          borderRadius: '4px',
          padding: '0', // 去掉内边距
          width: '133px', // 设置宽度
          height: '36px', // 设置高度
          cursor: 'pointer',
          fontSize: '18px', // 设置字体大小
          fontFamily: 'FZShuiYunS-B-GB', // 设置字体样式
          fontWeight: '400', // 设置字体粗细
          lineHeight: '36px', // 设置行高与按钮高度相同，确保文字垂直居中
          marginRight: '23px', // 设置右边距为23px
        }}>
          了解更多
        </button>
        <button style={{
          backgroundColor: '#FFFFFF',
          color: '#000000', // 设置按钮文字颜色
          border: 'none',
          borderRadius: '4px',
          padding: '0', // 去掉内边距
          width: '133px', // 设置宽度
          height: '36px', // 设置高度
          cursor: 'pointer',
          fontSize: '18px', // 设置字体大小
          fontFamily: 'FZShuiYunS-B-GB', // 设置字体样式
          fontWeight: '400', // 设置字体粗细
          lineHeight: '36px', // 设置行高与按钮高度相同，确保文字垂直居中
        }}>
          捐款
        </button>
      </div>
    </div>
  );
};

export default SeventhSection; 