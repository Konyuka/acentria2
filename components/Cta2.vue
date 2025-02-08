<template>
    <div class="relative bg-brand-dim grid grid-cols-2 font-sans h-[85vh]">
        <div class="relative h-60 overflow-hidden bg-brand-primary md:absolute md:left-0 md:h-3/4 w-full">
            <NuxtImg format="webp"  class="h-full w-full object-cover" src="/img/join.jpg" alt="" />
            <svg viewBox="0 0 926 676" aria-hidden="true"
                class="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
                <path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4"
                    d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z" />
                <defs>
                    <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176"
                        y2="321.024" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#776FFF" />
                        <stop offset="1" stop-color="#FF4694" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="relative mx-auto  py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="pl-6 pr-6 md:ml-auto md:w-full md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                <h2 class="text-base font-semibold leading-7 text-brand-primary">Award winning support</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
                <p class="mt-6 text-base leading-7 text-gray-300">
                    The most important part of life isn't the things we own, but the experiences we share with the
                    people we love. That's why it's not just about what we do at Acentria, it's about how we do it.
                    Because
                    when you choose us, you choose an insurer who cares.
                </p>
                <div class="mt-8">
                    <NuxtLink to="/contact-acentria-group"
                        class="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                        Visit the help center
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
