<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Unlock the full potential of your reinsurance program',
    subTitle: 'Treaty Administration',
    image: '/img/treaty-admin.jpg',
})
const ReinsuranceFeatureContent = ref({
    title: 'Our Approach',
    image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, our approach to treaty administration excellence is rooted in expertise, cutting-edge technology, and a commitment to delivering value to our clients. We don’t just understand treaty administration; we master it. Recognizing the pivotal role of aligning our goals with your specific treaty needs in the ever-evolving insurance and reinsurance industry, we bring a comprehensive approach that transforms complexity into stability, reliability, and a distinct competitive advantage for our esteemed clients. Your satisfaction and success are at the core of our priorities, and our strategic treaty administration and management excellence manifest this unwavering commitment.'
})

const systems = ref([
    {
        name: 'Acent<span class="text-brand-primary">Re </span>',
        link: '/reinsurance/acentre-reinsurance-solution',
        image: 'https://images.pexels.com/photos/5699447/pexels-photo-5699447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'AcentRe is an innovative online software solution that transforms how insurers understand and manage risk, optimize returns, and plan reinsurance strategies.',
    },
    {
        name: 'Data Analytics<span class="text-brand-primary"> Tool</span>',
        link: '/reinsurance/reinsurance-data-analytics-tool',
        image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Our data analytics platform offers features to help the organizations leverage data-driven insights for improved risk management & decision-making',
    },
])


const benefits = ref([
    {
        name: 'Innovation and Technology',
        icon: 'fas fa-cogs',
        items: [
            {
                name: 'Automated Processes',
                description: 'Our state-of-the-art software automates over 90% of manual processes, improving efficiency and reducing operational risks.',
            },
            {
                name: 'Digital Treaty Library',
                description: 'Capture and store treaty data in a structured, searchable format for easy access and management.',
            },
        ],
    },
    {
        name: 'Expertise and Support',
        icon: 'fas fa-user-tie',
        items: [
            {
                name: 'Specialized Knowledge',
                description: 'Our team of seasoned professionals brings a wealth of experience and industry knowledge to support your reinsurance operations.',
            },
            {
                name: 'Client-Centric Approach',
                description: 'We prioritize your satisfaction and success, offering personalized support and solutions that align with your business goals.',
            },
        ],
    },
    {
        name: 'Operational Efficiency',
        icon: 'fas fa-chart-line',
        items: [
            {
                name: 'Seamless Integration',
                description: 'Our modular software architecture fits seamlessly into your existing IT infrastructure, minimizing disruption during implementation.',
            },
            {
                name: 'Real-Time Data',
                description: 'Collect and analyze real-time data to enhance decision-making and ensure treaty compliance.',
            },
        ],
    },
]);


