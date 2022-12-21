import React from "react";
import style from './product.module.css';

const Product = (props) => {
    const {title, price, description, catagory, image, rating} = props.product;
    return (
        <article className={style.product} >
            <img src={image} alt={catagory} />
            <span className={style.discount}>200৳ Discount on Online Order</span>
            <div className={style.details}>
                <h4>{title}</h4>
                <p className={style.detail}>Price: $ {price}</p>
                <p className={style.detail}>Rating: {rating.rate}/5</p>
                <p className={style.des}>Description: {description}</p>
                <button className={style.btn}>Add to cart</button>
            </div>
        </article>
    )
}

export default Product;