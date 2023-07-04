import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "오사카 소바 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [logo, setLogo] = useState("ReactBlog");
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {글제목.map(function (글) {
        return (
          <div className="list">
            <h4>
              {글}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                👍
              </span>
              {따봉}
              <button
                onClick={() => {
                  let newArray = [...글제목];
                  newArray.sort();
                  글제목변경(newArray);
                }}
              >
                List 변경
              </button>
            </h4>
            <p>7월 3일 발행</p>
            <Footer />
          </div>
        );
      })}
    </div>
  );
}

function Footer() {
  return <div>작성자 - 원장</div>;
}

export default App;
