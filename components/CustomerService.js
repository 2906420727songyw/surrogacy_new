import React from 'react';

const CustomerService = () => {
  return (
    <div style={{
      position: 'fixed', // 固定定位
      bottom: '20px', // 距离底部20px
      right: '20px', // 距离右侧20px
      backgroundColor: '#868275', // 设置背景颜色为 #868275
      borderRadius: '12px', // 设置圆角为 12px
      padding: '10px', // 设置内边距
      display: 'flex',
      alignItems: 'center', // 垂直居中
      justifyContent: 'center', // 水平居中
      cursor: 'pointer', // 鼠标悬停时显示为手型
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // 添加阴影
      width: '120px', // 设置整体宽度
      height: '60px', // 设置整体高度
    }}>
      <img src="/images/icon1.png" alt="客服" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <span style={{
        fontFamily: 'FZShuiYunS-B-GB', // 设置字体样式
        fontSize: '22px', // 设置字体大小
        fontWeight: '400', // 设置字体粗细
        lineHeight: '27.21px', // 设置行高
        color: '#FFFFFF', // 设置字体颜色
      }}>客服</span>
    </div>
  );
};

export default CustomerService; 