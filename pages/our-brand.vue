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

        <div class="container">
            <div>
                <h1 class="my-5 section-heading text-black text-left">
                    Done Smart: <span class="text-brand-primary">The Acentria Brand Promise</span>
                </h1>
                <p class="content pb-2">
                    At Acentria, we believe that the smartest solutions are the ones that truly make a difference.
                    <b>Done Smart</b> isn’t just a catchy phrase—it’s our promise to deliver solutions that are not only
                    clever but thoughtful, impactful, and designed to empower you to succeed.
                </p>
            </div>
        </div>

        <div class="!pt-5 container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
            <div class="relative p-4 lg:basis-1/2">
                <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                    data-nimg="1" src="/img/compass3.jpg" style="color: transparent; object-fit: contain;"
                    class="rounded-lg" />
            </div>
            <div class="flex flex-col justify-center lg:basis-1/2">
                <h2 id="" class="section-heading pb-5">
                    The Power of <span class="text-brand-primary">Smart Solutions</span>
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="content pb-5">
                        For us, smart solutions go beyond technology—they are about understanding your needs,
                        being creative in our approach, and looking ahead. Done Smart means blending intelligence
                        with action to create solutions that go beyond what’s expected and help you navigate the
                        future with confidence.
                    </p>
                </div>
            </div>
        </div>

        <div class="!pt-5 container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">

            <div class="flex flex-col justify-center lg:basis-1/2">
                <h2 id="" class="section-heading pb-4 md:pb-5">
                    The Heart of <span class="text-brand-primary">Our Brand</span>
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="content pb-5">
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
                    <h2 id="" class="section-heading pb-4 md:pb-5">
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
                        <p class="content pb-5">
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
                <h2 id="" class="section-heading pb-5">
                    Our Brand, <span class="text-brand-primary">Your Future;</span> Done Smart
                </h2>
                <!-- <h5 class="text-brand-primary text-lg font-semibold pb-2">
                    Done Smart
                </h5> -->
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="content pb-5">
                        We’re here to help you build a future that’s smarter, more efficient, and full of possibilities.
                        With Done Smart, we’re not just creating solutions—we’re helping you unlock your potential
                        and succeed, no matter what challenges come your way.
                    </p>
                </div>
                <h2 id="" class="section-heading">
                    Ready for Smart Solutions? <br> <span class="text-brand-primary">Let’s start your smart journey
                        today.</span>
                </h2>
            </div>
        </div>

    </section>
</template>

<style scoped></style>
