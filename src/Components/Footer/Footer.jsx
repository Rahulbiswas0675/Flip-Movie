import React from "react";

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="footer-left">
                    <a target="_blank">About Flip-Movie</a>
                    <a target="_blank">Terms of Use</a>
                    <a target="_blank">Privacy Policy</a>
                    <a target="_blank">FAQ</a>
                    <a target="_blank">Feedback</a>
                    <a target="_blank">Careers</a>
                </div>
                <div class="footer-right">
                    <div class="app">
                        <p>Flip-Movie App</p>
                        <a target="_blank" >PlayStore</a>
                    </div>
                    <div class="social">
                        <p>Connect with us</p>
                        <a class="fb"target="_blank" >Facebook</a>
                        <br/>
                        <a class="fb"  target="_blank" >Instragram</a>
                    </div>
                </div>
            </div>
            <div className="para">
                <p class="copyright">© 2022 Flip-Movie. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;