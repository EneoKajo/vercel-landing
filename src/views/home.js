import React from "react";
import '../styles/home.css';
import Footer from "../componenets/footer";
import myImage from "../images/phone.png"
import Image1 from '../images/iamge1.png'
import { useDocumentTitle } from '../utils/useDocumentTitle';



function Home(){
    useDocumentTitle(
    'Vesper - AI Dream Interpretation | Unlock Your Dreams',
    'Transform your dreams into meaningful insights with Vesper AI-powered dream interpretation. Start free with 5 interpretations monthly.'
  );
  


    return(
        <>
        <div className="home-container">
            <div className="home-content">
                <div className="main-card">
                    <div className="title">
                        <h1>Unlock your dreams</h1>
                    </div>
                    <p>Discover what your subconscious is telling you with AI-powered dream interpretation</p>
                    <div className="get-started">
                        <button 
                             className="download-btn"
                            onClick={() => window.open('https://google.com', '_blank')}
                         >
                             Download Vesper
                        </button>
                    </div>
                </div>

                <div className="secondary-card">
                    <div className="secondary-text">
                        <p>Vesper transforms your dreams into meaningful insights using advanced artificial intelligence. Simply record your dreams in our intuitive journal, and receive personalized interpretations that help you understand patterns, emotions, and themes in your sleep experiences. Whether you're curious about recurring dreams, exploring personal growth, or simply fascinated by your nighttime mind, Vesper makes dream analysis accessible and engaging. Your dreams are private and secure - only you have access to your personal interpretations and journal entries.</p>
                    </div>
                    <div className="secondary-image">
                        <img src={myImage} alt="Phone image"/>
                    </div>
                </div>

                <div className="third-card">
                    <div className="third-img">
                        <img src={Image1} alt="orb"/>

                    </div>
                    <div className="third-txt">
  <h3>Start Your Dream Journey - Free</h3>
  <p className="subtitle">5 interpretations to explore what your dreams mean</p>
  <p className="description">Love the insights? Upgrade anytime for unlimited interpretations and advanced features starting at $2.99/month</p>
  <button 
    className="download-btn"
    onClick={() => window.open('https://google.com', '_blank')}
  >
    Download Vesper
  </button>
</div>
                </div>
            </div>
            
            <Footer/>
        </div>
        </>
    )
}

export default Home