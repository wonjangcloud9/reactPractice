import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "오사카 소바 맛집";
  let [글제목, b] = useState("여자 코트 추천");
  let [logo, setLogo] = useState("ReactBlog");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>7월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
