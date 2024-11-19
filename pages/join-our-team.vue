<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Join Our Team',
    image: 'https://images.pexels.com/photos/955388/pexels-photo-955388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container py-10">
            <JoinForm />
        </div>

    </section>
</template>

<style scoped></style>