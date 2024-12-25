import React from 'react';

const Navigation = () => {
  return (
    <nav style={{
      flexGrow: 1,
      textAlign: 'center',
      '@media (max-width: 768px)': {
        marginBottom: '10px',
      }
    }}>
      {['成为准父母', '成为代孕母亲', '关于我们', '资讯', '推荐计划', '职业生涯'].map((item, index) => (
        <a key={index} href="#" style={{
          margin: '0 20px',
          color: 'white',
          textDecoration: 'none',
          fontFamily: 'PingFang SC',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '19.6px',
          transition: 'font-weight 0.3s',
          '@media (max-width: 768px)': {
            margin: '0 10px',
            fontSize: '12px',
            lineHeight: '16px',
          }
        }} 
        onMouseOver={(e) => e.currentTarget.style.fontWeight = '700'}
        onMouseOut={(e) => e.currentTarget.style.fontWeight = '500'}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;