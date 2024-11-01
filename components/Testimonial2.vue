<script setup>


</script>

<template>
    <div class="font-sans">

        <div class="flex items-center justify-between h-full w-full absolute z-0">
            <div class="w-1/3 bg-white dark:bg-gray-900 h-full"></div>
            <div class="w-4/6 ml-16 bg-gray-100 dark:bg-gray-800 h-full"></div>
        </div>
        <div class="xl:px-20 px-8 py-2 2xl:mx-auto 2xl:container relative z-40">

            <div class="slider">
                <div class="slide-ana">

                    <div class="flex relative" style="transform: translateX(0%)">
                        <div class="mt-14 md:flex">
                            <div class="relative lg:w-1/2 h-72">
                                <img src="https://media.istockphoto.com/id/1758823939/photo/african-american-customer-providing-five-satisfaction-ratings-customer-service-evaluation.jpg?s=1024x1024&w=is&k=20&c=x_gH2plemk2tH0r4jA1qSztdTlyykN7KcA0CBvSGVrU="
                                    alt="image of profile"
                                    class="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                <div
                                    class="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-red-100 rounded-full">
                                    <i class="fas fa-quote-right text-black z-50 text-4xl text-brand-primary"></i>
                                </div>
                            </div>

                            <div class="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-around">
                                <div>
                                    <h1 class="text-xl font-semibold xl:leading-loose text-gray-800 dark:text-white ">
                                        Reviews & Testimonials
                                    </h1>
                                    <p class="text-xs font-medium mt-4 text-gray-600 dark:text-gray-200  ">
                                        Clients’ positive experiences and continued trust reflect Acentria’s
                                        success in exceeding expectations and solidifying a reputation for reliability
                                        and excellence.

                                        They frequently commend their
                                        responsiveness, the clarity of their advice, and their ability to deliver
                                        effective solutions
                                    </p>
                                </div>
                                <div class="mt-2">
                                    <NuxtLink to="/reviews-and-testimonials"
                                        class="!button-animation z-[10] relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-2 text-sm sm:text-md rounded-sm mt-10">
                                        Read Reviews & Watch Testimonials
                                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center mt-8">
                <button class="cursor-pointer" id="prev" role="button" aria-label="previous slide">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                </button>
                <button id="next" role="button" aria-label="next slide" class="cursor-pointer ml-2">
                    <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                        alt="next" />
                    <img class="transform rotate-180 w-8 hidden dark:block"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                </button>
            </div>
        </div>

    </div>
</template>

<style scoped>
.slider {
    width: 100%;
    height: 350px;
    position: relative;
    overflow: hidden;
}

.slide-ana {
    height: 400px;
}

.slide-ana>div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
}

@media (min-width: 300px) and (max-width: 884px) {
    .slider {
        height: 650px;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .slider {
        height: 381px;
    }
}

@media (min-width: 1024px) and (max-width: 1280px) {
    .slider {
        height: 379px;
    }
}
</style>