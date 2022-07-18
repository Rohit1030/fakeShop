import React from "react";
import "./Products.css"
import Card from "../Card/Card";

export default function Products({categoryWiseData,renderedData,changeData,changeId}){
    const sortModal = document.querySelector('.sort-options');

    function openSortBy(){
        sortModal.showModal()
    }

    function closeSortBy(){
        sortModal.close()
    }
    
    return (
        <section className="products container">
            <div className="btn-container">
                {categoryWiseData.map(item => {
                    return <button className="cat-btn" 
                                   value={item.category}
                            >
                                {item.category}
                            </button>
                })}
                <div className="sort" onClick={openSortBy} onTouchStart={openSortBy}><div className="btn-content">Sort By <i class="fas fa-sort"></i></div></div>
                <div className="filter"><div className="btn-content"><i class="fas fa-filter"></i> Filter</div></div>
                <dialog className="sort-options">
                    <h2>Sort By <i class="fas fa-times" onClick={closeSortBy} onTouchStart={closeSortBy}></i></h2>
                    <div className="options-container">
                        <div className="sort-option">
                            <div className="sort-icons">
                                <i class="fas fa-rupee-sign"></i>
                                <i class="fas fa-sort-up"></i>
                            </div>
                            <div className="option-content">Price: Low to High</div>
                        </div>
                        <div className="sort-option">
                            <div className="sort-icons">
                                <i class="fas fa-rupee-sign"></i>
                                <i class="fas fa-sort-down"></i>
                            </div>
                            <div className="option-content">Price: High to Low</div>
                        </div>
                        <div className="sort-option">
                            <div className="sort-icons"><i class="far fa-star"></i></div>
                            <div className="option-content">Rating</div></div>
                    </div>
                </dialog>
            </div>
            <div className="products-container">
                {renderedData.dataArray.map(item => {
                    return <Card
                    cardId={item.id}
                    title={item.title} 
                    price={item.price}
                    image={item.image}
                    rating={item.rating.rate}
                    count={item.rating.count}
                    description={item.description}
                />
                })}
            </div>
        </section>
    );
}