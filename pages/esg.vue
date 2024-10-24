<script setup>

const bannerContent = ref({
    subtitle: 'ESG',
    title: 'Environmental, Social & Governance',
    image: 'https://images.pexels.com/photos/19891034/pexels-photo-19891034/free-photo-of-scrabble-tiles-on-a-wooden-table-with-the-word-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})


</script>

<template>
    <section>
        
        <BannerMain :content="bannerContent" />

        <div data-v-02281a80="" class="font-sans py-2 text-white" style="background-color: rgb(246, 248, 252)">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:8:9">
                <div class="relative p-4 lg:basis-1/2" data-v-inspector="components/Why.vue:9:13">
                    <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="https://acentriagroup.com/wp-content/uploads/2023/12/Screenshot-24.jpg"
                        data-v-inspector="components/Why.vue:10:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:14:13">

                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        ESG (Environmental, Social, and Governance)
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            We are a signatory to The Nairobi Declaration on Sustainable Insurance, a commitment by
                            African insurance industry leaders to support the achievement of the UN Sustainable
                            Development Goals.
                        </p>
                    </div>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Governance and Compliance
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Acentria Group places a strong emphasis on governance and compliance. Our governance
                            structure ensures transparency, accountability, and adherence to regulatory standards. We
                            maintain rigorous internal controls and continuously update our policies to align with
                            industry best practices.
                        </p>
                    </div>
                </div>
            </div>

            <div class="font-sans mx-auto max-w-7xl my-10 px-10" data-v-inspector="components/ReinsuranceWhy.vue:15:17">
                <p class="font-sans mx-auto mt-6 max-w-7xl text-left text-xs text-secondary"
                    data-v-inspector="components/ReinsuranceWhy.vue:21:21">
                    Our social responsibility extends beyond business operations. We prioritize fair labour practices,
                    employee well-being, and human rights considerations. We conduct regular audits to ensure compliance
                    with social responsibility standards, and our employees benefit from comprehensive health and
                    wellness programs.With our cycling team, we support cycling in Kenya for a greener tomorrow. We also
                    support the youth through the Maven Mentorship Programme.
                </p>

                <video src="/img/esg.mp4" alt="Success Team Hands Up"
                    class="my-5 h-full w-full object-cover object-right md:object-center rounded-lg" autoplay muted
                    loop>
                    Your browser does not support the video tag.
                </video>

            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:32:9">
                <div class="relative p-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:33:13">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                        src="https://images.pexels.com/photos/580900/pexels-photo-580900.jpeg?auto=compress&cs=tinysrgb&w=600"
                        data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Environmental Impact
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            As part of our commitment to environmental sustainability, our offices implement
                            energy-efficient practices, waste reduction programs, and sustainable sourcing initiatives
                            to minimize our environmental footprint. We also support tree planting at Michuki National
                            Park, Olympics Primary School in cleaning and charity works in Kenya. As part of our
                            commitment to responsible business, we actively seek sustainable and environmentally
                            friendly investment opportunities within our businesses.
                        </p>
                    </div>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Risk Management
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            In the insurance industry, effective risk management is paramount. Our expert team of
                            professionals works tirelessly to assist clients in identifying, assessing, and mitigating
                            risks. By leveraging cutting- edge technology, we provide comprehensive risk solutions
                            tailored to our clients' needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped></style>