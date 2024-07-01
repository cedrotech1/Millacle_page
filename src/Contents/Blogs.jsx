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
    const [currentPage, setCurrentPage] = useState(1); // State to track current page
    const [totalPages, setTotalPages] = useState(1); // State to track total pages
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, [currentPage]); // Reload posts when currentPage changes

    const fetchPosts = async () => {
        setLoading(true); // Set loading to true when fetching new data
        try {
            const response = await axios.get(`https://millacle-church-backend.onrender.com/api/v1/Posts/blogs?page=${currentPage}`);
            if (response.data && response.data.data) {
                setPosts(response.data.data);
                setTotalPages(response.data.totalPages);
            } else {
                console.error("Expected data in response but got:", response.data);
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

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="blog-outline">
            <div className="container-fluid big-padding about-cover">
                <div className="container">
                    <div className="section-title bg-white row mb-3">
                        <h2 className="fw-bolder">Our Posts</h2>
                        <p>Empowering Faith Through Inspiring Church Posts and Spiritual Guidance</p>
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
                                                    style={{ cursor: 'pointer', height: '500px', alignItems: 'center', borderRadius: '0.7cm' }}
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
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pagination">
                                <button className="btn btn-primary me-2" onClick={handlePrevPage} disabled={currentPage === 1}>
                                    Previous
                                </button>
                                <button className="btn btn-primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
