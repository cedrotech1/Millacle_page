import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer>
                <div class="inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 foot-about">
                                <h4>About US</h4>

                                <p> The ministry is lead by Apostle Theobald Samedi after receiving a calling
                                    from God while in
                                    Uganda as refugee fleeing the Rwanda Genocide.</p>

                                <ul>
                                    <li>Kigali,Rwanda</li>
                                    <li>miracleCenter@gmail.com</li>
                                    <li>+250788680640</li>
                                </ul>
                            </div>

                            <div class="col-md-3 foot-post">

                            </div>

                            <div class="col-md-3 foot-services">
                                <h4>Quick Ref</h4>

                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/events'>Event</Link></li>
                                    <li><Link to='/gallery'>Gallery</Link></li>
                                    <li><Link to='/blogs'>Blog</Link></li>
                                    <li><Link to='/payment'>Give</Link></li>
                                    <li><Link to='/contact'>Contact Us</Link></li>
                                    
                                
                                    <li className="float-start">
                                        <a  rel="noopener noreferrer" href='./signup'>
                                            <i className="bi bi-box-arrow-in-right"></i> Register to account
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-3 foot-news">
                                <h4>Quick deliverance</h4>
                                <p>we can help you achieve freedom and deliverance from any spiritual or emotional burdens you may be facing.</p>

                                <div class="input-group mb-3">
                                    <input type="text" class="form-control mb-0" placeholder="Write your name Here!"
                                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <span class="input-group-text bg-success" id="basic-addon2"><i
                                            class="bi text-white bi-send"></i></span>
                                    </div>
                                </div>

                                <ul>
                                    <li><i class="bi bi-facebook"></i></li>
                                    <li><i class="bi bi-twitter"></i></li>
                                    <li><i class="bi bi-instagram"></i></li>
                                    <li><i class="bi bi-linkedin"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blogContainer">

                </div>
            </footer>
            <div class="copy">
                <div class="container">
                    <a href="https://www.miracleCenter.com/">2024 &copy; All Rights Reserved | Miracle Center Rwanda</a>

                    <span>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Footer;