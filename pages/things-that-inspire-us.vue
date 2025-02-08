<script setup>
const bannerContent = ref({
    subtitle: 'Acentria Group',
    title: 'Things That Inspire Us',
    image: '/img/inspireUs.jpg'
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

        <div>

            <div class="container">
                <div class="py-5">
                    <p class="content">
                        At Acentria Group, we draw inspiration from the possibilities we create. Guided by
                        our
                        mantra— <b>Empower, Innovate, Prosper</b> —we are motivated by the potential to
                        uplift
                        individuals, businesses, and communities, unlocking a brighter future together.
                    </p>
                </div>
            </div>

            <div class="">
                <div class="container mx-auto flex lg:flex-row-reverse flex-col lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg format="webp"  alt="Image of Empowerment" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/empowerment.jpg" style="color: transparent; object-fit: contain;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 id="" class="section-class pb-5">
                            <span class="text-brand-primary">Empower</span>
                        </h2>
                        <p class="content mb-5">
                            We are inspired by the potential within every individual and organization to rise above
                            challenges and unlock new possibilities. Empowerment is at the heart of our mission:
                            <br><br>
                            <span>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>For our clients:</b> We
                                stand with you, providing insights and solutions that help overcome challenges and drive
                                new opportunities. <br>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>For our employees:</b> We
                                create an environment where ideas flourish, ambitions are realized, and diverse talents
                                shine. <br>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>For our communities:</b>
                                We rise with the community, driving initiatives that promote equality, inclusion, and
                                sustainability.
                            </span> <br><br>
                            Each success we help create strengthens our commitment to empowering others.
                        </p>
                    </div>
                </div>
                <div class="container mx-auto flex lg:flex-row flex-col lg:gap-16">
                    <div class="relative p-4">
                        <NuxtImg format="webp"  alt="Image of Innovation" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/inno.png" style="color: transparent;" class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2 mt-5">
                        <h2 id="" class="section-heading">
                            <span class="text-brand-primary">Innovate</span>
                        </h2>
                        <p class="content mb-5">
                            Innovation sparks progress, and we are inspired by the challenges that push us to think
                            differently. We thrive on creating transformative solutions:
                            <br><br>
                            <span>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> We embrace <b>technology and
                                    creativity</b> to redefine possibilities, delivering value in bold, unexpected ways.
                                <br>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> We stay ahead of the curve,
                                driven by the resilience of our stakeholders and their evolving needs.
                            </span> <br><br>
                            Innovation empowers us to unlock new potential and continually redefine what's possible.
                        </p>
                    </div>
                </div>
                <div class="container mx-auto flex lg:flex-row-reverse flex-col lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg format="webp"  alt="Image of Prosperity" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/prosper.jpg" style="color: transparent; object-fit: contain;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 id="" class="section-heading">
                            <span class="text-brand-primary">Prosper</span>
                        </h2>
                        <p class="content mb-5">
                            Prosperity is not just financial—it’s the flourishing of individuals, businesses, and
                            communities, achieving success together:
                            <br><br>
                            <span>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> We are motivated by the
                                <b>positive impact</b> we create in the lives of our clients, partners, and
                                stakeholders. <br>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> Prosperity is measured
                                through <b>lasting relationships</b>, ethical practices, and our contributions to a
                                sustainable future. <br>
                                <i class="fas fa-caret-right text-brand-primary mr-2"></i> Our growth is driven by
                                <b>shared success</b>—when we thrive together, we create a better future for all.
                            </span> <br><br>
                            At Acentria, we are inspired by the power of possibility and the promise of progress.
                            Through <b>Empower, Innovate, Prosper</b>, we turn inspiration into action—every day, in
                            everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
