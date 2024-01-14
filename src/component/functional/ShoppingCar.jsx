import React, { useContext } from 'react';
import { CarContext } from "../../context/SCarProvider";
import ShoppingForm from "./ShoppingForm";
import { listService } from "../../pages/listMenu";


export const ShoppingCar = () => {
  const { shopping, setShopping, carVisible, deliveryPrice } = useContext(CarContext);


  const total = shopping.reduce((sumTotal, { qty, price }) => {
    return sumTotal + qty * price;
  }, 0);

  const formatCurrency = (value) => {
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });
  };

  const handleShoppingCar = (action, id) => {
    if (action === "Delete") {
      const newShopping = shopping.filter(item => item.id !== id)
      setShopping(newShopping);
    } else {
      const existingItemIndex = shopping.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        const updatedShoppingCar = [...shopping];
        if (action === 'increment') {
          updatedShoppingCar[existingItemIndex].qty += 1;
        } else if (action === 'decrement' && updatedShoppingCar[existingItemIndex].qty > 1) {
          updatedShoppingCar[existingItemIndex].qty -= 1;
        }

        setShopping(updatedShoppingCar);
      }
    }
  };

  const handleEmptyCar = () => {
    setShopping([]);
  }

  const deliveryService = listService.find(item => item.service === "Domicilio");
  const valueService = deliveryService ? deliveryService.price : 0;

  return (
    <>
      {
        carVisible ? (
          <div className='absolute flex flex-col top-[78px] right-6 w-[320px] md:w-[360px] p-3 mb-6 
          overflow-y-auto max-h-[700px] bg-white border-2 rounded-lg z-10'>
            <h1 className='font-bold text-2xl mb-3'>Articulos en compra:</h1>
            {shopping.map(({ id, name, qty, price }) => (
              <div key={id} className='bg-gray-100 mb-2 border-2 p-1'>
                <p><span className='font-bold'>Producto: </span>{name}</p>
                <div className='flex flex-row gap-2 items-center'>
                  <p><span className='font-bold'>Cantidad: </span>{qty}</p>
                  <div
                    className='flex justify-center items-center bg-black w-5 h-5 pb-1 
              ml-2 rounded-full text-white cursor-pointer'
                    onClick={() => handleShoppingCar('decrement', id)}
                  >-</div>
                  <div
                    className='flex justify-center items-center bg-black w-5 h-5 pb-1 rounded-full
               text-white cursor-pointer'
                    onClick={() => handleShoppingCar('increment', id)}
                  >+</div>
                  <div
                    className='flex justify-center items-center bg-black w-20 h-7 text-white
            rounded-full cursor-pointer'
                    onClick={() => handleShoppingCar("Delete", id)}
                  >Eliminar</div>
                </div>
                <p><span className='font-bold'>Precio: </span>{formatCurrency(price * qty)}</p>
              </div>
            ))}
            <div className='flex flex-col border-t-2 border-b-2  border-black'>
              <div className='py-3 gap-2'>
                {
                  deliveryPrice === 'yes' ? (
                    <div>
                      <div className='flex justify-between pr-10'>
                        <h3 className='font-bold text-xl'>Domicilio:</h3>
                        <h3 className='font-bold text-xl'>{formatCurrency(valueService)} </h3>
                      </div>
                      <div className='flex justify-between pr-10'>
                        <h3 className='font-bold text-xl'>Total:</h3>
                        <h3 className='font-bold text-xl'>{formatCurrency(total + valueService)} </h3>
                      </div>
                    </div>
                  ) : (
                    <h3 className='font-bold text-xl'>Total: {formatCurrency(total)} </h3>
                  )
                }
                <button
                  className='bg-black w-72 h-8 p-1 mt-2 text-white rounded-full'
                  onClick={handleEmptyCar}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>

            <ShoppingForm />
            
          </div>
        ) :
          (' ')
      }
    </>
  );
};
