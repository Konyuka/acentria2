<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Who We Are',
    image: 'https://img.freepik.com/free-vector/v915-red_53876-174930.jpg?t=st=1728266840~exp=1728270440~hmac=e94c9d586c21dc1e57888d5e3b499c5109a624670b07a4c6188be1f6b9a5686b&w=826',
})

</script>

<template>
    <section>
        <!-- <ReinsuranceBanner :content="ReinsuranceBannerContent" /> -->

        <div class="bg-white px-6 py-1  font-sans">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:54:9">
                <div class="relative py-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:55:13">
                    <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/bill.jpg" data-v-inspector="components/Why.vue:56:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:60:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                        data-v-inspector="components/Why.vue:61:17">Experience</label>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-normal text-light-title"
                        data-v-inspector="components/Why.vue:63:17">
                        Our journey
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:67:17">
                        <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:68:21">
                            Our journey is about Empowering dreams, igniting
                            imagination, and propelling prosperity to infinite
                            possibilities for all our partners and the communities
                            we serve. Internally we give a fair platform to all our
                            employees to achieve their dreams. Our journey is a
                            testament to humble beginnings, resilience,
                            adaptability, and trust; it involves building a
                            resilient and prosperous community. Through partnerships
                            and collaborations, we have fostered resilience in
                            individuals, businesses, and society as a whole.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped></style>