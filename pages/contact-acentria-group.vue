<script setup>


</script>

<template>
    <section>
        <div>
            <div class="relative isolate overflow-hidden bg-white py-20">
                <video autoplay loop muted
                    class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
                    <source src="@/assets/media/satellite.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-primary to-black opacity-60"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </div>
                <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true">
                    <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-primary to-black opacity-60"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                    </div>
                </div>
                <div class="relative z-50 mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-7xl lg:mx-0 text-center">
                        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">Contact Us</h2>
                    </div>
                </div>
            </div>

            <div class="relative isolate px-6 py-14 sm:py lg:px-8">
                <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64"
                            patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                            stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0"
                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
                <div class="mx-auto max-w-[80vw]">
                    <h2 class="font-sans text-3xl font-semibold tracking-tight text-gray-900">
                        Get in <span class="text-brand-primary">touch</span>
                    </h2>
                    <p class="font-sans mt-2 text-md leading-8 text-secondary">
                        We help both Companies and Individuals. Fill the the below form and
                        one of out agent will be in touch
                    </p>
                    <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                        <form action="#" method="POST" class="lg:flex-auto">
                            <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <div class="font-sans mb-5">
                                        <label for="email" class="block text-lg font-semibold leading-6 text-black">
                                            Full Name
                                        </label>
                                        <div class="relative mt-2 rounded-md shadow-sm">
                                            <div
                                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i class="fas fa-user text-brand-primary"></i>
                                            </div>
                                            <input type="email" name="email" id="email"
                                                class="tracking-widest font-semibold block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                                placeholder="">
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="font-sans mb-5">
                                        <label for="email" class="block text-lg font-semibold leading-6 text-black">
                                            Phone Number
                                        </label>
                                        <div class="relative mt-2 rounded-md shadow-sm">
                                            <div
                                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i class="fas fa-mobile text-brand-primary"></i>
                                            </div>
                                            <input type="email" name="email" id="email"
                                                class="tracking-widest font-semibold block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                                placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-sans mb-5">
                                        <label for="email" class="block text-lg font-semibold leading-6 text-black">
                                            Email Address
                                        </label>
                                        <div class="relative mt-2 rounded-md shadow-sm">
                                            <div
                                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i class="fas fa-envelope-open text-brand-primary"></i>
                                            </div>
                                            <input type="email" name="email" id="email"
                                                class="tracking-widest font-semibold block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                                placeholder="">
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-sans mb-5">
                                        <label for="email" class="block text-lg font-semibold leading-6 text-black">
                                            Service Category
                                        </label>
                                        <div class="relative mt-2 rounded-md shadow-sm">
                                            <div
                                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i class="fas fa-award text-brand-primary"></i>
                                            </div>
                                            <select id="location" name="location"
                                                class="tracking-widest font-semibold text-center !px-10 mt-2 block w-full rounded-md border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-black focus:ring-2 focus:ring-brand-primary sm:text-sm sm:leading-6">
                                                <option selected>General Enquiry</option>
                                                <option>Insurance</option>
                                                <option>Reinsurance</option>
                                                <option>Actuarial</option>
                                                <option>Investment</option>
                                                <option>Tech</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <div class="font-sans mb-5">
                                        <label for="email" class="block text-lg font-semibold leading-6 text-black">
                                            Message
                                        </label>
                                        <div class="relative mt-2 rounded-md shadow-sm">
                                            <div
                                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i class="fas fa-paper-plane text-brand-primary"></i>
                                            </div>
                                            <textarea type="email" name="email" id="email" rows="4"
                                                class="tracking-widest font-semibold block w-full rounded-md border-0 py-5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                                placeholder="">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">

                                <button
                                    class="button-animation group rounded border-2 border-brand-primary duration-200 px-3 py-2 font-semibold whitespace-nowrap bg-brand-primary rounded text-brand-white hover:bg-brand-red-2 active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 w-full"
                                    type="button">
                                    <div class="flex items-center justify-center">
                                        <div class="px-2">
                                            Let's Talk
                                        </div>
                                        <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                            fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                            <g fill-rule="evenodd">
                                                <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                                <path class="transition-all duration-75 translate-x-0 transform-none"
                                                    d="M1 1l4 4-4 4"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <p class="font-sans mt-4 text-sm leading-6 text-black">
                                By submitting this form, I agree to the
                                <a href="#" class="font-semibold !text-brand-primary">Privacy&nbsp;Policy</a>
                            </p>
                        </form>

                    </div>
                </div>
            </div>

            <div class="bg-white py-8">
                <div class="mx-[5vw] lg:px-8">
                    <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                        <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                            <div>
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                                    Get in touch
                                </h2>
                                <p class="mt-4 leading-7 text-gray-600">
                                    Connect with our experts. Let's explore solutions together.
                                </p>
                            </div>
                            <div class="font-sans grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                                <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">
                                        Email
                                    </h3>
                                    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div>
                                            <dt class="sr-only">Email</dt>
                                            <dd>
                                                <a class="font-semibold !text-brand-primary tracking-widest"
                                                    href="mailto:collaborate@example.com">
                                                    info@acentraigaroup.com
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">
                                        Mobile
                                    </h3>
                                    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                        <div class="mt-1">
                                            <dt class="sr-only">Phone number</dt>
                                            <dd>
                                                <a class="font-semibold !text-brand-primary tracking-widest transform transition duration-700 hover:scale-125 "
                                                    href="tel:+254 705 200 222">
                                                    +254 705 200 222
                                                </a>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">
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
                                <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                                    <h3 class="text-base font-semibold leading-7 text-gray-900">
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

                        <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-10 pt-7 lg:grid-cols-1 !mb-20">
                            <div>
                                <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                                    Visit Us
                                </h2>
                                <p class="mt-4 leading-7 text-black tracking-widest">
                                    West Park Towers - 9th floor, Mpesi Lane <br />
                                    Muthithi Road - Westlands Nairobi Kenya
                                </p>
                            </div>

                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
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
        </div>
    </section>
</template>

<style scoped></style>