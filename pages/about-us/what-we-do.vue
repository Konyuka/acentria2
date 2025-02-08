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
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:32:9">
                <div class="relative py-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:33:13">
                    <NuxtImg format="webp"  alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                        src="/img/what.jpg" data-v-inspector="components/Why.vue:34:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                        data-v-inspector="components/Why.vue:39:17">Our Services
                    </label>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-normal text-light-title"
                        data-v-inspector="components/Why.vue:42:17">
                        What We Do
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:46:17">
                        <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:47:21">
                            We offer the best solutions in Risk and Insurance,
                            Reinsurance, Actuarial, and Investment Advisory. We
                            consider the trust of our stakeholders and communities
                            to be our most valuable resource. To us, success is not
                            only measured by the products and services we offer, but
                            more importantly, by providing innovative solutions that
                            ensure sustainable development, and serve our
                            environment and societies in the best way possible.
                            Accordingly, we make sure that we are in compliance with
                            laws and regulations and that we are investing in the
                            public good in terms of the projects we take on, the
                            partners we choose, and the way we do business We are
                            committed to equal gender representation at all levels
                            having archived a 50:50 senior management gender parity.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped></style>