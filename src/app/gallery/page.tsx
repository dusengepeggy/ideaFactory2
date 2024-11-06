import Image from 'next/image';
import React from 'react'
export default function Gallery() {
    const photos = [
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Golden hour serenity"
        },
        {
            url: "https://cdn.stocksnap.io/img-thumbs/280h/business-people_VIEC4IZZRI.jpg",
            description: "Vintage vibes"
        },
        {
            url: "https://static.boredpanda.com/blog/wp-content/uploads/2016/05/the-world-in-faces-project-diversity-of-the-world-through-the-portraits-of-its-people-fb.png",
            description: "Sunset beach calm"
        },
        {
            url: "https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg",
            description: "Cozy indoor corner"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Minimalist flower vase"
        },
        {
            url:"https://img.freepik.com/premium-photo/vertical-photo-low-angle-view-group-young-teenagers-holding-cell-phones_325573-714.jpg",
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
            url: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8fDA%3D",
            description: "Snowy mountain cabin"
        },
        {
            url: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8fDA%3D",
            description: "Latte art coffee"
        },
        {
            url: "https://t3.ftcdn.net/jpg/04/90/77/68/360_F_490776885_XYrKMGXOHs00vydmuyNve8YQD8l7iwZk.jpg",
            description: "Golden hour serenity"
        },
    ];



    return (
        <div className='py-[100px]'>
            <h2 className="mx-auto mt-10 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight mb-10 text-gray-950 sm:text-5xl ">
                Our Gallery
            </h2>
            <div className='w-[90%] grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 auto-rows-[300px]  gap-4 mx-auto'>

                {
                    photos.map((ele,i) => {

                        return (

                            <div key={ele.description} style={{ backgroundImage: ele.url }} className={`rounded-xl  object-fill overflow-hidden ${i==2||i==3||i==10 ?'col-span-2':''} ${i==5||i==6 ?'row-span-2':''}`}>
                                <Image src={ele.url} alt={ele.description} className='w-full h-full   object-cover' />
                                <p className='absolute -mt-[3%] ml-5 px-1 py-1 rounded-lg bg-transparent backdrop-blur-md text-black font-bold'>{ele.description}</p>
                            </div>
                        )

                    })
                }

            </div>


        </div>
    )
}
