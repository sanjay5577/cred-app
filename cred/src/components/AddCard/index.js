import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";
import { useSnackbar } from "notistack";
import './addCard.css'

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const {userid , token} = JSON.parse(localStorage.getItem('loginInfo'));

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleAddCard =async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.post('https://cred-backend-0j8t.onrender.com/v1/cards',{
        userId: userid,
        cardNumber: state.number,
        expiryDate: state.expiry.slice(0, 2) + '/' + state.expiry.slice(2),
        nameOnCard: state.name,
        cvv: state.cvc
    },
    {
        headers: {
            Authorization: `Bearer ${token}` // Replace yourToken with the actual token
        }
    }
  );
      if(res.status === 201){
      enqueueSnackbar("Card Added successfully", { variant: "success" });
      setState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
      });
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

  }

  return (
    <div className="flex absolute-center flex-col full-container">
      <h1 className="addcard-title">Add Card</h1>
      <div className="card-form-container">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className="flex flex-col form-container" onSubmit={handleAddCard}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          className="input-field"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="CardHolder Name"
          className="input-field"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
           required
        />


        <input
          type="number"
          name="expiry"
          placeholder="Expiry date"
          pattern="\d\d/\d\d"
          className="input-field"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />

        <input
          type="number"
          name="cvc"
          placeholder="CVV"
          pattern="\d{3,4}"
          className="input-field"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
   
        <button type="submit" className="submit-card">Submit</button>
      </form>
        </div>
    </div>
  );
};

export default PaymentForm;
