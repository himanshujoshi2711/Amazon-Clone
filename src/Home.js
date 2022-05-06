import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/612AqhqwllL._SX3000_.jpg' alt=''/>
            <div className='home__row'>
                <Product 
                id="1"
                title="Apple iPhone 13 (128GB) - Green"
                price={73900}
                image="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX466_.jpg"
                rating={5}/>
                <Product
                id="6"
                title="DJI Tello Drone with 5MP HD Camera 720P"
                price={15499}
                image="https://m.media-amazon.com/images/I/3163-R7hrkL._SX355_.jpg"
                rating={5}/>
            </div>
            <div className='home__row'>
            <Product 
                id="3"
                title="Ryzen 5 - 3500U 14 inch Laptop "
                price={37990}
                image="https://m.media-amazon.com/images/I/71HVv3+S1vS._SX425_.jpg"
                rating={4}/>
                <Product
                id="4"
                title="Solimo Plastic Fridge Bottle Set"
                price={449}
                image="https://images-eu.ssl-images-amazon.com/images/I/417c7dB3EoL._SY300_SX300_QL70_FMwebp_.jpg"
                rating={4}/>
                <Product
                id="5"
                title="Beard Trimmer"
                price={1699}
                image="https://m.media-amazon.com/images/I/71TFLzrf5lL._SY450_.jpg"
                rating={4}/>
            </div>
            <div className='home__row'>
                <Product
                id="6"
                title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X80J (Black) (2021 Model)"
                price={103500}
                image="https://m.media-amazon.com/images/I/81P7iSxFzzS._SX425_.jpg"
                rating={5}/>
            </div>
        </div>
    </div>
  )
}

export default Home