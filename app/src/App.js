import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDateTime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        price,
        name: name.substring( price.length + 1),
        description,
        datetime
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(json => {
      setName('');
      setDateTime('');
      setDescription('');

      console.log('result', json);
    }).catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }


  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 new samsung TV'}
          />
          <input
            value={datetime}
            onChange={ev => setDateTime(ev.target.value)}
            type="datetime-local"
          />
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$600</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Onida TV</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price green">+$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New LG TV</div>
            <div className="description">It was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
