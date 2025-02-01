<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Unlock Unparalleled Market Intelligence',
    subTitle: 'Market Insights and Negotiation',
    image: 'https://images.pexels.com/photos/1264438/pexels-photo-1264438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Market Insights',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'Stay ahead of the curve with our comprehensive analysis of the latest industry trends and developments in the reinsurance market. Gain a competitive edge through detailed assessments of market players, their strategies, and performance metrics. Understand the potential risks and opportunities with our thorough risk analysis and forecasting.'
})
const ReinsuranceFeatureContent2 = ref({
    title: 'Negotiation Services',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'Our experienced negotiators work tirelessly to secure favorable terms and conditions for your reinsurance agreements. We tailor our negotiation strategies to meet your specific needs, ensuring each deal aligns with your business objectives. Additionally, we ensure all negotiations adhere to regulatory requirements, minimizing legal risks and ensuring smooth transactions.'
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

const styledTitle = computed(() => {
    return splitAndStyle(ReinsuranceFeatureContent2.value.title);
})

const splitAndStyle = (text) => {
    const words = text.split(' ');
    const half = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, half).join(' ');
    const secondHalf = words.slice(half).join(' ');
    return `${firstHalf} <span class="text-brand-primary">${secondHalf}</span>`;
}

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="container">
                <h1 class="my-5 section-heading text-left">
                    Market <span class="text-brand-primary"> Intelligence </span>
                </h1>
                <p
                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                    Unlock unparalleled market intelligence and masterful negotiation strategies with our elite
                    reinsurance broking services. Our in-depth market insights keep you ahead of industry trends and
                    emerging opportunities, while our expert negotiators secure the most advantageous terms for your
                    reinsurance agreements. Partner with us to optimize your risk management, reduce costs, and ensure
                    your business thrives in a competitive landscape.
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="overflow-hidden bg-white py-4 sm:py-6 lg:py-8">
            <div class="container mx-auto">
                <div
                    class="font-sans mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div class="flex justify-center lg:justify-end">
                        <NuxtImg :src="ReinsuranceFeatureContent2.image" alt="Product screenshot"
                            class="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:h-1/4" />
                    </div>
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <!-- <h2 class="text-base font-semibold leading-7 text-brand-primary">Acentria Reinsurance Brokers</h2> -->
                            <p v-html="styledTitle"
                                class="mt-2 text-2xl sm:text-2xl font-semibold leading-normal text-gray-900">
                            </p>
                            <p class="mt-4 sm:mt-6 text-xs text-black leading-normal">
                                {{ ReinsuranceFeatureContent2.content }}
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </div>



        <div class="container mx-auto px-4 py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Choose Us?
            </h2>
            <div class="grid gap-6 md:grid-cols-3">
                <!-- Expertise -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Expertise
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our team has extensive experience and deep knowledge of the reinsurance
                        industry, providing you with unparalleled insights and advice.
                    </p>
                </div>

                <!-- Tailored Approach -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Tailored Approach
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We understand that every business is unique, and we customize our
                        services to meet your specific needs and goals.
                    </p>
                </div>

                <!-- Proven Results -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Proven Results
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our track record of successful negotiations and market analysis speaks
                        for itself, demonstrating our commitment to excellence.
                    </p>
                </div>
            </div>
        </div>


        <ContactForm />
    </div>



</template>
