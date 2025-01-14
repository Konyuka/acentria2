<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Unlock the power of tailored financial strategies',
    subTitle: 'Structured Solutions',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: '',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'Unlock the power of tailored financial strategies with our Structured Solutions. Designed to meet your unique needs, these innovative reinsurance arrangements provide the flexibility and precision required to address complex risks and optimize capital usage. By leveraging cutting-edge techniques and industry expertise, we ensure that each solution enhances your financial stability and drives long-term success. Experience the confidence that comes with bespoke reinsurance strategies crafted just for you.'
})

const faqs = ref([
    {
        name: 'RBC Calculation and Reporting',
        content: 'Accurate calculation of RBC ratios and comprehensive reporting to meet regulatory standards.',
    },
    {
        name: 'Structured Quota Share',
        content: `
            The structured quota share is best suited when:
            <ul>
                <li>New business segment or venture is being launched for which there is no historical experience or exposure to and is subsequently outside of the traditional reinsurance market risk appetite zone.</li>
                <li>Company has made drastic improvements to overall risk rating, claims risk management and/or the overall underwriting process and not getting credit for it from traditional reinsurance markets.</li>
                <li>Suddenly tightened regulatory environment (RBC II, Solvency II, IFRS) is producing higher cost of capital (S&P, BCAR) requirements that creates the potential need for an additional capital infusion in order to maintain a risk-neutral capital position and no detrimental rating agency impacts.</li>
            </ul>
        `,
    },
    {
        name: 'Multi – Year, Multi – Line Aggregate Excess of Loss',
        content: `
            These types of solutions are ideal in scenarios where:
            <ul>
                <li>A company is not getting credit for good years or a fundamental material positive change in underwriting results and seeks a structured alternative that will allow for a sharing of the profits.</li>
                <li>A material shift in increased frequency and/or severity of loss at working layer levels that has made the price for increased traditional reinsurance coverage cost prohibitive and the company seeks a more suitable less expensive bespoke structured risk alternative solution reinsurance cost structure.</li>
                <li>DFA modeling risk optimization schemes and is looking to optimize their reinsurance program by converting their entire Property and/or Casualty program to a multi-year Whole Account Excess of Loss basis and in the process get more vertical or sideways protection at a better price.</li>
                <li>These solutions are useful for gaps in reinsurance coverage due to clash coverage issues or traditional reinsurance market’s inability or unwillingness to provide coverage due to regulatory risk, event risk, market shocks or changes to the insurance operations and underwriting process that have materially affected the risk profile of the company.</li>
            </ul>
        `,
    },
    {
        name: 'Aggregate Stop Loss',
        content: `
            These types of solutions offer help in scenarios where:
            <ul>
                <li>A customer seeks to stabilize earnings at the net retained line level, protect their earnings position due to ongoing or imminent solvency capital concerns, or wants to procure the company’s overall net target or planned combined ratio and strategically align the overall business plan with their reinsurance program.</li>
                <li>A net retained line coverage designed to protect the Cedant from unexpected or unforeseen loss risk that falls outside the scope or risk appetite level of the traditional reinsurance market.</li>
            </ul>
        `,
    },
    {
        name: 'Loss Portfolio Transfer',
        content: `
            This solution focuses on scenarios where:
            <ul>
                <li>A customer wants to improve their excess surplus capital position or their fair value assessment in an M&A situation.</li>
                <li>A customer wants to exit a line of business or remove highly problematic claims reserve liabilities.</li>
            </ul>
        `,
    },
    {
        name: 'Adverse Development Covers',
        content: `
            Adverse development covers can:
            <ul>
                <li>Provide immediate capital relief for reserve liabilities associated with onerous regulatory cost of capital requirements.</li>
                <li>Protect future earnings from further or unexpected reserve deterioration or acceleration of reserve settlements for medium to long-tail lines of business.</li>
                <li>Create a safety margin and improve a company’s security rating and shareholder value by transferring future claims reserve liability risk to the reinsurer.</li>
            </ul>
        `,
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
                Our team of experts brings exceptional technical expertise to craft customized, structured solutions,
                ensuring they deliver maximum value to your business.

                Key advantages include offering tailored solutions that align with specific risk profiles and financial
                goals, facilitating efficient use of capital to maximize returns while maintaining regulatory
                compliance, strengthening the financial position of insurers through strategic risk transfer, and
                leveraging advanced reinsurance structures to effectively manage complex risks.
                We specialize in crafting and implementing structured reinsurance solutions tailored to your unique
                needs, including comprehensive risk analysis to identify areas for improvement, bespoke reinsurance
                structures that align with your business goals, strategic advisory for optimizing your reinsurance
                strategy to achieve financial stability and capital efficiency, and continuous support to adapt your
                reinsurance program to changing market conditions and business needs.

            </p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container mx-auto px-4 py-5">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why Partner<span class="text-brand-primary"> With Us</span>
            </h2>
            <div class="grid gap-6 md:grid-cols-4">
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Deep Industry Knowledge
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Our team comprises seasoned professionals with extensive experience in structured reinsurance
                        solutions.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Proven Success
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        A history of delivering successful outcomes through innovative and effective reinsurance
                        strategies.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Client-Focused Solutions
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Personalized services designed to meet your specific needs and objectives.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Commitment to Excellence
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Dedicated to providing top-notch service and support to ensure your success.
                    </p>
                </div>
            </div>

        </div>


        <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Ready to explore the benefits of structured reinsurance solutions? <NuxtLink
                        to="/contact-acentria-group" class="font-semibold italic underline">Contact us today
                    </NuxtLink>
                    to learn more about our
                    services and how we can help you achieve your reinsurance goals.
                </p>
            </div>
        </div>

        <ContactForm />
    </div>
</template>
