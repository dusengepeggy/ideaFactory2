"use client"
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import gallery1 from "../../../public/proto.png";
import gallery2 from "../../../public/IMG-20241107-WA0024.jpg";
import gallery4 from "../../../public/IMG-20241107-WA0026.jpg";
import gallery5 from "../../../public/IMG-20241107-WA0027.jpg";
import gallery6 from "../../../public/IMG-20241107-WA0039.jpg";
import gallery7 from "../../../public/IMG-20241107-WA0029.jpg";
import gallery8 from "../../../public/kids.png";
import g9 from "../../../public/IMG-20241107-WA0050.jpg";
import g10 from "../../../public/idea.png"
import g11 from "../../../public/kids2.png"

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url:StaticImageData , description: string } | null>(null);

  const photos = [
    { url: gallery5, description: "We be prototyping😂" },
    { url: gallery1, description: "The prototype😏😂😂😎" },
    { url: g9, description: "Meeting Umurava" },
    { url: gallery6, description: "Working non stop😌" },
    { url: gallery2, description: "😂😁😂 He be talking non-stop" },
    { url: gallery8, description: "Who knew teaching would be fun" },
    { url: g11, description: "#Teacher 😂😂😂😂" },
    { url: gallery7, description: "Le fille😁😀" },
    { url:gallery6, description: "🤳😁" },
    { url: g10, description: "Our logo 😏😏" },
    { url:gallery4, description: "👀😂😀" },
  ];

  const openModal = (photo: { url: StaticImageData, description: string }) => {
    setSelectedImage(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="py-[100px] relative">
      <h2 className="mx-auto mt-10 max-w-lg text-center text-4xl font-semibold tracking-tight mb-10 text-gray-950 sm:text-5xl">
        Our Gallery
      </h2>
      <div className="w-[90%] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 auto-rows-[300px] gap-4 mx-auto">
        {photos.map((photo, i) => (
          <div
            key={photo.description}
            className={`rounded-xl overflow-hidden cursor-pointer ${i === 2 || i === 3 || i === 10 ? 'col-span-2' : ''} ${i === 5 || i === 6 ? 'row-span-2' : ''}`}
            onClick={() => openModal(photo)}
          >
            <Image
              width={400}
              height={400}
              src={photo.url}
              alt={photo.description}
              className="w-full h-full object-cover"
            />
            <p className="absolute -mt-[3%] ml-5 px-1 py-1 rounded-lg bg-transparent backdrop-blur-md text-black font-bold">
              {photo.description}
            </p>
          </div>
        ))}
      </div>

      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md"
          onClick={closeModal}
        >
          <div className="relative max-w-[90%] max-h-[90%]  rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.url}
              alt={selectedImage.description}
              width={800}
              height={800}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center mt-4 text-white">{selectedImage.description}</p>

          </div>
        </div>
      )}
    </div>
  );
}
