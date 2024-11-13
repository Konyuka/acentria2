<script setup>
const props = defineProps({
    data: Array,
})

</script>

<template>

    <div class="relative w-full bg-cover bg-center bg-no-repeat false py-4 bg-white"
        style="background-image:url(''); transform: scaleX(-1);">
        <div class="container" style="transform: scaleX(-1);">
            <div
                class="flex items-center bg-cover px-4 py-4 text-center md:py-1 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                <div class="grid grid-cols-4">
                    <div class="col-span-4 flex justify-center align-middle items-center">
                        <div
                            class="container flex flex-col gap-6 mx-auto items-center justify-center text-center max-w-6xl">
                            <div class="font-sans text-light-content">
                                <p class="text-xs leading-normal font-regular text-light-content !text-inherit">
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
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>