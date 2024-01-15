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

        <div className='flex flex-row flex-wrap md:flex-nowrap gap-4 md:gap-8 
        h-[74px] w-[98%] px-5 mt-8 md:mt-0 justify-center'>
          {optionsMenu.map((option) => (
            <Botton
              key={option}
              onClick={() => handleBottonClick(option)}
              className="text-sm h-10 shadow-xl inset-0 bg-gradient-to-tr from-white/65 
              from-10% via-red-600 via-30% to-red-800 to-95% w-[104px] md:w-28"
            >
              {option}
            </Botton>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 md:gap-2 h-auto w-[85%] pt-4 mt-20 md:mt-0">
          {listMenu.map(({ name, price, image, id }) => (
            <Card key={id}>
              <img
                src={image}
                alt={name}
                className="w-full h-[57%] sm:h-[70%] rounded-t-2xl"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col justify-between p-3 2xl:text-2xl 2xl:py-10">
                  <div>{name}</div>
                  <div className='font-normal'>{formatCurrency(price)}</div>
                </div>

                <div
                  className="flex justify-center items-center bg-black/90 
                  rounded-b-2xl w-full h-12 cursor-pointer 2xl:text-2xl 2xl:h-14 px-4"
                  onClick={() => { handleAddToCart(id, name, price) }}
                >
                  Agregar al carrito
                </div>
              </div>

            </Card>
          ))}
        </div>
      </div>

      <ShoppingCar />

    </div >
  );
};
