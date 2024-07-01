// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../Components/loading';
import defaultImage from '../assets/images/blogs/blog_default.png';

function OneChair() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [korari, setKorari] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKorari = async () => {
      try {
        if (isNaN(id)) {
          navigate('/');
        }
        const response = await fetch(`https://millacle-church-backend.onrender.com/api/v1/Korari/one/${id}`);
        const data = await response.json();

        if (data.success) {
          setKorari(data.data);
        } else {
          // toast.error('Failed to fetch korari details');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching korari details:', error);
        // toast.error('Error fetching korari details');
        setLoading(false);
      }
    };

    fetchKorari();
  }, [id, navigate]);

  const handlePostClick = (postId) => {
    navigate(`../one/${postId}`);
  };

  const handleView = (postId) => {
    navigate(`../one/${postId}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!korari) {
    return <div>No Chorale details available</div>;
  }

  const { korari: korariDetails, allposts } = korari;
  const { event, blog, pic } = allposts;

  return (
    <>
      <br /><br />
      <main id="main" className="main">
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      {korariDetails && korariDetails.file && korariDetails.file !== 'null' ? (
                        <img
                          src={korariDetails.file}
                          alt="Korari Image"
                          className="phone-1"
                          style={{ width: '100%', paddingTop: '0.5cm', borderRadius: '1%' }}
                        />
                      ) : (
                        <img
                          src="../assets/img/nopic.png"
                          alt="Korari Image"
                          className="phone-1"
                          style={{ width: '100%', paddingTop: '0.5cm', borderRadius: '1%' }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Chorale Information</h5>
                      <p><strong>Name:</strong> {korariDetails.name}</p>
                      <p><strong>Created At:</strong> {new Date(korariDetails.createdAt).toLocaleString()}</p>
                      <br />

                      <h5>Chorale Admin</h5>
                      <div className='row' style={{ paddingTop: '-1cm' }}>
                        <div className='col-2'>
                          {korariDetails.KorariUser.file !== null ? (
                            <img
                              src={korariDetails.KorariUser.file}
                              alt="Post Image"
                              className="phone-1"
                              style={{ width: '1.8cm', paddingTop: '0cm', borderRadius: '1%' }}
                            />
                          ) : (
                            <img
                              src={defaultImage}
                              alt="Post Image"
                              className="phone-1"
                              style={{ width: '1.8cm', paddingTop: '0cm', borderRadius: '1%' }}
                            />
                          )}
                        </div>
                        <div className='col-10' style={{ paddingLeft: '0.5cm', borderRadius: '1%' }}>
                          <p><strong>Names:</strong> {korariDetails.KorariUser.firstname} {korariDetails.KorariUser.lastname}</p>
                          <p><strong>Email:</strong> {korariDetails.KorariUser.email}</p>
                        </div>
                      </div>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {event.length > 0 && (
                <section className="team bg-gray big-padding mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h2>Chorale Events</h2>
                          <p className="text-dark">Events of this chorale</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      {event.map((post, index) => (
                        <div key={index} className="col-lg-4 mb-4 col-md-4 col-sm-12" onClick={() => handleView(post.id)}>
                          <div className="team-main-box bg-white shadow-md text-center">
                            <div className="p-3">
                            <center>
                              <img
                                className="w-100 rounded-sm pic"
                                style={{ cursor: 'pointer', height: '8cm', alignItems: 'center', borderRadius: '0.1cm' }}
                                src={post.file || defaultImage}
                                alt={post.title || 'Blog post'}
                              />
                            </center>
                              <h4>{post.title || 'Untitled'}</h4>
                              {/* <div className="w-full h-48 overflow-hidden">
                                <p className="mt-2 truncate">{post.description || 'No description available'}</p>
                              </div> */}
                               <p className="mt-2 truncate">Created At: {new Date(post.createdAt).toLocaleString()}</p>
                              <div className="bg-gray-400">
                                <button className="bg-gray-400 border-0 p-2 m-2 rounded-md">click to view</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {blog.length > 0 && (
                <section className="team bg-gray big-padding mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h2>Chorale Blogs</h2>
                          <p className="text-dark">Blogs of this chorale</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      {blog.map((post, index) => (
                        <div key={index} className="col-lg-4 mb-4 col-md-4 col-sm-12" onClick={() => handlePostClick(post.id)}>
                          <div className="team-main-box bg-white shadow-md text-center">
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
                              {/* <div className="w-full h-48 overflow-hidden">
                                <p className="mt-2 truncate">{post.description || 'No description available'}</p>
                              </div> */}
                              <div className="bg-gray-400">
                                <button className="bg-gray-400 border-0 p-2 m-2 rounded-md">click to view</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {pic.length > 0 && (
                <section className="team bg-gray big-padding mt-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h2>Chorale Pics</h2>
                          <p className="text-dark">Pics of this chorale</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-4">
                      {pic.map((post, index) => (
                        <div key={index} className="col-lg-4 mb-4 col-md-4 col-sm-12" onClick={() => handleView(post.id)}>
                          <div className="team-main-box bg-white shadow-md text-center">
                            <center>
                              <img
                                className="w-100 p-4 rounded-md pic"
                                style={{ cursor: 'pointer', height: '8cm', alignItems: 'center', borderRadius: '0.7cm' }}
                                src={post.file || defaultImage}
                                alt={post.title || 'Pic post'}
                              />
                            </center>
                            <div className="p-0">
                          
                              <div className="bg-gray-400">
                                <button className="bg-gray-400 border-0 p-2 m-2 rounded-md">click to view</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default OneChair;
