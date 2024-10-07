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
                data-v-inspector="components/Why.vue:8:9">
                <div class="relative py-4 lg:basis-1/2 scale-90" data-v-inspector="components/Why.vue:9:13">
                    <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/innovate.png" data-v-inspector="components/Why.vue:10:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:14:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                        data-v-inspector="components/Why.vue:15:17">Acentria Group
                    </label>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Who we are
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Acentria Group of companies is a trusted global
                            consultant in Risk and Insurance, Reinsurance,
                            Actuarial, and Investment Advisory. With decades of
                            experience and a commitment to excellence, we provide
                            comprehensive solutions tailored to meet the unique
                            needs of our clients. Our team of experts works
                            diligently to deliver innovative strategies that enhance
                            risk management, optimize insurance and reinsurance
                            programs, and provide insightful actuarial and
                            investment advice. By partnering with Acentria Group,
                            you gain access to a wealth of knowledge and resources
                            that empower you to make informed decisions, mitigate
                            risks, and achieve your financial goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped></style>