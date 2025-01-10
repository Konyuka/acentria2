<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Security and Peace of Mind',
    subTitle: 'Risk Management',
    image: 'https://img.freepik.com/free-photo/risk-protection-eliminating-risk-top-view_185193-110239.jpg?t=st=1736489111~exp=1736492711~hmac=3dc61ac49100ee7aa93bd9a0295daa6a409480b2bb96d1e596f361260c2921c6&w=900',
})

const benefits = ref([
    {
        name: 'Comprehensive Risk Assessment',
        icon: 'fas fa-search',
        description: 'Understanding your unique risk profile is the first step toward effective risk management. Our comprehensive risk assessment services help you identify potential vulnerabilities and develop strategies to address them.',
        items: [
            {
                name: 'Risk Identification',
                description: 'Thorough analysis to uncover potential risks that could impact your financial well-being.',
            },
            {
                name: 'Risk Evaluation',
                description: 'Assessment of the likelihood and potential impact of identified risks.',
            },
            {
                name: 'Risk Prioritization',
                description: 'Ranking of risks based on their severity and the urgency of mitigation efforts.',
            },
        ],
    },
    {
        name: 'Customized Insurance Solutions',
        icon: 'fas fa-user-shield',
        description: 'Once risks are identified and evaluated, we tailor insurance solutions to provide optimal coverage and protection.',
        items: [
            {
                name: 'Personal Insurance',
                description: 'Customized policies to protect your home, health, and assets from unforeseen events.',
            },
            {
                name: 'Business Insurance',
                description: 'Tailored coverage for businesses, including property, liability, and professional indemnity insurance.',
            },
            {
                name: 'Specialized Insurance',
                description: 'Unique insurance solutions for specific needs, such as cyber risk, environmental liability, and more.',
            },
        ],
    },
    {
        name: 'Risk Mitigation Strategies',
        icon: 'fas fa-shield-alt',
        description: 'Our proactive risk mitigation strategies help you minimize potential risks and safeguard your financial stability.',
        items: [
            {
                name: 'Preventive Measures',
                description: 'Implementation of practices and procedures to reduce the likelihood of risk occurrence.',
            },
            {
                name: 'Loss Prevention Programs',
                description: 'Comprehensive programs designed to prevent and minimize potential losses.',
            },
            {
                name: 'Crisis Management',
                description: 'Strategies and plans to effectively respond to and recover from adverse events.',
            },
        ],
    },
    {
        name: 'Ongoing Risk Monitoring and Review',
        icon: 'fas fa-sync-alt',
        description: 'Risk management is an ongoing process. We provide continuous monitoring and periodic reviews to ensure your risk management strategies remain effective and up-to-date.',
        items: [
            {
                name: 'Regular Reviews',
                description: 'Periodic assessment of your risk profile and insurance coverage to adapt to changing circumstances.',
            },
            {
                name: 'Risk Monitoring',
                description: 'Continuous tracking of potential risks and emerging threats.',
            },
            {
                name: 'Feedback and Improvement',
                description: 'Incorporating feedback and lessons learned to enhance risk management strategies.',
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
                Expert <span class="text-brand-primary">Risk Management</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Welcome to Acentria, where we prioritize your security and peace of mind through expert risk management
                in insurance. Our goal is to help you identify, assess, and mitigate potential risks, ensuring that you
                are well-protected against uncertainties and financial losses.
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Risk <span class="text-brand-primary pb-5"> Management Services</span>
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
                                        <h1 class="!font-semibold text-[14px]"> <i class="fas fa-caret-right text-brand-primary mr-2"></i> {{
                                            item.name }}</h1>
                                        <p class="text-[12px]">{{ item.description }}</p>
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
                        We are committed to providing expert risk management services that protect you from financial
                        uncertainties. Our experienced team of risk management professionals works closely with you to
                        develop personalized solutions that align with your unique needs and goals. With our proactive
                        approach, comprehensive coverage options, and unwavering support, you can trust us to keep you
                        safe and secure.
                        Discover how our risk management services can safeguard your future. Contact us <NuxtLink
                            class="text-brand-primary underline italic">Contact us</NuxtLink> today
                        to learn
                        more and get started on your path to financial security.



                    </p>


                </div>
            </section>
        </div>
    </section>
</template>

<style scoped></style>