<script setup>

const bannerContent = ref({
    subtitle: 'Claims',
    title: 'Acentria Claims Platform',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const joinAsMembers = ref([
    {
        name: 'Car Insurance Claims',
        icon: 'fas fa-car-crash',
        link:'/claims/car-claims',
        description: 'File a claim for your car insurance to get assistance with repairs, replacements, and other related expenses.',
    },
    {
        name: 'Property Insurance Claims',
        icon: 'fas fa-home',
        link: '/claims/car-claims',
        description: 'Submit a claim for property insurance to cover damages or losses to your home or property.',
    },
    {
        name: 'Motorcycle Insurance Claims',
        icon: 'fas fa-motorcycle',
        link: '/claims/car-claims',
        description: 'Report a motorcycle insurance claim to get help with repairs, replacements, and other related costs.',
    },
    {
        name: 'Boat Insurance Claims',
        icon: 'fas fa-ship',
        link: '/claims/car-claims',
        description: 'File a boat insurance claim to cover damages or losses to your boat or watercraft.',
    },
    {
        name: 'RV Insurance Claims',
        icon: 'fas fa-rv',
        link: '/claims/car-claims',
        description: 'Submit an RV insurance claim to get assistance with repairs, replacements, and other related expenses for your recreational vehicle.',
    },
    {
        name: 'Other Products Claims',
        icon: 'fas fa-box-open',
        link: '/claims/car-claims',
        description: 'File a claim for other insurance products to get assistance with damages, losses, or other related expenses.',
    },
])

const exploreAviation = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'We offer multiple auto <span class="text-brand-primary">inspection and repair options</span>',
    subheading: '',
    image:'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/',
    content:'Keep in mind, you don’t have to actually get repairs. Instead, you can simply get an inspection to see what your damages are, and we’ll send you payment for that amount (minus your applicable deductible). However, if you have a loan or lease, you should check with your lender to see if they require repairs.'
})

</script>

<template>
    <section class="bg-white">

        <BannerMain :content="bannerContent" />

        <div class="bg-white w-full h-full">
            <div class="container py-5 max-w-6xl mx-auto font-sans text-black mt-2">
                <div class="mx-auto  mb-3 font-sans">
                    <p class="mt-2 heading-class text-black">
                        Welcome to an easy <span class="text-brand-primary">claim experience</span>
                    </p>
                </div>
                <p class="text-xs leading-normal">
                    Acentria Insurance Claims is a platform that allows you to make claims on your insurance policy. You
                    can make claims on your insurance policy by filling out the form below. You can also track the
                    status of your claim by logging into your account. If you have any questions about your claim,
                    please <span class="underline text-brand-primary">contact us</span>. We are here to help you with
                    your insurance needs. Thank you for
                    choosing Acentria Insurance. We look forward to serving you.

                <div class="mt-5"><a href="/meet-the-team"
                        class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Report or View a Claim <i class="fas fa-arrow-right text-primary ml-2"></i></a>
                </div>
                </p>
            </div>
        </div>

        <div class="container">
            <div class="mx-auto  pb-3 font-sans">
                <p class="mt-2 subheading-class text-black">
                    Select a product to view the insurance claims process
                </p>
                <p class="text-xs">Get a breakdown of the claims process, what to do, and where to go from here.</p>
            </div>
        </div>

        <div class=" w-full h-full container mx-auto max-w-6xl">
            <div class=" !font-sans  my-0">
                <div class="py-10 sm:px-2 lg:px-4">
                    <div class="lg:max-w-none">
                        <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3">
                            <NuxtLink :href="member.link" v-for="member in joinAsMembers" :key="member.name"
                                class="relative group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8  border-brand-primary">
                                <div class="sm:flex-shrink-0 flex justify-center">
                                    <i :class="member.icon" class="text-black text-2xl"></i>
                                </div>
                                <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 class="text-md text-brand-primary flex justify-center">{{ member.name
                                        }}</h3>
                                    <p class="mt-2 text-[12px] text-gray-500">{{ member.description }}</p>
                                </div>
                                <i class="absolute fas fa-angle-right right-5"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ContentPic :content="exploreAviation" />

    </section>
</template>

<style scoped></style>