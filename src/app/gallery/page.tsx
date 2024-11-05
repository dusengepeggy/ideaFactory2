import React from 'react'

export default function Gallery() {
    const photos = [
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Golden hour serenity"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Vintage vibes"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Sunset beach calm"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Cozy indoor corner"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Minimalist flower vase"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Misty forest walk"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Warm vintage tones"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Rooftop sunset glow"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Snowy mountain cabin"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Latte art coffee"
        }
    ];



    return (
        <div className='py-[100px]'>
            <h2 className="mx-auto mt-10 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight mb-10 text-gray-950 sm:text-5xl ">
                Our Gallery
            </h2>
            <div className='w-[90%] grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 auto-rows-[300px]  gap-4 mx-auto'>

                {
                    photos.map((ele) => {

                        return (

                            <div key={ele.description} style={{ backgroundImage: ele.url }} className={`rounded-xl  object-fill overflow-hidden`}>
                                <img src={ele.url} alt={ele.description} className='w-full h-full   object-cover' />
                                <p className='absolute -mt-[3%] ml-5 px-1 py-1 rounded-lg bg-transparent backdrop-blur-md text-black font-bold'>{ele.description}</p>
                            </div>
                        )

                    })
                }

            </div>


        </div>
    )
}
