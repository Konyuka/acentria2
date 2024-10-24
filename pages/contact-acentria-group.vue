<script setup>

const bannerContent = ref({
    subtitle: 'Contact Us',
    title: 'Reach Out to Us',
    // image: '/img/contact1.jpg'
    image: 'https://www.shutterstock.com/shutterstock/photos/2289080225/display_1500/stock-photo-call-center-black-woman-and-smile-in-contact-us-with-crm-headset-with-mic-and-mockup-space-2289080225.jpg'
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
    <section>
        <div>

            <div class="bg-white py-8 mt-24">

                <div class="isolate !mb-5 py-5 md:py-0 mt-5">
                    <div class="relative isolate -z-10">
                        <div class="container overflow-hidden">

                            <div class="max-w-full">
                                <div
                                    class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:justify-between">

                                    <div class="flex w-full max-w-lg flex-col gap-2 pr-0 sm:pr-10 lg:shrink-0 lg:pr-0">
                                        <h1 id=""
                                            class="font-sans text-3xl font-semibold leading-tight md:text-4xl xl:leading-tight text-light-title pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0">
                                            <span
                                                class="text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-3xl">Connect
                                                with</span> <br>
                                            Our Experts
                                        </h1>
                                        <p class="font-sans text-xs leading-normal font-regular text-light-content">
                                            We value your
                                            trust and are committed to safeguarding your future with precision and
                                            excellence.
                                            If you have any questions or need assistance, please don't hesitate to
                                            contact us.
                                            We are here to help and look forward to hearing from you.
                                        </p>

                                    </div>

                                    <div class="relative py-4">
                                        <img alt="Image of null" loading="lazy" decoding="async" data-nimg="1"
                                            width="500" height="350" style="color: transparent; object-fit: contain"
                                            src="https://www.shutterstock.com/shutterstock/photos/2312975601/display_1500/stock-photo-portrait-black-woman-and-smile-in-call-center-for-telemarketing-customer-service-or-business-in-2312975601.jpg"
                                            class="rounded-xl" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Socials />

                <div
                    class="container mt-10 max-w-6xl mx-auto font-sans grid grid-cols-1 gap-x-8 gap-y-1 py-5 lg:grid-cols-1">
                    <div class="ml-5">
                        <h2 class="text-3xl font-semibold tracking-tight text-gray-900">
                            Visit Us
                        </h2>
                        <p class="mt-4 leading-7 text-black font-bold">
                            West Park Towers - 9th floor, Mpesi Lane <br />
                            <span class="text-brand-primary">Muthithi Road - Westlands Nairobi Kenya</span>
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 py-5">
                        <div class="relative w-full h-96 ">
                            <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl px-[5vw]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                                frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>
                    </div>
                </div>

                <Socials2 />
            </div>

            <ContactForm />

        </div>
    </section>
</template>

<style scoped></style>