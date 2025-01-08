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
                            At Acentria Group, our brand is more than just a representation of our identity—it’s a
                            powerful testament to our values, vision, and the aspirations of those we serve. It captures
                            the very essence of who we are, what we stand for, and the impact we aim to create in the
                            lives of our clients, partners, employees, and communities.
                            <br><br>
                            Our brand is anchored in three fundamental pillars: Integrity, Innovation, and Excellence.
                            These core values define every aspect of our organization, from how we conduct business to
                            how we build relationships. They are not just words—they are commitments that shape our
                            decisions, inspire our actions, and drive us to deliver solutions that are transformative
                            and sustainable.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-white">
            <div class="bg-white">
                <div class="container mx-auto flex px-4 lg:flex-row flex-col py-8 lg:py-4 lg:gap-16 items-center">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Board of Directors" loading="lazy" decoding="async" data-nimg="1"
                            src="/img/logo/png1.png" style="color: transparent; object-fit: contain;"
                            class="rounded-lg w-full" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2 mt-5">
                        <h2 id="" class="heading-class pb-4 md:pb-5">
                            Beyond a Logo <span class="text-brand-primary">or Tagline</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Our brand is not confined to visual identity—it is a reflection of our culture and our
                                promise. It’s visible in the way we engage with our clients, the quality of our
                                solutions, and the relationships we nurture. It is reinforced through every interaction,
                                from the smallest detail to our largest undertakings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container pt-5">
                <div class="mx-auto font-sans">
                    <h1 class="mt-2 heading-class text-black">
                        The heart <span class="text-brand-primary">of Our Brand</span>
                    </h1>
                </div>
            </div>

            <div class="pb-5 !bg-transparent w-full h-full container mx-auto max-w-6xl">
                <div class="b !font-sans my-0">
                    <div class="sm:px-2 lg:px-4">
                        <div class="lg:max-w-none">
                            <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3">
                                <div v-for="member in joinAsMembers" :key="member.name"
                                    class="relative group button-animation sm:flex lg:block bg-white/20 px-5 py-2 rounded-xs border-t-8 border-brand-primary">
                                    <div class="sm:flex-shrink-0 flex justify-center">
                                        <i :class="member.icon" class="text-black text-2xl"></i>
                                    </div>
                                    <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                        <h3 class="text-md text-brand-primary flex justify-center">{{ member.name }}
                                        </h3>
                                        <p class="mt-2 text-[12px] text-black">{{ member.description }}</p>
                                    </div>
                                    <i class="absolute !right-5 fas fa-angle-right !bottom-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white">
                <div class="!pt-5 container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/award.jpg" style="color: transparent; object-fit: contain;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 id="" class="heading-class pb-4 md:pb-5">
                            A Brand <span class="text-brand-primary">That Empowers</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                We believe a strong brand isn’t just about delivering results—it’s about inspiring
                                growth, fostering trust, and creating impact. Our brand stands for:
                                <br>
                                <span>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>Empowering our
                                        clients</b> to overcome challenges, seize opportunities, and achieve their goals
                                    with confidence. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>Empowering our
                                        employees</b> by providing an inclusive and dynamic environment where they can
                                    thrive and contribute to our shared mission. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>Empowering
                                        communities</b> by driving initiatives that promote sustainability, equity, and
                                    shared prosperity.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col py-8 lg:py-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Ethical Conduct" loading="lazy" decoding="async" data-nimg="1"
                            src="https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            style="color: transparent; object-fit: contain;" class="w-full h-[250px] rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 id="" class="heading-class pb-4 md:pb-5">
                            A Legacy <span class="text-brand-primary">of Responsibility</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                At Acentria, our brand is also a pledge to act responsibly. From ethical business
                                practices to impactful community engagements, we ensure that our success contributes to
                                the well-being of society and the environment. This commitment is visible in our efforts
                                to maintain gender parity at senior leadership levels and to align our operations with
                                sustainable development goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <!-- <NuxtImg alt="Image of Corporate Governance" loading="lazy" width="500" height="350"
            decoding="async" data-nimg="1" src="/img/empower.jpg"
            style="color: transparent; object-fit: contain;" class="rounded-lg"> -->
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="heading-class pb-4 md:pb-5 text-black mt-4">
                        The <span class="text-brand-primary">Acentria Way!</span>
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular !text-black mb-4">
                            The Acentria Way embodies the culture and principles that unite us across our global
                            footprint. It reflects our purpose, <span class="italic">“to empower dreams and ignite
                                imagination,” and our aim, “to lead as the trusted provider of innovative solutions,
                                acting responsibly while earning the trust of our people, clients, partners, and
                                communities.”</span> This ethos guides every interaction and initiative, ensuring that
                            our goals align with those of our stakeholders and the broader society.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white">
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
        </div>
    </section>
</template>

<style scoped></style>
