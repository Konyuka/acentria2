
<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Expertise and Efficiency',
    subTitle: 'Claims Management',
    image: 'https://img.freepik.com/free-photo/doctor-helping-patient-signing-paperwork-medical-insurance-document-form-illness-healthcare-treatment-clinical-consultation-hospital-policy-bill-medication-prescription-close-up_482257-68537.jpg?t=st=1736503576~exp=1736507176~hmac=4a94e7f2ba907337b0319df36453ae764d3110db694bbe70e1ea0bad42b516ee&w=900',
})

const benefits = ref([
    {
        name: 'Comprehensive Claims Processing',
        icon: 'fas fa-file-alt',
        description: 'At Acentria, we understand that filing a claim can be stressful. Our comprehensive claims processing services are designed to simplify the process and provide you with the support you need.',
        items: [
            {
                name: 'Swift Claims Filing',
                description: 'Easy and efficient claims filing process to get you started without delays.',
            },
            {
                name: 'Accurate Documentation',
                description: 'Thorough documentation and record-keeping to ensure all necessary information is collected and processed.',
            },
            {
                name: 'Fair Assessment',
                description: 'Objective and fair assessment of claims to determine accurate payouts.',
            },
        ],
    },
    {
        name: 'Personalized Support',
        icon: 'fas fa-hands-helping',
        description: 'We believe in providing personalized support to our clients during challenging times. Our dedicated team is here to guide you through every step of the claims process.',
        items: [
            {
                name: 'Claims Assistance',
                description: 'Expert assistance to help you understand your coverage and the claims process.',
            },
            {
                name: 'Communication and Updates',
                description: 'Regular updates on the status of your claim and open lines of communication to address your concerns.',
            },
            {
                name: 'Advocacy',
                description: 'Dedicated advocates working on your behalf to ensure fair and timely settlements.',
            },
        ],
    },
    {
        name: 'Efficient Dispute Resolution',
        icon: 'fas fa-balance-scale',
        description: 'Disputes can arise during the claims process. Our efficient dispute resolution services are designed to address issues promptly and fairly.',
        items: [
            {
                name: 'Mediation Services',
                description: 'Professional mediation to resolve disputes amicably.',
            },
            {
                name: 'Expert Review',
                description: 'In-depth review of disputed claims to ensure accurate and fair outcomes.',
            },
            {
                name: 'Appeals Support',
                description: 'Assistance with filing appeals and navigating the appeals process.',
            },
        ],
    },
    {
        name: 'Fraud Prevention and Detection',
        icon: 'fas fa-shield-alt',
        description: 'Protecting our clients from fraudulent claims is a top priority. Our fraud prevention and detection services help maintain the integrity of the claims process.',
        items: [
            {
                name: 'Advanced Detection Techniques',
                description: 'Utilization of advanced techniques and technology to detect potential fraud.',
            },
            {
                name: 'Investigative Services',
                description: 'Thorough investigation of suspicious claims to prevent fraudulent activity.',
            },
            {
                name: 'Education and Awareness',
                description: 'Educating clients on how to recognize and prevent insurance fraud.',
            },
        ],
    },
    {
        name: 'Post-Claim Support',
        icon: 'fas fa-life-ring',
        description: 'Our commitment to your well-being extends beyond the initial claims process. We provide ongoing support to help you recover and rebuild.',
        items: [
            {
                name: 'Rehabilitation Services',
                description: 'Access to services that support recovery and rehabilitation.',
            },
            {
                name: 'Financial Guidance',
                description: 'Expert advice on managing the financial impact of a claim.',
            },
            {
                name: 'Customer Feedback',
                description: 'Gathering feedback to continually improve our claims management services. <br> <a href="/feedback" class="text-brand-primary underline">Link to give feedback</a>',
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
                Easy <span class="text-brand-primary">Claim Process</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Welcome to Acentria, where we are dedicated to providing exceptional claims management services. Our
                goal is to ensure a smooth and efficient claims process, so you can focus on recovery and rebuilding
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
                        At Acentria, we are committed to delivering exceptional claims management services that
                        prioritize your needs and ensure a fair and efficient process. Our experienced team of
                        professionals is dedicated to providing personalized support, maintaining transparency, and
                        advocating on your behalf. With our comprehensive services, you can trust us to handle your
                        claims with care and professionalism.
                        Discover how our claims management services can make a difference.
                        <NuxtLink class="text-brand-primary underline italic">Contact us today</NuxtLink>
                        to learn
                        more and get started on the path to efficient and effective claims resolution.
                    </p>
                </div>

                <div class="container mx-auto pb-10">
                    <h1 class="text-2xl text-black !font-semibold mb-6">
                        Report a Claim <span class="text-brand-primary">Quickly and Easily</span>
                    </h1>

                    <div class="pb-5">
                        <h1 class="font-semibold text-xl text-black">Need to Report a Claim?</h1>
                        <p class="text-xs ">
                            How would you wish to register your claim?
                        </p>

                    </div>
                    <div class="relative gap-10 lg:basis-1/2 flex items-center">
                        <NuxtLink to="/contact-acentria-group"
                            class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                            Access Your Online Account
                            <i class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                        <NuxtLink to="/report-claim"
                            class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                            File A Claim Here
                            <i class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                    </div>


                </div>

            </section>
        </div>
    </section>
</template>

<style scoped></style>