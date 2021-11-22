//NETFILX P-1 USING custom ELEMENTS like Card and propss
import React from "react";
import './index copy.css';
function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="my pic" className="card_img"></img>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>WATCH NOW</button>
            </a>
          </div>
        </div>
      </div>
    </>
    )
  }
export default Card;


