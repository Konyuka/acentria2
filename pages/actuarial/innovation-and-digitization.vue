<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Innovation and Digitization',
    subTitle: 'Empowering businesses',
    image: 'https://images.pexels.com/photos/1136465/pexels-photo-1136465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent2 = ref({
    title: 'Innovation and Digitization',
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'At Acentria, we\'re more than a service provider; we\'re your innovation partner. Our team is committed to unleashing your full potential by pioneering cutting-edge solutions and approaches. With Acentria, you\'re not just keeping up with the times; you\'re setting the pace for the future, one innovative step at a time Innovation and digitization in actuarial science have led to more agile, data-driven, and customer-focused practices. At Acentria our actuaries embrace these technological advancements and are better equipped to tackle complex challenges and provide valuable insights that drive strategic decision-making for businesses and organizations in our drive to empower and create prosperity with the aim bringing about transformative changes in how businesses operate and interact with customers.'
})

const faqs = ref([
    {
        name: 'Data Driven Insights',
        content: 'Our approach to managing risk on adjusted capital is rooted in data-driven insights. Acentria leverages advanced analytics, historical data, and cutting-edge technology to assess and optimize the allocation of adjusted capital.'
    },
    {
        name: 'Regulatory Adherence and Compliance',
        content: 'Stringent compliance with industry regulations and legal requirements is integral to our strategy. Acentria ensures that our risk management practices meet the highest standards, providing transparency and security.'
    },
    {
        name: 'Profitability Objectives',
        content: 'A core focus of our strategy is achieving profitability while managing risk on adjusted capital efficiently. We work to maintain financial strength and sustainability while supporting our clients\' goals.'
    },
    {
        name: 'Sustainable Growth',
        content: 'Managing risk on adjusted capital is not only about protection but also about facilitating growth. We aim to strike a balance between preserving capital and enabling long-term financial success.'
    },


])

const offers = ref([
    {
        name: 'Digital Transformation Strategy',
        content:'We work closely with your leadership team to develop a robust digital transformation strategy that aligns with your business objectives and customer needs. Our experts assess your current technology landscape, identify digital opportunities, and design a roadmap for seamless integration of digital solutions.'
    },
    {
        name: 'Fintech Partnerships',
        content:'We facilitate strategic partnerships and collaborations with emerging FinTech startups and technology providers. These alliances allow you to leverage the latest innovations, such as artificial intelligence and data analytics, to enhance operational efficiency and customer experiences.'
    },
    {
        name: 'Predictive Modeling',
        content:'Unlock the power of data in insurance with our cutting-edge data analytics and predictive modeling services. From customer segmentation to fraud detection, we employ advanced statistical techniques to extract meaningful insights, enabling you to make data-driven decisions and gain a competitive advantage.'
    },
    {
        name: 'Customer Engagement',
        content: 'Acentria helps you create targeted digital marketing campaigns and customer engagement strategies to attract and retain customers in a competitive market. From social media marketing to personalized offers, we enhance your institution\'s digital presence and customer outreach.'
    },
    {
        name: 'Process Automation and Artificial Intelligence',
        content:'We streamline your operations through process automation and intelligent AI integration. This not only enhances efficiency and reduces costs but also allows your employees to focus on higher-value tasks and customer interactions.'
    },
    {
        name: 'Regulatory Technology Solutions',
        content:'Navigating the regulatory landscape can be complex. Our RegTech solutions ensure your institution remains compliant with evolving regulations, leveraging automation and data analytics to streamline compliance processes.'
    },
    
])


</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <div class="container">
            <div>
                At Acentria, we combine innovation and digitization to deliver agile, data-driven solutions. Our
                actuaries leverage advanced technology to tackle challenges, drive strategic decisions, and create
                transformative changes, empowering businesses to thrive, innovate, and enhance customer interactions.
            </div>
        </div>

        <div class="container">
            <h2 class="text-left text-2xl font-semibold text-gray-900 my-3">
                Services <span class="text-brand-primary">We Offer</span>
            </h2>
        </div>
        <AccordionActuarial :faqs="offers" />

        <ReinsuranceWhy />
        <ContactForm />
    </div>

</template>
