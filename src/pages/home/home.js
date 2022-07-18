import React from 'react';
// import './home.css';
// import NavBar from './components/NavBar/NavBar';
// import image from "../src/images/hero.png"
// import Products from './components/Products/Products';
import NavBar from '../../components/NavBar/NavBar';
import image from "../../images/hero.png";
import Products from '../../components/Products/Products';
import "./home.css"

function Home() { 
  const [data , setData] = React.useState(
    {
      category: '',
      dataArray: []
    }
  );

  const arr = [];
  
  if(data.dataArray.length !== 0){
    let tempAll = {
      'category': data.category,
      'catArr': [...data.dataArray]
    }
    arr.push(tempAll);
    data.dataArray.forEach(function(item,index){
      if(index === 0){
        let temp = {
          'category': item.category,
          'catArr': [{...item}]
        }
        arr.push(temp);
      }
      else {
        var catIndex;
        let returnValue = arr.find((currItem,i) => {
          catIndex = i;
          return item.category === currItem.category
        });
        if(returnValue !== undefined){
          arr[catIndex].catArr.push(item);
        }
        else {
          let tempCategory = {
            'category': item.category,
            'catArr': [{...item}]
          }
          arr.push(tempCategory);
        }
      }
    })
  }

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((jsonData) => setData(
      {
        category: 'all',
        dataArray: jsonData
      }
    ))
  }, []);

  return (
    <div className="Home">
      <NavBar />
      <section className='hero-section container'>
        <div className="hero-content">
          <h1>Buy Your Favourite Products</h1>
          <p className='hero-para'>Explore the things you want a very low cost. Get the experience of our preminum service.</p>
          <p className='hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquid.</p>
          <button className="explore">Explore<i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
        <div className="hero-image">
          <img src={image} alt="" id='hero' />
        </div>
      </section>
      <Products
        categoryWiseData = {arr}
        renderedData = {data}
        changeData = {setData} 
      />
    </div>
  );
}

export default Home;
