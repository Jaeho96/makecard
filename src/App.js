import React from "react";
import css from "./App.css";

function App() {
  return (
    <div className="App">
      {/* Nav-Start */}
      <div className="Nav">
        <img src="" alt="로고" className="nav-logo"></img>
        <div className="nav-item">
          <div>Home</div>
          <div>카테고리1</div>
          <div>카테고리2</div>
        </div>
      </div>
      {/* Nav-End */}

      {/* Main-Start */}
      <div className="Main">
        <div className="main-text">
          <p>지금 바로 </p>
          <p>당신만의 명함을 만들어보세요!</p>
        </div>
        <div className="main-btn"> Get Start</div>
      </div>
      {/* Main-End */}
    </div>
  );
}

export default App;
