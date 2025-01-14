<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Stabilize the Company\'s Overall Operating Results.',
    subTitle: 'Ensure Smart Operating Results',
    image: 'https://images.pexels.com/photos/1264438/pexels-photo-1264438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Smart Operating Results',
    image: 'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'To navigate volatility ranging from climate to economic factors, insurers need to delve deep into understanding and mitigating the risks by enhancing their view of risk. Data, tools and analytics must complement broking and advisory capabilities to help protect and grow insurers’ businesses. Insurers often seek to reduce the wide swings in profit and loss margins inherent to the insurance business. These fluctuations result, in part, from the unique nature of insurance, which involves pricing a product whose actual cost will not be known until sometime in the future. Through reinsurance, insurers can reduce these fluctuations in loss experience, and stabilize the company\'s overall operating results. Our reinsurance solutions are designed to stabilize your company\'s overall operating results. By transferring a portion of your risk to reliable reinsurers, we help you:'
})

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="container pb-10">
                    <div class="grid gap-6 md:grid-cols-4 text-center">
                        <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                            <div class="flex justify-center mb-4">
                                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                                    <i class="fas fa-chart-line text-white"></i> <!-- Icon for financial volatility -->
                                </span>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Mitigate Financial Volatility</h2>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700">
                                Reduce the impact of catastrophic losses and large claims on your financial statements.
                            </p>
                        </div>
                        <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                            <div class="flex justify-center mb-4">
                                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                                    <i class="fas fa-balance-scale text-white"></i> <!-- Icon for risk pricing -->
                                </span>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Unlock Precision in Risk Pricing</h2>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700">
                                Achieve more predictable underwriting results and financial performance.
                            </p>
                        </div>
                        <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                            <div class="flex justify-center mb-4">
                                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                                    <i class="fas fa-shield-alt text-white"></i> <!-- Icon for financial stability -->
                                </span>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Strengthen Financial Stability</h2>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700">
                                Maintain a strong balance sheet, ensuring long-term stability and growth.
                            </p>
                        </div>
                        <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                            <div class="flex justify-center mb-4">
                                <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                                    <i class="fas fa-coins text-white"></i> <!-- Icon for capital efficiency -->
                                </span>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Optimize Capital Efficiency</h2>
                            <p class="mt-2 text-sm leading-relaxed text-gray-700">
                                Free up capital for other strategic investments and business opportunities.
                            </p>
                        </div>
                    </div>
        </div>



        <ContactForm />
    </div>



</template>
