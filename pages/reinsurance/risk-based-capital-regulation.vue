<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Ensure Smart Risk Management',
    subTitle: 'Risk Based Capital Compliance',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: '',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Navigate the complexities of financial stability with our expert Risk-Based Capital Regulation services. By ensuring you meet regulatory requirements and maintain optimal capital levels, we help you safeguard your business against unforeseen risks. Our tailored approach provides a clear roadmap for compliance, capital efficiency, and sustainable growth, allowing you to focus on what matters most—driving your business forward. Partner with us to turn regulatory challenges into opportunities for strengthened resilience and strategic advantage. Let\'s secure your financial future together.',
})

const faqs = ref([
    {
        name: 'RBC Calculation and Reporting',
        content: 'Accurate calculation of RBC ratios and comprehensive reporting to meet regulatory standards.',
    },
    {
        name: 'Risk Assessment',
        content: 'Thorough analysis of your risk exposures and development of strategies to mitigate them.',
    },
    {
        name: 'Capital Optimization',
        content: 'Recommendations to optimize your capital structure and improve financial performance.',
    },
    {
        name: 'Regulatory Guidance',
        content: 'Expert advice on complying with evolving regulatory requirements and staying ahead of changes.',
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
                We are keen to apply our expertise on financial analysis, retention and the components of capital enable
                us assist our insurers and reinsurers in ensuring adherence to regulatory requirements to avoid
                potential penalties, identifying and mitigating financial risks to maintain stability, optimizing
                capital allocation to maximize returns on investments, and making informed decisions based on
                comprehensive risk assessments are all integral aspects of our approach.
                <br><br>
                Our Risk-Based Capital Advisory services are designed to help insurance companies navigate the
                complexities of RBC requirements.
            </p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container mx-auto px-4 py-5">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why <span class="text-brand-primary"> Choose Us</span>
            </h2>
            <div class="grid gap-6 md:grid-cols-4">
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Experienced Professionals
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our team consists of seasoned experts with deep knowledge of RBC standards and regulatory
                        frameworks.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Tailored Solutions
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We provide customized advisory services that align with your unique business
                        needs and risk profile.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Proven Track Record
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        A history of successfully helping clients achieve their RBC goals and
                        enhance their financial stability.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Client-Centric Approach
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We prioritize your specific needs and objectives, ensuring personalized
                        and effective solutions.
                    </p>
                </div>
            </div>
        </div>

<!-- 
        <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Ready to strengthen your financial stability with our Risk-Based Capital Advisory services? Engage
                    our expert today us today to learn how we can help you achieve your RBC goals.
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
