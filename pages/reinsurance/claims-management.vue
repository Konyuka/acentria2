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
    content: 'At Acentria Re, we understand that timely claims recovery plays an integral role in enhancing the financial stability, operational efficiency, and reputation of cedants. It not only aligns with regulatory standards but also enhances customer satisfaction and provides a competitive edge in the dynamic insurance market. Our seasoned team of experts brings a wealth of experience in claims management, processing, and dispute resolution. We leverage on technology, robust systems, and experienced claims experts to carefully evaluate and expedite claims, prioritizing accuracy, and efficiency at every stage of the process',
})

const faqs = ref([
    {
        name: 'Resources',
        content: 'Well established claims department with experience personnel Designated Account handler and claims personnel State of art system that has an all-rounded claims management capability Regular training of claims personnel to horn capacity.'
    },
    {
        name: 'Administration',
        content: 'Facilitate and sign SLAs with reinsurers in line with insurer claims strategy Prompt response to claims guided by a strict Service Level Agreement Tri patriates SLA with cedant and reinsurers Standard claims checklist'
    },
    {
        name: 'Communication',
        content: 'Designated account handler and claims personnel general claims email for ease of communication and continuity Clear escalation matrix  incorporated on the SLA.'
    },
    {
        name: 'Reporting and Meetings',
        content: 'Monthly claims reports outlining claim status, incurred losses, reserves, and recovery efforts Quarterly meetings to discuss claim developments and align on strategies Review of  Bordeaux on a quarterly basis.'
    },
    {
        name: 'Value Addition',
        content: 'Advanced Risk management advisory – Virtual ITake on: Outstanding  Recoveries Strategic negotiation on ex gratia and complex claims.'
    },



])

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />


        <div class="container mx-auto px-4 py-10">
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

        <!-- <ReinsuranceWhy /> -->
        <ContactForm />
    </div>



</template>
