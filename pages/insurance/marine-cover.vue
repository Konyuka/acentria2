<script setup>

const InsuranceBannerContent = ref({
    subtitle: 'Marine Insurance',
    title: 'Smart Protection for Your Maritime Operations',
    image: '/img/in-marine.jpg',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const benefits3 = ref([
    {
        name: 'Tailored Maritime Risk Solutions',
        icon: 'fas fa-cogs',
        description: 'Custom policies designed for shipping companies, freight forwarders, and port operators to address specific risks.',
    },
    {
        name: 'Global Compliance & Coverage',
        icon: 'fas fa-globe',
        description: 'Protection aligned with international marine insurance standards, ensuring worldwide compliance and security.',
    },
    {
        name: 'Expert Advisory & Claims Support',
        icon: 'fas fa-user-tie',
        description: 'Dedicated marine insurance professionals providing risk assessment, advisory services, and claims processing support.',
    },
    {
        name: 'Seamless Digital Claims Process',
        icon: 'fas fa-mobile-alt',
        description: 'Fast, hassle-free claims settlement to minimize financial disruption and keep your operations running smoothly. <NuxtLink to="/contact-acentria-group" class="text-brand-primary underline">Launch a claim</NuxtLink>.',
    },
]);


const whatsCovered = ref([
    {
        name: 'Marine Cargo Insurance',
        icon: 'fas fa-ship',
        coverage: 'Protects goods in transit from fire, theft, natural disasters, and other risks.',
        benefits: 'Ensures cargo is covered throughout the supply chain, minimizing financial losses and delays.',
    },
    {
        name: 'Marine Hull Insurance',
        icon: 'fas fa-anchor',
        coverage: 'Covers physical damage to vessels, including machinery and equipment.',
        benefits: 'Provides financial protection for vessel owners, ensuring quick repairs and reduced downtime.',
    },
    {
        name: 'Marine Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and pollution.',
        benefits: 'Covers legal fees, compensation claims, and damages, safeguarding business assets and reputation.',
    },
    {
        name: 'Protection & Indemnity (P&I) Insurance',
        icon: 'fas fa-shield-alt',
        coverage: 'Comprehensive liability coverage for shipowners, including crew injuries, collisions, and environmental damage.',
        benefits: 'Ensures compliance with international maritime regulations and financial stability.',
    },
    {
        name: 'Freight Forwarders Liability Insurance',
        icon: 'fas fa-box',
        coverage: 'Protects freight forwarders from claims for loss or damage to goods in their custody.',
        benefits: 'Enhances client trust and operational reliability by ensuring cargo protection.',
    },
    {
        name: 'Port & Terminal Operators Insurance',
        icon: 'fas fa-warehouse',
        coverage: 'Liability and property damage protection for port operations, cargo handling, and storage.',
        benefits: 'Ensures smooth operations and financial security for port businesses.',
    },
    {
        name: 'Ship Repairers Liability Insurance',
        icon: 'fas fa-wrench',
        coverage: 'Covers ship repair businesses from liability claims for vessel damage under their care.',
        benefits: 'Protects ship repair firms, ensuring business continuity and client trust.',
    },
    {
        name: 'War & Terrorism Insurance',
        icon: 'fas fa-bomb',
        coverage: 'Protects against losses due to war, terrorism, and politically motivated incidents.',
        benefits: 'Provides peace of mind in high-risk global regions.',
    },
]);


const whatsCovered2 = ref([
    {
        name: 'Protect Cargo & Shipping Operations',
        icon: 'fas fa-ship',
        description: 'Coverage for goods in transit, vessel damage, and port liabilities.',
    },
    {
        name: 'Mitigate Third-Party Risks',
        icon: 'fas fa-balance-scale',
        description: 'Protect against legal claims for injury, environmental damage, and property loss.',
    },
    {
        name: 'Ensure Business Continuity',
        icon: 'fas fa-coins',
        description: 'Financial protection against accidents, political risks, and maritime disruptions.',
    },
    {
        name: 'Comply with Global Regulations',
        icon: 'fas fa-globe',
        description: 'Stay aligned with international maritime insurance standards.',
    },
]);



</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Marine <span class="text-brand-primary"> Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                We ensure your marine operations are financially secure and protected from unforeseen risks. Whether you
                operate cargo shipments, marine vessels, ports, or freight forwarding services, our comprehensive marine
                insurance solutions safeguard your assets, crew, and operations.
                <br>
                With our tailored policies, expert risk management, and seamless claims support, you can focus on smooth
                sailing while we handle the risks. When protection is done smart, it’s done with care.

            </p>
        </div>

        <div class="container pb-5">
            <h1 class="section-heading pb-5">Why Choose <span class="text-brand-primary"> Staff Life Assurance?</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered2" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-4xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 card-heading">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="mt-1 content">
                            <p>
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary"> Marine
                    Insurance</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 text-black text-md leading-normal font-bold">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-5 text-brand-primary font-semibold">
                            <p class="mt-5">
                                Coverage: <span class="text-black !font-normal">{{ feature.coverage }}</span>
                            </p>
                            <p>
                                Benefits: <span class="text-black !font-normal">{{ feature.benefits }}</span>
                            </p>
                        </div>

                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why Choose <span class="text-brand-primary">Our Insurance</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits3"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600">

                        </h5>
                        <p class="leading-normal font-regular text-light-content text-xs" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Your marine business and shipping assets deserve the best protection. Let’s walk with you in securing
                your maritime operations.
                <br>
                Compare marine insurance plans and protect your business today!
            </p>
        </div>

        <ContactForm />
    </div>
</template>
