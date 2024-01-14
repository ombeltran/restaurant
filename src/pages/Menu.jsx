import React, { useState, useContext } from 'react';
import { Botton } from "../component/ui/Botton";
import { CarContext } from "../context/SCarProvider";
import { ShoppingCar } from "../component/functional/ShoppingCar";
import { optionsMenu } from "./optionMenu";
import { Card } from "../component/ui/Card";
import {
  listDrinks,
  listHotDogs,
  listHamburguer,
  listSalchipapa,
  listCombos,
  listGrill
} from "./listMenu";

export const Menu = () => {
  const [listMenu, setListMenu] = useState([]);
  const { shopping, setShopping } = useContext(CarContext);

  const handleBottonClick = (option) => {
    switch (option) {
      case "Bebidas":
        setListMenu(listDrinks);
        break;
      case "Perro caliente":
        setListMenu(listHotDogs);
        break;
      case "Hamburguesa":
        setListMenu(listHamburguer);
        break;
      case "Salchipapas":
        setListMenu(listSalchipapa);
        break;
      case "Asados":
        setListMenu(listGrill);
        break;
      case "Combos":
        setListMenu(listCombos);
        break;
      default:
        break;
    }
  };

  const handleAddToCart = (id, name, price) => {
    const existingItemIndex = shopping.findIndex(item => item.id === id);
    if (existingItemIndex !== 0) {
      setShopping((prevShopping) => [
        ...prevShopping,
        {
          id,
          name,
          qty: 1,
          price
        },
      ]);
    }
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });
  };

  return (
    <div>
      <div className="Container flex flex-col justify-center items-center">
        <div className='h-[80px]'></div>

        <div className='flex flex-row flex-wrap md:flex-nowrap gap-4 md:gap-0 
        h-[74px] w-[98%] px-5 mt-8 md:mt-0 justify-center'>
          {optionsMenu.map((option) => (
            <Botton
              key={option}
              onClick={() => handleBottonClick(option)}
              className="text-sm h-10 shadow-xl inset-0 
            bg-gradient-to-tr from-white/65 from-10% via-orange-600 via-30% to-orange-800 to-95%"
            >
              {option}
            </Botton>
          ))}
        </div>

        <div className="flex gap-6 justify-center h-screen w-[85%] px-5 pt-4 mt-20 md:mt-0">
          {listMenu.map(({ name, price, image, id }) => (
            <Card key={id}>
              <img
                src={image}
                alt={name}
                className="w-full h-[53%] md:h-[70%] rounded-t-2xl"
              />
              <div className="flex justify-between items-center pr-4 pt-4 mb-3 h-[87px] sm:h-[65px] md:h-[99px] xl:h-[61px]">
                <div className="px-3 gap-3">
                  <div>{name}</div>
                  <div className='font-normal'>{formatCurrency(price)}</div>
                </div>
              </div>
              <div
                className="flex justify-center items-center bg-black/90 rounded-b-2xl w-full h-10 cursor-pointer "
                onClick={() => {handleAddToCart(id, name, price) }}
              >
                Agregar al carrito
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ShoppingCar />
    
    </div >
  );
};
