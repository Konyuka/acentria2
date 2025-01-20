<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Financial Planning and Structuring',
    subTitle: 'Steadfast Partner Dedicated to Your Company’s Stability & Growth',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Finnacial Management',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'Imagine having a steadfast partner dedicated to ensuring your insurance company’s stability and growth. Our Financial Planning and Structuring Advisory service offers precisely this through the art and science of reinsurance broking. By expertly balancing risk assessment, capital management, and tailored reinsurance solutions, we transform complexities into strategic advantages.'
})

const faqs = ref([
    {
        name: 'Risk Assessment',
        content:
            'Evaluating the types and levels of risks that an insurance company faces, including underwriting, market, credit, and operational risks.',
    },
    {
        name: 'Capital Management',
        content:
            'Ensuring that the insurance company has sufficient capital to meet its obligations. This involves optimizing the capital structure to support growth and minimize costs.',
    },
    {
        name: 'Strategic Reinsurance Solutions',
        content:
            'Crafting bespoke reinsurance programs to achieve optimal risk transfer, bolster capital security, and align with the insurer’s long-term strategy.',
    },
    {
        name: 'Regulatory Compliance',
        content:
            'Ensuring that reinsurance arrangements comply with relevant regulations and standards, including solvency requirements and accounting standards.',
    },
    {
        name: 'Market Intelligence',
        content:
            'Leveraging market data and relationships to identify new reinsurance partners and negotiate favorable terms.',
    },
    {
        name: 'Financial Optimization',
        content:
            "Using actuarial and financial expertise to design reinsurance solutions that improve the insurer's financial performance, including reducing volatility and enhancing profitability.",
    },
    {
        name: 'Event-Specific Solutions',
        content:
            'Creating specialized reinsurance programs for unique events, including mergers and acquisitions, regulatory updates, and market fluctuations.',
    },
    {
        name: 'Alternative Capacity',
        content:
            'Incorporating innovative risk transfer options like catastrophe bonds and insurance-linked securities to enhance capacity and diversify risk.',
    },
])


</script>

<template>
    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />
        <div class="container mx-auto py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Our <span class="text-brand-primary"> Approach</span>
            </h2>
            <p class="pb-5">
                Financial reviews and analysis are crucial components of treaty analysis and reinsurance program design.
                Our expert team is dedicated to helping insurers manage risk, optimize capital, and enhance
                profitability through innovative reinsurance solutions.
                Our approach is aims to assist clients to enhance capital position and liquidity with tailored
                reinsurance strategies, stay ahead of regulatory changes with our expert guidance on Solvency II and
                other frameworks, and explore alternative reinsurance solutions, including longevity reinsurance and
                multi-line covers.
                <br><br>
                Our Key Focus in Financial Planning and Structuring

            </p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container mx-auto px-4 py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Choose Us?
            </h2>
            <div class="grid gap-6 md:grid-cols-3">
                <!-- Expert Risk Management -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Expert Risk Management
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We help you navigate the complexities of risk transfer, ensuring your
                        portfolio is protected against unforeseen events.
                    </p>
                </div>

                <!-- Capital Optimization -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Capital Optimization
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our strategies are designed to maximize your capital efficiency,
                        allowing you to meet regulatory requirements and achieve financial
                        stability.
                    </p>
                </div>

                <!-- Customized Solutions -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Customized Solutions
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We offer bespoke reinsurance structures that align with your specific
                        business goals and regulatory landscape.
                    </p>
                </div>
            </div>
        </div>


        <ContactForm />
    </div>
</template>
