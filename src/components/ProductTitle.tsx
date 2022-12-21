import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

const styles = require('../../02-component-patterns/styles/styles.module.css');

interface TiltleProps {
    title?:string;
    className?: string;
    style?:React.CSSProperties
}
export const ProductTitle = ({title,className,style}:TiltleProps) => {

    const { product } =useContext(ProductContext);
    return(
        <span 
        className={ `${ styles.productDescription } ${ className }` }
        style={ style }>{
            title ? title : product.title}
            </span>
    ) 
   }
   export default ProductTitle