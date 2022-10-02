import './App.css'
export function Header(props) {
  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        color: "white",
        backgroundImage: `url(' https://github.com/Tmcerlean/memory-card/blob/main/src/images/pokemon-logo.png?raw=true  ')`,
        backgroundSize:"contain",
        backgroundPositionX:"center",
         backgroundRepeat:"no-repeat",
        
        
      }}
    >
      
      <div className="App-logo"
        style={{ borderRadius: "5px", width: "300px", height: "150px" }}>
        <h1>Pokemon Memory Card Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          color: "black",
          width: "180px",
          height: "150px",
          borderRadius: "5px",
        }}
      >
        <p>Max Score: 8</p>
        <p>Best Score: {props.bestScore}</p>
        <p>Current Score: {props.scoreboard}</p>
      </div>
    </header>
  );
}
