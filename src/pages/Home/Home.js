import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bmw from "../../assets/bmw.png";
import ford from "../../assets/ford.png";
import benz from "../../assets/benz.png";
import rr from "../../assets/rr.png";

function Home() {
  return (
    <>
      <div className="" style={{ backgroundColor: "#C400FF" }}>
        <div className="car"></div>
        <div className="bg-gray-900">
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
          <div className="py-40 flex flex-wrap justify-around pt-64">
          <Link to="/ford">
              <div className="h-80 w-80 rounded cursor-pointer flex items-center shadow-2xl border border-opacity-10 hover:border-opacity-30">
                <img src={ford} alt="ford" />
              </div></Link>{" "}
            <Link to="/mercedes">
              <div className="h-80 w-80 rounded cursor-pointer flex items-center shadow-2xl border border-opacity-10 hover:border-opacity-30">
                <img src={benz} alt="benz" style={{ transform: "scaleX(-1)" }} />
              </div></Link>{" "}
            <Link to="/bmw">
              <div className="h-80 w-80 rounded cursor-pointer flex items-center shadow-2xl border border-opacity-10 hover:border-opacity-30">
                <img src={bmw} alt="bmw" />
              </div></Link>{" "}
            <Link to="/rr">
              <div className="h-80 w-80 rounded cursor-pointer flex items-center shadow-2xl border border-opacity-10 hover:border-opacity-30">
                <img src={rr} alt="rr" />
              </div></Link>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
