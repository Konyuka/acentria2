<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Corporate Social Responsibility',
    image: 'https://images.pexels.com/photos/207489/pexels-photo-207489.jpeg?auto=compress&cs=tinysrgb&w=600',
})

</script>

<template>
    <section>
        <!-- <ReinsuranceBanner :content="ReinsuranceBannerContent" /> -->

        <div class="relative isolate overflow-hidden bg-white py-20 mt-40">

            <img :src="ReinsuranceBannerContent.image" alt="Success Team Hands Up"
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

            <div class="absolute inset-0 bg-black opacity-40"></div>

            <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                <div class="grid grid-cols-10 -gap-10">
                    <div class="text-white col-span-1">
                        <div class="w-20 h-1 bg-white mt-3">

                        </div>
                    </div>
                    <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                        <h2 class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                            CSR
                        </h2>
                        <h2 class="text-left text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
                            {{ ReinsuranceBannerContent.title }}
                        </h2>
                        <p class="text-white text-left max-w-2xl mt-7">
                            At Acentria, we are dedicated to social responsibility, ethical practices, and community
                            well-being. Our
                            initiatives include community engagement, education and awareness, diversity and inclusion,
                            financial
                            literacy programs, and employee volunteering, reflecting our commitment to positive change.
                            We
                            prioritize diversity and inclusion, implement sustainable practices, and uphold transparent,
                            ethical
                            business standards. Our CSR efforts exemplify our values, making a meaningful impact on both
                            our
                            workforce and the communities we serve
                        </p>
                    </div>
                </div>
            </div>

        </div>

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

        <div data-v-02281a80="" class="font-sans py-2 text-white" style="background-color: rgb(246, 248, 252)">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:8:9">
                <div class="relative p-4 lg:basis-1/2" data-v-inspector="components/Why.vue:9:13">
                    <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="https://acentriagroup.com/wp-content/uploads/2023/12/12-1024x625.jpg"
                        data-v-inspector="components/Why.vue:10:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:14:13">

                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Sustainable Practices
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                            Acentria is committed to minimizing its environmental footprint through the adoption of
                            sustainable practices. From energy-efficient office spaces to responsible waste management,
                            we actively seek ways to reduce our impact on the environment. We also encourage our
                            partners and suppliers to embrace eco-friendly solutions.
                        </p>
                    </div>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Carbon Neutrality
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                            We recognize the urgency of addressing climate change. Acentria is actively working towards
                            becoming a carbon-neutral company. This involves measuring and reducing our carbon
                            emissions, as well as offsetting unavoidable emissions through investments in verified
                            carbon offset projects.
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:32:9">
                <div class="relative p-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:33:13">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                        src="https://acentriagroup.com/wp-content/uploads/2023/12/13.jpg"
                        data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Diversity and Inclusion
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Acentria values diversity and inclusion as essential components of a thriving workplace. We
                            strive to create a culture that celebrates differences, fosters equality, and ensures that
                            every team member feels valued. Our commitment to diversity extends to our partnerships,
                            ensuring that we collaborate with organizations that share our values.
                        </p>
                    </div>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Community Engagement
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            We believe in giving back to the communities in which we operate. Acentria actively supports
                            local initiatives and charities, contributing to social development and making a positive
                            impact on the lives of those in need. Our employees are encouraged to participate in
                            volunteer programs that align with our commitment to social responsibility.
                        </p>
                    </div>
                </div>
            </div>


            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:54:9">
                <div class="relative p-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:55:13">
                    <img alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg"
                        src="https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&w=600"
                        data-v-inspector="components/Why.vue:56:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:60:13">
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Ethical Business Practices
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Integrity is at the core of Acentria's governance model. We adhere to the highest ethical
                            standards in all our business dealings. Our governance practices prioritize transparency,
                            accountability, and fairness, ensuring that our stakeholders can trust us to make decisions
                            that align with their interests.
                        </p>
                    </div>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Board Diversity
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Acentria recognizes the importance of diverse perspectives in decision-making. Our board of
                            directors is composed of individuals with varied backgrounds, experiences, and skills. This
                            diversity enhances our ability to navigate complex challenges and make informed decisions
                            that benefit our company and stakeholders.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto max-w-6xl">
                <video src="/img/csr.mp4" alt="Success Team Hands Up"
                    class="my-5 h-full w-full object-cover object-right md:object-center rounded-lg" autoplay muted
                    loop>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

    </section>
</template>

<style scoped></style>