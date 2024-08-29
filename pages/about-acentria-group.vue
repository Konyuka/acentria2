<script setup>
const InsuranceBannerContent = ref({
    subtitle: "About Acentria Group",
    title: `Empowering Dreams <br /> <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight"> Igniting Imagination </span>`,
    image:
        "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
        "Acentria Group of companies is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, and Investment Advisory.",
});

</script>

<template>
    <div>

        <div id="__next">
            <main class="jsx-2839774277 __className_e3c363 __ptNoRemap font-sans">


                <main>
                    <div>
                        <div>

                            <AboutHero1 :InsuranceBannerContent="InsuranceBannerContent" />

                            <AboutHero />

                            <Stats />

                            <Esg />

                            <Team />

                            <Board />

                            <div class="py-6 text-white xl:py-12" style="background-color: #f6f8fc">
                                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                                    <div class="relative p-4 lg:basis-1/2">
                                        <img alt="Image of null" loading="lazy" width="500" height="350"
                                            decoding="async" data-nimg="1"
                                            style="color: transparent; object-fit: contain"
                                            src="../_next/image8d9c.jpg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F2b7ceeeb456ba16cea1cd0a6be18f0d7c3f9d012-2121x1414.jpg%3Fq%3D90%26fit%3Dmax%26auto%3Dformat&amp;w=1080&amp;q=75" />
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2">
                                        <div class="text-light-content pb-5 md:pb-6">
                                            <h2 id=""
                                                class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                                                <span
                                                    class="font-sans text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-4xl 2xl:text-4xl">Join
                                                    us</span>
                                                and make an impact!
                                            </h2>
                                            <p
                                                class="font-sans text-base leading-normal font-regular text-light-content !text-inherit mb-4">
                                                At Acentria Group, we are catalysts of transformation. We are redefining
                                                how businesses operate, reshaping the way industries function, and
                                                empowering decision-makers to drive impactful change—for their
                                                organizations and the world at large.
                                                <br><br>
                                                We believe that significant growth occurs when you're leading the charge
                                                in creating extraordinary change. When you embrace challenges you've
                                                never faced before and discover solutions that once seemed out of reach.
                                                <br><br>
                                                We are a global team united by a common vision for the future of
                                                businesses. We invite you to join us in bringing that vision to life.
                                            </p>
                                        </div>
                                        <a href="careers/index.html"
                                            class="button-animation cursor-pointer font-semibold text-brand-primary hover:text-brand-primary-dark text-base relative flex items-center w-fit self-center md:self-start">
                                            Careers Page
                                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                                                fill="none" stroke="currentColor" viewBox="0 0 10 10"
                                                aria-hidden="true">
                                                <g fill-rule="evenodd">
                                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                                    <path
                                                        class="transition-all duration-75 translate-x-0 transform-none"
                                                        d="M1 1l4 4-4 4"></path>
                                                </g>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


            </main>
        </div>

    </div>
</template>

<style scoped></style>