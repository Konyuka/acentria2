<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Claims Management',
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
        <!-- <div class="grid grid-cols-2 font-sans">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 align-center my-10">
                <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">

                        <p class="text-center mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Our Approach
                        </p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Our claims processes are fully automated for efficiency, ensuring prompt acknowledgement and
                            reporting of claims as they occur. We maintain constant communication with clients at all
                            stages, providing regular updates and support. Our system facilitates thorough
                            investigation, accurate documentation, and swift settlements, whether through cash call
                            requests or excess of loss recoveries. By leveraging advanced technology, we streamline
                            every step, minimizing delays and maximizing transparency. Our dedicated team collaborates
                            closely with clients to ensure a seamless experience, from initial reporting to final
                            resolution, building long-term trust and satisfaction.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ReinsuranceFaqs :content="faqs" />
            </div>
        </div> -->

        <div class="mt-5 isolate mx-5 mb-10 grid gap-2 max-w-6xl mx-auto grid-cols-3 font-sans">

            <div class="rounded-xl p-8 ring-1 ring-brand-primary shadow-xl">
                <h2 id="tier-hobby" class="mt-5 text-center text-lg font-semibold leading-8 text-gray-900">
                    Data-Driven Claims Processing
                </h2>
                <p class="text-center mt-2 text-xs">
                    We utilize cutting-edge technology and experienced claims experts to carefully evaluate and expedite
                    claims, prioritizing accuracy and efficiency at every stage of the process.
                </p>
            </div>
            <div class="rounded-xl p-8 ring-1 ring-brand-primary shadow-xl">
                <h2 id="tier-hobby" class="mt-5 text-center text-lg font-semibold leading-8 text-gray-900">
                    Profitability and Sustainability
                </h2>
                <p class="text-center mt-2 text-xs">
                    We aim to deliver claims management that not only meets immediate needs but also contributes to
                    long-term profitability and sustainability for our clients.
                </p>
            </div>
            <div class="rounded-xl p-8 ring-1 ring-brand-primary shadow-xl">
                <h2 id="tier-hobby" class="mt-5 text-center text-lg font-semibold leading-8 text-gray-900">
                    Client-Centric Approach
                </h2>
                <p class="text-center mt-2 text-xs">
                    Your satisfaction is paramount to us. We place clients at the heart of our claims management
                    strategy, ensuring personalized attention, clear communication, and a seamless claims experience.
                </p>
            </div>
        </div>
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
