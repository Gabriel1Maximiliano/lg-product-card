

import React from 'react';
import { createContext} from 'react';
const styles = require('../../02-component-patterns/styles/styles.module.css');
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps)

export const { Provider } = ProductContext;


export interface Props {
  product:Product;
  // children?:ReactElement | ReactElement[] ;
  children: (args:ProductCardHandlers) => JSX.Element
  className?:string;
  style?:React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?:number;
  initialValues?: InitialValues;
}


   

 

export const ProductCard = ({children,product,className,style,onChange,value,initialValues}:Props) => {
   const {counter,increaseBy,maxCount,isMaxReached,reset} = useProduct( { onChange,product,value,initialValues } );

  

  return (
    <Provider value={  {counter, increaseBy, product ,maxCount}  } >
    <div className={ `${styles.productCard} ${ className } ` } style ={ style }>
    { children({
      count: counter,
      isMaxCountReached: isMaxReached,
      product,
      increaseBy: increaseBy,
      reset
    }) }
     
    </div>
    </Provider>
  )
}


