<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Claims Management',
    subTitle: 'Expertise and Efficiency',
    image: 'https://images.pexels.com/photos/1264438/pexels-photo-1264438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Claims Management Expertise',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria Re, we understand that timely claims recovery plays an integral role in enhancing the financial stability, operational efficiency, and reputation of cedants. It not only aligns with regulatory standards but also enhances customer satisfaction and provides a competitive edge in the dynamic insurance market. Our seasoned team of experts brings a wealth of experience in claims management, processing, and dispute resolution. We leverage on technology, robust systems, and experienced claims experts to carefully evaluate and expedite claims, prioritizing accuracy, and efficiency at every stage of the process.'
})

const faqs = ref([
    {
        name: 'Initial Assessment',
        content: 'We conduct a thorough initial assessment of each claim to determine its validity and scope.',
    },
    {
        name: 'Documentation Support',
        content: 'Our team assists in gathering and organizing all necessary documentation to support your claim.',
    },
    {
        name: 'Negotiation & Settlement',
        content: 'We leverage our strong relationships with reinsurers to negotiate favorable settlements on your behalf.',
    },
    {
        name: 'Post-Settlement Support',
        content: 'Even after the claim is settled, we provide ongoing support to address any remaining issues or concerns.',
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
            <Accordion :faqs="faqs" />
        </div>


        <div class="container mx-auto px-4 py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Choose Us <span class="text-brand-primary"> For Claims Management</span>
            </h2>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Data-Driven Claims Processing
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We utilize cutting-edge technology and experienced claims experts to carefully evaluate and
                        expedite claims, prioritizing accuracy and efficiency at every stage of the process.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Profitability and Sustainability
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We aim to deliver claims management that not only meets immediate needs but also contributes to
                        long-term profitability and sustainability for our clients.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Client-Centric Approach
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Your satisfaction is paramount to us. We place clients at the heart of our claims management
                        strategy, ensuring personalized attention, clear communication, and a seamless claims
                        experience.
                    </p>
                </div>
            </div>
        </div>

        <!-- <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Let us handle the complexities of claims management so you can focus on what matters most – running
                    your business. <NuxtLink to="/contact-acentria-group" class="font-semibold italic underline">Contact
                        us today </NuxtLink> to learn more about our
                    services and how we can help you achieve your reinsurance goals.
                </p>
            </div>
        </div> -->

        <!-- <ReinsuranceWhy /> -->
        <ContactForm />
    </div>



</template>
