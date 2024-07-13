import Image from 'next/image'
import React from 'react'

export default function integrity() {
    return (
        <>
            <main>
                <div>
                    <section className='omos-main'>
                        <div className='omos-container relative'>
                            <div className='bg-image-container'>
                                <Image src='/public/page-header.jpg' alt='Image' layout='fill' objectFit='cover' className='bg-image' />
                            </div>
                            <h2 className='text-overlay'>Integritetspolicy</h2>
                        </div>
                    </section>

                    <section className='space-y-12 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20'>
                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Integritetspolicy</h2>
                            <p className='text-gray-500 text-base pb-3'>DealGuru är en svensk hemsida som erbjuder medlemmarna personligt anpassade erbjudanden. Vi värnar om din integritet och vi är angelägna om att skydda och säkerställa säkerheten för dina personuppgifter.</p>
                            <p className='text-gray-500 text-base '>Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du besöker vår hemsida och när du blir medlem hos oss. Genom att besöka vår hemsida och/eller bli medlem accepterar du vår integritetspolicy och vår användning av dina personuppgifter enligt denna policy.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Information som samlas in:</h2>
                            <p className='text-gray-500 text-base'>När du blir medlem hos oss kommer vi att samla in viss personlig information från dig, såsom ditt namn, e-postadress, postadress och telefonnummer. Vi kommer också att samla in information om dina köp och preferenser för att kunna erbjuda dig personligt anpassade erbjudanden.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Användning av dina personuppgifter:?</h2>
                            <p className='text-gray-500 text-base'>Vi använder dina personuppgifter för att kunna erbjuda dig personligt anpassade erbjudanden och för att kunna kontakta dig med relevant information och erbjudanden. Vi kan också använda dina personuppgifter för att förbättra vår hemsida och för att utföra marknadsföring och statistisk analys.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Delning av dina personuppgifter:</h2>
                            <p className='text-gray-500 text-base'>Vi kommer inte att sälja eller på annat sätt dela dina personuppgifter med tredje part utan ditt samtycke. Vi kan dock komma att dela dina personuppgifter med våra samarbetspartners i syfte att erbjuda dig personligt anpassade erbjudanden.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Säkerhet:</h2>
                            <p className='text-gray-500 text-base'>Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller annan oegentlighet.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Dina rättigheter:</h2>
                            <p className='text-gray-500 text-base'>Du har rätt att få tillgång till och att rätta till dina personuppgifter när som helst. Du kan också välja att avsluta ditt medlemskap och begära att vi raderar dina personuppgifter.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Ändringar av policy:</h2>
                            <p className='text-gray-500 text-base'>Vi förbehåller oss rätten att göra ändringar i denna integritetspolicy. Eventuella ändringar kommer att publiceras på vår hemsida.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-black'>Kontakta oss:</h2>
                            <p className='text-gray-500 text-base'>Om du har några frågor eller oro för vår användning av din personliga information, vänligen kontakta oss för ytterligare information. <span className='text-blue-600 underline cursor-pointer'>kontakta oss har.</span></p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
