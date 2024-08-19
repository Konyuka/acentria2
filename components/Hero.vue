<script setup>


</script>

<template>
    <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="
                  background-image: url(/cdn.sanity.io/images/33u1mixi/production/e8e19ed3e8c8d8616133ef8f2feeaab00819f123-2880x1162b238.png?fit=max&amp;auto=format);
                ">
        <div class="container">
            <div
                class="flex flex-col items-center bg-cover px-4 py-4 text-center md:py-10 lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">

                <div
                    class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left">
                    <div class="w-full">
                        <h1
                            class="font-sans tracking-normal text-4xl lg:text-3xl text-brand-primary font-semibold leading-tight lg:leading-tight">
                            Welcome to Acentria Group <br>
                            <span class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight"> your
                                trusted partner in Insurance, Reinsurance, Actuarial, Investment and Tech
                                Solutions.</span>
                        </h1>
                    </div>
                    <div>
                        <p
                            class="font-sans tracking-normal text-base text-gray-900 leading-tight lg:leading-tight pb-2">
                            Discover why thousands of businesses
                            and professionals trust Acentria Group
                            for their Insurance, Reinsurance,
                            Actuarial, Investment, and Tech solutions.
                            At Acentria Group,
                            we combine expertise with innovation
                            to deliver tailored solutions that
                            meet your unique needs. Trust us to
                            provide clarity, security, and growth
                            for businesses and individuals.
                        </p>
                        <p
                            class="font-sans tracking-normal text-base text-gray-900 leading-tight lg:leading-tight pb-2">
                            <strong class="font-semibold">See
                                why Kenya Reinsurance Corporation says <br>
                                <span class="text-base !text-gray-900 font-normal">“Acentria sets the standard ​in the
                                    industry.”</span>
                            </strong>
                        </p>
                    </div>
                    <div class="w-full">
                        <a href="request-a-demo.html"
                            class="font-sans button-animation inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-700 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">
                            Learn more about us
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none"
                                        d="M1 1l4 4-4 4">
                                    </path>
                                </g>
                            </svg>
                        </a>
                        <a href="pricing.html"
                            class="font-sans button-animation inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-700 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">
                            Contact Us
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none"
                                        d="M1 1l4 4-4 4">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="flex aspect-video w-full max-w-3xl flex-col">

                    <div id="root">

                        <div class="_29Gjr rounded-xl">
                            <div class="_1tW_F rounded-xl">
                                <video :options="videoOptions" ref="videoPlayer"
                                    aria-label="Introducing the Acentria Platform" preload="metadata"
                                    class="video-js vjs-default-skin rounded-xl _1l-KU _3OgU3 w-[60vw] h-[50vh]"
                                    controls tabindex="0" src="@/assets/media/intro.mp4"></video>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>