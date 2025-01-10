<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Expertise and Efficiency',
    subTitle: 'Insurance Policy Management',
    image: 'https://img.freepik.com/free-photo/doctor-helping-patient-signing-paperwork-medical-insurance-document-form-illness-healthcare-treatment-clinical-consultation-hospital-policy-bill-medication-prescription-close-up_482257-68537.jpg?t=st=1736503576~exp=1736507176~hmac=4a94e7f2ba907337b0319df36453ae764d3110db694bbe70e1ea0bad42b516ee&w=900',
})

const benefits = ref([
    {
        name: 'Policy Administration',
        icon: 'fas fa-file-alt',
        description: 'Our policy administration services provide seamless management of your insurance policies, from issuance to renewal. We handle all the details, so you can focus on what matters most.',
        items: [
            {
                name: 'Policy Issuance',
                description: 'Streamlined process for issuing new policies, ensuring accuracy and compliance.',
            },
            {
                name: 'Renewal Management',
                description: 'Automated reminders and efficient handling of policy renewals to prevent lapses in coverage.',
            },
            {
                name: 'Endorsement Processing',
                description: 'Quick and accurate processing of policy changes and endorsements.',
            },
        ],
    },
    {
        name: 'Claims Management',
        icon: 'fas fa-hand-holding-usd',
        description: 'Efficient claims management is critical to maintaining your financial stability. Our experienced team ensures that claims are handled promptly and fairly.',
        items: [
            {
                name: 'Claims Reporting',
                description: 'Hassle-free reporting of claims through our customer care portal or website.',
            },
            {
                name: 'Claims Processing',
                description: 'Swift and accurate processing of claims to minimize disruption and financial impact.',
            },
            {
                name: 'Claims Tracking',
                description: 'Ongoing monitoring and updates on the status of your claims.',
            },
            {
                name: 'Dispute Resolution',
                description: 'Expert assistance in resolving claim disputes to ensure fair outcomes.',
            },
        ],
    },
    {
        name: 'Compliance and Regulatory Support',
        icon: 'fas fa-balance-scale',
        description: 'Navigating the regulatory landscape can be challenging. We provide comprehensive support to ensure that your policies comply with all relevant regulations.',
        items: [
            {
                name: 'Regulatory Compliance',
                description: 'Assistance in meeting industry regulations and standards.',
            },
            {
                name: 'Audit Preparation',
                description: 'Support in preparing for audits and regulatory reviews.',
            },
            {
                name: 'Policy Documentation',
                description: 'Accurate and thorough documentation to meet compliance requirements.',
            },
        ],
    },
    {
        name: 'Customer Support and Service',
        icon: 'fas fa-headset',
        description: 'Our commitment to exceptional customer service means that you always have access to the support you need. We are here to answer your questions, address your concerns, and provide guidance.',
        items: [
            {
                name: 'Dedicated Support Team',
                description: 'Access to a team of knowledgeable professionals for personalized assistance.',
            },
            {
                name: '24/7 Customer Service',
                description: 'Round-the-clock support to address your needs whenever they arise.',
            },
            {
                name: 'Online Account Management',
                description: 'Convenient online tools for managing your policies and accessing information.',
            },
        ],
    },
    {
        name: 'Risk Management and Analysis',
        icon: 'fas fa-chart-line',
        description: 'Effective risk management is essential to protecting your assets and minimizing potential losses. We offer expert analysis and tailored solutions to help you manage risk effectively.',
        items: [
            {
                name: 'Risk Assessment',
                description: 'Comprehensive evaluation of your risk profile to identify potential vulnerabilities.',
            },
            {
                name: 'Risk Mitigation Strategies',
                description: 'Development of strategies to minimize and manage risk.',
            },
            {
                name: 'Ongoing Monitoring',
                description: 'Continuous monitoring of your risk landscape to adapt to changing circumstances.',
            },
        ],
    },
    {
        name: 'Value Addition',
        icon: 'fas fa-gift',
        description: 'To ensure you get value for your money, we provide additional complementary services uniquely crafted to fit your needs.',
        items: [
            {
                name: 'Financial Wellness',
                description: 'We empower you with the knowledge and tools you need to achieve financial stability and security through our tailored services. <a href="/financial-wellness" class="text-brand-primary underline">Find out More</a>',
            },
            {
                name: 'Cyber Security Risk Management',
                description: 'Our cybersecurity risk management services are designed to provide robust protection and peace of mind. The services are provided by our team of experts. <a href="/cyber-security" class="text-brand-primary underline">Find out More</a>',
            },
            {
                name: 'Online Support',
                description: 'Our customer care portal provides you with unmatched experience, from renewing your policy, reporting claims, access to wellness tools, valuable insights, and seamless management of your policies.',
            },
        ],
    },
]);


</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Policy <span class="text-brand-primary">Management</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Welcome to Acentria, where we are dedicated to providing exceptional claims management services. Our
                goal is to enWelcome to Acentria, your trusted partner in efficient and effective insurance policy
                management. We understand that managing insurance policies can be complex and time-consuming, which is
                why we offer comprehensive services designed to simplify the process and ensure your peace of mind.sure
                a smooth and efficient claims process, so you can focus on recovery and rebuilding
                while we handle the details.
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">


                <div class="container">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Claim <span class="text-brand-primary"> Management Service</span>
                    </h2>

                    <div class="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-bold text-black !text-[18px] pb-1 leading-normal">{{
                                    principle.name }}</h4>
                                <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                                <div class="pt-5 grid grid-cols-1 gap-5">
                                    <div v-for="item in principle.items" class="flex flex-col gap-2">
                                        <h1 class="!font-semibold text-[14px]"> <i
                                                class="fas fa-caret-right text-brand-primary mr-2"></i> {{
                                            item.name }}</h1>
                                        <p class="text-[12px]" v-html="item.description"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mx-auto pb-10">
                    <h1 class="text-2xl text-black !font-semibold mb-6">
                        Why <span class="text-brand-primary">Choose Us</span>
                    </h1>
                    <p class="mt-6 text-xs leading-normal">
                        At Acentria, we are dedicated to providing top-notch insurance policy management services that
                        simplify and enhance your experience. Our team of experts is committed to delivering
                        personalized solutions, exceptional customer service, and comprehensive support. With our
                        innovative approach and unwavering dedication to your needs, you can trust us to manage your
                        policies with the utmost care and professionalism.
                        Discover how our insurance policy management services can benefit you. <NuxtLink
                            class="text-brand-primary underline italic">Contact us today</NuxtLink> to learn
                        more and get started on the path to efficient and effective policy management.
                    </p>
                </div>

            </section>
        </div>
    </section>
</template>

<style scoped></style>