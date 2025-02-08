<script setup>
const bannerContent = ref({
    subtitle: 'Risk',
    title: 'Explore Risk Areas',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=600'
})

const riskAreas = ref([
    {
        name: 'Agriculture <span class="text-brand-primary">Industry</span>',
        img: 'https://img.freepik.com/free-photo/close-up-hands-holding-plants_23-2149142897.jpg?t=st=1737360269~exp=1737363869~hmac=85fe35a89cc4a1455cb121fc64d906ed2b29b41cedc5d24a95ea9948369d8f52&w=996',
        link: '/products/agriculture',
        description: 'Comprehensive coverage for farmers and agribusinesses, protecting crops, livestock, and equipment.',
    },
    {
        name: 'Construction <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hard-hat',
        img: '/img/construction.jpg',
        link: '/products/construction',
        description: 'Safeguard your construction projects with policies tailored to manage risks and ensure smooth operations.',
    },
    {
        name: 'Financial Services <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-chart-line',
        img: '/img/iStock-483918009.jpg',
        link: '/products/financial-services',
        description: 'Protect your financial assets and mitigate risks with insurance solutions designed for financial institutions.',
    },
    {
        name: 'Energy and Mining <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-industry',
        img: '/img/industries.jpeg',
        link: '/products/energy-and-mining',
        description: 'Coverage for energy and mining industries to address operational risks and ensure business continuity.',
    },
    {
        name: 'Manufacturing <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-cogs',
        img: '/img/inda.png',
        link: '/products/manufacturing',
        description: 'Comprehensive policies to protect manufacturing processes, equipment, and supply chains.',
    },
    {
        name: 'Hotel and Tourism <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hotel',
        img: '/img/travel3.jpg',
        link: '/products/hotel-and-tourism',
        description: 'Tailored insurance for hotels and tourism businesses to protect guests, property, and operations.',
    },
    {
        name: 'Health Care <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hospital',
        img: '/img/nurse.jpg',
        link: '/products/health-care',
        description: 'Specialized coverage for health care providers to ensure financial security and operational stability.',
    },
    {
        name: 'Education <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-school',
        img: 'https://img.freepik.com/free-photo/book-laptop-pencil-clock-wooden-table-library-education-learning-concept_1150-16629.jpg?t=st=1737360175~exp=1737363775~hmac=e16ca243dbe0bac674afe029ef75bb1fc9b67c113e951ded71fa7e819330f603&w=900',
        link: '/products/education',
        description: 'Insurance solutions designed for schools, colleges, and educational institutions to manage risks effectively.',
    },
    {
        name: 'Aviation <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-plane',
        img: '/img/63.jpg',
        link: '/products/aviation',
        description: 'Protect your aviation business with coverage for aircraft, operations, and third-party liabilities.',
    },
]);

const specials = ref([
    {
        name: 'Insurance & Reinsurance',
        description: 'The insurance and reinsurance sector is the backbone of risk management, ensuring businesses and individuals are safeguarded against unforeseen events. This industry requires strategic solutions that address complex risk portfolios while complying with ever-changing regulatory requirements.',
        img: '/img/rope-gray.jpeg'
    },
]);

</script>

<template>
    <section class="bg-white">
        <BannerMain :content="bannerContent" />


        <div class="container py-5 bg-white">

            <div class="py-10 gap-x-6 gap-y-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
                <NuxtLink :to="product.link" v-for="product in riskAreas" class="
                    button-animation group">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                        <NuxtImg format="webp"  :src="product.img" :alt="product.img"
                            class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div class="flex flex-col items-left justify-between pt-3">
                        <h4 class="card-heading pb-1 text-left" v-html="product.name"></h4>
                        <p class="content text-left">{{ product.description }}</p>
                    </div>
                </NuxtLink>
            </div>

            <!-- <div
                class="font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-base leading-7 text-gray-600 py-10">
                <NuxtLink :to="product.link" v-for="product in riskAreas"
                    class="button-animation relative flex flex-row gap-2 border-2 border-gray-200 p-5 rounded-lg">
                    <i :class="product.icon" class="text-4xl text-brand-primary mr-2"></i>
                    <div class="relative">
                        <div class="flex justify-between w-full">
                            <h5 v-html="product.name" class="text-md pb-1 font-semibold leading-normal text-black"></h5>
                        </div>
                        <p class="leading-normal font-regular text-light-content text-[14px]">
                            {{ product.description }}
                        </p>
                        <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i>
                    </div>
                </NuxtLink>
            </div> -->
        </div>
    </section>
</template>

<style scoped></style>