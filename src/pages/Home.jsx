import React from 'react';
import { Section } from "../component/ui/Section";
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Footer } from "./Footer";
import { CardInfo } from "../component/ui/CardInfo";
import { IoLogoWhatsapp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageI  from "/frontPage/hamburguer.jpeg";
import imageII from "/frontPage/hotDog.jpeg";
import imageIII from "/frontPage/salchipapa.jpeg";
import imageIV from "/frontPage/logo.jpeg";


export const Home = () => {
  AOS.init({
    duration: 1200
  });

  const images = [
    imageI,
    imageII,
    imageIII
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className='h-[72px]'></div>
      <Section className="flex flex-col lg:flex-row items-center justify-center 
      lg:h-[480px] py-8 lg:gap-28 gap-10">
        <div
          data-aos="fade-right"
          className='flex flex-col items-center justify-center scale-75 lg:scale-100  px-8 pb-4 text-justify 
         h-[328px] w-[400px] md:w-[450px] rounded-2xl shadow-xl shadow-black'
        >
          <h1 className='text-5xl font-bold text-red-600'>¡Bienvenido!</h1>
          <p className='text-3xl font-bold'>
            5ta Estacion es más que comida, es una experiencia de sabores.
            Haz tu pedido ya a la <span className='text-red-600 font-bold'>
              5ta Estación
            </span>.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className='w-[400px] md:w-[450px] h-[328px] scale-75 lg:scale-100 
          rounded-2xl shadow-xl shadow-black p-2'
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className='w-[430px] h-[308px] rounded-2xl'
                />
              </div>
            ))}
          </Slider>
        </div>
      </Section>

      <Section className="flex justify-center items-center lg:h-[780px] 
      h-[600px] w-full bg-gradient-to-t from-white to-red-600">
        <div className="flex flex-col items-center gap-12 xl:scale-[80%] 
        lg:scale-[60%] sm:scale-[50%] scale-[35%]">
          <h1 className='text-center text-6xl font-bold text-white md:mt-3'>¡Bienvenidos! El servicio es nuestro lema</h1>
          <div
            className='flex items-center justify-center w-[1275px] h-[760px] border-2 p-2
          border-gray-300 shadow-xl rounded-xl mb-6'
            data-aos="fade-down-right"
          >
            <ReactPlayer
              url='https://www.youtube.com/watch?v=4hpb5zHlu6A'
              controls
              muted
              width={1220}
              height={670}
            />
          </div>
        </div>
      </Section>

      <Section className="flex flex-col text-center justify-center md:h-[650px] h-auto gap-10 w-full">
        <h1 className='text-black/80 text-5xl mt-3 pt-11 font-bold'>ASÍ PUEDES HACER TU PEDIDO</h1>
        <div
          data-aos="fade-right"
          className='flex items-center justify-center h-full lg:gap-36 gap-12'
        >
          <CardInfo>
            <IoLogoWhatsapp className='text-green-800 md:text-9xl text-[90px] mx-auto mb-4' />
            <p className='text-3xl font-bold'>
              Haz tus pedidos con <span className='text-red-600'>What'sApp</span>
            </p>
          </CardInfo>

          <CardInfo>
            <img
              className='md:h-[120px] h-[25%] rounded-full mx-auto mb-4'
              src={imageIV}
              alt="logo"
            />
            <p className='text-3xl font-bold'>
              También desde nuestra <span className='text-red-600'>pagina web</span>
            </p>
          </CardInfo>
        </div>

        <p className='text-4xl font-bold text-black/80 pb-4'>
          Puedes pagar a través <span className='text-red-600'>Nequi Bancolombia</span>
          , o si lo deseas cuando recibas tu pedido.
        </p>
      </Section>
      <Footer />
    </div>
  );
};
