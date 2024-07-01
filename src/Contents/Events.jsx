import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/style.css';
import LoadingSpinner from '../Components/loading';
import defaultImage from '../assets/images/blogs/blog_default.png';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://millacle-church-backend.onrender.com/api/v1/Posts/events');
            if (Array.isArray(response.data.data)) {
                setPosts(response.data.data);
            } else {
                console.error("Expected an array of posts but got:", response.data.data);
                setError("Unexpected data format received from server.");
            }
        } catch (error) {
            console.error("There was an error fetching the posts!", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
            }
            setError("Failed to fetch posts. Please try again later.");
        } finally {
            setLoading(false); // Set loading to false regardless of success or failure
        }
    };

    const handlePostClick = (id) => {
        navigate(`/one/${id}`);
    };

    return (
        <div className="blog-outline">
            <div className="container-fluid big-padding about-cover">
                <div className="container">
                    <div className="section-title bg-white row mb-3">
                        <h2 className="fw-bolder">Our Events</h2>
                        <p>Join Us for Meaningful Events and Fellowship in Our Church Community.</p>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <div className="blog-slider-container">
                            <div className="blog-slider">
                                {posts.map((post, index) => (
                                    <div key={index} className="blog-slide m-1" onClick={() => handlePostClick(post.id)}>
                                        <div className="blog-cover bg-white shadow-sm">
                                            <center>
                                                <img
                                                    className="w-100 p-4 rounded-md pic"
                                                    style={{ cursor: 'pointer', height: '8cm', alignItems: 'center', borderRadius: '0.7cm' }}
                                                    src={post.file || defaultImage}
                                                    alt={post.title || 'Blog post'}
                                                />
                                            </center>
                                            <div className="p-3">
                                                <h4>{post.title || 'Untitled'}</h4>
                                                <p className="fst-italic">
                                                    {post.date || 'No date'} by <span className="text-dark">
                                                        {post.PostsUser?.firstname || ''} {post.PostsUser?.lastname || ''}
                                                    </span>
                                                </p>
                                                <p className="mt-2">{post.description || 'No description available'}</p>
                                            </div>
                                            {/* <center>
                                            <div className="bg-gray-400"> <button className="bg-gray-400 border-0 p-2 m-2 rounded-md">click to view</button> </div>
                                            </center> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
