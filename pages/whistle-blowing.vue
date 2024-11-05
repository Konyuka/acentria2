<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Submit a Report',
    image: 'https://images.pexels.com/photos/532001/pexels-photo-532001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section>
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="">
            <ComplaintForm />
        </div>


    </section>
</template>

<style scoped></style>