const faqs = ref([
    {
        name: 'Treaty Bidding, Negotiation, and Placement',
        content: 'To ensure efficiency and effectiveness in treaty structuring, bidding, negotiation, and placement, we set up clear timelines that guide the treaty renewal action plan from the lobbying stage, treaty analysis, proposals and presentations, panel selection, quotation and negotiation, and signing of cover notes.'
    },
    {
        name: 'Technical Accounting',
        content: 'We provide both parties with a detailed calculation for the Profit Commission, Premium Adjustment, Sliding Scale Commission, Loss participation, etc. We make sure that all statements received from the cedant follow the agreed-upon terms and conditions included in the slip. Moreover, we make sure they are transferred to the reinsurers within the assigned time frame set in the respective contracts.'
    },
    {
        name: 'Special Acceptance',
        content: 'We assist cedants on reinsurance agreements that deviate from standard terms or involve unique and complex risks through negotiation with reinsurers to find a mutually beneficial agreement that addresses these specific needs. We also structure tailored solutions to develop structured reinsurance agreements that addresses the unique requirements of the cedant. This may involve drafting custom policy wordings and clauses to accommodate the special acceptance.'
    },
    {
        name: 'Contract Wording and Policy Review',
        content: 'Acentria Re offers contract wording and policy review services to our clients to ensure that reinsurance treaties and underlying insurance policies align effectively, mitigate potential coverage gaps or ambiguities, and provide optimal risk transfer solutions. We assist clients in developing and refining reinsurance contract wordings to meet their specific needs.'
    },
    {
        name: 'Documentation and Compliance',
        content: 'We ensure that the reinsurance contract and associated documentation comply with relevant laws, regulations, and industry standards. This includes compliance with financial solvency requirements, licensing obligations, reporting obligations, and other legal and regulatory mandates specific to the jurisdiction in which the treaty operates. Review and management of amendments/endorsement to assess the impact of proposed amendments, evaluate their compliance with regulatory requirements, and ensure that the revised contract accurately reflects the agreed-upon modifications.'
    },
    {
        name: 'Rensurance Wording',
        content: 'An in-depth understanding of reinsurance wording is a fundamental requirement for insurance and reinsurance professionals. It directly impacts risk management, regulatory compliance, transparency, and the overall financial stability of insurance companies. Clear, precise, and comprehensive reinsurance wordings ensures that cedants/reinsurers; Achieve their desired level of risk transfer. Eliminate ambiguities and claim disputes. Clearly establish contractual obligations of each party and avoid breaches. Align their intended reinsurance arrangements with companies’ reinsurance management strategies. Our team of experts has a wealth of experience in review and advisory on reinsurance wordings.'
    },


])
</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="container">
                <h1 class="my-5 heading-class text-left">
                    Treaty <span class="text-brand-primary"> Administration
                    </span>
                </h1>
                <p
                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                    Unlock the full potential of your reinsurance program with our comprehensive Treaty Administration
                    services. By seamlessly managing all aspects of your reinsurance treaties, from contract setup to
                    claims handling, we ensure maximum efficiency, accuracy, and compliance.
                    Let us help you navigate the complexities of reinsurance with precision and confidence.
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div>
            <Accordion :faqs="faqs" />
        </div>

        <!-- <div class="pb-10">
            <Accordion2 />
        </div> -->


        <div class="bg-white !pb-10">
            <div class="container">
                <h1 class="my-3 heading-class text-left">
                    Elite Tech Tools for<br> <span class="text-brand-primary"> Optimal Reinsurance Solutions</span>
                </h1>
            </div>

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-4">

                <article v-for="service in systems"
                    class="button-animation shadow-2xl border-l-2 px-4 py-2 border-brand-primary group flex flex-col items-start justify-between">
                    <NuxtLink class="w-full" :to="service.link">
                        <div class="max-w-full">

                            <div class="font-sans group relative">
                                <div class="flex">
                                    <h3 v-html="service.name"
                                        class="text-lg font-semibold mt-3 line-clamp-2 subheading-class leading-normal text-black transition-colors group-hover:text-brand-primary">
                                    </h3>
                                    <i class="fas fa-trademark"></i>
                                </div>
                                <p class="mt-2 text-xs leading-normal text-black">
                                    {{ service.content }}
                                </p>
                            </div>

                            <span class="text-black">Learn More <i class="mt-2 fas fa-arrow-right ml-3"></i></span>
                        </div>
                    </NuxtLink>
                </article>

            </div>
        </div>

        <div class="container">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Choose <span class="text-brand-primary"> Acentria</span>
            </h2>

            <div class="pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div v-for="principle in benefits"
                    class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                    <div class="flex flex-col">
                        <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                        <h4 class="font-bold text-black !text-[18px] pb-1 leading-normal">{{
                            principle.name }}</h4>
                        <!-- <p class="text-sm leading-normal text-black">{{ principle.description }}</p> -->
                        <div class="pt-5 grid grid-cols-1 gap-5">
                            <div v-for="item in principle.items" class="flex flex-col gap-2">
                                <h1 class="!font-semibold text-[14px]"> <i
                                        class="fas fa-caret-right text-brand-primary mr-2"></i> {{
                                    item.name }}</h1>
                                <p class="text-[12px]">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="py-5 container">
                <h2 class="text-2xl !font-semibold text-black mb-4">
                    Enagage <span class="text-brand-primary"> An Expert?</span>
                </h2>
                <div class="my-5">
                    <p class="text-sm leading-normal">
                        Ready to streamline your treaty administration? <NuxtLink to="/contact-acentria-group"
                            class="font-semibold italic underline">Contact us today </NuxtLink> to learn more about our
                        services and how we can help you achieve your reinsurance goals.
                    </p>
                </div>
            </div> -->
        </div>


        <!-- <ReinsuranceWhy /> -->
        <ContactForm />
    </div>



</template>
