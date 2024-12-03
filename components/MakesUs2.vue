<script setup>
const incentives = [
    {
        name: 'Who we are',
        icon: 'fas fa-users',
        link: '/about-us/who-we-are',
        description: "Acentria Group of companies is a trusted global consultant that seeks to empower, innovate and steer growth and prosperity in Risk and Insurance, Reinsurance, Actuarial, Technology and Investment Advisory.",
    },
    {
        name: 'What We Do',
        icon: 'fas fa-briefcase',
        link: '/about-us/who-we-are',
        description: "At Acentria Group, we deliver transformative products and solutions in Risk and Insurance, Reinsurance, Actuarial, Investment Advisory, and Technology.",
    },
    {
        name: 'Our journey',
        icon: 'fas fa-road',
        link: '/about-us/who-we-are',
        description: "At Acentria Group, our journey is a testament to resilience, vision, and the boundless possibilities that come with dedication.",
    },
]
</script>

<template>
    <div class="bg-white pt-5 font-sans">
        <div class="mt-5 container max-w-6xl mx-auto justify-between content-center">
            <h2 class="text-2xl font-semibold text-left">
                About - <span class="text-brand-primary"> Acentria Group</span>
            </h2>
            <h3 class="font-semibold text-xl mt-2">
                Sharing an <span class="text-brand-primary">ambitious spirit!</span>
            </h3>
        </div>
        <div class="relative pt-5">
            <div class="absolute inset-x-0 bottom-0 top-48 bg-white"></div>
            <div class="container relative mx-auto max-w-6xl px-6 lg:px-8 pb-10">
                <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
                    <NuxtLink :to="incentive.link" v-for="incentive in incentives" :key="incentive.name"
                        class="group button-animation -m-2 grid grid-cols-1 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                        <div class="grid grid-cols-1 p-2 shadow-xs shadow-black/5">
                            <div class="rounded-md bg-white p-5 pb-1 shadow-xl ring-1 ring-black/5">
                                <div class="flex justify-between">
                                    <p class="text-lg font-semibold text-brand-primary">
                                        {{ incentive.name }}
                                    </p>
                                    <i :class="incentive.icon" class="text-black text-2xl"></i>
                                </div>
                                <div class="mt-2">
                                    <p class="text-sm leading-normal text-gray-700">
                                        {{ incentive.description }}
                                    </p>
                                </div>
                                <div class="text-right mr-5">
                                    <i
                                        class="fas fa-arrow-right mt-1 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">
            <div class="relative py-4 lg:basis-1/2">
                <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                    style="color: transparent; object-fit: contain"
                    class="mt-8 w-full h-[310px] shadow-2xl rounded-lg !object-cover" src="/img/inspire.jpg" />
            </div>
            <div class="mt-2 flex flex-col justify-center items-center lg:basis-1/2">
                <div class="container">
                    <h2 class="text-2xl font-semibold text-left -ml-5">
                        Our <span class="text-brand-primary">Purpose</span>
                    </h2>
                    <h3 class="font-semibold text-xl -ml-5 mb-3">
                        Our True North<span class="text-brand-primary"> that Guides Us!</span>
                    </h3>
                </div>
                <div class="text-light-content">
                    <p class="mt-2 text-sm leading-normal text-gray-700 !text-inherit mb-4">
                        Our purpose is to passionately remain at the forefront in <span
                            class="text-brand-primary">EMPOWERING</span> the vision of our clients and the communities
                        through <span class="text-brand-primary">INNOVATIVE</span> thinking and offering the best
                        solutions to enhance <span class="text-brand-primary">PROSPERITY</span> and in doing so, we add
                        value to an ever-changing global environment.
                        <br><br>
                        Every day, we go beyond ticking boxes of compliance and regulations. We aim to surpass
                        expectations. By focusing on areas where our expertise can make the greatest impact, we empower
                        people and businesses to thrive inclusively and sustainably.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>