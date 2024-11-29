<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Submit a Report',
    subTitle: 'Whistle Blowing',
    image: 'https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <ComplaintForm />
        </div>


    </section>
</template>

<style scoped></style>