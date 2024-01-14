import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const SCarProvider = ({ children }) => {
  const [shopping, setShopping] = useState([]);
  const [carVisible, setCarVisible] = useState(false);
  const [deliveryPrice, setDeliveryPrice] = useState("");



  return (
    <CarContext.Provider 
    value={{ 
      shopping, 
      setShopping, 
      carVisible, 
      setCarVisible,
      deliveryPrice, 
      setDeliveryPrice
    }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default SCarProvider;
