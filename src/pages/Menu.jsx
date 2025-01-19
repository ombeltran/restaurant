import React, { useState, useContext, useEffect } from 'react';
import { Botton } from "../component/ui/Botton";
import { CarContext } from "../context/SCarProvider";
import { ShoppingCar } from "../component/functional/ShoppingCar";
import { optionsMenu } from "./optionMenu";
import { Card } from "../component/ui/Card";
import {
  listDrinks,
  listHotDogs,
  listHamburger,
  listSalchipapa,
  listCombos,
  listGrill
} from "./listMenu";
import { Section } from '../component/ui/Section';

export const Menu = () => {
  const [listMenu, setListMenu] = useState([]);
  const { shopping, setShopping } = useContext(CarContext);

  // Función para precargar imágenes
  const preLoadImages = () => {
    const allImages = [
      ...listDrinks,
      ...listHotDogs,
      ...listHamburger,
      ...listSalchipapa,
      ...listCombos,
      ...listGrill
    ].map(item => item.image);

    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  useEffect(() => {
    preLoadImages();
  }, []);

  const handleBottonClick = (option) => {
    switch (option) {
      case "Bebidas":
        setListMenu(listDrinks);
        break;
      case "Perro caliente":
        setListMenu(listHotDogs);
        break;
      case "Hamburguesa":
        setListMenu(listHamburger);
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

    <div className='menu bg-gradient-to-t from-red-200 to-white'>
      <div className='h-[72px]'></div>
      <Section>
        <div className="flex mt-3 md:mt-10 ml-7 items-center p-2 md:p-4 text-xl w-[92%] gap-4">
          <h1 className="md:text-3xl font-bold text-red-700 relative">
            MENU
          </h1>
          <div className="w-24 pt-[1%] border-b-2 border-red-700"></div>
        </div>

        <div className="flex md:flex-row md:h-auto w-screen md:w-full md:mt-[10px] h-screen flex-col">
          <div className="flex flex-wrap md:flex-col w-full gap-4 md:gap-8 
    h-auto md:h-full md:w-[15%] justify-center items-center p-4 md:p-9 mt-8 md:mt-0">
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

          <div className="flex flex-wrap gap-4 w-full justify-center md:gap-2 h-auto md:w-[85%] md:pt-4">
            {listMenu.map(({ name, price, image, id }) => (
              <Card key={id} className="scale-[90%]">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-[57%] sm:h-[70%] rounded-t-2xl"
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="flex flex-col justify-between p-3 2xl:text-2xl 2xl:py-10">
                    <div>{name}</div>
                    <div className="font-normal">{formatCurrency(price)}</div>
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
      </Section>
    </div>

  );
};
