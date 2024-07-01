import React, { useEffect } from 'react';
import logo from "../assets/images/logoo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // navigate('/'); // Adjust the route according to your application's routing setup
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('pwd').value;

        try {
            const response = await axios.post('https://millacle-church-backend.onrender.com/api/v1/auth/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            // Navigate to home page upon successful login
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token); // Store token in local storage
                navigate('/'); // Adjust the route according to your application's routing setup
            }
        } catch (error) {
            console.error('There was an error during the login!', error);
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 form-container">
                        <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 form-box text-center">
                            <div className="logo mt-5 mb-3">
                                <Link to='/'>
                                    <img className="logoNav" src={logo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="heading mb-3">
                                <h4>Login into your account</h4>
                            </div>
                            <form id="loginForm" onSubmit={handleSubmit}>
                                <div className="form-input">
                                    <span><i className="fa fa-envelope"></i></span>
                                    <input type="email" id="email" placeholder="Email Address" required />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"></i></span>
                                    <input type="password" id="pwd" placeholder="Password" required />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6 d-flex">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cb1" />
                                            <label className="custom-control-label text-white" htmlFor="cb1">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <a href="forget.html" className="forget-link">Forget password</a>
                                    </div>
                                </div>
                                <div className="text-left mb-3">
                                <button type="submit" className="btn">Login</button> 
                                
                                {/* <a target='_blank' href="https://millacle.vercel.app/"><button type="submit" className="btn">to dashbord</button></a> */}
                                </div>
                                <div className="text-white mb-3">or login with</div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <a href="#" className="btn btn-block btn-social btn-facebook">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="btn btn-block btn-social btn-google">
                                            <i className="fa fa-google"></i>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a href="#" className="btn btn-block btn-social btn-twitter">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white">Don't have an account?
                                    <Link to='/signup' className="register-link">Register here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-none d-md-block image-container"></div>
                </div>
            </div>
        </>
    );
};

export default Login;
