<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Ensure Smart Risk Management',
    subTitle: 'Risk On Adjusted Capital',
    image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

const ReinsuranceFeatureContent2 = ref({
    title: 'Best of Our ROAC Services',
    image: 'https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, our commitment to managing risk on adjusted capital is deeply rooted in expertise, data-driven insights, and a dedication to delivering value to our clients. We understand the importance of aligning our goals with your specific financial needs and the ever-changing dynamics of the insurance and reinsurance industry. With our comprehensive approach, we are well-prepared to navigate the intricacies of risk management on adjusted capital, providing stability, reliability, and a competitive edge to our valued clients. Your financial security and long-term success are our top priorities, and our expertise in managing risk on adjusted capital reflects that unwavering commitment.'
})

const faqs = ref([
    {
        name: 'Data Driven Insights',
        content:'Our approach to managing risk on adjusted capital is rooted in data-driven insights. Acentria leverages advanced analytics, historical data, and cutting-edge technology to assess and optimize the allocation of adjusted capital.'
    },
    {
        name: 'Regulatory Adherence and Compliance',
        content:'Stringent compliance with industry regulations and legal requirements is integral to our strategy. Acentria ensures that our risk management practices meet the highest standards, providing transparency and security.'
    },
    {
        name: 'Profitability Objectives',
        content: 'A core focus of our strategy is achieving profitability while managing risk on adjusted capital efficiently. We work to maintain financial strength and sustainability while supporting our clients\' goals.'
    },
    {
        name: 'Sustainable Growth',
        content:'Managing risk on adjusted capital is not only about protection but also about facilitating growth. We aim to strike a balance between preserving capital and enabling long-term financial success.'
    },
])


</script>

<template>

    <div class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="container">
                <h1 class="my-5 section-heading text-left">
                    Return on Risk-Adjusted Capital
                    <span class="text-brand-primary"> (RORAC)
                    </span>
                </h1>
                <p
                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                    Maximize your financial performance with our advanced Return on Risk-Adjusted Capital (RORAC)
                    solutions. By evaluating profitability through the lens of risk, we help you make smarter, more
                    informed decisions that drive sustainable growth. Our expert analysis ensures that every investment
                    and project is optimized for the best possible return, balancing reward with risk in a way that
                    enhances overall stability. Unlock the potential of your capital and achieve unparalleled financial
                    success with our RORAC expertise. Let's turn your financial goals into reality.
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent2" />
        <Accordion :faqs="faqs" />

        <!-- <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Ready to optimize your financial performance using RORAC? Engage our expert to learn how we can help
                    you achieve your financial goals <NuxtLink to="/contact-acentria-group"
                        class="font-semibold italic underline">Contact
                        us today </NuxtLink> to learn more about our
                    services and how we can help you achieve your reinsurance goals.
                </p>
            </div>
        </div> -->

        <ContactForm />
    </div>



</template>
