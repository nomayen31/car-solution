import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ProductsCars = ({product}) => {
    const {img, price, title} = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price $:{price}</p>
                    <div className="card-actions justify-end">
                        <button className="text-3xl text-blue-600 "><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCars