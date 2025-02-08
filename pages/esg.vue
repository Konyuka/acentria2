<script setup>

const bannerContent = ref({
    subtitle: 'ESG',
    title: 'Environmental, Social & Governance',
    image: '/img/esggreen.jpg'
})


</script>

<template>
    <section class="bg-white">

        <BannerMain :content="bannerContent" />


        <div class="bg-white max-w-6xl mx-auto h-full">
            <div class="container max-w-6xl mx-auto font-sans text-black mt-10">
                <div class="mx-auto mb-5 font-sans">
                    <p class="mt-2 text-2xl font-semibold tracking-tight text-black">
                        Our <span class="text-brand-primary">ESG Mission</span>
                    </p>
                </div>
                <p class="text-xs leading-normal">
                    At Acentria Group, our vision is to be a global leader empowering prosperity. Central to this vision
                    is our commitment to Environmental, Social, and Governance (ESG) principles, which guide our efforts
                    to create sustainable value for all stakeholders. Our ESG mission is rooted in integrating
                    responsible practices across our operations, fostering positive social impact, and upholding strong
                    governance standards.
                    <br><br>
                    Our ESG mission is intricately linked to our vision of empowering prosperity. By embedding ESG
                    principles into our core business strategy, we aim to create sustainable value for our shareholders,
                    employees, customers, and communities worldwide. Through continuous innovation and collaboration,
                    Acentria Group strives to lead by example in driving positive change and contributing to a more
                    sustainable and inclusive future.
                </p>
            </div>
        </div>


        <div data-v-02281a80="" class="font-sans py-2 text-white">

            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg format="webp"  alt="Image of Elevate strategic risk management" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/foree.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="text-xl font-semibold pb-4 leading-normal text-black">
                        Environmental Stewardship
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal text-black mb-4">
                            We recognize the importance of environmental sustainability in preserving our planet for
                            future generations. Acentria Group is dedicated to minimizing our environmental footprint
                            through initiatives such as:
                            <span class="text-xs mx-10 text-black">
                                <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                                Implementing energy-efficient practices in our offices and operations.
                                <br>
                                <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                                Promoting recycling and waste reduction programs.
                                <br>
                                <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                                Supporting renewable energy sources and reducing greenhouse gas emissions.
                                <br>
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2 content-center">
                    <NuxtImg format="webp"  alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                        src="/img/greenbulb.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="text-xl font-semibold pb-4 leading-normal text-black">
                        Social Responsibility
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal text-black mb-4">
                            Acentria Group is committed to making a positive impact on the communities where we operate
                            and beyond. Our social responsibility initiatives include:
                            <br>
                            <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                            Investing in community development projects that promote education, healthcare, and economic
                            empowerment.
                            <br>
                            <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                            Supporting diversity and inclusion within our workforce and supplier network.
                            <br>
                            <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                            Engaging in philanthropic activities and volunteering efforts to address societal
                            challenges.
                            <br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2 content-center">
                    <NuxtImg format="webp"  alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/compass2.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="text-xl font-semibold pb-4 leading-normal text-black">
                        Governance Excellence
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal text-black mb-4">
                            We uphold the highest standards of corporate governance to ensure transparency,
                            accountability, and ethical conduct in all our business practices. Our governance framework
                            includes:
                            <br>
                            <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                            Maintaining a diverse and independent board of directors that reflects our stakeholders'
                            interests.
                            <br>
                            <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                            Conducting regular audits and risk assessments to uphold compliance with regulatory
                            requirements.
                            <br>
                            <span class="font-semibold mr-2 text-2xl pb-2">.</span>
                            Promoting a culture of integrity and ethical behavior among our employees and partners.
                            <br>
                        </p>
                    </div>
                </div>
            </div>


        </div>

    </section>
</template>

<style scoped></style>