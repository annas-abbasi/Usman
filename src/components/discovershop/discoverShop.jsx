'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils';

export default function DiscoverShop() {
    const ItemData = [
        { id: 0, text: "0-9" },
        { id: 1, text: "A" },
        { id: 3, text: "B" },
        { id: 4, text: "C" },
        { id: 5, text: "D" },
        { id: 6, text: "E" },
        { id: 7, text: "F" },
        { id: 8, text: "G" },
        { id: 9, text: "H" },
        { id: 10, text: "I" },
        { id: 11, text: "J" },
        { id: 12, text: "K" },
        { id: 13, text: "L" },
        { id: 14, text: "M" },
        { id: 15, text: "N" },
        { id: 16, text: "O" },
        { id: 17, text: "P" },
        { id: 18, text: "Q" },
        { id: 19, text: "R" },
        { id: 20, text: "S" },
        { id: 21, text: "T" },
        { id: 22, text: "U" },
        { id: 23, text: "V" },
        { id: 24, text: "W" },
        { id: 25, text: "X" },
        { id: 26, text: "Y" },
        { id: 27, text: "Z" }
    ];

    const ShopData = [
        { id: 0, img: '/assets/images/apc.png', text: 'APC' },
        { id: 1, img: '/assets/images/aarke.jpg', text: 'Ark' },
        { id: 2, img: '/assets/images/ab&f.jpg', text: 'Abercrombie & Flitch' },
        { id: 3, img: '/assets/images/ay.png', text: 'About you' },
        { id: 4, img: '/assets/images/acer.webp', text: 'Acer' },
        { id: 5, img: '/assets/images/acne.jpg', text: 'Acne Studio' },
        { id: 6, img: '/assets/images/aco.png', text: 'ACO' },
        { id: 7, img: '/assets/images/addnature.png', text: 'Addnature' },
        { id: 8, img: '/assets/images/adelberg.jpg', text: 'Adelberg' },
        { id: 9, img: '/assets/images/adidas.jpg', text: 'Adidas' },
        { id: 10, img: '/assets/images/adoore.jpg', text: 'Adore' },
        { id: 11, img: '/assets/images/afound.png', text: 'Afound' },
        { id: 12, img: '/assets/images/aliexpress.jpg', text: 'AliExpress' },
        { id: 13, img: '/assets/images/alessi.jpg', text: 'Alessi' },
        { id: 14, img: '/assets/images/alcon.png', text: 'Alcon' },
    ];

    const [isSticky, setIsSticky] = useState(false);
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { rootMargin: "-100px 0px 0px 0px" }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <main className='flex flex-col w-full'>
                <div className='flex my-6 flex-col w-full'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent className={cn("px-10 space-x-6")}>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Presents</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="md:p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Free samples</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Electronics</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">TV</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Barbecues</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Shoes</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Coupons</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Smartphones & Mobile Phone</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Robot vacuum cleaner</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Cloths</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Body care</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Garden</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Jackey</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Perfumes</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Travel</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Economy</p>
                                </div>
                            </CarouselItem>

                            <CarouselItem className={cn("px-5 flex items-center py-2 bg-gray-100 border-0 cursor-pointer hover:bg-gray-200 transition-all duration-200 rounded-md w-fit ")}>
                                <div className="p-1">
                                    <p className="text-sm md:text-base font-semibold text-gray-800">Furniture</p>
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                        <CarouselPrevious className={cn("-left-4")} />
                        <CarouselNext className={cn("-right-4")} />
                    </Carousel>
                </div>
                <section ref={sectionRef} className='border-b-2 border-gray-200 pb-4'>
                    <div className='flex flex-col gap-5'>
                        <div className='space-y-4 text-center'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-gray-800 leading-[50px]'>
                                Shops
                            </h3>
                            <p className='text-gray-500'>Discover exclusive offers from popular stores! Shop smart, save big</p>
                        </div>
                        <div ref={stickyRef} className={`flex flex-wrap items-center gap-3 transition-all duration-150 ${isSticky ? 'fixed top-24 py-4 left-0 w-full border-b border-t border-gray-200 bg-white shadow-md z-50 px-8 transition-opacity duration-300 opacity-100' : 'opacity-1'}`}>
                            <p className='text-gray-900 font-semibold text-xl'>Go directly to:</p>
                            {ItemData.map((e, i) => (
                                <div className='flex items-center gap-2 ' key={i}>
                                    <p
                                        className='flex text-gray-800 font-semibold text-lg cursor-pointer ml-3 hover:text-blue-600'
                                        onClick={() => handleScroll(e.text)}
                                    >
                                        {e.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-wrap items-center gap-4'>
                            <p className='text-gray-900 font-semibold text-xl'>Sort by:</p>
                            <div className='flex flex-wrap items-center gap-6'>
                                <p className='text-gray-800 text-base cursor-pointer hover:text-blue-600'>Popularity</p>
                                <p className='text-gray-800 text-base cursor-pointer hover:text-blue-600'>Alphabetical Order</p>
                                <p className='text-gray-800 text-base cursor-pointer hover:text-blue-600'>Recently Added</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='space-y-4'>
                    {ItemData.map((e, i) => (
                        <div key={i} className='border-b-2 border-gray-200 mt-6'>
                            <h2 className='thisTag text-2xl md:text-4xl text-gray-500 font-semibold' id={e.text}>{e.text} </h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center'>
                                {ShopData.map((item, index) => (
                                    <div key={index} className='flex items-center flex-wrap gap-4 cursor-pointer h-24'>
                                        <Image src={item.img} width={90} height={40} objectFit='contain' alt='Image' className='fit' />
                                        <h3 className='text-gray-800 font-semibold text-lg'>{item.text}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
}
