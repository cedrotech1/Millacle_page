import { Link } from "react-router-dom";
import Blogs from "../Contents/Blogs";

const BlogsB = () => {
    return (
        <>
            <div class="page-nav no-margin row">
                <div class="container">
                    <div class="row">
                        <h2 class="text-start">Our Blog</h2>
                        <ul>
                            <li> <Link to='/'><i class="bi bi-house-door"></i> Home</Link></li>
                            <li><i class="bi bi-chevron-double-right pe-2"></i> Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Blogs />
            <br /> <br />
        </>
    );
}

export default BlogsB;