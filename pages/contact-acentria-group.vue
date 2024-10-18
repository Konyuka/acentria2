<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Reach Out to Us',
    image: '/img/contact1.jpg',
})

</script>

<template>
    <section>
        <div>

            <div class="relative isolate overflow-hidden bg-white py-10 mt-40">
                <img :src="ReinsuranceBannerContent.image" alt="Success Team Hands Up"
                    class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

                <div class="absolute inset-0 bg-black opacity-40"></div>

                <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                    <div class="grid grid-cols-10 -gap-10">
                        <div class="text-white col-span-1">
                            <div class="w-20 h-1 bg-white mt-3">

                            </div>
                        </div>
                        <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                            <h2
                                class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                                Contact Us
                            </h2>
                            <h2 class="text-left text-3xl font-bold tracking-tight text-white font-sans">
                                {{ ReinsuranceBannerContent.title }}
                            </h2>
                            <p class="text-white text-left max-w-2xl mt-7 text-xs">
                                We are here to assist you with any inquiries or support you may need. Whether you have
                                questions about our services, need help with your account, or want to provide feedback,
                                our dedicated team is ready to help. Reach out to us via email or call.
                                You can also visit us at our office located at West Park Towers 9th floor, Mpesi Lane,
                                Muthithi Road, Westlands, Nairobi, Kenya. We look forward to hearing from you and
                                ensuring your experience with Acentria is exceptional.

                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="bg-white py-8">
                <div class="mx-[5vw] lg:px-8">
                    <div class="mx-auto max-w-2xl space-y-5 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                        <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                            <div>
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                                    Connect with <br> <span class="text-brand-primary">Our experts</span>
                                </h2>
                            </div>

                            <div class="font-sans grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-2">
                                <div class="rounded-lg bg-gray-50 p-3 shadow-md">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">
                                        Email
                                    </h3>
                                    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt class="sr-only">Email</dt>
                                            <dd>
                                                <a class="font-bold !text-brand-primary "
                                                    href="mailto:collaborate@example.com">
                                                    info@acentraigaroup.com
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="rounded-lg bg-gray-50 p-3 shadow-md">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">
                                        Mobile
                                    </h3>
                                    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div class="mt-1">
                                            <dt class="sr-only">Phone number</dt>
                                            <dd>
                                                <a class="font-bold !text-brand-primary  transform transition duration-700 hover:scale-125 "
                                                    href="tel:+254 705 200 222">
                                                    +254 705 200 222
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="rounded-lg bg-gray-50 p-3 shadow-md">
                                    <h3 class="text-base font-bold leading-7 text-gray-900">
                                        WhatsApp
                                    </h3>
                                    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt class="sr-only">Email</dt>
                                            <dd>
                                                <a class="font-semibold !text-brand-primary"
                                                    href="mailto:hello@example.com">Say Hi, on WhatsApp</a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                <div class="rounded-lg bg-gray-50 p-3 shadow-md">
                                    <h3 class="text-base font-bold leading-7 text-gray-900">
                                        Box Office
                                    </h3>
                                    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt class="sr-only">Email</dt>
                                            <dd>
                                                <a class="font-semibold !text-brand-primary"
                                                    href="mailto:careers@example.com">P.O Box 5864-00100 Nairobi,
                                                    Kenya</a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-1 py-5 lg:grid-cols-1">
                            <div>
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900">
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
                                        frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false"
                                        tabindex="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />

        </div>
    </section>
</template>

<style scoped></style>