<script setup>

const content = ref({
    pageTitle: 'Acentria Group Actuarial & Financial Services',
    title: 'Expert Actuarial & Financial Services for Your Business',
    description: 'At Acentria Group, we offer a wide range of actuarial and financial services designed to help your business thrive. Our team of experts provides tailored solutions to manage risk, optimize financial performance, and ensure long-term sustainability. Trust us to deliver the insights and support you need to navigate the complexities of the financial landscape, safeguarding your business and securing your future.',
})


const data = ref({
    services: [
        {
            name: 'Financial Services',
            content: 'Comprehensive financial services to support your actuarial needs, ensuring stability and growth.',
            icon: 'account_balance',
            link: '/actuarial/financial-services'
        },
        {
            name: 'Insurance Consulting',
            content: 'Expert insurance consulting to help you navigate complex actuarial challenges and optimize your strategies.',
            icon: 'lightbulb',
            link: '/actuarial/insurance-consulting'
        },
        {
            name: 'Reinsurance Consulting',
            content: 'Specialized reinsurance consulting to streamline your processes and enhance risk management.',
            icon: 'policy',
            link: '/actuarial/reinsurance-consulting'
        },
    ],
    other: [
        {
            name: 'IFRS 17 Implementation',
            content: 'Expert guidance on implementing IFRS 17, ensuring compliance and accurate financial reporting.',
            icon: 'account_balance',
            link: '/actuarial/ifrs-17-implementation'
        },
        {
            name: 'Innovation and Digitization',
            content: 'Leverage cutting-edge technology to enhance actuarial processes and drive innovation.',
            icon: 'lightbulb',
            link: '/actuarial/innovation-and-digitization'
        },
        {
            name: 'Retirement and Employee Benefits',
            content: 'Comprehensive actuarial services for retirement plans and employee benefits, ensuring financial security.',
            icon: 'group',
            link: '/actuarial/retirement-and-employee-benefits'
        },
    ],
    products: [
        {
            name: 'AcentRe',
            content: 'AcentRe is an online reinsurance platform that specializes in data cleaning, pricing, and optimization to enhance your reinsurance strategies.',
            icon: 'cloud',
            link: '/reinsurance/acentre-reinsurance-solution'
        },
        {
            name: 'Data Analysis Tool',
            content: 'Utilize our Data Analysis Tool for comprehensive insights and tailored reinsurance solutions to meet your unique business needs.',
            icon: 'insights',
            link: '/reinsurance/reinsurance-data-analytics-tool'
        },
    ]
})


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

</script>

<template>
    <main>
        <div>
            <div>

                <ServiceHero :content="content" />

                <div class="py-6 text-white xl:py-12" style="background-color: #282e37">
                    <div class="undefined">
                        <section id="" class="relative py-4 lg:py-10">
                            <div class="container px-4">
                                <div class="pb-10 text-center lg:pb-14">
                                    <h2
                                        class="font-sans tracking-normal text-3xl lg:text-4xl text-white font-semibold leading-tight lg:leading-tight">
                                        Some of the Services we Offer for Companies
                                    </h2>
                                    <!-- <label
                                        class="pt-5 text-base leading-normal font-sans text-light-highlight font-bold">
                                        Get a reinsurance quote today — It’s that simple with Acentria
                                    </label> -->
                                </div>

                                <ServiceTabs :menus="menus" :data="data" />

                            </div>
                        </section>
                    </div>
                </div>

                <section id="" class="relative py-8 lg:py-3 bg-white text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                            <span class="text-brand-primary">Your Actuarial Services, Your Way.</span> <br>
                            Let Acentria Tailor Your Solutions To Your Needs
                        </h2>
                    </div>
                </section>

                <div class="py-4 text-white" style="background-color: #f6f8fc">

                    <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">

                        <div class="relative p-4 lg:basis-1/2">
                            <img alt="Image of Streamline evaluations and questionnaires " loading="lazy" width="500"
                                height="350" decoding="async" data-nimg="1"
                                style="color: transparent; object-fit: contain" class="rounded-xl"
                                src="https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </div>
                        <div class="flex flex-col justify-center lg:basis-1/2">
                            <div class="text-light-content pb-5 md:pb-6">
                                <p class="text-base leading-normal font-sans text-light-content !text-inherit mb-4">
                                    Acentria Actuarial & Financial Services has been a trusted provider of Actuarial
                                    Services to Life, Non-Life Companies, and Pension Schemes in East & Central Africa
                                    for many years.
                                    <br><br>
                                    Our dedicated expertise extends to advising various Health Insurance
                                    Schemes and actively participating in the development and design of insurance
                                    products. Rooted in our deep understanding of regional markets and their
                                    ever-changing dynamics, we offer a comprehensive range of services tailored to meet
                                    your needs.
                                    <br><br>
                                    With Acentria, you gain access to a partner who not only comprehends the intricacies
                                    of the insurance landscape but also helps you navigate it with precision and
                                    insight. Allow us to empower your financial strategies and shape your success.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <ServicesCards />

                <WhyRe :whys="whys" />


                <ContactForm />

                <InTouch />

            </div>
        </div>
    </main>
</template>

<style scoped></style>