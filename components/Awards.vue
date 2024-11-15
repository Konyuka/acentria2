<script setup>
const awards = ref([
    {
        name: 'Award 1',
        img:'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Award 2',
        img:'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Award 3',
        img:'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Award 4',
        img:'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
])

</script>

<template>
    <div>

        <section class="container relative py-10">
            <div class="font-sans container px-4">
                <div class="text-left">
                    <h2 id=""
                        class="pb-4 md:pb-5 heading-class text-brand-primary">
                        <span
                            class="font-sans text-black pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0">
                            Awards
                        </span>
                         & Recognitions
                    </h2>
                </div>
                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0">
                    
                    <a v-for="award in awards" class="button-animation cursor-pointer relative flex h-auto  flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                        href="resources/blog/preparing-for-ai-regulations.html">
                        <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                            <div
                                class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                <div
                                    class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                    <figure
                                        class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                        <div class="h-0 w-full max-w-full pb-[25%]">
                                            <div
                                                class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                <picture class="flex h-[300px] w-full max-w-none">
                                                    <img alt="AI is here. AI regulations are on the way. Is your board ready?"
                                                        loading="lazy" decoding="async" data-nimg="fill"
                                                        class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw"
                                                        src="../cdn.sanity.io/images/33u1mixi/production/7ef13321754c150f46ae8370675e14d1efce6c2e-1080x72097c5.jpg?w=3840&amp;q=90&amp;fit=clip&amp;auto=format" />
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
                            <section class="grid items-start justify-start gap-y-0">
                                <div class="relative flex min-h-auto py-5 flex-col gap-y-1">

                                    <h6
                                        class="subheading-class text-black">
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