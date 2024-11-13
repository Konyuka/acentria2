<script setup>
const incentives = [
    {
        name: 'Who we are',
        icon: 'fas fa-users',
        link:'/about-us/who-we-are',
        description: "Acentria Group of companies is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, Technology and Investment Advisory",
    },
    {
        name: 'What We Do',
        icon: 'fas fa-briefcase',
        link: '/about-us/who-we-are',
        description: "We offer the best solutions in Risk and Insurance, Reinsurance, Actuarial, and Investment Advisory. We consider the trust to be our most valuable resource.",
    },
    {
        name: 'Our journey',
        icon: 'fas fa-road',
        link: '/about-us/who-we-are',
        description: "Our journey is about Empowering dreams, igniting imagination, and propelling prosperity to infinite possibilities for all our partners and the communities we serve.",
    },
]

</script>

<template>
    <div>

        <div class="bg-white pt-10 font-sans">



            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">

                <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                        style="color: transparent; object-fit: contain"
                        class="w-full h-60 shadow-2xl rounded-lg !object-cover"
                        src="https://images.pexels.com/photos/669986/pexels-photo-669986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="mt-2 flex flex-col justify-center  items-center lg:basis-1/2">
                    <div class="container max-w-6xl mx-auto justify-between content-center">
                        <h2 class="text-[27px] font-medium tracking-tight text-gray-900 text-left">
                            Our <span class="text-brand-primary">Purpose</span>
                        </h2>
                    </div>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                            In our daily work, not only do we meet our legal and regulatory obligations, but we aspire
                            to
                            exceed people's expectations.

                            We focus on the areas where, as a Group, our activity can have the greatest impact, helping
                            more
                            people and businesses prosper in an inclusive, sustainable way.
                            <br><br>
                            Our commitment goes beyond compliance; we strive to set new standards of excellence in
                            everything we do.
                            By prioritizing integrity and transparency, we build trust with our clients, partners, and
                            communities.

                            We believe that our success is intertwined with the well-being of the communities we serve.
                            Through innovative solutions and responsible practices, we aim to create lasting positive
                            change.

                        </p>
                    </div>
                </div>

            </div>

            <div class="container max-w-6xl mx-auto justify-between content-center">
                <h2 class="text-3xl font-semibold tracking-tight text-gray-900 text-left">
                    About <span class="text-brand-primary">Us</span>
                </h2>
            </div>
            <div class="relative pt-5">
                <div class="absolute inset-x-0 bottom-0 top-48 bg-white">
                </div>
                <div class="container relative mx-auto max-w-6xl px-6 lg:px-8 pb-10">
                    <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">

                        <NuxtLink :to="incentive.link" v-for="incentive in incentives" :key="incentive.name"
                            class="font-sans group button-animation -m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                            <div class="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                                <div class="rounded-3xl bg-white p-5 pb-1 shadow-2xl ring-1 ring-black/5">
                                    <i :class="incentive.icon" class="text-black text-2xl"></i>
                                    <p class="mt-2 font-semibold text-lg text-brand-primary">
                                        {{ incentive.name }}
                                    </p>
                                    <div class="mt-2">
                                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit">
                                            {{ incentive.description }}
                                        </p>
                                    </div>
                                    <div class="mt-2">
                                        <i
                                            class="fas fa-arrow-right mt-5 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>

                    </div>

                </div>
            </div>

        </div>


    </div>
</template>

<style scoped></style>