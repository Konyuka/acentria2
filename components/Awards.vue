<script setup>
const awards = ref([
    {
        name: '2021 Sanlam Awards 1st Runners Up Most Improved Broker GLA',
        img:'/img/sanlam.png',
    },
    {
        name: '2023 Think Business Awards 2nd Runners Up Most Customer Centric',
        img:'img/think.png',
    },
    {
        name: '2024 Capex Life Assurance Award for Valued Broker',
        img:'img/capex.png',
    },
    // {
    //     name: '2024 Kenya-Re Award 2nd Runners Up on Profitability',
    //     img:'img/kenyare.png',
    // },
    {
        name: '2024 Kenya-Re Award 2nd Runners Up on Timely Premium Remitance',
        img:'img/kenyare2.png',
    },
    {
        name: '2024 Think Business Awards 2nd Runners Up Best Broker in Technology Application',
        img:'img/think2.png',
    },
    {
        name: '2024 Think Business Awards 2nd Runners Up Most Customer Centric Broker',
        img:'img/think3.png',
    },
])

</script>

<template>
    <div>
        <section class="container relative py-10">
            <div class="font-sans container px-4">
                <div class="text-left">
                    <h2 id="" class="pb-4 md:pb-5 text-2xl font-semibold text-brand-primary">
                        <span class="font-sans text-black">
                            Awards
                        </span>
                        & Recognitions
                    </h2>
                </div>
                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 py-0">
                    <a v-for="award in awards" :key="award.name"
                        class="button-animation cursor-pointer relative flex h-auto flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                        href="resources/blog/preparing-for-ai-regulations.html">
                        <div class="relative mx-1 mt-1 aspect-[1] origin-top overflow-hidden rounded">
                            <div
                                class="bg-white ease relative z-[3] aspect-[1] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                <div
                                    class="ease absolute left-0 top-0 aspect-[1] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                    <figure
                                        class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                        <div class="w-full max-w-full pb-[25%]">
                                            <div
                                                class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                <picture class="flex h-full w-full max-w-none">
                                                    <img alt="AI is here. AI regulations are on the way. Is your board ready?"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-center object-fit" style="
                              position: absolute;
                              height: 100%;
                              width: 100%;
                              left: 0;
                              top: 0;
                              right: 0;
                              bottom: 0;
                              color: transparent;
                            " sizes="240w 200vw" :src="award.img" />
                                                </picture>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div
                            class="ease relative z-10 grid gap-2 bg-brand-white px-4 transition-transform duration-500 will-change-transform translate-y-0">
                            <section class="relative grid items-start justify-start gap-y-0">
                                <div class="flex h-auto py-2 flex-col">
                                    <h6 class="font-medium text-[12px] text-black">
                                        {{ award.name }}
                                    </h6>
                                </div>
                            </section>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>