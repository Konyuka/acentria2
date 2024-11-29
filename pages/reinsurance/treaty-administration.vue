<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Treaty Administration And Management',
    subTitle: 'Comprehensive Treaty Solutions',
    image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Best of Our Treaty Administration and Management Excellence',
    image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'At Acentria, our approach to treaty administration and management excellence is rooted in expertise, cutting-edge technology, and a commitment to delivering value to our clients.  We don’t just understand treaty administration; we master it. Recognizing the pivotal role of aligning our goals with your specific treaty needs in the ever-evolving insurance and reinsurance industry, we bring a comprehensive approach that transforms complexity into stability, reliability, and a distinct competitive advantage for our esteemed clients. Your satisfaction and success are at the core of our priorities, and our strategic treaty administration and management excellence manifest this unwavering commitment.',
})

const faqs = ref([
    {
        name: 'Treaty Bidding, Negotiation, and Placement',
        content:'To ensure efficiency and effectiveness in treaty structuring, bidding, negotiation, and placement, we set up clear timelines that guide the treaty renewal action plan from the lobbying stage, treaty analysis, proposals and presentations, panel selection, quotation and negotiation, and signing of cover notes.'
    },
    {
        name: 'Technical Accounting',
        content:'We provide both parties with a detailed calculation for the Profit Commission, Premium Adjustment, Sliding Scale Commission, Loss participation, etc. We make sure that all statements received from the cedant follow the agreed-upon terms and conditions included in the slip. Moreover, we make sure they are transferred to the reinsurers within the assigned time frame set in the respective contracts.'
    },
    {
        name: 'Special Acceptance',
        content:'We assist cedants on reinsurance agreements that deviate from standard terms or involve unique and complex risks through negotiation with reinsurers to find a mutually beneficial agreement that addresses these specific needs. We also structure tailored solutions to develop structured reinsurance agreements that addresses the unique requirements of the cedant. This may involve drafting custom policy wordings and clauses to accommodate the special acceptance.'
    },
    {
        name: 'Contract Wording and Policy Review',
        content:'Acentria Re offers contract wording and policy review services to our clients to ensure that reinsurance treaties and underlying insurance policies align effectively, mitigate potential coverage gaps or ambiguities, and provide optimal risk transfer solutions. We assist clients in developing and refining reinsurance contract wordings to meet their specific needs.'
    },
    {
        name: 'Documentation and Compliance',
        content:'We ensure that the reinsurance contract and associated documentation comply with relevant laws, regulations, and industry standards. This includes compliance with financial solvency requirements, licensing obligations, reporting obligations, and other legal and regulatory mandates specific to the jurisdiction in which the treaty operates. Review and management of amendments/endorsement to assess the impact of proposed amendments, evaluate their compliance with regulatory requirements, and ensure that the revised contract accurately reflects the agreed-upon modifications.'
    },
    {
        name: 'Rensurance Wording',
        content:'An in-depth understanding of reinsurance wording is a fundamental requirement for insurance and reinsurance professionals. It directly impacts risk management, regulatory compliance, transparency, and the overall financial stability of insurance companies. Clear, precise, and comprehensive reinsurance wordings ensures that cedants/reinsurers; Achieve their desired level of risk transfer. Eliminate ambiguities and claim disputes. Clearly establish contractual obligations of each party and avoid breaches. Align their intended reinsurance arrangements with companies’ reinsurance management strategies. Our team of experts has a wealth of experience in review and advisory on reinsurance wordings.'
    },
    
    
])

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
