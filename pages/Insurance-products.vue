<script setup>

const bannerContent = ref({
    subtitle: 'Our Products',
    title: 'Insurance Products Catalogue',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=600'
})

const exploreProducts = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Vehicle <span class="text-brand-primary">Insurance</span>',
    // subheading: 'Get a  <span class="text-brand-primary">5% Discount</span>',
    image: 'https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/insurance-products',
    content: 'At Acentria we offers a wide variety of insurance options for peace of mind for your business, on the road, under your roof, and in your daily life.',
})

const products = ref([
    {
        heading: 'Personal <span class="text-brand-primary">Insurance</span>',
        image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: [
            {
                name: 'Dental <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-tooth',
                link: '/',
                description: 'Find an affordable dental plan for you and your family'
            },
            {
                name: 'Electronic <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-mobile-alt',
                link: '/',
                description: 'Covers theft, water damage, and cracked smartphone screens'
            },
            {
                name: 'Health <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-heartbeat',
                link: '/',
                description: 'Compare plans and get trusted coverage for you and your family'
            },
            {
                name: 'Identity theft <span class="text-brand-primary">Protection</span>',
                icon: 'fas fa-user-shield',
                link: '/',
                description: 'Protect your credit with 24/7 credit monitoring and instant alerts'
            },
            {
                name: 'Jewelry <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-gem',
                link: '/',
                description: 'Protect your valuable pieces from loss, damage, theft, and more with an affordable jewelry policy'
            },
            {
                name: 'Life <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-life-ring',
                link: '/',
                description: 'Provide longer-lasting financial security to those who depend on you'
            },
            {
                name: 'Pet <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-paw',
                link: '/',
                description: 'Care for your dog or cat in any situation with coverage for vet bills'
            },
            {
                name: 'Travel <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-plane',
                link: '/',
                description: 'Coverage for trip cancellations, interruptions, and other emergencies'
            },
            {
                name: 'Umbrella <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-umbrella',
                link: '/',
                description: 'Protect your assets and savings with extra liability coverage'
            },
            {
                name: 'Vision <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-eye',
                link: '/',
                description: 'A vision insurance plan can lower your out-of-pocket costs'
            },
            {
                name: 'Events <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-ring',
                link: '/',
                description: 'Build your own coverage so you can breathe easy for the big day'
            },
        ]
    },
    {
        heading: 'Vehicle <span class="text-brand-primary">Insurance</span>',
        image: 'https://images.pexels.com/photos/1397751/pexels-photo-1397751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: [
            {
                name: 'ATV/UTV <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-motorcycle',
                link: '/',
                description: 'Ride protected even when you’re off property'
            },
            {
                name: 'Autocycle <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-car',
                link: '/',
                description: 'Customized protection for your adventures on three wheels'
            },
            {
                name: 'Auto <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-car-side',
                link: '/',
                description: 'Nearly three out of four new Auto customers recommend Progressive'
            },
            {
                name: 'Boat <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-ship',
                link: '/',
                description: 'Get specialized coverage for all your boating needs'
            },
            {
                name: 'Classic Car <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-car-alt',
                link: '/',
                description: 'Protect your investment with insurance for collector cars'
            },
            {
                name: 'Compact Tractor <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-tractor',
                link: '/',
                description: 'Affordable protection for your smaller-sized tractor'
            },
            {
                name: 'E-bike <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-bicycle',
                link: '/',
                description: 'Safeguard your e-bike for use on or off-road'
            },
            {
                name: 'Golf Cart <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-golf-cart',
                link: '/',
                description: 'Drive protected around your community or on the greens'
            },
            {
                name: 'Mechanical Breakdown <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-tools',
                link: '/',
                description: 'Protect your car, truck, or RV from unexpected repairs'
            },
            {
                name: 'Mexico Auto <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-car-crash',
                link: '/',
                description: 'Get coverage through a specialized broker if you drive in Mexico'
            },
            {
                name: 'Mexico Boat & Watercraft <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-ship',
                link: '/',
                description: 'Get the coverage you need to take your boat or PWC to Mexico'
            },
            {
                name: 'Motorcycle <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-motorcycle',
                link: '/',
                description: 'Ride with the #1 bike insurer for as little as $75 per year'
            },
            {
                name: 'PWC <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-water',
                link: '/',
                description: 'Affordable coverage for your Jet Ski, Sea-Doo, WaveRunner, and more'
            },
            {
                name: 'RV <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-rv',
                link: '/',
                description: 'Protect your motorhome or travel trailer if you’re seasonal or full-time'
            },
            {
                name: 'Segway <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-balance-scale',
                link: '/',
                description: 'Glide care-free and get protection for your personal transport'
            },
            {
                name: 'Snowmobile <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-snowflake',
                link: '/',
                description: 'Sled protected on and off the slopes with the right coverages'
            },
        ]
    },
    {
        heading: 'Property <span class="text-brand-primary">Insurance</span>',
        image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
        items: [
            {
                name: 'Condo <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-building',
                link: '/',
                description: 'Protect your interior structure and personal belongings'
            },
            {
                name: 'Flood <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-water',
                link: '/',
                description: 'Protection against floods that may be required if you live in a flood zone'
            },
            {
                name: 'Homeowners <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-home',
                link: '/',
                description: 'Earn a multi-policy discount when you bundle home and auto'
            },
            {
                name: 'Home <span class="text-brand-primary">Security</span>',
                icon: 'fas fa-shield-alt',
                link: '/',
                description: 'Protect your home from break-ins with state-of-the-art security'
            },
            {
                name: 'Home <span class="text-brand-primary">Warranty</span>',
                icon: 'fas fa-tools',
                link: '/',
                description: 'Safeguard your budget from appliance repairs'
            },
            {
                name: 'Mobile Home <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-home',
                link: '/',
                description: 'Coverage for manufactured homes, including singlewides and park models'
            },
            {
                name: 'Renters <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-key',
                link: '/',
                description: 'Get liability coverage and protect your belongings for less than $1 per day'
            },
        ]
    },
    {
        heading: 'Business <span class="text-brand-primary">Insurance</span>',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: [
            {
                name: 'Business Owners <span class="text-brand-primary">Policy</span>',
                icon: 'fas fa-briefcase',
                link: '/',
                description: 'Safeguard your business from liability claims with confidence'
            },
            {
                name: 'Commercial Auto <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-truck',
                link: '/',
                description: 'Coverage for your business vehicles from America\'s #1 truck insurer'
            },
            {
                name: 'General Liability <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-shield-alt',
                link: '/',
                description: 'Protect your business against lawsuits, including libel and slander'
            },
            {
                name: 'Professional Liability <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-user-tie',
                link: '/',
                description: 'Protection for your business against negligence claims'
            },
            {
                name: 'Workers\' Compensation <span class="text-brand-primary">Insurance</span>',
                icon: 'fas fa-briefcase-medical',
                link: '/',
                description: 'Cover medical expenses and wages for employees hurt on the job'
            },
        ]
    },
    {
        heading: 'Financial <span class="text-brand-primary">Insurance</span>',
        image: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        items: [
            {
                name: 'Car loan <span class="text-brand-primary">refinancing</span>',
                icon: 'fas fa-car',
                link: '/',
                description: 'Check your rate to see if you can save with a different car loan'
            },
            {
                name: 'Car shopping <span class="text-brand-primary">service</span>',
                icon: 'fas fa-shopping-cart',
                link: '/',
                description: 'Search cars, prescreen dealers, get a price report, and save'
            },
            {
                name: 'Credit <span class="text-brand-primary">building</span>',
                icon: 'fas fa-credit-card',
                link: '/',
                description: 'Use your subscriptions to easily build your credit'
            },
            {
                name: 'Debit cards for <span class="text-brand-primary">kids</span>',
                icon: 'fas fa-child',
                link: '/',
                description: 'Discover an easier way to teach your child smart spending habits'
            },
            {
                name: 'Home <span class="text-brand-primary">loans</span>',
                icon: 'fas fa-home',
                link: '/',
                description: 'Find the home loan & mortgage rate that works for you'
            },
            {
                name: 'Mortgage <span class="text-brand-primary">refinance</span>',
                icon: 'fas fa-file-invoice-dollar',
                link: '/',
                description: 'Accessing your home\'s equity is easier than you think'
            },
            {
                name: 'Personal <span class="text-brand-primary">loans</span>',
                icon: 'fas fa-hand-holding-usd',
                link: '/',
                description: 'Qualify and see your rate in minutes, then get next-day funding'
            },
        ]
    },
])

