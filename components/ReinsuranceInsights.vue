<script setup>

const news = ref([
    {
        tag: 'blog',
        title: 'Blogs & Articles',
        img: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        tag: 'news',
        title: 'News & Trends',
        img: 'https://images.pexels.com/photos/29452731/pexels-photo-29452731/free-photo-of-display-of-various-travel-and-tourism-brochures.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        tag:'guide',
        title:'Learn',
        img:'https://images.pexels.com/photos/5905443/pexels-photo-5905443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        tag: 'blog',
        title: 'Workshops & Webinars',
        img: '/img/workshop.jpg',
    },
])

</script>

<template>
    <div class="bg-white">
        <section class="pb-10 container">
            <div class="font-sans">
                <div class="py-7 text-left">
                    <h2 class="section-heading text-black">
                        Insights &<span class="text-brand-primary"> Analytics</span>
                    </h2>
                </div>

                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0">
                    <a v-for="news in news" :key="news.title"
                        class="button-animation cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                        href="resources/blog/preparing-for-ai-regulations.html">
                        <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                            <div
                                class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                <div
                                    class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                    <figure
                                        class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                        <div class="h-0 w-full max-w-full pb-[75%]">
                                            <div
                                                class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                <picture class="flex h-[300px] w-full max-w-none">
                                                    <NuxtImg format="webp"  alt="AI is here. AI regulations are on the way. Is your board ready?"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-center object-cover image-style"  sizes="240w 100vw" :src="news.img" />
                                                </picture>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                            <div
                                class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                            </div>
                        </div>
                        <div
                            class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-2 transition-transform duration-500 will-change-transform translate-y-0">
                            <section class="grid items-start justify-start gap-y-3">
                                <div class="relative flex min-h-[30px] flex-col gap-y-1">
                                    <!-- <label class="text-xs text-brand-primary capitalize">
                                        {{ news.tag }}
                                    </label> -->
                                    <h6 class="text-md text-black font-bold">
                                        {{ news.title }}
                                    </h6>
                                </div>
                            </section>
                        </div>
                        <button
                            class="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-2 text-base self-start">
                            Learn more
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                                    </path>
                                </g>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.image-style{
    position: absolute;
                                height: 100%;
                                width: 100%;
                                left: 0;
                                top: 0;
                                right: 0;
                                bottom: 0;
                                color: transparent;
}
</style>