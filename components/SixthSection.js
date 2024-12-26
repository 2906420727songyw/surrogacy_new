import React from 'react';

const SixthSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#A48472', // 设置背景颜色
      padding: '100px 150px', // 设置上下内边距100px，左右内边距150px
      textAlign: 'center',
      width: '100%', // 设置宽度为100%
      height: 'auto', // 高度自适应
    }}>
      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '30px',
        fontWeight: '400',
        lineHeight: '36.93px',
        color: '#FFFFFF', // 设置字体颜色为白色
        margin: '0',
      }}>Sapling Surrogacy</h2>
      <p style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '30px', // 更新字体大小
        fontWeight: '400',
        lineHeight: '50px', // 更新行高
        color: '#FFFFFF', // 设置字体颜色为白色
        margin: '20px 0 80px 0', // 设置底部外边距为80px
      }}>
        成功和热情得您信赖
        <br />
        作为一家提供全方位服务的代孕机构，Sapling Surrogacy为父母和代孕妈妈提供专业知识经验以及30年来帮助各种家庭成长所积案的热情
      </p>
      <div style={{
        width: '100%', // 设置宽度为100%
        height: '368px', // 设置高度为368px
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start', // 靠上排列
      }}>
        {[
          { percentage: '99.4%', description: '我们的父母带着孩子回家居住在全球73个国家', size: '260px', margin: '63px 0 0 0' }, // 第一个容器
          { percentage: '3400+', description: '要让孩子出生自然而然!', size: '300px', margin: '0px 0 0 0' }, // 第二个容器
          { percentage: '50%', description: '我们的代理人是回头客', size: '260px', margin: '108px 0 0 0' }, // 第三个容器
          { percentage: '44%', description: '我们的代理人是回头客', size: '260px', margin: '21px 0 0 0' }, // 第四个容器
        ].map((item, index) => (
          <div key={index} style={{
            textAlign: 'center',
            backgroundColor: '#DCBCA9', // 设置圆形容器背景颜色
            borderRadius: '50%',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s', // 添加浮动效果
            flex: `0 0 ${item.size}`, // 设置基础宽度
            height: item.size, // 设置高度
            margin: item.margin, // 添加上外边距
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // 鼠标悬停时放大
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // 鼠标离开时恢复
          >
            <h3 style={{
              fontFamily: 'FZShuiYunS-EB-GB', // 设置字体样式
              fontSize: '50px', // 设置字体大小
              fontWeight: '400', // 设置字体粗细
              lineHeight: '61.95px', // 设置行高
              color: '#FFFFFF', // 设置字体颜色为白色
              margin: '0',
            }}>{item.percentage}</h3>
            <p style={{
              fontFamily: 'FZShuiYunS-DB-GB', // 设置字体样式
              fontSize: '18px', // 设置字体大小
              fontWeight: '400', // 设置字体粗细
              lineHeight: '22.16px', // 设置行高
              color: '#FFFFFF', // 设置字体颜色为白色
              margin: '20px 0 0 0', // 设置与第一段文字的距离
            }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixthSection; 