<script setup>

const bannerContent = ref({
    subtitle: 'Our Products',
    title: 'Insurance Products Catalogue',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})


</script>

<template>
    <section class="bg-white">

        <BannerMain :content="bannerContent" />

        <div class="bg-white w-full h-full">
            <div class="container py-5 max-w-6xl mx-auto font-sans text-black mt-2">
                <div class="mx-auto  mb-3 font-sans">
                    <p class="mt-2 heading-class text-black">
                        Explore all <span class="text-brand-primary">Our Products</span>
                    </p>
                </div>
                <p class="text-xs leading-normal">
                    Welcome to the Acentria Group Insurance Products Catalogue. Here, you will find a comprehensive list
                    of all the insurance products we offer. Our goal is to provide you with the information you need to
                    make informed decisions about your insurance coverage. Whether you are looking for auto insurance,
                    home insurance, life insurance, or any other type of insurance, we have you covered. Our team of
                    insurance experts is here to help you find the right insurance products to meet your needs and
                    budget. Explore our insurance products catalogue today and discover the peace of mind that comes with
                    knowing you are protected.                    

                </p>
            </div>
        </div>



    </section>
</template>

<style scoped></style>