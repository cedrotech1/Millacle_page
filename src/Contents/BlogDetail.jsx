import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../Components/loading'; // Assuming you have a LoadingSpinner component

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    if (isNaN(id)) {
      navigate('/');
    }

    const fetchPost = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://millacle-church-backend.onrender.com/api/v1/Posts/one/${id}`, {
        });

        const data = await response.json();

        if (data.success) {
          setPost(data.data);
        } else {
          console.error('Failed to fetch post:', data.message);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loading) {
    return <LoadingSpinner />; // Display loading spinner while fetching data
  }

  return (
    <>
      {post.length > 0 ? (
        <>
          <br /> <br /> <br />
          <main id="main" className="main" style={{paddingTop:'60px'  }}>
            <section className="section">
              <div className="row">
                <div className="col-lg-6 outline-0">
                  <div className="card outline-0">
                    <div className="card-body">
                      {post.length > 0 && post[0].file !== 'null' ? (
                        <img
                          src={post[0].file}
                          alt="Post Image"
                          className="phone-1"
                          style={{ width: '100%', paddingTop: '0cm', borderRadius: '1%' }}
                        />
                      ) : (
                        <img
                          src="../assets/images/blogs/blog_default.png"
                          alt="Post Image"
                          className="phone-1"
                          style={{ width: '100%', paddingTop: '0cm', borderRadius: '1%' }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Post Information</h5>
                      {post.length > 0 && (
                        <>
                          {post[0].type === 'pic' ? (
                            <> {/* Render different content for 'pic' type */}
                              {/* Add your specific content here */}
                            </>
                          ) : (
                            <> {/* Render default content for other types */}
                              <p><strong>Title:</strong> {post[0].title}</p>
                              <br />
                              <p>
                                <strong>Description:</strong> {post[0].description}
                              </p>
                            </>
                          )}

                          <p>
                            <strong>Date:</strong> {post[0].date}, {post[0].time}
                          </p>

                          {post[0].PostsUser && (
                            <>
                              <br />
                              <h5 style={{ paddingTop: '0.5cm' }}>Posted By</h5>
                              <div className="row" style={{ paddingTop: '-1cm' }}>
                                <div className="col-2">
                                  {post.length > 0 && post[0].PostsUser.file !== null ? (
                                    <img
                                      src={post[0].PostsUser.file}
                                      alt="Post Image"
                                      className="phone-1"
                                      style={{ width: '1.8cm', paddingTop: '0cm', borderRadius: '1%' }}
                                    />
                                  ) : (
                                    <img
                                      src="../assets/img/nopic.png"
                                      alt="Post Image"
                                      className="phone-1"
                                      style={{ width: '1.8cm', paddingTop: '0cm', borderRadius: '1%' }}
                                    />
                                  )}
                                </div>
                                <div className="col-10" style={{ paddingLeft: '0cm', borderRadius: '1%' }}>
                                  <p>
                                    <strong>Names:</strong> {post[0].PostsUser.firstname} {post[0].PostsUser.lastname}
                                  </p>
                                  <p>
                                    <strong>Email:</strong> {post[0].PostsUser.email}
                                  </p>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      ) : (
        <center>
          {/* Render a message or component when no post is available */}
          <p>No post available.</p>
        </center>
      )}
      <br />
    </>
  );
}

export default Home;
