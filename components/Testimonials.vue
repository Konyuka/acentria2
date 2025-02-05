<template>
    <div class="bg-white py-5 font-sans">
        <div class="container font-sans relative">
            <h2 class="section-heading">
                What Our <br class="" > <span class="text-brand-primary">Customers are Saying!</span>
            </h2>

            <div class="">
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
                                        <NuxtImg v-motion-fade-visible src="/img/woman-arms.jpg" alt="image of profile"
                                            class="w-full h-[320px] flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div
                                            class="mt-20 w-28 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-28 bg-red-100 rounded-full">
                                            <i
                                                class="fas fa-quote-right text-black z-50 text-4xl text-brand-primary"></i>
                                        </div>

                                    </div>
                                    <div
                                        class="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 flex flex-col justify-around !-mt-10">
                                        <div>
                                            <h1 class="section-heading pb-3">
                                                Reviews & <span class="text-brand-primary">Testimonials</span>
                                            </h1>
                                            <p class="content pb-5">
                                                Our customers highlight how Acentria we rise to every challenge with a
                                                blend of innovation
                                                and care. Whether navigating complexities or seizing new opportunities,
                                                they trust us to
                                                deliver solutions that truly empower their journey.
                                            </p>
                                            <NuxtLink to="/reviews-and-testimonials">
                                                <AppButton :title="'Read Reviews'" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>