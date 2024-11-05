import React from 'react'
import demo from '../../../public/projectdemo.jpg'
import Image from 'next/image'
function Projects() {

    const services = [
        {
            name: "Online Marketplace for Rwandan Art and Souvenirs",
            features: {
                productRange: "Curated collections of locally made handicrafts, jewellery, textiles, coffee, and art.",
                globalShipping: "Souvenirs and products can be shipped worldwide, reducing the hassle for travellers to carry items.",
                artisanSupport: "Collaborations with local artisans to ensure fair-trade practices, quality, and authenticity in all products."
            }
        },
        {
            name: "Digital Travel Concierge",
            features: {
                personalisedRoutes: "Custom routes adjusted to user preferences such as eco-tourism, adventure, or cultural immersion.",
                experienceBookings: "Option to book local tours, eco-lodge stays, guided treks, and cultural events directly through the platform.",
                premiumTravelAssistance: "For premium subscribers, access to real-time travel support, priority bookings, and exclusive experiences."
            }
        }
    ];
    return (
        <div className="min-h-[100vh] pt-[100px] px-10 bg-[url('../../public/freepik__expand__96022.png')]  ">
            <div className="flex px-10 flex-col py-5 justify-center mx-auto my-5 max-w-4x bg-transparent backdrop-blur-lg w-[90%] shadow-md rounded-lg  text-[#333] font-[sans-serif]">
                <h2 className="mx-auto mt-10 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl ">
                    Xplore Rwanda
                </h2>
                <p></p>
                <div className='w-full mx-auto my-10 '>
                    <Image src={demo} alt='Demo' className='rounded-md w-full'></Image>
                </div>
                <div className="mt-6 mb-4">
                    <h3 className="font-semibold uppercase tracking-widest text-[#001446] mb-2">Our aim</h3>
                    <p className="text-sm leading-relaxed">
                    Xplore Rwanda aims to blend technology, culture, and community in a way that transforms tourism into a sustainable, enriching experience, empowering local artisans while offering the world a taste of Rwanda’s beauty.
                    </p>
                </div>
                <hr />
                <div className="mt-6 mb-4">
                    <h3 className=" font-semibold uppercase tracking-widest text-[#001446] mb-2">Overview</h3>
                    <p className="text-sm leading-relaxed">
                        Our platform, will offer a digital gateway to experiencing Rwanda through two main services: an online marketplace and a digital travel concierge. The marketplace features authentic Rwandan crafts, art, and souvenirs with global shipping, connecting art lovers and cultural enthusiasts to the work of local artisans. The travel concierge service provides personalized travel routes, exclusive cultural experiences, and guided tours, tailored to the modern traveler seeking a deeper connection with Rwanda’s heritage. By using our platform, visitors can explore, plan, and bring home a piece of Rwanda, contributing to sustainable tourism and supporting community-based initiatives.
                    </p>
                </div>
                <hr />
                <div className="mt-6 mb-4">
                    <h3 className="  font-semibold uppercase tracking-widest text-[#001446] mb-2">What we offer</h3>
                    <div className="container  p-6 space-y-8">
                        {services.map((service, index) => (
                            <div key={index} >
                                <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                                <ul className="space-y-3 text-sm pl-5">
                                    {Object.entries(service.features).map(([key, feature], i) => (
                                        <li key={key} className="flex items-start">
                                            <span className="text-[#001446] mr-3">•</span>
                                            <p>{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
              



            </div>
        </div>
    )
}

export default Projects