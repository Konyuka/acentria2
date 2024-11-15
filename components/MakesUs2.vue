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
        description: "Our journey is about Empowering dreams, igniting imagination, and propelling prosperity to infinite possibilities for the communities we serve.",
    },
]

</script>

<template>
    <div>

        <div class="bg-white pt-5 font-sans">


            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">

                <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                        style="color: transparent; object-fit: contain"
                        class="mt-8 w-full h-[320px] shadow-2xl rounded-lg !object-cover"
                        src="https://media.istockphoto.com/id/1156638514/photo/i-dont-believe-in-limits.webp?s=1024x1024&w=is&k=20&c=xxWccVnzPivgSezXD0axkQ47sQp6OMqMu54yfTsK4yU="
                        data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="mt-2 flex flex-col justify-center items-center lg:basis-1/2">
                    <div class="container">
                        <h2 class="heading-class text-left -ml-5">
                            Our <span class="text-brand-primary">Purpose</span>
                        </h2>
                    </div>
                    <div class="text-light-content">
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

            <div class="mt-5 container max-w-6xl mx-auto justify-between content-center">
                <h2 class="heading-class text-left">
                    About <span class="text-brand-primary">Us</span>
                </h2>
            </div>
            <div class="relative pt-5">
                <div class="absolute inset-x-0 bottom-0 top-48 bg-white">
                </div>
                <div class="container relative mx-auto max-w-6xl px-6 lg:px-8 pb-10">
                    <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 px-20">

                        <NuxtLink :to="incentive.link" v-for="incentive in incentives" :key="incentive.name"
                            class="font-sans group button-animation -m-2 grid grid-cols-1  max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
                            <div class="grid grid-cols-1  p-2 shadow-xs shadow-black/5">
                                <div class="rounded-md bg-white p-5 pb-1 shadow-xl ring-1 ring-black/5">
                                    <div class="flex justify-between">
                                        <p class=" subheading-class text-brand-primary">
                                            {{ incentive.name }}
                                        </p>
                                        <i :class="incentive.icon" class="text-black text-2xl"></i>
                                    </div>
                                    <div class="mt-2">
                                        <p class="text-xs leading-normal font-regular">
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

        </div>


    </div>
</template>

<style scoped></style>