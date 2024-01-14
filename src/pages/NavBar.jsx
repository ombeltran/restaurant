import React, { useContext, useState } from 'react'
import { listNavigation } from "./listNavBar";
import { Link } from "react-router-dom";
import { Botton } from "../component/ui/Botton";
import { TiShoppingCart } from "react-icons/ti";
import { CarContext } from "../context/SCarProvider";
import { TiThMenuOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import logo from "/frontPage/logo.jpeg"



export const NavBar = () => {
    const { carVisible, setCarVisible, shopping } = useContext(CarContext);
    const [isMenuOpen, setMenuOpen] = useState(false);


    const handleClick = () => {
        setCarVisible(!carVisible);
    }

    const handleMenuOpen = () => {
        setMenuOpen(!isMenuOpen);
    };

    const qtyItem = shopping.reduce((sumaItem, { qty }) => {
        return sumaItem + qty ;
    }, 0);

    return (
        <>
            <nav className=' fixed flex items-center justify-between z-50 w-full h-[72px]  
        py-1 border-b-2 shadow-md bg-white'>
                <Link to="/">
                    <img
                        className='h-16 rounded-full ml-5'
                        src={logo}
                        alt="logo"
                    />
                </Link>

                <div className='flex flex-col items-center pt-4'>
                    <label
                        htmlFor="menu"
                        onClick={handleMenuOpen}
                        className='flex justify-center w-16 mb-6 md:hidden'
                    >
                        {
                            isMenuOpen ?
                                (<FaTimes className='text-orange-700 text-4xl md:hidden' />) :
                                (<TiThMenuOutline className='text-orange-700 text-4xl md:hidden' />)
                        }

                    </label>


                    <ul className={`flex flex-col items-center justify-center md:flex-row gap-6 text-xl font-bold 
                            text-orange-700 cursor-pointer md:bg-transparent w-full md:w-0 mt-8 md:mt-0 rounded-2xl
                            ${isMenuOpen ? ('block') : ('hidden md:inline-flex')}`}
                        onClick={handleMenuOpen}
                    >
                        {listNavigation.map(({ name, path }) => (
                            <li key={name}>
                                <Link to={path}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>


                </div>

                <Botton
                    className="text-3xl h-12 w-24 px-0"
                    onClick={handleClick}
                >
                    <TiShoppingCart />
                    <p className='text-lg'>( {qtyItem} )</p>
                </Botton>
            </nav>

            {isMenuOpen ?
                (
                    <div className='absolute bg-black/[98%] w-[98%] h-[500%] z-10 top-[76px] rounded-2xl
                    bg-gradient-to-t from-black/5 to-white mx-2 md:hidden'></div>
                ) : ('')
            }

        </>
    )
}
