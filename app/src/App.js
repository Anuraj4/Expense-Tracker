import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={'+200 new samsung TV'} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={'decription'} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className = "name">New Samsung TV</div>
            <div className = "description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className = "price red" >
              -$600
            </div>
            <div className = "datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className = "name">New Onida TV</div>
            <div className = "description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className = "price green" >
              +$500
            </div>
            <div className = "datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className = "name">New LG TV</div>
            <div className = "description">It was time for new tv</div>
          </div>
          <div className="right">
            <div className = "price red" >
              -$400
            </div>
            <div className = "datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
