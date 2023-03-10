import React, { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

export interface Props {
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({ onChange, product, value, initialValues });

  return (
    <ProductContext.Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </ProductContext.Provider>
  );
};
