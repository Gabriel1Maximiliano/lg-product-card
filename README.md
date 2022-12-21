# LG-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Loza Gabriel

## Ejemplo
```
import {ProductImage,ProductTitle,ProductButton} from 'aglo'
```
```
<ProductCard product={product}
              
              key={product.id}
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
```
   
  