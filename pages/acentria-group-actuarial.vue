<script setup>

const bannerTitle = ref('Acentria Actuarial & Financial Services')

const content = ref({
    vid: '/img/hd3.mp4',
    pageTitle: 'Acentria Group Actuarial & Financial Services',
    title: 'Expert Actuarial & Financial <br> <span class="text-brand-primary">Services for Your Business</span>',
})


const data = ref({
    services: [
        {
            name: 'Financial Services',
            content: 'Comprehensive financial services to support your actuarial needs, ensuring stability and growth.',
            icon: 'fas fa-university',
            link: '/actuarial/financial-services'
        },
        {
            name: 'Insurance Consulting',
            content: 'Expert insurance consulting to help you navigate complex actuarial challenges and optimize your strategies.',
            icon: 'fas fa-lightbulb',
            link: '/actuarial/insurance-consulting'
        },
        {
            name: 'Reinsurance Consulting',
            content: 'Specialized reinsurance consulting to streamline your processes and enhance risk management.',
            icon: 'fas fa-shield-alt',
            link: '/actuarial/reinsurance-consulting'
        },
    ],
    other: [
        {
            name: 'IFRS 17 Implementation',
            content: 'Expert guidance on implementing IFRS 17, ensuring compliance and accurate financial reporting.',
            icon: 'fas fa-file-invoice-dollar',
            link: '/actuarial/ifrs-17-implementation'
        },
        {
            name: 'Innovation and Digitization',
            content: 'Leverage cutting-edge technology to enhance actuarial processes and drive innovation.',
            icon: 'fas fa-robot',
            link: '/actuarial/innovation-and-digitization'
        },
        {
            name: 'Retirement and Employee Benefits',
            content: 'Comprehensive actuarial services for retirement plans and employee benefits, ensuring financial security.',
            icon: 'fas fa-users',
            link: '/actuarial/retirement-and-employee-benefits'
        },
    ],
    products: [
        {
            name: 'AcentRe',
            content: 'AcentRe is an online reinsurance platform that specializes in data cleaning, pricing, and optimization to enhance your reinsurance strategies.',
            icon: 'fas fa-cloud',
            link: '/reinsurance/acentre-reinsurance-solution'
        },
        {
            name: 'Data Analysis Tool',
            content: 'Utilize our Data Analysis Tool for comprehensive insights and tailored reinsurance solutions to meet your unique business needs.',
            icon: 'fas fa-chart-line',
            link: '/reinsurance/reinsurance-data-analytics-tool'
        },
    ]
});

const menus = ref([
    {
        name: 'Actuarial Consulting',
        tag: 'services',
        icon: 'fas fa-handshake',
    },
    {
        name: 'Actuarial Services',
        tag: 'other',
        icon: 'fas fa-cogs',
    },
    {
        name: 'Actuarial Products',
        tag: 'products',
        icon: 'fas fa-chart-line',
    },
])

const whys = ref([
    {
        name: 'Innovation',
        content: 'We are Passionate about innovation because we believe its a driving force that fuels creativity, curiosity, and the pursuit of novel ideas and solutions',
        icon: '',
    },
    {
        name: 'Data driven analytical capabilities',
        content: 'Our ability to use data, advanced analytics, and technology to extract valuable insights, help us to guide business to make informed decisions',
        icon: '',
    },
    {
        name: 'Distinctive consumer insight capabilities',
        content: 'We offer distinctive consumer insight capabilities to help our clients understand the needs, and preferences of their clients.',
        icon: '',
    },
    {
        name: 'Better results',
        content: 'Achieving better results and long term prosperity is a shared long term goal for Acentria group, individuals, organizations, and societies alike',
        icon: '',
    },
])

const heroContent = ref({
    name: `<h1
                                    class="font-sans tracking-normal text-4xl lg:text-5xl  text-brand-primary font-semibold leading-tight lg:leading-tight">
                                    <span
                                        class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight">Acentria</span>
                                    Actuarial & Financial Services
                                </h1>`,
})

</script>

<template>
    <main>
        <div>
            <div>

                <ServiceHero2 :content="content" />

                <!-- <BannerVid :bannerTitle="bannerTitle" /> -->

                <!-- <Hero2 :data="heroContent" /> -->

                <div class="pb-5 text-center bg-white">
                    <h2
                        class="font-sans tracking-normal text-3xl text-black font-semibold leading-tight lg:leading-tight">
                        Best of Actuarial Consulting, <span class="text-brand-primary">Products & Services</span>
                    </h2>
                </div>

                <div class="py-5 text-white bg-white">
                    <section class="relative py-2">
                        <div class="container px-4">
                            <ServiceTabs :menus="menus" :data="data" />
                        </div>
                    </section>
                </div>

                <section id="" class="relative py-8 bg-black/60 text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl text-white font-semibold leading-tight lg:leading-tight">
                            <span class="text-brand-primary">Your Actuarial Services, Your Way.</span> <br>
                            Let Acentria Tailor Your Solutions To Your Needs
                        </h2>
                    </div>
                </section>

                <div class="bg-white">
                    <div class="py-4 text-white max-w-6xl mx-auto" >

                        <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-2  lg:gap-16">

                            <div class="relative py-4 lg:basis-1/2">
                                <NuxtImg alt="Image of Streamline evaluations and questionnaires " loading="lazy"
                                    width="500" height="350" decoding="async" data-nimg="1"
                                    style="color: transparent; object-fit: contain" class="rounded-xl"
                                    src="https://acentriagroup.com/wp-content/uploads/2023/10/8.jpeg" />
                            </div>
                            <div class="flex flex-col justify-center lg:basis-1/2">
                                <div class="text-light-content pb-5 md:pb-6">
                                    <p class="text-xs leading-normal font-sans text-light-content !text-inherit mb-4">
                                        Acentria Actuarial & Financial Services has been a trusted provider of Actuarial
                                        Services to Life, Non-Life Companies, and Pension Schemes in East & Central
                                        Africa
                                        for many years. Our dedicated expertise extends to advising various Health
                                        Insurance
                                        Schemes and actively participating in the development and design of insurance
                                        products. Rooted in our deep understanding of regional markets and their
                                        ever-changing dynamics, we offer a comprehensive range of services tailored to
                                        meet
                                        your needs.

                                        <br><br>

                                        With Acentria, you gain access to a partner who not only comprehends the
                                        intricacies
                                        of the insurance landscape but also helps you navigate it with precision and
                                        insight. Allow us to empower your financial strategies and shape your success.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <ServicesCards class="bg-white" />

                <Why2 class="bg-white" />

                <WhyRe :whys="whys" class="bg-white" />

                <ContactForm />

                <InTouch />

            </div>
        </div>
    </main>
</template>

<style scoped></style>