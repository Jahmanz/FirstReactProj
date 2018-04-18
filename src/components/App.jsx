import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import Ticket from './Ticket';

function App(){
  return (
    <div>
      <Header/>
      <Ticket />
      <TicketList />
    </div>
  );
}

export default App;
