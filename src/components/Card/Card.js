import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props){
    function handleClick(){
        const isData = localStorage.getItem('currentData');
        if(isData !== null){
            var tempId = JSON.parse(localStorage.getItem('currentData'));
            if(tempId !== props.cardId){
                localStorage.setItem('currentData', JSON.stringify(props));
            }
        }
        else {
            localStorage.setItem('currentData', JSON.stringify(props));
        }
    }
    
    return (
        <Link to="/product-details" target="_blank" className="Link" onClick={handleClick}>
            <div className="card">
            <div className="image-container">
                <img src={props.image} alt="" className="item-image" />
            </div>
            <div className="product-detail">
                <div className="rate-count-wish">
                    <div className="rate-count"><span className="rating">{props.rating}</span><i class="fas fa-star"></i> | {props.count}</div>
                    <div className="wish"><i class="far fa-heart"></i></div>
                </div>
                <h3>{props.title}</h3>
                <h2>Rs. {props.price}</h2>
            </div>
        </div>
        </Link>
    );
}