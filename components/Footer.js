import React from 'react';

const Footer = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: '#A48472',
      color: '#FFFFFF',
      padding: '90px 182px 65px 150px',
      textAlign: 'left',
      width: '100%',
    }}>
      <div style={{
        flex: 1,
      }}>
        <h2 style={{
          fontFamily: 'Playfair Display',
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '30px',
          margin: '0',
        }}>Sapling Surrogacy</h2>
        <p style={{
          margin: '5px 0',
        }}>
          <a href="http://www.homiesproperty.co" style={{ color: '#FFFFFF', textDecoration: 'none' }}>www.homiesproperty.co</a>
        </p>
        <p style={{
          margin: '5px 0',
        }}>
          <a href="mailto:hello@homies.co" style={{ color: '#FFFFFF', textDecoration: 'none' }}>hello@homies.co</a>
        </p>
        <p style={{
          margin: '5px 0',
        }}>+44 652 762 887</p>
      </div>
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <div>
          <h3 style={{ margin: '0' }}>成为准父母</h3>
          <p>准父母概述</p>
          <p>代孕过程</p>
          <p>试管医院的选择</p>
        </div>
        <div>
          <h3 style={{ margin: '0' }}>代孕母</h3>
          <p>准妈妈资格</p>
          <p>代孕妈妈要求</p>
          <p>申请流程</p>
        </div>
        <div>
          <h3 style={{ margin: '0' }}>卵子捐赠者</h3>
          <p>卵子捐赠资格</p>
          <p>申请流程</p>
        </div>
        <div>
          <h3 style={{ margin: '0' }}>资源</h3>
          <p>成为什么父母</p>
          <p>成为什么代孕妈妈</p>
        </div>
      </div>
    </div>
  );
};

export default Footer; 