<script setup>
</script>

<template>
    <div class="font-sans">
        <div class="flex items-center justify-between h-full w-full absolute z-0">
            <div class="w-1/3 bg-white dark:bg-gray-900 h-auto"></div>
            <div class="w-4/6 ml-16 bg-gray-100 dark:bg-gray-800 h-auto"></div>
        </div>
        <div class="px-1 py-2 2xl:mx-auto container relative z-40">
            <div class="slider">
                <div class="slide-ana">
                    <div class="flex relative" style="transform: translateX(0%)">
                        <div class="mt-2 md:flex">
                            <div class="relative lg:w-1/2 h-72">
                                <img src="/img/testimonials.jpg" alt="image of profile"
                                    class="w-full h-[320px] flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                <div
                                    class="mt-20 w-28 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-28 bg-red-100 rounded-full">
                                    <i class="fas fa-quote-right text-black z-50 text-4xl text-brand-primary"></i>
                                </div>
                            </div>
                            <div
                                class="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 flex flex-col justify-around !-mt-10">
                                <div>
                                    <h1 class="text-2xl font-semibold leading-normal text-black">
                                        Reviews & <span class="text-brand-primary">Testimonials</span>
                                    </h1>
                                    <p class="text-xs leading-normal mt-2 text-black">
                                        Clients’ positive experiences and continued trust reflect Acentria’s success in
                                        exceeding expectations and solidifying a reputation for reliability and
                                        excellence. They frequently commend their responsiveness, the clarity of their
                                        advice, and their ability to deliver effective solutions.
                                    </p>
                                </div>
                                <div class="mt-1">
                                    <NuxtLink to="/reviews-and-testimonials"
                                        class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-5">
                                        Read Reviews
                                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
}

.button-animation {
    transition: background-color 0.3s ease;
}

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