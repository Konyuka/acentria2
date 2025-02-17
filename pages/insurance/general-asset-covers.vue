<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Asset & Stock Covers',
    title: 'Safeguard Your Business with Smart Protection',
    image: 'https://img.freepik.com/free-photo/happy-african-woman-raincoat-posing-with-umbrella_171337-14578.jpg?t=st=1736534992~exp=1736538592~hmac=47af9e4d5f9c923cfa31bfe3fae7d937f8ee899e210b78678e256864d4f00223&w=900',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const faqs = ref([
    {
        name: 'What is golfer\'s insurance?',
        content: 'Golfer\'s insurance is a specialized insurance policy that provides coverage for golfers, protecting them against various risks such as loss or damage to golf equipment, personal liability, accidental injuries, and more while on the golf course.',
    },
    {
        name: 'Why do I need golfer\'s insurance?',
        content: 'Golfer\'s insurance provides financial protection and peace of mind, ensuring that you are covered for unexpected events such as equipment theft, accidental injuries, or liability for damage to others while playing golf.',
    },
    {
        name: 'How much does golfer\'s insurance cost?',
        content: 'The cost of golfer\'s insurance varies depending on factors such as the coverage limits, the value of your equipment, and any additional coverage options you choose. It\'s best to get a quote to determine the exact cost based on your specific needs.',
    },
    {
        name: 'Is golfer\'s insurance only for professional golfers?',
        content: 'No, golfer\'s insurance is available for both amateur and professional golfers. It is designed to provide coverage for anyone who enjoys playing golf, regardless of skill level.',
    },
    {
        name: 'How do I file a claim with golfer\'s insurance?',
        content: '<p>Our claims process is hassle free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Report the Incident: Notify us as soon as possible.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Gather Documentation: Collect necessary documents, such as receipts, photos of the damage, and any relevant reports.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Submit the Claim: Submit the completed claim form and documentation to your insurance provider.</li></ol><p>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink to="/contact-acentria-group" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'Does golfer\'s insurance cover injuries sustained off the golf course?',
        content: 'Golfer\'s insurance typically covers injuries sustained while playing golf or participating in golf-related activities. Injuries sustained off the golf course may not be covered, depending on the policy terms.',
    },
    {
        name: 'Can I customize my golfer\'s insurance policy?',
        content: 'Yes, many golfer\'s insurance policies offer customizable options, allowing you to add coverage for specific needs such as higher equipment values, additional personal liability, or enhanced accident coverage.',
    },
    {
        name: 'What is hole-in-one coverage?',
        content: 'Hole-in-one coverage is a unique benefit of golfer\'s insurance that covers the costs associated with traditional hole-in-one celebrations. This may include expenses for drinks, meals, or other celebratory events that are customary in the golfing community.',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
])

const benefits3 = ref([
    {
        name: 'Tailored Business Protection',
        icon: 'fas fa-cogs',
        description: 'Customized policies that fit your industry and risk profile, ensuring optimal coverage for your business.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'From property damage to cyber risks, our policies cover all essential aspects of business protection.',
    },
    {
        name: 'Expert Guidance',
        icon: 'fas fa-user-tie',
        description: 'Our dedicated insurance advisors help you navigate policy selection and find the best coverage for your needs.',
    },
    {
        name: 'Easy & Digital Claims',
        icon: 'fas fa-check-circle',
        description: 'Enjoy a hassle-free claims process with online and mobile access. <a href="/launch-claim" class="text-brand-primary underline">Launch a claim</a> today.',
    },
]);

const whatsCovered2 = ref([
    {
        name: 'Protect Business Assets',
        icon: 'fas fa-building',
        description: 'Coverage for property, equipment, and vehicles against fire, theft, and natural disasters, ensuring your business stays protected.',
    },
    {
        name: 'Mitigate Financial Risk',
        icon: 'fas fa-balance-scale',
        description: 'Safeguard your business from liabilities, lawsuits, and fraud, reducing financial exposure and ensuring stability.',
    },
    {
        name: 'Ensure Business Continuity',
        icon: 'fas fa-chart-line',
        description: 'Minimize downtime and recover lost income due to operational disruptions, helping your business bounce back quickly.',
    },
    {
        name: 'Defend Against Cyber Threats',
        icon: 'fas fa-shield-alt',
        description: 'Shield your company from cyberattacks and data breaches, keeping sensitive information and operations secure.',
    },
    {
        name: 'Secure Leadership & Reputation',
        icon: 'fas fa-user-tie',
        description: 'Protect directors and officers from legal claims, ensuring business leaders can make decisions with confidence.',
    },
]);




const whatsCovered = ref([ 
    {
        name: 'Property Insurance',
        icon: 'fas fa-building',
        coverage: 'Protects physical assets such as buildings, equipment, and inventory against damage or loss due to fire, theft, vandalism, and natural disasters.',
        benefits: 'Ensures that your business can recover quickly from property-related incidents, minimizing downtime and financial loss.',
    },
    {
        name: 'General Liability Insurance',
        icon: 'fas fa-handshake',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and advertising injury.',
        benefits: 'Helps cover legal fees, medical expenses, and damages, safeguarding your business assets and reputation.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost income and additional expenses incurred due to disruptions in your operations.',
        benefits: 'Helps maintain financial stability and continuity of operations during unexpected interruptions.',
    },
    {
        name: 'Equipment Breakdown Insurance',
        icon: 'fas fa-tools',
        coverage: 'Covers the cost of repairing or replacing equipment that breaks down due to mechanical or electrical failure.',
        benefits: 'Minimizes downtime and financial loss by ensuring that your equipment is quickly repaired or replaced.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-laptop-code',
        coverage: 'Protects against losses resulting from cyberattacks, data breaches, and other cyber incidents.',
        benefits: 'Covers costs related to data recovery, legal fees, notification expenses, and potential fines, helping you manage the financial impact of cyber threats.',
    },
    {
        name: 'Motor Commercial Insurance',
        icon: 'fas fa-truck',
        coverage: 'Covers vehicles used for business purposes, including trucks, vans, and other commercial vehicles.',
        benefits: 'Provides protection against accidents, theft, and damage, keeping your fleet operational.',
    },
    {
        name: 'Directors and Officers (D&O) Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Provides protection for the personal assets of directors and officers in the event of claims made against them for wrongful acts in their capacity as company leaders.',
        benefits: 'Ensures that your leadership team can make decisions confidently, knowing they are protected against personal liability.',
    },
    {
        name: 'Fidelity Bond (Crime Insurance)',
        icon: 'fas fa-lock',
        coverage: 'Protects against losses due to employee dishonesty, fraud, or theft.',
        benefits: 'Ensures financial protection against internal risks, maintaining trust and integrity within your organization.',
    },
]);

</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="section-heading pb-5">
                Asset <span class="text-brand-primary"> Covers</span>
            </h1>
            <p class="content pb-5">
                We ensure your business assets are protected from unexpected risks. Whether you own property, equipment,
                vehicles, or digital assets, our comprehensive asset insurance solutions provide financial stability and
                business continuity.
                In today’s dynamic business environment, one incident can lead to significant financial loss. With our
                tailored insurance covers, you can focus on growth while we handle the risks. When protection is done
                smart, it’s done with care.

            </p>
        </div>

        <div class="container py-5">
            <h1 class="section-heading pb-5">Why Asset <span class="text-brand-primary"> Insurance is Essential</span>
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
            <h1 class="section-heading pb-5">Types of General<span class="text-brand-primary"> Asset
                    Insurance</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 card-heading">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-5 text-brand-primary font-semibold">
                            <p class="mt-5">
                                Coverage: <span class="content font-normal">{{ feature.coverage }}</span>
                            </p>
                            <p>
                                Benefits: <span class="content font-normal">{{ feature.benefits }}</span>
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
                        <h5 v-html="benefit.name" class="card-heading pb-1">

                        </h5>
                        <p class="content" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="container mx-auto py-10">
            <h1 class="section-heading pb-5">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="content pb-5">
                Your business is your greatest asset—let us walk with you in securing its future.
            </p>
        </div>

        <ContactForm />
    </div>



</template>