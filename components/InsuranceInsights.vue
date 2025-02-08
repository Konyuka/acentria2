<script setup>

const news = ref([
    {
        tag: 'blog',
        title: 'Workshops & Webinars',
        img: '/img/workshop.jpg',
    },
    {
        tag: 'guide',
        title: 'Learn',
        img: 'https://images.pexels.com/photos/5905443/pexels-photo-5905443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        tag: 'news',
        title: 'Guides',
        img: 'https://images.pexels.com/photos/29452731/pexels-photo-29452731/free-photo-of-display-of-various-travel-and-tourism-brochures.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        tag: 'blog',
        title: 'Online Tools',
        img: 'https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
])

</script>

<template>
    <div class="bg-white">
        <div class="py-5 container font-sans">
            <div class="section-heading text-left pb-3">
                <h2>
                    Insights &<span class="text-brand-primary"> Resources</span>
                </h2>
            </div>

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <a v-for="news in news" :key="news.title"
                    class="button-animation relative flex flex-col justify-between overflow-hidden rounded-lg" href="#">
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
                                                <NuxtImg format="webp" 
                                                    alt="AI is here. AI regulations are on the way. Is your board ready?"
                                                    loading="lazy" decoding="async" data-nimg="fill"
                                                    class="object-center object-cover image-style" sizes="240w 100vw"
                                                    :src="news.img" />
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
                    <div class="py-3">
                        <h6 class="card-heading">
                            {{ news.title }}
                        </h6>
                    </div>
                    <button class="!content text-brand-primary text-left">
                        Learn more <i class="ml-3 fas fa-arrow-right"></i>
                    </button>
                </a>
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>