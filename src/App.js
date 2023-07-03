import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "오사카 소바 맛집";

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <h4
        style={{
          fontSize: "30px",
        }}
      >
        {post}
      </h4>
    </div>
  );
}

export default App;