</script>

<template>
    <section class="bg-white">
        <BannerMain :content="bannerContent" />

        <div class="bg-white w-full h-full">
            <div class="container py-5 max-w-6xl mx-auto font-sans text-black mt-2">
                <div class="mx-auto mb-3 font-sans">
                    <p class="mt-2 heading-class text-black">
                        Explore All <span class="text-brand-primary">Our Products</span>
                    </p>
                </div>
                <p class="text-xs leading-normal">
                    Welcome to the Acentria Group Insurance Products Catalogue. Here, you will find a comprehensive list
                    of all the insurance products we offer. Our goal is to provide you with the information you need to
                    make informed decisions about your insurance coverage. Whether you are looking for auto insurance,
                    home insurance, life insurance, or any other type of insurance, we have you covered. Our team of
                    insurance experts is here to help you find the right insurance products to meet your needs and
                    budget. Explore our insurance products catalogue today and discover the peace of mind that comes
                    with knowing you are protected.
                </p>
            </div>
        </div>

        <div v-for="product in products" class="container py-5 bg-white">
            <div class="mx-auto mb-3 font-sans">
                <p v-html="product.heading" class="mt-2 heading-class text-black"></p>
            </div>
            <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                style="color: transparent; object-fit: contain"
                class="w-full h-[220px] shadow-2xl rounded-md !object-cover" :src="product.image" />

            <div
                class="font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 py-10">
                <NuxtLink :href="item.link" v-for="item in product.items"
                    class="button-animation relative flex flex-row gap-2 border-2 border-gray-200 p-5 rounded-lg">
                    <i :class="item.icon" class="text-4xl text-brand-primary mr-2"></i>
                    <div class="relative">
                        <div class="flex justify-between w-full">
                            <h5 v-html="item.name" class="text-md pb-1 font-semibold leading-tight text-black"></h5>
                        </div>
                        <p class="leading-normal font-regular text-light-content text-[14px]">
                            {{ item.description }}
                        </p>
                        <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped></style>