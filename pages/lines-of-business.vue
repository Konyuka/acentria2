<script setup>
const bannerContent = ref({
    subtitle: 'Lines of Business',
    title: 'Services that make a difference',
    image: 'https://www.shutterstock.com/shutterstock/photos/2508742035/display_1500/stock-photo-service-excellence-high-quality-service-concept-continuous-improvement-and-invest-in-training-and-2508742035.jpg'
})

const features = [
    {
        icon: 'fas fa-shield-alt',
        title: 'Insurance',
        description: 'Mitigating Risks, Maximizing Opportunities',
        url: '/acentria-group-insurance',
    },
    {
        icon: 'fas fa-shield-virus',
        title: 'Reinsurance',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-reinsurance',
    },
    {
        icon: 'fas fa-calculator',
        title: 'Actuarial',
        description: 'Empowering Decisions, Simplifying Complexity',
        url: '/acentria-group-actuarial',
    },
    {
        icon: 'fas fa-laptop-code',
        title: 'Technology',
        description: 'Building prosperity, Securing Futures',
        url: '/contact-acentria-group',
    },
    {
        icon: 'fas fa-dollar-sign',
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-investment',
    },

]
</script>

<template>

    <div class="overflow-y-hidden bg-white">
        <BannerMain :content="bannerContent" />

        <div class="2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div class="w-full lg:w-6/12">
                    <h1 class="w-full heading-class text-left">
                        Our Diverse <span class="text-brand-primary">Lines of Business</span>
                    </h1>
                    <p class="font-normal text-xs leading-normal text-black mt-6 text-left">
                        At Acentria Group, we offer a wide range of services designed to meet the diverse needs of our
                        clients. Our lines of business include Insurance, Reinsurance, Actuarial Services, Broking, and
                        Technology Solutions. Each of these areas is supported by a team of dedicated professionals who
                        are committed to delivering innovative solutions and exceptional service.
                        <br><br>
                        Our Insurance division provides comprehensive coverage options to protect our clients' assets
                        and well-being. Our Reinsurance services help manage and mitigate risk effectively. The
                        Actuarial Services team uses advanced analytics to assess risk and design tailored solutions.
                        Our Broking services facilitate the best deals through strong relationships with insurers.
                        Finally, our Technology Solutions drive innovation and enhance our service offerings through
                        cutting-edge technology.
                    </p>
                </div>
                <div class="w-full lg:w-6/12">
                    <NuxtImg class="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
                        alt="people discussing on board" />
                    <NuxtImg class="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
                        alt="people discussing on board" />
                    <NuxtImg class="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
                        alt="people discussing on board" />
                </div>
            </div>

            <div class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div class="w-full">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12 gap-10">
                        <NuxtLink :href="feature.url" v-for="feature in features"
                            class="button-animation flex p-4 shadow-md border-l-4 border-brand-primary">
                            <div class="mr-6">
                                <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                            </div>
                            <div>
                                <p class="subheading-class text-left">
                                    {{ feature.title }}
                                </p>
                                <p class="mt-2 font-normal text-xs leading-normal text-black text-left">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style></style>