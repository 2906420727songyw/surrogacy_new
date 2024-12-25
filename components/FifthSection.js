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
    </div>
  );
};

export default FifthSection; 