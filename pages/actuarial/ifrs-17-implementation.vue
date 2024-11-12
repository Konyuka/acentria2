<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'IFRS17 Implementation',
    image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent2 = ref({
    title: 'Ensuring compliance and clarity in your financial reporting',
    image: 'https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Our expertise in IFRS 17 transforms complex accounting standards into strategic advantages, guiding you toward financial clarity and compliance. We strive to help insurance companies navigate the complexities of implementing the International Financial Reporting Standard 17 (Insurance Contracts). With a team of experts well-versed in accounting, actuarial science, and regulatory compliance, we offer comprehensive solutions to ensure a smooth and successful transition to this new accounting standard.'
})


const faqs = ref([
    {
        name: 'Actuarial Modeling',
        content: 'Accurate actuarial modeling is at the core of IFRS 17 compliance. Our experts work closely with your actuarial team to develop and validate the necessary models for insurance contract valuation and cash flow projections, ensuring compliance with the new standard\'s requirements.'
    },
    {
        name: 'Quality Assuarance',
        content:'We also offer peer review services where implementation has been done using internally teams or other consultants. This ensures your process has allowed for all the various implementation requirements.'
    },
    {
        name: 'Impact Assessment',
        content:'Understanding the potential impact of IFRS 17 on your financial statements and operations is essential for strategic planning. We perform detailed impact analyses, evaluating the effect on key performance metrics, capital requirements, and business processes.'
    },
    {
        name: 'Regulatory support and effective supervision',
        content: 'We work with supervision and regulatory bodies to develop clear and robust regulatory frameworks, conduct impact assessments, and provide guidance on interpreting the standard\'s requirements.We review and assess insurance companies\' implementation plans, monitor compliance, and offer ongoing support and training to strengthen regulatory oversight'
    },
    {
        name: 'GAP assessment and implementation planning',
        content: 'We review your existing financial and actuarial processes, data systems, and reporting capabilities to identify any gaps that need to be addressed. Based on these findings, we develop a comprehensive implementation plan tailored to your organization\'s unique needs.'
    },
    {
        name: 'Financial statement and disclosure',
        content: 'Our consultants guide you in preparing IFRS 17-compliant financial statements and disclosures. This also includes changes to your chart of accounts and trial balances.'
    },
    {
        name: 'Methodology design and testing',
        content: 'We help you to analyze and determine decisions on areas of subjectivity like aggregation & disaggregation, separation and combination, measurement methods, discounting and risk adjustment'
    },
    {
        name: 'Capacity building and training',
        content: 'We offer tailored training programs to equip your team with the necessary knowledge and skills for IFRS 17 compliance. Our training covers accounting principles, actuarial methodologies, and practical implementation techniques.'
    },
])



</script>

<template>

    <div class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ActuarialFeature :content="ReinsuranceFeatureContent2" />
        <div class="pb-2 text-center">
            <h2
                class="font-sans tracking-normal text-3xl lg:text-4xl text-brand-primary font-semibold leading-tight lg:leading-tight my-5">
                Services We Offer
            </h2>
        </div>
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>

</template>
