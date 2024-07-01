import { Link } from "react-router-dom";
import PaymentForm from "../Payment/PaymentForm";

const Donation = () => {
    return (
        <>
            <>
                <div class="page-nav no-margin row">
                    <div class="container">
                        <div class="row">
                            <h2 class="text-start">Give</h2>
                            <ul>
                                <li> <Link to='/'><i class="bi bi-house-door"></i> Home</Link></li>
                                <li><i class="bi bi-chevron-double-right pe-2"></i> Donation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <PaymentForm />
            </>
        </>
    );
}

export default Donation;

