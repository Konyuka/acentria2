<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Regulatory Compliance and Governance ',
    subTitle: 'Ensure Excellence',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Compliance & Governance ',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we understand the critical importance of regulatory compliance and robust governance in the reinsurance industry. Our expert team is dedicated to ensuring that your reinsurance strategies not only meet but exceed regulatory standards, providing you with peace of mind and a solid foundation for growth.'
})

const faqs = ref([
    {
        name: 'Our Key Focus in Regulatory Compliance and Governance',
        content: `
      <p><strong>Regulatory Advisory:</strong> We offer specialized expertise to help you navigate the intricate regulatory environments, including frameworks such as Solvency II, IFRS 17, and other pertinent regulations and frameworks.</p>
      <p><strong>Risk Management:</strong> Our experts assist you in crafting and executing robust risk management strategies that meet regulatory standards and adhere to industry best practices.</p>
      <p><strong>Governance Frameworks:</strong> We help you create strong governance frameworks that promote accountability, transparency, and regulatory compliance throughout your organization.</p>
    `
    },
    {
        name: 'Why Regulatory Compliance Matters',
        content: `
      <p><strong>Risk Mitigation:</strong> Ensuring compliance with regulatory requirements helps mitigate risks and protects your business from potential legal and financial repercussions.</p>
      <p><strong>Enhanced Credibility:</strong> Adhering to regulatory standards enhances your credibility with stakeholders, including clients, investors, and regulators.</p>
      <p><strong>Operational Efficiency:</strong> A well-structured compliance framework streamlines operations and supports sustainable business practices.</p>
    `
    },
    {
        name: 'Key Considerations to be made by the client',
        content: `
      <p><strong>Timely Engagement:</strong> Initiating discussions with regulators early is essential for securing approval for reinsurance deals, particularly those that are highly customized.</p>
      <p><strong>Counterparty Risk:</strong> Grasping and mitigating counterparty risk is crucial for adhering to regulatory requirements and ensuring the success of your reinsurance strategy.</p>
      <p><strong>Jurisdiction:</strong> Ensuring that assets involved in reinsurance transactions are maintained in local custodian accounts is often a critical regulatory mandate.</p>
    `
    },
    {
        name: 'Our commitment to clients',
        content: `
      <p><strong>Regulatory Advisory:</strong> Stay ahead of regulatory changes with our proactive advisory services.</p>
      <p><strong>Risk Management:</strong> Implement effective risk management strategies that align with industry best practices.</p>
      <p><strong>Governance Excellence:</strong> Establish strong governance structures that ensure accountability and transparency across your organization.</p>
    `
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
                We review the terms and conditions of the treaty agreements to ensure they are legally binding and
                enforceable by analyzing the obligations of both the reinsurer and the primary insurer to avoid any
                potential breaches.
                <br><br>
                Our Key Focus in Financial Planning and Structuring

            </p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container mx-auto px-4 py-10">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Choose Us?
            </h2>
            <!-- Update the grid to accommodate four items (e.g., md:grid-cols-4) -->
            <div class="grid gap-6 md:grid-cols-4">
                <!-- Experienced Professionals -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Experienced Professionals
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our team consists of seasoned experts with deep knowledge of Risk Based
                        Capital standards and regulatory frameworks.
                    </p>
                </div>

                <!-- Tailored Solutions -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Tailored Solutions
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        We provide customized advisory services that align with your unique
                        business needs and risk profile.
                    </p>
                </div>

                <!-- Proven Track Record -->
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Proven Track Record
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        A history of successfully helping clients achieve their RBC goals and
                        enhance their financial stability.
                    </p>
                </div>

                <!-- Client-Centric Approach -->
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

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Risk Based <span class="text-brand-primary">Capital Standards </span>
            </h1>

            <div class="pb-5">
                <p class="text-xs ">
                    Navigate the complexities of financial stability with our expertise Services
                </p>

            </div>
            <div class="relative gap-10 lg:basis-1/2 flex items-center">
                <NuxtLink to="/reinsurance/risk-based-capital-regulation"
                    class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                    Risk Based Capital Standards
                    <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
            </div>


        </div>

        <ContactForm />
    </div>
</template>
