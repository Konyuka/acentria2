<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Acentria Group Careers',
    subTitle: 'Open Postions',
    image: '/img/Professionals and Business Service.jpg',
})

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container min-h-[60vh] flex justify-center items-center">
            <div class="flex flex-col gap-10">
                <h4 class="font-sans text-5xl pb-5 text-brand-primary">We currently do not have open positions</h4>
            </div>
        </div>

        <InTouch />
    </section>
</template>

<style scoped></style>