<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Insurance Consulting',
    image: 'https://images.pexels.com/photos/5699447/pexels-photo-5699447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Reinsurance Optimization for Enhanced Risk Management',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'We specialize in providing top-notch consulting services tailored to the insurance industry. With an experienced team, we offer comprehensive solutions to meet the unique needs and challenges of insurance companies, reinsurers. We provide both long-term and short-term insurance consulting services. Our expertise spans across various domains including risk management, regulatory compliance, and strategic planning. We work closely with our clients to develop customized strategies that drive growth, enhance operational efficiency, and ensure regulatory adherence. Our goal is to empower insurance companies to navigate the complexities of the industry with confidence and achieve sustainable success.'
})

const faqs = ref([
    {
        name: 'Reserving and Financial Reporting',
        content:'Accurate and compliant financial reporting is essential for insurance companies. Our consultants employ actuarial reserving techniques to estimate liabilities, ensuring your organization meets regulatory requirements while maintaining financial stability. We work closely with your team to ensure transparency and reliability in financial reporting.'
    },
    {
        name: 'Pricing and Product Development',
        content:'Developing competitive and profitable insurance products is crucial in a dynamic market. Our consultants utilize their extensive knowledge to assist in pricing new insurance products and optimizing existing ones. By striking the right balance between affordability and profitability, we help you stay ahead in the ever-changing landscape of insurance offerings.'
    },
    {
        name: 'Solventcy and Capital Adequacy',
        content:'Maintaining sufficient capital to cover potential losses is crucial for insurers. Our consultancy offers comprehensive solvency assessments, ensuring your company complies with regulatory capital requirements. By conducting stress testing and scenario analyses, we help you optimize capital allocation and mitigate risks effectively.'
    },
    {
        name: 'Embedded Value and Analysis of Surplus',
        content:'Our team is structured to provide insurance companies with invaluable insights into their financial performance and long-term profitability. We understand that accurately assessing the embedded value of your insurance business is essential for making informed strategic decisions and measuring overall company health.'
    },
    {
        name: 'Strategy and Business Planning',
        content:'From market analysis and SWOT assessments to product innovation and long-term financial projections, our forward-thinking approach and strategic acumen empower your company to thrive and adapt in an ever-changing market.'
    },
    


])


</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ActuarialFeature :content="ReinsuranceFeatureContent" />
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
