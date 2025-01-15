<script setup>
const bannerContent = ref({
    subtitle: 'Acentria Group',
    title: 'Things That Inspire Us',
    image: 'https://img.freepik.com/free-vector/illustration-light-bulb-ideas_53876-18150.jpg?t=st=1736940696~exp=1736944296~hmac=0aa459f06202624661843cf8965815496b30607258bc135ab65108ea150e1b6d&w=996'
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
            <div class="relative w-full bg-cover bg-center bg-no-repeat" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover px-4 py-10 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center max-w-5xl">
                            <div>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                                    At Acentria Group, inspiration fuels our purpose and drives everything we do. Guided
                                    by our mantra— <b>Empower, Innovate, and Prosper</b> —we find motivation in the
                                    possibilities we create for our clients, partners, communities, and employees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-white">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/empowerment.jpg" style="color: transparent; object-fit: contain;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 id="" class="heading-class pb-4 md:pb-5">
                            <span class="text-brand-primary">Empower</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                We are inspired by the potential within every individual and organization to achieve
                                greatness. Empowerment is at the heart of our mission:
                                <br><br>
                                <span>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>For our clients:</b>
                                    Providing the tools, insights, and solutions they need to overcome challenges and
                                    unlock new opportunities. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>For our employees:</b>
                                    Fostering an environment where ideas flourish, ambitions are realized, and diverse
                                    talents shine. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> <b>For our
                                        communities:</b> Creating a positive impact by driving initiatives that promote
                                    equality, inclusion, and sustainability.
                                </span> <br><br>
                                Every success story we help write inspires us to continue empowering others to achieve
                                their dreams.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col lg:gap-16">
                    <div class="relative p-4">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/inno.png" style="color: transparent;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2 mt-5">
                        <h2 id="" class="heading-class">
                            <span class="text-brand-primary">Innovate</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Innovation is the spark that ignites progress, and we draw inspiration from the
                                ever-changing world around us.
                                <br><br>
                                <span>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> We are inspired by
                                    <b>challenges</b> that push us to think differently and create transformative
                                    solutions. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> We embrace <b>technology
                                        and creativity</b> to redefine possibilities and deliver value in bold,
                                    unexpected ways. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> We celebrate the
                                    <b>resilience of our stakeholders</b>, whose evolving needs drive us to stay ahead
                                    of the curve.
                                </span> <br><br>
                                Innovation inspires us to keep pushing boundaries, unlocking new potential for those we
                                serve.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/prosper.jpg" style="color: transparent; object-fit: contain;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 id="" class="heading-class">
                            <span class="text-brand-primary">Prosper</span>
                        </h2>
                        <div class="text-light-content pb-5">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Prosperity is more than financial success—it’s the flourishing of individuals,
                                businesses, and communities, its about winning together!
                                <br><br>
                                <span>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> We are inspired by the
                                    <b>positive impact</b> we create in the lives of our clients and their stakeholders.
                                    <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> We measure prosperity
                                    through <b>lasting relationships</b>, ethical practices, and contributions to a
                                    sustainable future. <br>
                                    <i class="fas fa-caret-right text-brand-primary mr-2"></i> We are motivated by the
                                    <b>shared growth</b> we experience when we succeed together with our clients and
                                    partners.
                                </span> <br><br>
                                The pursuit of prosperity inspires us to act responsibly and strive for a better,
                                brighter future for all.
                                At Acentria Group, we are inspired by the power of possibility and the promise of
                                progress. Through <b>Empower, Innovate, and Prosper,</b> we remain committed to turning
                                inspiration into action—every day, in everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
