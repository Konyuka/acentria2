<script setup>
const props = defineProps({
    InsuranceBannerContent: Object,
})

</script>

<template>
    <div>
        <div class="relative w-full bg-cover bg-center bg-no-repeat false mt-40" style="
            background-image: url(https://cdn.sanity.io/images/33u1mixi/production/9586fc11ddcb60222de682cdb07fe9d57103448b-1440x595.svg?fit=max&amp;auto=format);
          ">
            <div class="container">
                <div
                    class="flex flex-col items-center bg-cover px-4 py-4 text-center md:py-16 lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left">
                        <div class="w-full">
                            <div
                                class="flex items-center space-x-2 text-brand-primary pb-2 justify-center lg:justify-start">
                                <label
                                    class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight uppercase">
                                    {{ InsuranceBannerContent.subtitle }}
                                </label>
                            </div>
                            <h1 v-html="InsuranceBannerContent.title"
                                class="font-sans tracking-normal text-4xl lg:text-3xl text-gray-900 font-semibold leading-tight lg:leading-tight">
                            </h1>
                        </div>
                        <div>
                            <p class="font-sans tracking-normal text-xs text-gray-700 leading-tight lg:leading-tight">
                                {{ InsuranceBannerContent.content }}
                            </p>
                        </div>
                        <div class="w-full">
                            <a href="#"
                                class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                                Engage an Expert<svg
                                    class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                    <g fill-rule="evenodd">
                                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                        <path class="transition-all duration-75 translate-x-0 transform-none"
                                            d="M1 1l4 4-4 4"></path>
                                    </g>
                                </svg></a><a href="#"
                                class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                                Get a Quote<svg
                                    class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                    <g fill-rule="evenodd">
                                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                        <path class="transition-all duration-75 translate-x-0 transform-none"
                                            d="M1 1l4 4-4 4"></path>
                                    </g>
                                </svg></a>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <NuxtImg loading="lazy" width="500" height="300" decoding="async" data-nimg="1"
                            class="drop-shadow-md undefined rounded-2xl"
                            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                            :src="InsuranceBannerContent.image" style="color: transparent" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>