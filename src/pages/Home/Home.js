import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="car"></div>
      <div>
        <span class="scroll-btn">
          <a href="#">
            <span class="mouse">
              <span></span>
            </span>
          </a>
          <p>scroll me</p>
        </span>
      </div>
      <div className="my-40 flex flex-wrap justify-around">
        <div className="h-80 w-80 border border-black rounded"></div>
      </div>
    </>
  );
}

export default Home;
