<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Retirement and Employee benefits',
    image: 'https://images.pexels.com/photos/33786/hands-walking-stick-elderly-old-person.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent2 = ref({
    title: 'Helping you and your employees build a prosperous future',
    image: 'https://images.pexels.com/photos/6667746/pexels-photo-6667746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'In the realm of actuarial science, retirement and employee benefits are critical components that demand meticulous analysis and precise calculations. Actuaries play a pivotal role in designing, managing, and evaluating retirement plans and employee benefit programs to ensure their sustainability and effectiveness. Actuaries utilize advanced statistical methods and financial theories to analyze the current and future financial status of retirement and employee benefit plans. They consider various factors such as demographic changes, economic trends, and regulatory requirements to develop robust models that predict future liabilities and assets. Through rigorous data analysis and risk assessment, actuaries assess the financial implications of retirement plans, projecting future benefits and expenditures with utmost accuracy. They navigate complex actuarial models to determine contribution rates, funding levels, and investment strategies, safeguarding the long-term viability of these essential benefits. In addition to financial projections, actuaries also evaluate the impact of different investment strategies on the performance of retirement funds. They provide insights on asset allocation, risk management, and portfolio optimization to maximize returns while minimizing risks. Actuaries also play a key role in ensuring compliance with legal and regulatory standards, advising organizations on the implications of new laws and regulations on their benefit plans.'
})


const faqs = ref([
    {
        name: 'Investment Policy Statement (IPS) Development',
        content:'We offer a comprehensive approach to developing customized IPS that align with the specific goals, risk tolerance, and regulatory requirements of your retirement plan. This allows for strategic asset allocation focusing on clear investment objectives and constraints, to ensure objective performance measurement and reporting.'
    },
    {
        name: 'Retirement Plan Design and Optimization',
        content: 'Whether it\'s defined contribution plans, defined benefit plans, or hybrid options, we help you strike the right balance between employee benefits and cost efficiency.We also conduct regular plan reviews to ensure ongoing optimization.'
    },
    {
        name: 'Employee Strategy and Benefits Benchmarking',
        content:'Crafting a competitive benefits package is vital for attracting and retaining top talent. We conduct benchmarking exercises to compare your benefits offerings with industry standards, ensuring your company remains competitive in the job market.'
    },
    {
        name: 'Actuarial Valuations and Funding Analysis',
        content:'Our experts perform actuarial valuations of your retirement plans, assessing their funding levels and projecting future funding requirements. With a deep understanding of the regulatory landscape, we help you maintain compliance with pension accounting standards and government regulations.'
    },
    {
        name: 'Post-Retirement Benefit Consulting',
        content:'We assist in designing and managing post-retirement benefit programs, such as retiree medical plans and post-employment health benefits, to support your retired employees effectively. We also assist in structuring post-retirement financial plans like annuities and income drawdown plans.'
    },
    

])



</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ActuarialFeature :content="ReinsuranceFeatureContent2" />
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>

</template>
