import React from "react";
import '../styles/notfound.css';
import Footer from "../componenets/footer";
import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '../utils/useDocumentTitle';

function NotFound(){
    const navigate = useNavigate();

    useDocumentTitle(
        'Page Not Found - Vesper',
        'The page you are looking for could not be found.'
    );

    return(
        <>
        <div className="notfound-container">
            <div className="notfound-content">
                <div className="notfound-card">
                    <div className="notfound-title">
                        <h1>404</h1>
                    </div>
                    <div className="notfound-subtitle">
                        <h2>Page Not Found</h2>
                    </div>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <div className="notfound-button">
                        <button
                            className="download-btn"
                            onClick={() => navigate('/')}
                        >
                            Go Home
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        </>
    )
}

export default NotFound