<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Treaty Management',
    subTitle: 'Comprehensive Treaty Solutions',
    image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Our Approach',
    image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'At Acentria, our approach to treaty administration and management excellence is rooted in expertise, cutting-edge technology, and a commitment to delivering value to our clients.  We don’t just understand treaty administration; we master it. Recognizing the pivotal role of aligning our goals with your specific treaty needs in the ever-evolving insurance and reinsurance industry, we bring a comprehensive approach that transforms complexity into stability, reliability, and a distinct competitive advantage for our esteemed clients. Your satisfaction and success are at the core of our priorities, and our strategic treaty administration and management excellence manifest this unwavering commitment.',
})

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

const exploreHelp2 = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Data Driven & Analytical <br/><span class="text-brand-primary"> Reinsurance Capabilities</span>',
    subheading: '',
    image: '/img/glasses.jpg',
    link: '/insurance-claims',
    content: 'Accurate risk quantification is an essential part of an effective risk management program. To design a sustainable and successful risk management strategy, an organization must identify, measure, analyze and understand the existing and emerging risks they face.',
})

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="container">
                <h1 class="my-5 heading-class text-left">
                    <br> <span class="text-brand-primary"> Treaty
                    </span>
                </h1>
                <p
                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                    Treaty In the complex world of insurance, where risks are abundant and unpredictable, reinsurers
                    play a pivotal role in safeguarding the financial stability of insurance companies. treaty
                    reinsurance stands out as a fundamental strategy that insurers employ to mitigate their exposure to
                    large and volatile risks.
                    At Acentria we create and place tailored treaty reinsurance programs to provide our clients with
                    coverage for their portfolios of risk.
                    Placing a treaty reinsurance program is a pivotal decision for any insurance company. It represents
                    a strategic move to enhance the financial stability and resilience of the insurer's portfolio
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <ContentPic :content="exploreHelp2" class="my-5" />

        <div class="bg-white pb-6">
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



        <Accordion :faqs="faqs" />
        <!-- <ReinsuranceWhy /> -->
        <ContactForm />
    </div>



</template>
