import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Payment.css';
import mtn from '../assets/images/mtn.png';
import airtel from '../assets/images/airtel.jpeg';

const PaymentForm = () => {
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [givingType, setGivingType] = useState('Donation');
    const [loading, setLoading] = useState(false); // State to track loading status

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Start loading

        try {
            const response = await axios.post('https://millacle-church-backend.onrender.com/api/v1/payment/cashin', {
                number,
                amount,
                givingType,
            });
            console.log('Payment successful:', response.data);
            // Handle success (e.g., display a success message)
        } catch (error) {
            console.error('Error making payment:', error);
            // Handle error (e.g., display an error message)
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <section>
                <div className="payment-form">
                    <h2>Type of Giving</h2>
                    <select className="session-select" value={givingType} onChange={(e) => setGivingType(e.target.value)}>
                        <option value="Donation">Donation</option>
                        <option value="Tithes">Tithes</option>
                        <option value="Construction">Construction</option>
                    </select>
                    <h3>Payment Method, We Use:</h3>
                    <div className="payment-methods">
                        <img src={mtn} alt="mtn Pay" />
                        <img src={airtel} alt="airtel pay" />
                    </div>
                    <form className="user-information" onSubmit={handleSubmit}>
                        <input
                            type="number"
                            placeholder="Telephone"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Amount to give"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Give'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default PaymentForm;
