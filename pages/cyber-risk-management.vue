
<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Robust Protection and Peace of Mind',
    subTitle: 'Cyber Security Risk Management',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Risk Assessment and Analysis',
        icon: 'fas fa-search',
        description: 'Understanding your organization\'s cybersecurity vulnerabilities is the first step toward effective risk management. Our comprehensive risk assessment and analysis services help identify potential threats and assess the impact they could have on your business.',
        items: [
            {
                name: 'Threat Identification',
                description: 'In-depth analysis to detect potential cyber threats and vulnerabilities.',
            },
            {
                name: 'Impact Analysis',
                description: 'Evaluation of the potential consequences of identified risks on your operations and assets.',
            },
            {
                name: 'Risk Prioritization',
                description: 'Prioritization of risks based on their severity and likelihood, ensuring focused mitigation efforts.',
            },
        ],
    },
    {
        name: 'Customized Cyber Insurance Solutions',
        icon: 'fas fa-user-shield',
        description: 'Cyber insurance provides financial protection against cyber incidents, such as data breaches, ransomware attacks, and other cybercrimes. Our tailored insurance solutions offer the coverage you need to mitigate financial losses and recover quickly from cyber incidents.',
        items: [
            {
                name: 'Data Breach Insurance',
                description: 'Coverage for costs associated with data breaches, including notification, legal fees, and credit monitoring.',
            },
            {
                name: 'Ransomware Protection',
                description: 'Financial protection against ransomware attacks, including ransom payments and recovery expenses.',
            },
            {
                name: 'Business Interruption Insurance',
                description: 'Coverage for income loss and operating expenses due to cyber incidents that disrupt your business.',
            },
        ],
        callToAction: '<a href="/contact" class="text-brand-primary underline">Engage our experts</a>',
    },
    {
        name: 'Proactive Risk Mitigation',
        icon: 'fas fa-shield-alt',
        description: 'We believe in preventing cyber incidents before they occur. Our proactive risk mitigation strategies are designed to enhance your cybersecurity posture and minimize potential risks.',
        items: [
            {
                name: 'Security Awareness Training',
                description: 'Educate your employees on best practices for cybersecurity and reduce the risk of human error.',
            },
            {
                name: 'Vulnerability Management',
                description: 'Regular scanning and patching of vulnerabilities to prevent exploitation by cybercriminals.',
            },
            {
                name: 'Incident Response Planning',
                description: 'Develop and implement a comprehensive incident response plan to quickly and effectively address cyber incidents.',
            },
        ],
    },
    {
        name: 'Ongoing Monitoring and Support',
        icon: 'fas fa-sync-alt',
        description: 'Cybersecurity is an ongoing effort. We provide continuous monitoring and support to ensure your defenses remain strong and adaptable to emerging threats.',
        items: [
            {
                name: '24/7 Monitoring',
                description: 'Continuous surveillance of your systems to detect and respond to cyber threats in real-time.',
            },
            {
                name: 'Regular Security Audits',
                description: 'Periodic reviews of your cybersecurity measures to identify areas for improvement and ensure compliance with industry standards.',
            },
            {
                name: 'Expert Support',
                description: 'Access to a dedicated team of cybersecurity experts for guidance and assistance.',
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
                Cyber <span class="text-brand-primary">Security Risks</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Welcome to Acentria, where cybersecurity and risk management converge to safeguard your digital and
                financial well-being. In today's interconnected world, protecting sensitive data and systems from cyber
                threats is paramount. Our cybersecurity risk management services are designed to provide robust
                protection and peace of mind.
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Cybersecurity Risk <span class="text-brand-primary pb-5"> Management Services</span>
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
                        At Acentria, we are committed to protecting your digital assets and ensuring your financial
                        security. Our comprehensive cybersecurity risk management services are designed to provide you
                        with the peace of mind that comes from knowing you are well-protected against cyber threats.
                        With our expertise, personalized solutions, and unwavering support, you can trust us to
                        safeguard your future.
                        Discover how our cybersecurity risk management services can help you achieve a secure and
                        resilient digital environment.
                        <NuxtLink class="text-brand-primary underline italic">Contact us today to learn more and get
                            started</NuxtLink>
                        on your path to
                        comprehensive protection.
                    </p>


                </div>
            </section>
        </div>
    </section>
</template>

<style scoped></style>