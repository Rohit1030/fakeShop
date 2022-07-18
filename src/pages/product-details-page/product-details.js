import React from "react";
import "./product-details.css";

export default function ProductDetails(){
    const [dataDetails, setDataDetails] = React.useState({
        cardId: 0, 
        title: '', 
        description: '', 
        rating: 0, 
        count: 0, 
        price: 0, 
        image: ''
 
    })
    React.useEffect(() => {
        const isData = localStorage.getItem('currentData');
        if(isData !== null){
            const tempData = JSON.parse(localStorage.getItem('currentData'));
            setDataDetails({
                ...tempData
            });
        }
        else {
            console.log("Data Not Found");
        }
    }, [])
    return (
        <>
        {dataDetails.cardId !== 0 && <div className="details-container">
            <div className="detail-img-container">
                <img src={dataDetails.image} alt="" className="detail-img" />
                <div className="detail-wish"><i className="far fa-heart"></i></div>
            </div>
            <div className="detail-content">
                <div className="detail-title">{dataDetails.title}</div>
                <div className="detail-rate-count">{dataDetails.rating}<i class="fas fa-star"></i> | {dataDetails.count}</div>
                <p className="description">{dataDetails.description}</p>
                <h1 className="detail-price">Rs. {dataDetails.price}</h1>
                <div className="detail-btns">
                    <button className="buy btn-style">Buy Now</button>
                    <button className="add-to-cart btn-style">Add To Cart <i className="fas fa-shopping-cart"></i></button>
                </div>
            </div>
        </div>}
        </>
    );
}