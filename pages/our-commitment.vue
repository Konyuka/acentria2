<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Acentria\'s Commitment',
    subTitle: 'Our Pledge to You',
    image: 'https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section class="font-sans bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div>
            <div class="relative w-full bg-cover bg-center bg-no-repeat" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover py-10 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center">
                            <div>
                                <h1 class="my-5 heading-class text-black text-left">
                                    Our <span class="text-brand-primary">Commitment</span>
                                </h1>
                                <p
                                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal pb-2">
                                    At Acentria Group, our success is defined by the relationships we nurture with those
                                    who share our journey—our staff, customers, partners, and the communities we serve.
                                    This commitment is deeply embedded in our mantra: <b>Empower, Innovate, Prosper</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-white">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-2 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" src="/img/team.jpeg" style="color: transparent; object-fit: contain;"
                            class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h1 id="" class="heading-class pb-4 text-black">
                            To <span class="text-brand-primary">Our Staff</span>
                        </h1>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit">
                                Our people are our greatest asset. At Acentria, we create an environment where ambition
                                meets opportunity. We empower our employees by creating a supportive and inclusive
                                workplace where talent is nurtured, ideas are valued, and careers are built.
                                <br><br>
                                <span>
                                    • <b>Opportunities for Growth:</b> Continuous learning, training, and development
                                    programs to help our team thrive. <br>
                                    • <b>Inclusive Culture:</b> A commitment to diversity, equity, and gender parity,
                                    ensuring every voice is heard. <br>
                                    • <b>Well-Being & Balance:</b> Initiatives and policies designed to support
                                    work-life balance and holistic well-being.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1"
                            src="https://images.pexels.com/photos/1136465/pexels-photo-1136465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            style="color: transparent; object-fit: contain;" class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2 mt-5">
                        <h1 id="" class="heading-class pb-4 text-black">
                            To <span class="text-brand-primary">Our Customers</span>
                        </h1>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit">
                                Our customers inspire us to continuously innovate. We are committed to delivering
                                solutions that exceed expectations.
                                <br><br>
                                <span>
                                    • <b>Personalized Excellence:</b> We take time to understand your needs, crafting
                                    solutions that are as unique as you are. <br>
                                    • <b>Trustworthy Relationships:</b> Transparency and honesty are at the heart of
                                    every interaction. <br>
                                    • <b>Long-Term Impact:</b> Your success is our success, and we are with you every
                                    step of the way.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-2 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1"
                            src="https://media.istockphoto.com/id/2174452723/photo/an-african-american-programmer-tackles-challenges-in-a-modern-office-environment.jpg?s=2048x2048&w=is&k=20&c=tvrDC-gpxbIusfVqB03by26V3vD4yFruekdM9wXLEmk="
                            style="color: transparent; object-fit: contain;" class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h1 id="" class="heading-class pb-4 text-black">
                            To <span class="text-brand-primary">Our Partners</span>
                        </h1>
                        <div class="text-light-content pb-5">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit">
                                Collaboration powers our progress. At Acentria, we build partnerships grounded in trust
                                and shared purpose.
                                <br><br>
                                <span>
                                    • <b>Shared Vision:</b> Together, we co-create strategies that redefine industries
                                    and drive collective success. <br>
                                    • <b>Ethical Collaboration:</b> We uphold the highest standards of fairness and
                                    accountability in every partnership. <br>
                                    • <b>Synergized Solutions:</b> Working together, we achieve more for our customers
                                    and stakeholders.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col py-2 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2">
                        <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1"
                            src="https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.webp?s=1024x1024&w=is&k=20&c=J-ieaHhBhiAiuZliJNBwymxYBcYKvwUXTiUzu3Jwzik="
                            style="color: transparent; object-fit: contain;" class="rounded-lg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h1 id="" class="heading-class pb-4 text-black">
                            To <span class="text-brand-primary">Our Communities</span>
                        </h1>
                        <div class="text-light-content pb-5">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit">
                                Giving back is a fundamental part of who we are. We are committed to building resilient
                                and thriving communities.
                                <br><br>
                                <span>
                                    • <b>Sustainable Initiatives:</b> We actively engage in projects that protect the
                                    environment and promote green solutions. <br>
                                    • <b>Empowering Society:</b> Through education, health, and economic programs, we
                                    uplift those around us. <br>
                                    • <b>Purpose-Driven Leadership:</b> Our actions reflect our dedication to creating a
                                    better tomorrow.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>