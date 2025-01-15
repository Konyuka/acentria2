<script setup>
const bannerContent = ref({
    subtitle: 'Acentria Group',
    title: 'Our Brand',
    image: 'https://images.pexels.com/photos/6535346/pexels-photo-6535346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const faqs = ref([
    {
        name: "Think Customer",
        content: "I care about our customers so I go the extra mile to earn their trust and loyalty.",
    },
    {
        name: "Embrace Change",
        content: "I embrace new challenges and I see new ways of doing things as an opportunity to grow.",
    },
    {
        name: "Act Now",
        content: "I take accountability and manage risks accordingly, always keeping things simple.",
    },
    {
        name: "Move Together",
        content: "I seek opportunities to promote collaboration and work together to achieve common goals.",
    },
    {
        name: "Speak Up",
        content: "I feel free to raise any idea, ask any question or escalate any issues or risks, building an environment of respect and trust. I am comfortable sharing and receiving feedback.",
    },
]);

const joinAsMembers = ref([
    {
        name: 'Trust as a Foundation',
        icon: 'fas fa-handshake',
        description: 'Trust is the cornerstone of our brand. We prioritize transparency, ethical practices, and accountability, ensuring that every engagement with Acentria inspires confidence.'
    },
    {
        name: 'Commitment to Innovation',
        icon: 'fas fa-lightbulb',
        description: 'Our brand reflects our passion for innovation—creating solutions that address today’s challenges while preparing our clients and partners for the opportunities of tomorrow.'
    },
    {
        name: 'Dedication to Excellence',
        icon: 'fas fa-award',
        description: 'Excellence isn’t just a goal; it’s a standard. From the way we strategize and execute to the outcomes we deliver, excellence is ingrained in everything we do.'
    },
])
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
                    data-nimg="1" src="/img/award.jpg" style="color: transparent; object-fit: contain;"
                    class="rounded-lg" />
            </div>
            <div class="flex flex-col justify-center lg:basis-1/2">
                <h2 id="" class="heading-class pb-4 md:pb-5">
                    Our Commitment <span class="text-brand-primary">To Excellence</span>
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
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
                    <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
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
                    data-nimg="1" src="/img/award.jpg" style="color: transparent; object-fit: contain;"
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
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
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
                <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                    data-nimg="1" src="/img/award.jpg" style="color: transparent; object-fit: contain;"
                    class="rounded-lg" />
            </div>
            <div class="flex flex-col justify-center lg:basis-1/2 ">
                <h2 id="" class="heading-class">
                    Our Brand <span class="text-brand-primary">Promise</span>
                </h2>
                <h5 class="text-brand-primary text-lg font-semibold pb-2">
                    Done Smart
                </h5>
                <div class="text-light-content pb-5 md:pb-6">
                    <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                        At Acentria, our brand promise is simple yet powerful: "Done Smart." Every strategy, every
                        service, and every solution we deliver is designed with intelligence and innovation in mind. We
                        commit to providing our clients with the smartest solutions, empowering them to thrive in an
                        ever-evolving world. Our promise reflects the precision, thoughtfulness, and expertise we bring
                        to every project.
                        At Acentria, we don’t settle for the status quo. Our approach goes beyond traditional methods.
                        We lead by embracing fresh ideas, challenging norms, and applying cutting-edge strategies. With
                        a focus on innovation and creativity, we empower our teams to think smarter, collaborate more
                        effectively, and deliver exceptional results. It’s not just about being good; it’s about being
                        intelligent in every decision and every step we take. Through forward-thinking leadership, we
                        stay ahead of the curve and set new standards for excellence.
                    </p>
                </div>
                <h2 id="" class="heading-class">
                    We are Acentria. <span class="text-brand-primary">We Ensure Smart Solutions.</span>
                </h2>
            </div>
        </div>

        <!-- <div class="bg-white">
            <div class="container pt-20 text-left pt-5">
                <h2 id="" class="heading-class pb-4 md:pb-5">
                    Document <span class="text-brand-primary">Downloads</span>
                </h2>
            </div>

            <div class="relative w-full bg-cover bg-center bg-no-repeat" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover px-4 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center max-w-5xl">
                            <div>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                                    For your convenience, we have made available all essential documents related to our
                                    brand. You can download our company profile, logo, brand guidelines, and other
                                    important materials. These resources are designed to help you understand and
                                    represent the Acentria Group brand accurately and consistently. Please ensure that
                                    you adhere to our brand guidelines when using these materials to maintain the
                                    integrity and professionalism of our brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-2 font-sans">
                <div class="max-w-7xl mx-auto pb-4">
                    <div class="mx-auto my-2 max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-3xl divide-y divide-gray-900/10">
                            <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                                <div class="flex justify-between text-lg">
                                    <p>Brand Guidelines</p>
                                    <p><i class="fas fa-download text-brand-primary"></i></p>
                                </div>
                                <div class="flex justify-between text-lg">
                                    <p>Company Profiles</p>
                                    <p><i class="fas fa-download text-brand-primary"></i></p>
                                </div>
                                <div class="flex justify-between text-lg">
                                    <p>Logo Files</p>
                                    <p><i class="fas fa-download text-brand-primary"></i></p>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </section>
</template>

<style scoped></style>
