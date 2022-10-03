import './App.css'
export function Header(props) {
  return (
    <header>
      
      <div className="App-logo"
        style={{ borderRadius: "5px", width: "300px", height: "150px" }}>
        <h1>Pokemon Memory Card Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>

      <div className='score'>
        <p>Max Score: 8</p>
        <p>Best Score: {props.bestScore}</p>
        <p>Current Score: {props.scoreboard}</p>
      </div>
    </header>
  );
}
