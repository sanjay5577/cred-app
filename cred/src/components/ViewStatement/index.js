import React, { useState} from 'react';
import { useParams , useLocation  } from 'react-router-dom';
import { useSnackbar } from "notistack";
import axios from "axios";
import './viewStatement.css'; // Assuming the CSS is in ViewStatement.css

const ViewStatement = () => {

  const { cardId } = useParams();
  const [statement, setStatement] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
   const { enqueueSnackbar } = useSnackbar();
   const location = useLocation();  // Access the passed card details
  const { cardNumber } = location.state;  // Extract cardNumber from location state

  const { token} = JSON.parse(localStorage.getItem('loginInfo'));


  const fetchStatement = async(month, year) => {
     try {
    const res = await axios.get(`https://cred-backend-0j8t.onrender.com/v1/cards/${cardId}/statements/${year}/${month}`,
  {
      headers: {
          Authorization: `Bearer ${token}` // Replace yourToken with the actual token
      }
  }
);
    setStatement( res.data);
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

  const handleView = () => {
    fetchStatement(month, year);
  };

  const handleCurrentMonth = () => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    setMonth(currentMonth);
    setYear(currentYear);
    fetchStatement(currentMonth, currentYear);
  };

  const handlePreviousMonth = () => {
    let prevMonth = new Date().getMonth();
    let prevYear = year;
    if (prevMonth === 0) {
      prevMonth = 12;
      prevYear -= 1;
    }
    setMonth(prevMonth);
    setYear(prevYear);
    fetchStatement(prevMonth, prevYear);
  };

  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const years = Array.from(new Array(10), (val, index) => new Date().getFullYear() - index);

  console.log(statement);

  return (
    <div className="page-container">
      <h1>Statement for Card Number: {cardNumber}</h1>

      <div>
        <label>
          Month:
          <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))}>
            {months.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Year:
          <select value={year} onChange={(e) => setYear(parseInt(e.target.value))}>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>

        <button onClick={handleView}>View</button>
      </div>

      <div className="button-row">
        <button onClick={handleCurrentMonth}>Current Month Statement</button>
        <button onClick={handlePreviousMonth}>Previous Month Statement</button>
      </div>

      {statement && statement.length >0 ? (
        <div>
          <h2>Statement Details</h2>
          {statement.map((transactionData, index) => (
            <div key={index} className="transaction-card">
              <p>Amount: {transactionData.transactions[0].amount}</p>
              <p>Vendor: {transactionData.transactions[0].vendor}</p>
              <p>Type: {transactionData.transactions[0].type}</p>
              <p>Category: {transactionData.transactions[0].category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No statement data available.</p>
      )}
    </div>
  );
};

export default ViewStatement;
