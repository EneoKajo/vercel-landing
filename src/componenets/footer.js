import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css'

function Footer(){
    const navigate = useNavigate();

    return(
        <>
        <div className="footer-container">
            <div className='footer-main'>
                <ul>
                    <li onClick={() => navigate('/terms?doc=terms-and-conditions')}>
                      Terms and Services
                    </li>

                    <li onClick={() => navigate('/terms?doc=privacy-policy')}>
                        Privacy and policy
                    </li>
                    <li onClick={() => navigate('/terms?doc=contact-us')}>
                        Contact US
                    </li>
                </ul>


            </div>

        </div>
        </>
    )


}

export default Footer