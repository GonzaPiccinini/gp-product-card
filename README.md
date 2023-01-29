# GP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Gonzalo Piccinini

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gp-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 6,
    maxCount: 10,
  }}
>
  {({ count, isMaxCountReached, increaseBy, reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
