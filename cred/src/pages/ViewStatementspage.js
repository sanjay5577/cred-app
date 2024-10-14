import React from 'react';
import StatementList from '../components/ViewStatement';
import Header from '../components/common/Header';

const ViewStatementspage = () => {
  return (
    <div>
      <Header text='back' path='viewstatements'/>
      <StatementList  />
    </div>
  );
};

export default ViewStatementspage ;
