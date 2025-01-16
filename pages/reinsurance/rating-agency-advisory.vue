<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Ensure Smart Rating',
    subTitle: 'Rating Agency Advisory',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: '',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Enhance your financial credibility and secure favorable credit ratings with our expert Rating Agency Advisory services. Our team provides strategic guidance and tailored solutions to help you navigate the complexities of rating agency requirements and achieve optimal ratings. By understanding rating methodologies, preparing for reviews, and communicating effectively, we empower your business to unlock better financing terms and bolster investor confidence. Trust our expertise to elevate your credit standing and propel your business toward sustained financial success. Let\'s pave the way to top- tier ratings together.'
})

const faqs = ref([
    {
        name: 'Rating Assessment',
        content: 'Evaluate your current credit rating and identify areas for improvement.',
    },
    {
        name: 'Preparation and Presentation',
        content: 'Assist in preparing comprehensive presentations and documentation for rating agencies.',
    },
    {
        name: 'Strategy Development',
        content: 'Develop strategies to strengthen your financial position and meet rating agency criteria.',
    },
    {
        name: 'Ongoing Support',
        content: 'Provide continuous support and guidance to maintain and improve your credit ratings over time.',
    },
]);

</script>

<template>
    <div class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />
        <div class="container mx-auto py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Our <span class="text-brand-primary"> Approach</span>
            </h2>
            <p>
                We help insurers and reinsurers to achieve higher credit ratings by understanding and meeting rating
                agency criteria, boost company's credibility and reputation in the financial markets, lower borrowing
                costs through better credit ratings, and develop and implement strategies to enhance financial
                performance and resilience. Our team of experts have a deep understanding and analysis of the rating
                process, methodology and criteria from rating agencies such as; AM Best, Fitch, and Moody’s .
                <br><br>
                Our Rating Agency Advisory services are designed to help you navigate the complex world of credit
                ratings.

            </p>
            <Accordion :faqs="faqs" />
        </div>

        <!-- <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Ready to enhance your credit rating and financial credibility with our Rating Agency Advisory
                    services? Engage our expert today to learn how we can help you achieve your credit rating goals
                    <NuxtLink to="/contact-acentria-group" class="font-semibold italic underline">Contact us today
                    </NuxtLink>
                    to learn more about our
                    services and how we can help you achieve your reinsurance goals.
                </p>
            </div>
        </div> -->
        <ContactForm />
    </div>
</template>
