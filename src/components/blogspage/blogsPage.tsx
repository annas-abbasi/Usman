import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function blogsPage() {
  return (
    <>
      <main className='py-5'>
        <h1 className='font-bold md:text-4xl text-3xl text-gray-800'>Buying guides and blog posts from DealGuru</h1>
        <div className='flex gap-6 md:mt-10 mt-6 md:flex-row flex-col'>
          <section className='md:w-[95%] lg:[w-90%] w-[100%] mx-auto'>
            <div className='flex items-center flex-col gap-4 w-full'>
              <div className='flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 items-start'>
                <Tabs defaultValue="account" className="flex flex-col w-full items-center justify-center gap-4 py-2 px-4 rounded-md ">
                  <div className='flex w-full justify-between'>
                    <h3 className='text-2xl font-semibold text-gray-800'>Articles</h3>
                    <TabsList className='bg-gray-200'>
                      <TabsTrigger value="newest">Newest</TabsTrigger>
                      <TabsTrigger value="popular">Popular</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value='newest'>
                    <div className='grid sm:grid-cols-2 gap-4 grid-cols-1'>

                      <div className='bg-white py-3 px-5 rounded-md flex flex-col justify-center gap-4'>
                        <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={400} height={400} className='rounded-md self-center' />
                        <h3 className='text-gray-800 text-2xl font-semibold'>What is the best idea?</h3>
                        <p className='text-gray-500 text-base'>When it come to choosing the best sunscreen, it can be confusing.</p>
                        <Button variant={'outline'} size={'sm'} className='mt-3 w-fit'>health & beauty</Button>
                        <div className='flex items-center gap-4'>
                          <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={40} height={40} className='rounded-full' />
                          <div>
                            <h5 className='text-gray-800 font-semibold'>Malin</h5>
                            <p className='text-gray-400 text-sm'>07/04/2023</p>
                          </div>
                        </div>
                      </div>


                      <div className='bg-white py-3 px-5 rounded-md flex flex-col justify-center gap-4'>
                        <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={400} height={400} className='rounded-md self-center' />
                        <h3 className='text-gray-800 text-2xl font-semibold'>What is the best idea?</h3>
                        <p className='text-gray-500 text-base'>When it come to choosing the best sunscreen, it can be confusing.</p>
                        <Button variant={'outline'} size={'sm'} className='mt-3 w-fit'>health & beauty</Button>
                        <div className='flex items-center gap-4'>
                          <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={40} height={40} className='rounded-full' />
                          <div>
                            <h5 className='text-gray-800 font-semibold'>Malin</h5>
                            <p className='text-gray-400 text-sm'>07/04/2023</p>
                          </div>
                        </div>
                      </div>

                      <div className='bg-white py-3 px-5 rounded-md flex flex-col justify-center gap-4'>
                        <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={400} height={400} className='rounded-md self-center' />
                        <h3 className='text-gray-800 text-2xl font-semibold'>What is the best idea?</h3>
                        <p className='text-gray-500 text-base'>When it come to choosing the best sunscreen, it can be confusing.</p>
                        <Button variant={'outline'} size={'sm'} className='mt-3 w-fit'>health & beauty</Button>
                        <div className='flex items-center gap-4'>
                          <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={40} height={40} className='rounded-full' />
                          <div>
                            <h5 className='text-gray-800 font-semibold'>Malin</h5>
                            <p className='text-gray-400 text-sm'>07/04/2023</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </TabsContent>

                  <TabsContent value='popular'>
                    Ad Content for the Popular tab here!!
                  </TabsContent>

                </Tabs>
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
        </div >

      </main >
    </>
  )
}
