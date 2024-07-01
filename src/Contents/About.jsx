import pastor from '../assets/images/pastor.png';
import '../CSS/style.css';

const About = () => {
    return (
        <>
            <div class="about-outline">
                <div class="container-fluid  big-padding about-cover">
                    <div class="container d-flex">
                        <div class="row about-row">
                            <div class="col-md-5 ps-0 ps-lg-5 no-padding image">
                                <img src={pastor} alt="" />
                            </div>
                            <div class="col-md-7 detailat text-justify-center" >
                                <div className='aboutMi'>
                                <h1 class="fw-bold">Pastor Faustin Vuningoma</h1>
                                <h3>My dream is to unite people with one superior mission</h3>
                                <p>"I want to share a message that can transform our lives. We are called to live a life of faith,
                                    deeply rooted in the hope and love that Christ offers. Let us embrace grace and extend mercy, reflecting the
                                    heart of Jesus in all our interactions. In times of difficulty, let us draw strength from His word and courage
                                    from His promises, trusting that God’s timing is always perfect.</p>
                                <p>As we navigate our daily lives, patience and forgiveness should be our companions, reminding us of the
                                    redemption that is always within our reach. Let us worship with grateful hearts, celebrating the countless
                                    blessings God has bestowed upon us. Obedience to His word should guide our every step, acknowledging the ultimate
                                    sacrifice Jesus made for our salvation..</p>
                                <p>Let these truths permeate our hearts and minds, transforming us into reflections of Christ’s love and grace. Amen."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;