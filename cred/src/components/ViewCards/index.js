import React, { useEffect, useState } from 'react';
import { CircularProgress } from "@mui/material";
import CardComponent from './CardComponent.js'
import { useNavigate ,Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import './viewCards.css'




const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  const {userid , token} = JSON.parse(localStorage.getItem('loginInfo'));

  useEffect(() => {
    // Fetch the cards when the component mounts
    const getCards = async () => {
      try {
        setLoading(true);
        const cardData = await fetchCardsForUser(); // Use token instead of userid
        setCards(cardData); // Set the list of cards in the state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    
      getCards(); // Call the function if token is available
    
  }, []); // Fetch cards whenever the token changes



  // Mock API call to fetch cards based on token
const fetchCardsForUser = async () => {
  
  try {
    const res = await axios.get(`https://cred-backend-0j8t.onrender.com/v1/cards/${userid}`,
  {
      headers: {
          Authorization: `Bearer ${token}` // Replace yourToken with the actual token
      }
  }
);
    return res.data;
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



  const handleViewStatement = (cardId , cardNumber) => {
    // Navigate to the ViewStatement page with cardId as a URL parameter
    navigate(`/view-statement/${cardId}` , { state: { cardNumber : cardNumber } });
  };


  return (
    <div  className='flex absolute-center flex-col  max-width'>
      <h1>Credit Cards</h1>
      <div className='flex  absolute-center cardsContainer'>
        { loading ? <CircularProgress /> : 
        
        (cards && cards.length > 0 ? (
          cards.map((card, index) => (
          <div className='card-box'>
          <div className='card-number'>{index+1}</div>
            <CardComponent
              key={index}
              cardNumberFromApi={card.cardNumber}  // Assuming the API returns cardNumber
              cardHolderFromApi={card.nameOnCard} // Assuming the API returns cardHolder
            />
            <div className='card-item view-statement' onClick={() => handleViewStatement(card._id , card.cardNumber)}>View Statement</div>
            {card.outstandingAmount === 0 ? 
            <div className='card-item'>Fully Paid</div> :
            <div className='card-item flex'>
              <div>Bill Amount :  ₹{card.outstandingAmount}</div>
              <div  className='pay-bill'>
              <Link
            to={{
              pathname: `/pay/${card._id}`,
            }}
            state={{ cardNumber: card.cardNumber }}  // Pass card number as state
          >
            Pay Bill
          </Link></div>
            </div>
            }
            </div>
          ))
        ) : (
          <p>No cards available for this user.<Link className="header-nav-item" to="/addcard">Add Card</Link></p>
        ))}
      
      
        </div>
    </div>
  );
};



export default CardsList;
