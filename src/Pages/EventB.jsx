import { Link } from "react-router-dom";
import Events from "../Contents/Events";

const EvenB = () => {
    return (
        <>
            <div class="page-nav no-margin row">
                <div class="container">
                    <div class="row">
                        <h2 class="text-start">Events and Latest News</h2>
                        <ul>
                            <li> <Link to='/'><i class="bi bi-house-door"></i> Home</Link></li>
                            <li><i class="bi bi-chevron-double-right pe-2"></i> Events</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Events />
            <br /><br />
        </>
    );
}

export default EvenB;