import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Components/loading'; // Assuming you have a LoadingSpinner component
import defaultImage from '../assets/images/blogs/blog_default.png';
import { Link } from 'react-router-dom';

const Team = () => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://millacle-church-backend.onrender.com/api/v1/Korari/');
            if (Array.isArray(response.data.data)) {
                setGallery(response.data.data);
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
        navigate(`/choir/${id}`);
    };

    return (
        <section className="team bg-gray big-padding mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Meet our choirs</h2>
                            <p className="text-dark">Uplifting Voices: Celebrating the Harmony and Spirit of Our Church Choir</p>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <LoadingSpinner /> // Display a loading spinner while data is being fetched
                ) : (
                    <div className="row mt-4">
                        {gallery.length > 0 ? (
                            gallery.map((post, index) => (
                                <div key={index} className="col-lg-4 mb-4 col-md-4 col-sm-12" onClick={() => handlePostClick(post.id)}>
                                    <div className="team-main-box bg-white shadow-md text-center">
                                        <img
                                            className="te w-100 p-4 rounded-md"
                                            style={{ cursor: 'pointer', height:'9cm', alignItems:'center', borderRadius:'0.7cm' }}
                                            src={post.file || defaultImage}
                                            alt={post.name || 'Blog post'}
                                        />
                                        <div className="team-content-box">
                                            <h3 className="fw-bolder mt-3 fs-4 mb-0">{post.name}</h3>
                                            <p className="pb-3">Created on {new Date(post.updatedAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="bg-gray-400"> <button className="bg-gray-400 border-0 p-2 m-2 rounded-md">click to view</button> </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Choir available</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Team;
