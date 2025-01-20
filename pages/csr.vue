<script setup>

const bannerContent = ref({
    subtitle: 'CSR',
    title: 'Corporate Social Responsibility',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})


</script>

<template>
    <section class="bg-white">
        <BannerMain :content="bannerContent" />

        <div class="bg-white max-w-6xl mx-auto h-full">
            <div class="container max-w-6xl mx-auto font-sans text-black mt-10">
                <div class="mx-auto mb-5 font-sans">
                    <h1 class="mt-2 text-3xl font-semibold tracking-tight text-black">
                        Acentria Group <span class="text-brand-primary">CSR Mission</span>
                    </h1>
                </div>
                <p class="text-xs">
                    At Acentria Group, our Corporate Social Responsibility (CSR) mission is to drive meaningful impact
                    by
                    empowering prosperity across communities and industries. We are committed to fostering sustainable
                    development, upholding the highest ethical standards, and creating long-lasting value for society
                    through responsible business practices that align with our global vision to be a leader in shaping a
                    prosperous future.
                </p>
            </div>
        </div>

        <div class="font-sans py-2 text-white">
            <!-- Environmental Responsibility -->
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Environmental Responsibility" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="https://old.acentriagroup.com/wp-content/uploads/2023/12/12-1024x625.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="heading-class pb-4">
                        Environmental <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                            Acentria Group is dedicated to minimizing our environmental footprint and promoting
                            sustainable practices within the industries we serve. Our initiatives include:
                        </p>
                        <ul class="text-xs mx-10 list-disc">
                            <li>Partnering with environmental organizations to support reforestation projects and marine
                                conservation efforts across the country.</li>
                            <li>Implementing eco-friendly office policies, including waste reduction, recycling
                                programs, and the use of renewable energy sources.</li>
                            <li>Raising awareness on climate risks and sustainability through digital campaigns and
                                client education.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Philanthropic Responsibility -->
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Philanthropic Responsibility" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="https://old.acentriagroup.com/wp-content/uploads/2023/12/13.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="heading-class pb-4">
                        Philanthropic <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                            We are committed to giving back to the communities in which we operate by supporting
                            initiatives that empower individuals and improve livelihoods. Our efforts include:
                        </p>
                        <ul class="text-xs mx-10 list-disc">
                            <li>Providing scholarships and educational support to underprivileged students, especially
                                in regions with limited access to quality education.</li>
                            <li>Engaging employees in volunteer activities, including mentorship programs and community
                                service, to foster a culture of giving.</li>
                            <li>Partnering with local NGOs to support health and wellness programs, such as free medical
                                camps and community health initiatives.</li>
                            <li>Contributing to disaster relief efforts by offering financial aid to affected
                                communities.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Ethical Responsibility -->
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Ethical Responsibility" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg"
                        src="https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="heading-class pb-4">
                        Ethical <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                            At the heart of Acentria Group’s business practices is a commitment to integrity, fairness,
                            and ethical governance. Our initiatives include:
                        </p>
                        <ul class="text-xs mx-10 list-disc">
                            <li>Ensuring compliance with local and international regulations, promoting fair trade, and
                                preventing corruption.</li>
                            <li><strong>Diversity in Leadership:</strong> We are proud of our diverse board and
                                management, with equal gender representation and balanced decision-making.</li>
                            <li>Enforcing a zero-tolerance policy on workplace discrimination, promoting diversity and
                                inclusion within our workforce.</li>
                            <li>Encouraging ethical sourcing by working with suppliers and partners who share our
                                commitment to ethical standards.</li>
                            <li>Developing a code of ethics to guide our business dealings and stakeholder
                                relationships.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Economic Responsibility -->
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Economic Responsibility" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="https://old.acentriagroup.com/wp-content/uploads/2023/12/13.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="heading-class pb-4">
                        Economic <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                            Acentria Group strives to contribute to economic development by creating value for our
                            stakeholders and promoting responsible growth. Our initiatives include:
                        </p>
                        <ul class="text-xs mx-10 list-disc">
                            <li>Supporting small and medium-sized enterprises (SMEs) with tailored insurance products
                                and financial services.</li>
                            <li>Investing in local communities through job opportunities and skills development
                                programs.</li>
                            <li>Contributing to financial literacy initiatives that educate on risk management and
                                insurance.</li>
                            <li>Prioritizing long-term sustainable business practices to ensure positive socio-economic
                                impacts.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<style scoped></style>