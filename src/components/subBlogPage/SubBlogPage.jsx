import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function SubBlogPage() {
    return (
        <>
            <main className='py-5'>
                <div className='flex items-center cursor-pointer'>
                    <Image src='/assets/images/ad.jpg' alt='Advertisement' width={30} height={30} />
                    <h1 className='font-bold text-xl text-gray-800'>Go back to all buying guides.</h1>
                </div>
                <div className='flex gap-6 md:mt-10 mt-6 md:flex-row flex-col'>
                    <section className='md:w-[95%] lg:[w-90%] w-[100%] mx-auto'>
                        <div className='bg-white rounded-md py-4 px-8'>
                            <Button variant={'outline'} size={'sm'} className='mt-3'>Health & beauty</Button>
                            <div className='mt-6 flex flex-col gap-4'>
                                <h3 className='text-2xl text-gray-800 font-bold'>WHAT IS THE BEST SUNSCREEN?</h3>
                                <p className='text-gray-600 text-base'>When it comes to choosing the best sunscreen, it can be confusing to know where to start. There are lots of sprays, creams, lotions and mousses. For my part, I want my sunscreen to have a high SPF value (sun protection factor), it should be absorbed quickly, fit well under make-up and not leave a white film (also called white cast) on the face.</p>
                                <p className='text-gray-600 text-base'>Regardless of the sunscreen you choose, it is very important to apply enough cream and to reapply often, especially after swimming or sweating. But keep in mind that sunscreen is not the only way to protect your skin from the sun's harmful rays. Limiting time in the sun, wearing protective clothing and sunglasses is important to reduce the risk of sun damage.</p>
                                <p className='text-gray-600 text-base'>Sunscreen not only protects against skin cancer, but is also the best product to counteract wrinkles and early aging.</p>
                                <p className='text-gray-600 text-base'>So it's about finding a balance between enjoying the sun and taking care of your skin at the same time. So make sure you have fun in the sun, but don't forget to take care of yourself too!</p>
                            </div>
                            <div className='mt-6 flex flex-col gap-4'>
                                <h3 className='text-xl text-gray-800 font-bold'>What is best sunscreen for the face?</h3>
                                <p className='text-gray-600 text-base'>Do you have to wear a special sunscreen for your face? You might think it's skin like skin, but the fact is that the skin on the face is thinner and more sensitive than the rest of the body. When choosing sunscreen for your face, choose one with as high an SPF as possible and one that is fragrance-free.</p>
                            </div>
                            <div className='mt-6 flex flex-col gap-4'>
                                <h3 className='text-xl text-gray-800 font-bold'>Here are 3 great sunscreens for the face:</h3>
                                <ul>
                                    <ol className='text-gray-600 text-sm mb-2'>Anthelios UVMune 400 Invisible Fluid SPF50+</ol>
                                    <ol className='text-gray-600 text-sm mb-2'>EVY Daily Defense Face Mousse SPF50</ol>
                                    <ol className='text-gray-600 text-sm mb-2'>Garnier Ambre Solaire Anti Dark Spots Super UV SPF 50+</ol>
                                </ul>
                            </div>
                            <div className='mt-6 flex flex-col gap-4'>
                                <h3 className='text-xl text-gray-800 font-bold'>What is the best sunscreen for the body?</h3>
                                <p className='text-gray-600 text-base'>Although the skin on the body is more resistant, it is also important there to have a high SPF and to lubricate often. Especially on exposed areas such as cleavage, shoulders and upper back. For the body, there are sunscreens with the loveliest of scents. Why not one that smells like tropical coconut?</p>
                            </div>
                            <div className='mt-6 flex flex-col gap-4'>
                                <h3 className='text-xl text-gray-800 font-bold'>Here are 3 great sunscreens for the face:</h3>
                                <ul>
                                    <ol className='text-gray-600 text-sm mb-2'>Anthelios UVMune 400 Invisible Fluid SPF50+</ol>
                                    <ol className='text-gray-600 text-sm mb-2'>EVY Daily Defense Face Mousse SPF50</ol>
                                    <ol className='text-gray-600 text-sm mb-2'>Garnier Ambre Solaire Anti Dark Spots Super UV SPF 50+</ol>
                                </ul>
                            </div>
                            <p className='text-gray-500 text-base mt-6'>Remember! Apply enough product and reapply often to avoid sun damage.</p>

                            <div className='border-t border-gray-300 flex items-center gap-4 mt-6' style={{ paddingBlockStart: '20px' }}>
                                <Image src='/assets/images/dealcard1.png' alt='Advertisement' width={60} height={60} className='rounded-full border-[2px] border-gray-800' />
                                <div className=''>
                                    <h5 className='font-semibold text-gray-800'>Malin</h5>
                                    <p className='text-gray-600 text-sm'>DealGuru-Malin</p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-24'>
                            <p className='text-gray-500 text-base mt-6 mb-4'>What do you think?</p>
                            <div className='bg-white rounded-md flex items-center py-4 px-6 gap-3'>
                                <Image src='/assets/images/dealcard1.png' alt='Advertisement' width={60} height={60} className='rounded-full border-[2px] border-gray-800' />
                                <input type="text" placeholder='Log in or sign up to commit' className='border border-gray-100 rounded-xl py-2 px-4 w-full' />
                            </div>
                        </div>

                    </section>

                    <section className='flex flex-col gap-4 mt-6'>
                        <h3 className='text-2xl text-gray-800 font-bold'>The most read guides right now.</h3>
                        <div className='flex flex-col gap-6'>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                        </div>

                        <div>
                            <Image src='/assets/images/ad.jpg' alt='Advertisement' width={400} height={400} className='rounded-md' />
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h3 className='text-2xl text-gray-800 font-bold'>Our latest buying guides.</h3>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                                <div>
                                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Buying guide - find the perfect travel stroller!</h4>
                                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Children</Button>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>

                <div className='my-6'>
                    <h2 className='font-bold text-2xl text-gray-800'>You might like these articles?</h2>
                    <div className='flex flex-wrap items-center justify-center gap-4 w-full mt-4'>
                        <Carousel className="w-full max-w-sm">
                            <CarouselContent className="-ml-1 w-[25%]">
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <CarouselItem key={index} className="pl-1 basis-[30%] md:basis-1/2 lg:basis-1/3">
                                        <div className='bg-white py-3 px-5 rounded-md flex flex-col justify-center gap-4 w-full'>
                                            <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={400} height={400} className='rounded-md self-center' />
                                            <h3 className='text-gray-800 text-xl font-semibold'>Choose the right online pharmacy to buy pharmacy products from!</h3>
                                            <p className='text-gray-500 text-base'>We put science into action by asking all the relevant 'why' and 'how. We go beyond the buzz.. 💊</p>
                                            <Button variant={'outline'} size={'sm'} className='mt-3 w-fit bg-pink-300'>health & beauty</Button>
                                            <div className='flex items-center gap-4'>
                                                <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={40} height={40} className='rounded-full' />
                                                <div>
                                                    <h5 className='text-gray-800 font-semibold'>DealGuru-Sebastian</h5>
                                                    <p className='text-gray-400 text-sm'>07/04/2023</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                    </div>
                </div>

            </main>
        </>
    )
}
