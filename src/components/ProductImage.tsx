import { useContext } from "react";
const noImage = require('../assets/no-image.jpg'); 
import { ProductContext } from './ProductCard';
import React from "react";
const styles = require('../../02-component-patterns/styles/styles.module.css');
interface ImageProps {
     img?:string;
     className?:string;
     style?:React.CSSProperties
}

export const ProductImage = ({img,className,style}:ImageProps) => {

    const { product } =useContext(ProductContext);
    let imgToShow : string;
    if( img ){
         imgToShow =img;
    }else if(product.img){
         imgToShow = product.img;
    }else{
         imgToShow = noImage;
    }
    return(
        <img className={ `${styles.productImg} ${ className }` } src={imgToShow} alt="img" style={style}/>
    ) 
   }
   export default ProductImage