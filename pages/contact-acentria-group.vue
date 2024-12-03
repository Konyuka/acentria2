<script setup>

const bannerContent = ref({
    subtitle: 'Contact Us',
    title: 'Reach Out to Us',
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

const contactsContent = ref({
    title: 'Reach us through the following',
    contacts: [
        {
            icon: 'fas fa-shield-alt',
            title: 'Email Address',
            description: 'info@acentriagroup.com <br> support@acentriagroup.com',
        },
        {
            icon: 'fas fa-shield-virus',
            title: 'Phone number',
            description: '+254 705 200 222 <br> +254 705 200 222',
        },
        {
            icon: 'fas fa-laptop-code',
            title: 'WhatsApp',
            description: '+254 705 200 222 <br> +254 705 200 222',
        },
        {
            icon: 'fas fa-calculator',
            title: 'Box Office',
            description: 'P.O Box 5864-00100 <br> Nairobi, Kenya',
        },
    ]
})

</script>

<template>
    <div class="bg-white">


        <BannerMain :content="bannerContent" />

        <div class="bg-white py-8">

            <div class="isolate !mb-5 py-5 md:py-0">
                <div class="relative isolate -z-10">
                    <div class="container overflow-hidden">

                        <div class="max-w-full">
                            <div class=" gap-x-2 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:justify-between">

                                <div class="flex w-full max-w-6xl flex-col gap-2 pr-0 sm:pr-10 lg:shrink-0 lg:pr-0">
                                    <h1 id="" class="text-2xl font-semibold">
                                        <span class="text-brand-primary">Connect
                                            with</span> <br>
                                        Our Experts
                                    </h1>
                                    <p class="font-sans text-sm leading-normal">
                                        We value your trust and are committed to safeguarding your future with
                                        precision and excellence.
                                        If you have any questions or need assistance, please don't hesitate to
                                        contact us.
                                        We are here to help and look forward to hearing from you.
                                        <br> <br>
                                        We believe in building lasting relationships with our
                                        clients, grounded in trust and mutual respect.
                                        Our team of dedicated professionals is always ready to provide you with the
                                        support and guidance you need.
                                        Whether you are looking for information about our services, need help with a
                                        specific issue, or just want to learn more about how we can assist you, we
                                        are here for you.
                                        <br><br>
                                        We understand the importance of timely and accurate communication, and we
                                        are committed to responding to your inquiries promptly.
                                        Thank you for choosing Acentria Group. We look forward to serving you and
                                        helping you achieve your goals.
                                    </p>

                                </div>

                                <!-- <div class="relative py-4 mt-5 ml-5">
                                    <img alt="Image of null" loading="lazy" decoding="async" data-nimg="1"
                                        style="color: transparent; object-fit: cover"
                                        src="https://www.shutterstock.com/shutterstock/photos/2312975601/display_1500/stock-photo-portrait-black-woman-and-smile-in-call-center-for-telemarketing-customer-service-or-business-in-2312975601.jpg"
                                        class="rounded-xl w-full h-[50vh]" />
                                </div> -->


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto  mb-5 font-sans mt-8">
                <p class="mt-2 text-2xl font-semibold text-black">
                    Contact <span class="text-brand-primary">us on</span>
                </p>
            </div>

            <Socials />

            <div class="container mt-10 max-w-6xl mx-auto font-sans grid grid-cols-3 gap-y-1 py-5 lg:grid-cols-5">

                <div class="mt-5">
                    <h2 class="text-xl font-semibold">
                        Visit <span class="text-brand-primary">Us</span>
                    </h2>
                    <p class="mt-4 leading-6 text-black text-sm">
                        <i class="fas fa-building text-brand-primary"></i> West Park Towers, 9th floor <br>
                        <i class="fas fa-road text-brand-primary"></i> Muthithi Road, Mpesi Lane <br />
                        <i class="fas fa-map-marker-alt text-brand-primary"></i> Westlands, Nairobi Kenya
                    </p>
                    <h2 class="mt-10 text-xl font-semibold">
                        Working <span class="text-brand-primary">Hours</span>
                    </h2>
                    <p class="mt-4 leading-6 text-black font-medium text-sm">
                        <i class="fas fa-calendar-day text-brand-primary"></i> Monday to Friday <br>
                        <i class="fas fa-clock text-brand-primary"></i> 8:00 AM to 5:00 PM <br />
                    </p>
                </div>

                <div class="py-5 col-span-4">
                    <div class="relative w-full h-72 ml-24">
                        <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl px-[5vw]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                            frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>

            <div class="container mx-auto  mb-0 font-sans my-5">
                <p class="mt-2 text-2xl font-semibold text-black">
                    Follow <span class="text-brand-primary">us on</span>
                </p>
            </div>

            <Socials2 />
        </div>

        <ContactForm class="" />

    </div>
</template>

<style scoped></style>