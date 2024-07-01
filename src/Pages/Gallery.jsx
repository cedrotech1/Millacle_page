import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../Components/loading'; 
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        try {
            const response = await axios.get('https://millacle-church-backend.onrender.com/api/v1/Posts/pics');
            if (Array.isArray(response.data.data)) {
                setPosts(response.data.data);
            } else {
                console.error("Expected an array of gallery but got:", response.data.data);
            }
        } catch (error) {
            console.error("There was an error fetching the gallery!", error);
        } finally {
            setIsLoading(false); // Set loading to false regardless of success or error
        }
    };

    const handlePostClick = (id) => {
        navigate(`/one/${id}`);
        console.log(id)
    };

    return (
        <>
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2 className="text-start">Our Gallery</h2>
                        <ul>
                            <li> <Link to='/'><i className="bi bi-house-door"></i> Home</Link></li>
                            <li><i className="bi bi-chevron-double-right pe-2"></i> Gallery</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid big-padding bg-light about-cover">
                <div className="container">
                    {isLoading ? (
                        <LoadingSpinner /> // Display loading spinner while fetching data
                    ) : (
                        <div className="row">
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <div key={index} className='col-lg-4 col-sm-6 mb-4' style={{cursor:'pointer'}} onClick={() => handlePostClick(post.id)}>
                                        <div className='blog-cover bg-white shadow-sm'>
                                            <img className='w-100' src={post.file} alt='gallery' />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <div className="card text-center p-4">
                                        <p className="fs-4">No gallery available.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Gallery;
