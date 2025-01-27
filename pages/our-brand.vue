<script setup>
const bannerContent = ref({
    subtitle: 'Acentria Group',
    title: 'Our Brand',
    image: 'https://images.pexels.com/photos/6535346/pexels-photo-6535346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
</script>

<template>
    <section class="min-h-screen font-sans bg-white">
        <BannerMain :content="bannerContent" />

        <div class="bg-white relative w-full bg-cover bg-center bg-no-repeat" style="background-image: none;">
            <div class="container">
                <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center">
                    <div>
                        <h1 class="my-5 heading-class text-black text-left">
                            Our <span class="text-brand-primary">Brand</span>
                        </h1>
                        <p
                            class="font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                            At Acentria Group, we reject the notion that &quot;better&quot; is enough. We are driven by
                            a relentless pursuit
                            of what&#39;s best, what&#39;s brightest, and what&#39;s smartest. In every action, in every
                            decision, and in every
                            innovation, we choose the smartest path forward. This is who we are. This is what we do.
                            This is how
                            we lead.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="!pt-5 container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
            <div class="relative p-4 lg:basis-1/2">
                <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                    data-nimg="1" src="/img/compass3.jpg" style="color: transparent; object-fit: contain;"
                    class="rounded-lg" />
            </div>
            <div class="flex flex-col justify-center lg:basis-1/2">
                <h2 id="" class="heading-class pb-4 md:pb-5">
                    Our Commitment <span class="text-brand-primary">To Excellence</span>
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="text-xs leading-normal font-regular text-light-content pb-4 !text-inherit">
                        We believe that excellence is a journey, not a destination. It’s about consistently raising the
                        bar and continuously evolving. At Acentria, we ensure that everything we do—and how we do it—is
                        executed in the smartest way possible. We are not just looking to meet expectations; we aim to
                        exceed them. Our actions reflect our commitment to providing the highest standards in every
                        aspect of our work.
                    </p>
                </div>
            </div>
        </div>

        <div class="!pt-5 container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">

            <div class="flex flex-col justify-center lg:basis-1/2">
                <h2 id="" class="heading-class pb-4 md:pb-5">
                    The Heart of <span class="text-brand-primary">Our Brand</span>
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="text-xs leading-normal font-regular text-light-content pb-4 !text-inherit">
                        At the core of Acentria lies a deep belief in innovation, integrity, and intelligence. These
                        principles guide our every move. The heart of our brand is not just about doing things well;
                        it’s about doing them in the smartest, most thoughtful way to create lasting value. We strive
                        for brilliance in all that we do, nurturing meaningful relationships and driving progress that
                        inspires.
                    </p>
                </div>
            </div>
            <div class="relative p-4 lg:basis-1/2">
                <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                    data-nimg="1" src="/img/heart.jpg" style="color: transparent; object-fit: contain;"
                    class="rounded-lg" />
            </div>
        </div>

        <div class="bg-white">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col py-8 lg:py-4 lg:gap-16 items-center">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Board of Directors" loading="lazy" decoding="async" data-nimg="1"
                        src="/img/LogoT.png" style="color: transparent; object-fit: contain;"
                        class="rounded-lg w-full" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2 mt-5">
                    <h2 id="" class="heading-class pb-4 md:pb-5">
                        Beyond a Logo <span class="text-brand-primary">or Tagline</span>
                        <br>
                        <span class="text-brand-primary">
                            Empower |
                        </span>
                        Innovate |
                        <span class="text-brand-primary">
                            Prosper
                        </span>
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-light-content pb-4 !text-inherit">
                            Our logo and tagline, &quot;Empower, Innovate, Prosper&quot;, capture the essence of
                            what we stand for. We
                            believe in empowering our clients, partners, and communities to innovate and drive
                            meaningful
                            change. Through innovation, we push the boundaries of what’s possible, and by prospering
                            together,
                            we create sustainable success for everyone involved.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="!pt-5 container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16 pb-10">
            <div class="relative p-4 lg:basis-1/2">
                <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="450" decoding="async"
                    data-nimg="1" src="/img/brandpromise.jpg" style="color: transparent; object-fit: contain;"
                    class="rounded-lg" />
            </div>
            <div class="flex flex-col justify-center lg:basis-1/2 ">
                <h2 id="" class="heading-class">
                    Our Brand <span class="text-brand-primary">Promise</span>
                </h2>
                <!-- <h5 class="text-brand-primary text-lg font-semibold pb-2">
                    Done Smart
                </h5> -->
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="text-xs leading-normal font-regular text-light-content pb-4 !text-inherit">
                        At Acentria, our brand promise is "Done Smart." Every solution we deliver is designed with
                        intelligence and innovation, empowering our clients to thrive in a rapidly changing world. We go
                        beyond the status quo, embracing fresh ideas, challenging norms, and applying cutting-edge
                        strategies. Through smart thinking, collaboration, and forward-looking leadership, we deliver
                        exceptional results while setting new standards for excellence.
                    </p>
                </div>
                <h2 id="" class="heading-class">
                    We are Acentria <br> <span class="text-brand-primary">We Ensure Smart Solutions.</span>
                </h2>
            </div>
        </div>

    </section>
</template>

<style scoped></style>
