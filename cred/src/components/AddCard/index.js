import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="h-screen grid place-content-center bg-indigo-300 flex absolute-center flex-col">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
        required
      />
      <form className="mt-5 grid grid-cols-1 gap-2">
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          className="col-span-2 rounded border border-2 shadow form-control"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="CardHolder Name"
          className="col-span-2 rounded border border-2 shadow form-control"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <input
          type="number"
          name="expiry"
          placeholder="Expiry date"
          pattern="\d\d/\d\d"
          className="col-span-2 rounded border border-2 shadow form-control"
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
          className="col-span-2 rounded border border-2 shadow form-control"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          required
        />
      </form>
    </div>
  );
};

export default PaymentForm;
