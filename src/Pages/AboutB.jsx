import { Link } from "react-router-dom";
import About from "../Contents/About";

const AboutB = () => {
    return (
        <>
            <div class="page-nav no-margin row">
                <div class="container">
                    <div class="row">
                        <h2 class="text-start">About Us</h2>
                        <ul>
                            <li> <Link to='/'><i class="bi bi-house-door"></i> Home</Link></li>
                            <li><i class="bi bi-chevron-double-right pe-2"></i> About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <About />
        </>
    );
}

export default AboutB;