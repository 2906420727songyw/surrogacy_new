import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import HeroSection from '../components/HeroSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import FifthSection from '../components/FifthSection';
import SixthSection from '../components/SixthSection';
import SeventhSection from '../components/SeventhSection';
import Footer from '../components/Footer';
import CustomerService from '../components/CustomerService';

const Home = () => {
  return (
    <div>
      <div style={{ height: '20px', backgroundColor: '#A66E65' }}></div>
      
      <div style={{
        minHeight: '800px',
        padding: '0 40px 40px',
        textAlign: 'center',
        backgroundImage: 'url(/images/Base.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 768px)': {
          minHeight: '600px',
          padding: '0 20px 20px',
        }
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '25px 0',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            marginBottom: '20px',
            padding: '15px 0',
          }
        }}>
          <Header />
          <Navigation />
          <div style={{
            '@media (max-width: 768px)': {
              display: 'flex',
              justifyContent: 'center',
            }
          }}>
            <Button style={{
              padding: '2px 18px',
              fontSize: '16px',
              fontFamily: 'PingFang SC',
              fontWeight: '500',
              lineHeight: '19.6px',
              marginRight: '10px',
              '@media (max-width: 768px)': {
                marginRight: '8px',
                padding: '1px 12px',
                fontSize: '14px',
                lineHeight: '16px',
              }
            }}>登入</Button>
            <Button style={{
              padding: '2px 18px',
              fontSize: '16px',
              fontFamily: 'PingFang SC',
              fontWeight: '500',
              lineHeight: '19.6px',
              marginRight: '10px',
              '@media (max-width: 768px)': {
                marginRight: '8px',
                padding: '1px 12px',
                fontSize: '14px',
                lineHeight: '16px',
              }
            }}>预约</Button>
            <Button style={{
              padding: '2px 18px',
              fontSize: '16px',
              fontFamily: 'PingFang SC',
              fontWeight: '500',
              lineHeight: '19.6px',
              '@media (max-width: 768px)': {
                padding: '1px 12px',
                fontSize: '14px',
                lineHeight: '16px',
              }
            }}>搜索</Button>
          </div>
        </div>
        <HeroSection />
        
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
      <CustomerService />
    </div>
  );
};

export default Home;