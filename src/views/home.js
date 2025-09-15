import React from "react";
import '../styles/home.css';
import Footer from "../componenets/footer";


function Home(){
    return(
        <>
        <div className="home-container">
            <div className="main-card">
                <div className="title">
                    <h1>Unlock your dreams</h1>

                </div>
                <div className="get-started">
                    <button 
                         className="download-btn"
                        onClick={() => window.open('https://google.com', '_blank')}
                     >
                         Download Vesper
                    </button>


                </div>
                                   

                

            </div>
           
            
        </div>
        


        
        <Footer className="footer-container" style={{padding: '20px 0', minHeight: '65px'}}></Footer>
        </>
    )
}

export default Home