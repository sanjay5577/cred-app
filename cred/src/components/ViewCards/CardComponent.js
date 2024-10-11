import React, { useEffect, useState } from 'react';
import Card from 'react-credit-card-payment';
import './viewCards.css'

const CardComponent = ({ cardNumberFromApi, cardHolderFromApi }) => {
  const [issuer, setIssuer] = useState('');
  const [bankName, setBankName] = useState('');

  useEffect(() => {
    if (cardNumberFromApi) {
      const bin = cardNumberFromApi.slice(0, 1); // Get the first 6 digits (BIN)
      setIssuer(determineIssuer(cardNumberFromApi));
      getBankName(bin).then((name) => setBankName(name)); // Fetch the bank name
    }
  }, [cardNumberFromApi]);

  const determineIssuer = (cardNumber) => {
    const firstDigit = cardNumber[0];

    if (firstDigit === '4') {
      return 'visa';
    } else if (firstDigit === '5') {
      return 'mastercard';
    } else if (firstDigit === '3') {
      return cardNumber.startsWith('34') || cardNumber.startsWith('37') ? 'american express' : '';
    }
    return '';
  };

  const getBankName = async (bin) => {
    // This would be a real BIN lookup API in production
    const mockBankNames = {
      '1': 'ANZ Bank',
      '2': 'Union Bank',
      '3': 'SBI Bank',
      '4': 'Chase Bank',
      '5': 'ICICI Bank',
      '6': 'Indian Bank',
      '8': 'Axis Bank',
      '7': 'Yes Bank',
      '9': 'PNB Bank',
    };
    return mockBankNames[bin] || 'Unknown Bank';
  };

  return (
    <Card
      bankName={bankName}
      cardHolder={cardHolderFromApi}
      cardNumber={cardNumberFromApi}
      issuer={issuer}
      theme="light"
    />
  );
};

export default CardComponent;