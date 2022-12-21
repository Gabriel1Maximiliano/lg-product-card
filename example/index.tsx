import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const noImage = require('../assets/no-image.jpg'); 
import {ProductImage,ProductTitle,ProductButton, ProductCard} from '..'
const product1={
  id:'123asb',
  title:'Coffe Card1',
  img:noImage
}
const App = () => {
  return (
    <>
     <ProductCard product={product1}
              
              initialValues={{count:4,maxCount:10}}
             >
        {
          ({count,
            isMaxCountReached,
            product,
            increaseBy,
            reset}) => (
                 <>
            
              <ProductImage  />
               <ProductTitle />
              <ProductButton  />
            </>
          )
        }
</ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
