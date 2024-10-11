import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSnackbar } from "notistack";
import axios from "axios";
import './payBill.css'

const PayBill = () => {
  const { cardId } = useParams();  // Get cardId from route
  const [amount, setAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { enqueueSnackbar } = useSnackbar();


  const { token} = JSON.parse(localStorage.getItem('loginInfo'));

  // Handle the pay bill API call
  const handlePay = async () => {
    try {
      const res = await axios.post(`https://cred-backend-0j8t.onrender.com/v1/cards/${cardId}/pay`,{
        amount: amount
    },
    {
        headers: {
            Authorization: `Bearer ${token}` // Replace yourToken with the actual token
        }
    }
  );
      if(res.status === 200){
      // Clear amount input after successful API call
        setAmount('');
        setIsSuccess(true); // Trigger success animation
        setTimeout(() => setIsSuccess(false), 3000);  // Remove animation after 3 seconds
      }
    } catch (err) {
      console.log(err)
      if (err.response.status === 400) {
        enqueueSnackbar(`${err.response.data.message}`, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" },
        );
      }
    }

  };

  return (
    <div className="pay-bill-container">
      <h2>Pay Bill for Card ID: {cardId}</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="amount-input"
      />
      <button onClick={handlePay} className="pay-btn">Pay</button>

      {/* Show success animation */}
      {isSuccess && (
        <div className="success-animation">
          <p>Payment Successful!</p>
        </div>
      )}
    </div>
  );
};

export default PayBill;
