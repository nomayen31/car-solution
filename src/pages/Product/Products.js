import React, { useEffect, useState } from 'react'
import ProductsCart from '../../pages/Product/ProductsCars'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {

                    products.map(product=><ProductsCart
                        key={product._id}
                        product={product}
                    >
                    </ProductsCart>)
                    // products.map(product =><Produc
                    // key={service._id}
                    // service={service}
                    // ></ServicesCard>)
                }
            </div>
        </div>
    )

}

export default Products