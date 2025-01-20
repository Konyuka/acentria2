<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Risk Assessment and Modelling',
    subTitle: 'Unlock the power of precision',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Risk Modelling',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we understand that risk assessment and modelling is a cornerstone of effective reinsurance broking. Our service is designed to provide a comprehensive understanding of the risks your insurance company faces, allowing you to make informed decisions and develop robust risk management strategies.'
})

// Replace your existing faqs = ref([...]) with the following:
const faqs = ref([
    {
        name: 'Catastrophe Modelling',
        content: `
      <p>
        We employ cutting-edge catastrophe models to assess the risks linked to
        natural disasters, including hurricanes, earthquakes, and floods. These
        models play a crucial role in pricing, underwriting, and making
        informed reinsurance purchase decisions.
      </p>
      <div class="mt-3">
        <a
          href="/reinsurance/catastrophic-modelling"
          class="!button-animation bg-black !hover:bg-brand-primary
                 text-white font-medium py-1 px-12 text-sm rounded-sm"
        >
          Learn More
          <i class="fas fa-arrow-right text-primary ml-2"></i>
        </a>
      </div>
    `,
    },
    {
        name: 'Risk Aggregation Analysis',
        content: `
      <p>
        Our risk aggregation analysis pinpoints and assesses the concentration
        of risk within your portfolio, ensuring that you are effectively
        equipped to handle potential large-scale events.
      </p>
    `,
    },
    {
        name: 'Scenario Analysis',
        content: `
      <p>
        We perform scenario analysis to evaluate the effects of different
        hypothetical events on your portfolio, aiding in the creation of strong
        risk management strategies.
      </p>
    `,
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
            <p>
                By harnessing advanced analytics and state-of-the-art modeling techniques, we provide you with
                unparalleled insights into your risk landscape. Our expert team meticulously evaluates your risk
                exposure, ensuring that you have a robust strategy to safeguard your business. Dive into a future of
                informed decision-making and secure reinsurance solutions designed to protect and propel your growth.
            </p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container mx-auto px-4 py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Choose Us?
            </h2>
            <div class="grid gap-6 md:grid-cols-3">
                <!-- Advanced Technology -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Advanced Technology
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We employ cutting-edge technology and sophisticated models to provide
                        accurate and reliable risk assessments.
                    </p>
                </div>

                <!-- Expert Insights -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Expert Insights
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our team of experienced professionals offers deep insights into risk
                        factors and mitigation strategies, ensuring your reinsurance program is
                        resilient and effective.
                    </p>
                </div>

                <!-- Customized Solutions -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Customized Solutions
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We tailor our risk assessment and modelling services to meet your
                        specific needs, providing you with actionable insights and strategic
                        recommendations.
                    </p>
                </div>
            </div>
        </div>

        <ContactForm />
    </div>
</template>
