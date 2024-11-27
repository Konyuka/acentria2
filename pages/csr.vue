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

        <div class="font-sans mx-auto max-w-7xl my-5" data-v-inspector="components/ReinsuranceWhy.vue:15:17">

            <!-- <p class="font-sans mx-auto mt-6 max-w-7xl text-center text-md text-secondary"
                data-v-inspector="components/ReinsuranceWhy.vue:21:21">
                At Acentria, we are dedicated to social responsibility, ethical practices, and community well-being. Our
                initiatives include community engagement, education and awareness, diversity and inclusion, financial
                literacy programs, and employee volunteering, reflecting our commitment to positive change. We
                prioritize diversity and inclusion, implement sustainable practices, and uphold transparent, ethical
                business standards. Our CSR efforts exemplify our values, making a meaningful impact on both our
                workforce and the communities we serve
            </p> -->

        </div>

        <div class=" bg-white max-w-6xl mx-auto h-full">
            <div class="container max-w-6xl mx-auto font-sans text-black mt-10">
                <div class="mx-auto  mb-5 font-sans">
                    <p class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-black">
                        Our <span class="text-brand-primary">CSR Mission</span>
                    </p>
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


        <div data-v-02281a80="" class="font-sans py-2 text-white">

            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-2 lg:gap-16"
                data-v-inspector="components/Why.vue:8:9">
                <div class="relative p-4 lg:basis-1/2" data-v-inspector="components/Why.vue:9:13">
                    <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="https://acentriagroup.com/wp-content/uploads/2023/12/12-1024x625.jpg"
                        data-v-inspector="components/Why.vue:10:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:14:13">

                    <h2 class="heading-class pb-4" data-v-inspector="components/Why.vue:18:17">
                        Environmental <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                            Acentria Group is dedicated to minimizing our
                            environmental footprint and promoting sustainable practices within the industries we serve.
                            Our Initiatives include:
                        <div class="text-xs mx-10">
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Partnering with environmental organizations to support reforestation projects
                            and marine conservation efforts across the country.
                            <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Implementing eco-friendly office policies, including waste reduction, recycling
                            programs, and the use of renewable energy sources.
                            <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Raising awareness on climate risks and sustainability through digital
                            campaigns and client education.
                            <br>
                        </div>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-2 lg:gap-16"
                data-v-inspector="components/Why.vue:32:9">
                <div class="relative p-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:33:13">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                        src="https://acentriagroup.com/wp-content/uploads/2023/12/13.jpg"
                        data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                    <h2 class="heading-class pb-4" data-v-inspector="components/Why.vue:18:17">
                        Philanthropic <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            We are committed to giving back to the communities in
                            which we operate by supporting initiatives that empower individuals and improve livelihoods.
                            Our philanthropic efforts include: <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Providing scholarships and educational support to underprivileged students,
                            especially in regions with limited access to quality education.
                            <br>
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Engaging employees in volunteer activities, including mentorship programs
                            and community service, to foster a culture of giving.
                            <br>
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Partnering with local NGOs to support health and wellness programs, such as
                            free medical camps and community health initiatives.
                            <br>
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Contributing to disaster relief efforts by offering financial aid to affected
                            communities.
                            <br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-2 lg:gap-16"
                data-v-inspector="components/Why.vue:54:9">
                <div class="relative p-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:55:13">
                    <img alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg"
                        src="https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=600"
                        data-v-inspector="components/Why.vue:56:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:60:13">
                    <h2 class="heading-class pb-4" data-v-inspector="components/Why.vue:18:17">
                        Ethical <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            At the heart of Acentria Group’s business practices is a commitment
                            to integrity, fairness, and ethical governance. These are the core values that guide our
                            actions <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Ensuring compliance with local and international regulations, promoting fair
                            trade, and preventing corruption.
                            <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            <b>Diversity in Leadership</b>: We are proud of our diverse board and
                            management, with 50% of our board comprised of men and women equally,
                            and a 60:40 representation of men and women in management. This
                            commitment to gender diversity fosters balanced decision-making and
                            reinforces our dedication to equal opportunity and inclusion.
                            <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Enforcing a zero-tolerance policy on workplace discrimination, promoting
                            diversity and inclusion within our workforce.
                            <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Encouraging ethical sourcing by working with suppliers and partners who
                            share our commitment to ethical standards.
                            <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Developing a code of ethics that governs our business dealings and guides
                            our relationships with clients, employees, and stakeholders.
                            <br>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-2 lg:gap-16"
                data-v-inspector="components/Why.vue:32:9">
                <div class="relative p-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:33:13">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                        src="https://acentriagroup.com/wp-content/uploads/2023/12/13.jpg"
                        data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                    <h2 class="heading-class pb-4" data-v-inspector="components/Why.vue:18:17">
                        Economic <span class="text-brand-primary">Responsibility</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Acentria Group strives to contribute to economic development
                            by creating value for our stakeholders, promoting responsible growth, and providing
                            innovative solutions that support financial stability and prosperity. These are some of our
                            initiatives <br>

                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Supporting small and medium-sized enterprises (SMEs) by providing tailored
                            insurance products and financial services that promote their growth and
                            resilience.
                            <br>
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Investing in local communities by creating job opportunities and fostering
                            economic empowerment through skills development programs.
                            <br>
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Contributing to financial literacy initiatives that educate individuals and
                            businesses on the importance of risk management and insurance in securing
                            their future.
                            <br>
                            <span class="font-semibold mr-2 text-4xl pb-2">.</span>
                            Prioritizing long-term sustainable business practices that drive profitability
                            while ensuring positive socio-economic impacts.
                            <br>
                        </p>
                    </div>
                </div>
            </div>

            <!-- <div class="container mx-auto max-w-6xl">
                <video src="/img/esg.mp4" alt="Success Team Hands Up"
                    class="my-5 h-full w-full object-cover object-right md:object-center rounded-lg" autoplay muted
                    loop>
                    Your browser does not support the video tag.
                </video>
            </div> -->
        </div>

    </section>
</template>

<style scoped></style>