<script setup>
const props = defineProps({
  content: Object,
});

</script>

<template>
    <div class="relative w-full h-[75vh] bg-cover bg-center bg-no-repeat false" style="
                  background-image: url(https://cdn.sanity.io/images/33u1mixi/production/9586fc11ddcb60222de682cdb07fe9d57103448b-1440x595.svg?fit=max&amp;auto=format);
                ">
        <div class="container">
            <div
                class="flex flex-col items-center bg-cover px-4 py-6 text-center lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                <div
                    class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left">
                    <div>
                        <label
                            class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight uppercase">
                            {{ content.pageTitle }}
                        </label>
                    </div>
                    <div class="w-full">
                        <h1
                            class="font-sans tracking-normal text-4xl  text-gray-900 font-semibold leading-tight lg:leading-tight">
                            {{ content.title }}
                        </h1>
                    </div>
                    <div>
                        <p
                            class="font-sans tracking-normal text-base text-gray-900 leading-tight lg:leading-tight pb-2">
                            {{ content.description }}
                        </p>
                    </div>
                    <div class="w-full">
                        <a href="#register-section"
                            class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">
                            Reach out to us
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none"
                                        d="M1 1l4 4-4 4"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>