import React from "react";
import Card from './itemcard.js';
import data from './data.js';
const Home = () => {
    // console.log(data.productData)
    return (
        <div>
            <h1 className="text-center mt-5">All Products</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item,index) => {
                      
                        return (
                            <Card
                            item={item} 
                            title={item.title} 
                            img={item.img} 
                            key={index}
                            price={item.price}
                            quantity={item.quantity}
                            />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Home;