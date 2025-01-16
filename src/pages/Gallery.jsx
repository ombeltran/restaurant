import React, { useEffect } from 'react';
import { Section } from '../component/ui/Section';

export const Gallery = () => {
  const imagesList = [
    { path: "/frontPage/chef.jpg" },
    { path: "/frontPage/food.jpg" },
    { path: "/frontPage/lobby.jpg" },
    { path: "/frontPage/manyPeople.jpg" },
    { path: "/frontPage/ourFood.jpg" },
    { path: "/frontPage/people.jpg" }
  ];

  const preLoadImages = () => {
    imagesList.forEach((image) => {
      const img = new Image();
      img.src = image.path;
    });
  };

  useEffect(() => {
    preLoadImages();
  }, []);

  return (
    <div className='pt-[10px] pb-10 md:pb-0 h-fit xl:h-screen bg-gradient-to-t from-red-200 to-white'>
      <div className="h-[72px]"></div>
      <Section className="h-full">
        <div className="flex flex-row mx-auto items-center p-4 text-xl w-[92%] gap-4">
          <h1 className="md:text-3xl font-bold text-red-700 relative">
            GALLERY
          </h1>
          <div className="w-24 pt-[1%] border-b-2 border-red-700"></div>
        </div>
        <h2 className="flex flex-row mx-auto items-center p-4 mb-4 text-3xl w-[92%] font-bold text-red-700">
          See our restaurant
        </h2>
        <div className='flex flex-wrap justify-center mx-auto min-w-[80%] h-[25%]'>
          {
            imagesList.map((image, index) => {
              return (
                <div key={index} className="flex w-[400px]">
                  {/* Usando loading="lazy" para mejorar el rendimiento */}
                  <img
                    src={image.path}
                    alt="gallery"
                    className="w-[400px]"
                    loading="lazy"
                  />
                </div>
              )
            })
          }
        </div>
      </Section>
    </div>
  );
};
