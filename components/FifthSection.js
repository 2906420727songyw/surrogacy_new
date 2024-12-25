import React, { useEffect, useState } from 'react';

const videos = [
  '/path/to/video1.mp4',
  '/path/to/video2.mp4',
  '/path/to/video3.mp4',
];

const FifthSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // 每5秒切换视频

    return () => clearInterval(interval); // 清除定时器
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#868275', // 设置背景颜色为 #868275
      padding: '100px 0', // 设置上下内边距为 100px，左右内边距为 0
      textAlign: 'center',
      height: 'auto', // 设置高度为 auto，以适应内容
      position: 'relative', // 使子元素绝对定位
    }}>
      {/* 顶部渐变条 */}
      <div style={{
        position: 'relative', // 改为相对定位
        width: '3px', // 渐变条宽度
        height: '150px', // 渐变条高度
        background: 'linear-gradient(0deg, rgba(226, 226, 226, 0) 0%, #B8B7B4 52.5%, rgba(226, 226, 226, 0) 100%)',
        marginBottom: '24px', // 添加底部间距
      }}></div>

      <h2 style={{
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '48px',
        fontWeight: '400',
        lineHeight: '1.2',
        color: '#FFFFFF', // 设置字体颜色为白色
        margin: '0',
      }}>Sapling Surrogacy</h2>
      <p style={{
        fontFamily: 'FZShuiYunS-DB-GB', // 更新字体样式
        fontSize: '30px', // 设置字体大小
        fontWeight: '400',
        lineHeight: '60px', // 设置行高
        color: '#FFFFFF', // 设置字体颜色为白色
        margin: '20px 0 0 0',
      }}>
        是一家提供全方位服务的代孕机构，<br />
        拥有最高的成功率，由一支热忱于帮助人们建立家庭的团队领导。
      </p>

      {/* 底部渐变条 */}
      <div style={{
        position: 'relative', // 改为相对定位
        width: '3px', // 渐变条宽度
        height: '150px', // 渐变条高度
        background: 'linear-gradient(0deg, rgba(226, 226, 226, 0) 0%, #B8B7B4 52.5%, rgba(226, 226, 226, 0) 100%)',
        marginTop: '18px', // 添加顶部间距
      }}></div>

      {/* 轮播视频部分 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px', // 设置与上方视频轮播的距离为 100px
        overflow: 'hidden', // 隐藏溢出部分
        width: '100%', // 设置轮播容器宽度为 100%
      }}>
        {videos.map((video, index) => (
          <video key={index} width="555" height="370" controls style={{ margin: '0 15px', borderRadius: '10px' }}>
            <source src={video} type="video/mp4" />
            您的浏览器不支持视频标签。
          </video>
        ))}
      </div>

      {/* 关于我们部分 */}
      <div style={{
        marginTop: '100px', // 设置与上方视频轮播的距离为 100px
        color: '#FFFFFF', // 设置字体颜色为白色
        fontFamily: 'FZShuiYunS-DB-GB',
        fontSize: '60px', // 设置字体大小
        fontWeight: '400',
        lineHeight: '73.86px', // 设置行高
        textAlign: 'center',
      }}>
        <p>关于我们</p>
      </div>

      {/* 新增的列表部分 */}
      <div style={{
        padding: '30px 150px 65px 150px', // 上内边距30px，左右内边距150px，下内边距65px
        width: '100%', // 宽度100%
        display: 'flex',
        flexWrap: 'wrap', // 允许换行
        justifyContent: 'space-between', // 列表项之间的间距
      }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} style={{
            borderRadius: '10px', // 圆角
            margin: '0 10px 20px 0', // 列表项之间的距离
            flex: '1 1 calc(25% - 20px)', // 每个项占据25%的宽度，减去间距
            boxSizing: 'border-box', // 包含内边距和边框
            textAlign: 'left', // 确保内容左对齐
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#ffffff', fontFamily: 'FZShuiYunS-DB-GB', fontSize: '14px', fontWeight: '400', lineHeight: '17.23px' }}>News {index + 1}</h3>
            <hr style={{ margin: '0 0 20px 0', borderColor: '#C9C9C9' }} /> {/* 分割线 */}
            <img src="/images/image1.png" alt={`新闻图片 ${index + 1}`} style={{ width: '270px', height: '300px', borderRadius: '10px', marginBottom: '16px' }} />
            <p style={{ margin: '0 0 22px 0', color: '#ffffff', fontFamily: 'PingFang SC', fontSize: '20px', fontWeight: '400', lineHeight: '34px' }}>How To Deliver a Successful Product Launch</p>
            <p style={{ margin: '0', color: '#ffffff', fontFamily: 'PingFang SC', fontSize: '16px', fontWeight: '400', lineHeight: '22.4px' }}>29 Jun 2022, by Joshua Nash</p>
          </div>
        ))}
      </div>

      {/* 加载更多按钮 */}
      <button style={{
        marginTop: '20px',
        padding: '0px 18px',
        width: '133px', // 设置按钮宽度
        height: '36px', // 设置按钮高度
        fontSize: '18px', // 设置字体大小
        fontWeight: '400',
        lineHeight: '36px', // 设置行高与按钮高度相同以确保垂直居中
        borderRadius: '5px',
        backgroundColor: '#FFFFFF',
        color: '#000000', // 设置字体颜色为黑色
        border: 'none',
        cursor: 'pointer',
      }}>
        加载更多
      </button>
    </div>
  );
};

export default FifthSection; 