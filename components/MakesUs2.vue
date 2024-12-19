<script setup>
const incentives = [
    {
        name: 'Who we are',
        icon: 'fas fa-users',
        link: '/about-us/who-we-are',
        description: "Acentria Group of companies is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, Technology and Investment Advisory.",
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

        <div class="container grid grid-cols-7 gap-2">
            <div class="col-span-3 mt-5 container max-w-6xl mx-auto justify-between content-center">

                <!-- <h3 class="font-semibold text-xl mt-2">
                    Sharing an <span class="text-brand-primary">ambitious spirit!</span>
                </h3> -->
                <h2 class="text-5xl font-semibold text-left">
                    About
                </h2>
                <h1 class="text-[10rem] text-transparent bg-clip-text bg-contain bg-center leading-none font-extrabold tracking-tighter"
                    style="background-image: url('/img/sun-tornado.png');">
                    <div class="-ml-3">
                        US
                    </div>
                </h1>
            </div>

            <div class="col-span-4 relative mt-5">
                <h2 class="text-2xl font-semibold text-left">
                    <span class="text-brand-primary"> Acentria Group</span>
                </h2>
                <div class="relative mx-auto">
                    We drive the future of our partners through our, expertise, solutions by EMPOWERING the vision of
                    our clients and the communities through INNOVATIVE thinking and offering the best solutions to
                    enhance PROSPERITY!
                    <br />
                    <br />
                    We always seek better ways to manage risk and guide effective pathways to achieve the smart
                    outcomes. We go beyond risk to rewards for our clients, our company, our colleagues, and the
                    communities in which we serve.

                </div>

                <div class="my-3">
                    <NuxtLink to="/about-us/who-we-are"
                        class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                        Learn More <i data-v-02281a80="" class="fas fa-arrow-right text-primary ml-2"></i>
                    </NuxtLink>
                </div>

            </div>
        </div>

        <div class="container">
            <div
                class="font-sans grid  grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-x-1 gap-y-2 text-base leading-normal text-gray-600">
                <NuxtLink v-motion-fade-visible :to="incentive.link" v-for="incentive in incentives"
                    :key="incentive.name"
                    class="shadow-2xl button-animation relative flex flex-row gap-1 border-2 border-black/10 py-5 px-5 rounded-lg">
                    <i :class="incentive.icon" class="text-4xl text-brand-primary mr-2"></i>
                    <div class="relative">
                        <div class="flex justify-between w-full">
                            <h5 v-html="incentive.name" class="text-md pb-1 font-semibold leading-tight text-black">
                            </h5>
                        </div>
                        <p class="leading-normal font-regular text-light-content text-[14px]">
                            {{ incentive.description }}
                        </p>
                        <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i>
                    </div>
                </NuxtLink>
            </div>
        </div>


        <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">
            <div class="relative py-4 lg:basis-1/2">
                <NuxtImg v-motion-fade-visible alt="Image of Enable growth" loading="lazy" decoding="async"
                    data-nimg="1" style="color: transparent; object-fit: contain"
                    class="mt-8 w-full h-[310px] shadow-2xl rounded-lg !object-cover" src="/img/inspire.webp" />
            </div>
            <div class="mt-2 flex flex-col justify-center items-center lg:basis-1/2">
                <div class="container">
                    <h2 class="text-2xl font-semibold text-left -ml-5">
                        Our <span class="text-brand-primary">Purpose</span>
                    </h2>
                    <!-- <h3 class="font-semibold text-xl -ml-5 mb-3">
                        Our True North<span class="text-brand-primary"> that Guides Us!</span>
                    </h3> -->
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

<style scoped></style>