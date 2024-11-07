import React from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';


export default function Challenges() {
    const events = [
        {
          title: "Introduction",
          subtitle: "Challenge 1",
          description:"Each member was to create a pitch stating their name and country then a fact fun about them plus a group statement of what we are to gain out of E-lab",
          alink:"Click here to view full video",
          link:"https://youtu.be/FFdn1CeNg58"     
        },
        {
          title: "Discover Africa",
          subtitle: "Challenge 2",
          description: "We were to choose a certain community if Africa and compile a video of a story that the world has not heard about by dicussing amazing facts, misconceptions, etc in any media channel format:podcast, vlogs, ...",
          alink:"Click here to view full video",
          link:"https://youtu.be/OHRul4iaL0s"   
        },
        {
          title: "Help lab",
          subtitle: "Challenge 3",
          description: "This challenge was about giving back to the society by doing any volunteer work of our choice, We chose teaching primary school children about digital literacy where we gave a lesson about how to use Ms word. We also prepared gifts for the kids as a way to encourage them.",
          alink:"Click here to view full video",
          link:"https://youtu.be/mZ56ek8KMgw"   
        },
        {
            title: "Hunt for treasure",
            subtitle: "Challenge 4",
            description:"In this challenge, we were to look for a company that adresses the problem we chose and interview the for insights. We intervied Umurava which is a platform that joins talent with employers and we learned quite a lot about the challenge that is mostly faced and how to work on them. ",
            alink:"Click here to view full video",
            link:"https://youtu.be/H_nrAZylGak"   
          },
          {
            title: "Launching our mission",
            subtitle: "challenge 5",
            description: "In this challenge we were to generate a business protoype that adresses the problem we want to solve. We ended up choosing the 'Xplore Rwanda' project which is a platform that  offers a digital gateway to experiencing Rwanda through two main services: an online marketplace and a digital travel concierge. The marketplace features authentic Rwandan crafts, art, and souvenirs with global shipping, connecting art lovers and cultural enthusiasts to the work of local artisans. The travel concierge service provides personalized travel routes, exclusive cultural experiences, and guided tours, tailored to the modern traveler seeking a deeper connection with Rwanda’s heritage. By using our platform, visitors can explore, plan, and bring home a piece of Rwanda, contributing to sustainable tourism and supporting community-based initiatives.",
            alink:"Click here to view full video",
            link:"https://youtu.be/BOH1VQ48NmA"   
          },
          {
            title: "Our digital print",
            subtitle: "Challenge 6",
            description: "We generated a website that showcased out E-lab journey.",
            alink:"Click here to view the site",
            link:""   
          },
      ];
  
    return (
        <div className="relative container mx-auto p-6 w-[85%] pt-[100px]">
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl mb-[50px]">
           E-lab Challenges
          </p>
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#001446] text-white rounded-full flex items-center justify-center font-semibold z-10">
             <FiChevronDown/>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[90%] w-[0.8px] bg-[#001446]"></div>
  
        {events.map((event, index) => (
          <div
            key={event.title}
            className={`flex w-full mb-10 items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Event Card */}
            <div
              className={`relative bg- text-gray-200 rounded-lg p-6 max-w-lg shadow-lg ${
                index % 2 === 0 ? "mr-16" : "ml-16"
              }`}
            >
              <p className="text-sm uppercase text-[#D55571] mb-2">{event.subtitle}</p>
              <h3 className="text-2xl text-[#001446] font-bold mb-4">{event.title}</h3>
              <p className='text-black'>
                {event.description}
              </p> 
              <a href={event.link} className='text-[#001446] flex pt-3 gap-1' draggable target='_blank'>
                {event.alink}  
                <FiChevronRight className='text-[#001446] self-center' size={18}/>
              </a>
            </div>
  
            {/* Number Circle (on Center Line) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#001446] text-white rounded-full flex items-center justify-center font-semibold z-10">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
       
    )
}
