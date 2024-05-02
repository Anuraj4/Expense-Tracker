import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(){
    
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text"
            value={name}
            onChange={ev => setName(ev.targetvalue)}
            placeholder={'+200 new samsung TV'} />
          <input value={datetime}
            onChange={ev => setDateTime(ev.target.value)}
            type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" value={description}
              onChange={ev => setDescription(ev.target.value)}
            placeholder={'decription'} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red" >
              -$600
            </div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New Onida TV</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green" >
              +$500
            </div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New LG TV</div>
            <div className="description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red" >
              -$400
            </div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
