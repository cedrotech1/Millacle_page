import React, { useState } from 'react';
import axios from 'axios';
import logo from "../assets/images/logoo.png";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        notify: false
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('https://millacle-church-backend.onrender.com/api/v1/users/signup', {
                firstname: formData.firstname,
                lastname: formData.lastname,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
                comfirmpassword: formData.confirmPassword,
                notify: formData.notify ? 'yes' : 'no'
            }, {
                headers: {
                    'Content-Type': 'application/json',

                }
            });
    
            // Handle successful signup
            toast.success(response.data.message);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setFormData({
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                password: '',
                confirmPassword: '',
                notify: false
            });
        } catch (error) {
            // Handle error
            const errorMessage = error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'There was an error creating the account!';
            toast.error(errorMessage);
            console.error('Error:', errorMessage);
            
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
                                <h4>Create an account</h4>
                            </div>
                            <form id="signupForm" onSubmit={handleSubmit}>
                                <div className="form-input">
                                    <span><i className="fa fa-user"></i></span>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-user"></i></span>
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-phone"></i></span>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-envelope"></i></span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"></i></span>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-lock"></i></span>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12 d-flex">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="notify"
                                                name="notify"
                                                checked={formData.notify}
                                                onChange={handleChange}
                                            />
                                            <label className="custom-control-label text-white" htmlFor="notify">
                                               &nbsp; Notify me about updates
                                            </label>
                                        </div>
                                    </div>
                                    
                                  
                                </div>
                               
                                <div className="text-left mb-3">
                                    <button type="submit" className="btn">Register</button>
                                </div>
                                {/* <div className="text-white mb-3">or register with</div>
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
                                </div> */}
                                <div className="text-white">Already have an account?
                                    <Link to='/login' className="login-link danger">Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-none d-md-block image-container" style={{height:'120vh'}}></div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default Signup;
