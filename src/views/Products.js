import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ButtonAddToCart from '../components/ButtonAddToCart';


export default function Products (props){
    const [products, setProducts] = useState([]);
    // const [total, setTotal] = useState([]);


    useEffect(()=>{
        fetch('https://kekambas-bs.herokuapp.com//api/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // const addToCart = (e) => {
    //     e.preventDefault();
    //     const productPrice = e.target.price
    //     setTotal(productPrice);

    // }

        return (

            <div className='row'>
                <h1 className='text-center'>Products</h1>
                    {products.map(p => {
                        return (   
                                    <div className="card" style={{width: '18rem'}}>
                                        <img src={p.image} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className="card-text">{p.description}</p>
                                            <p className="card-text">${p.price}</p>
                                            <Link to="#" className="btn btn-outline-primary">Add to cart</Link>
                                            {/* <ButtonAddToCart add={addToCart} /> */}
                                            <Link to="#" className="btn btn-primary mx-2">Go to cart</Link>
                                        </div>
                                    </div>
                        )
                    })}
            </div>       




    )
}
