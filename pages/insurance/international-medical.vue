<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'International Medical Insurance',
    title: 'Your Health, Protected Anywhere in the World',
    image: '/img/safehouse.jpg',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const faqs = ref([
    {
        name: 'What is international medical insurance?',
        content: '<p>International medical insurance provides comprehensive health coverage for individuals and families who are living, working, or traveling abroad. It covers a wide range of medical services, including emergency care, hospitalization, outpatient treatments, and preventive care.</p>',
    },
    {
        name: 'Who needs international medical insurance?',
        content: '<p>International medical insurance is ideal for expatriates, international students, business travelers, and anyone spending an extended period abroad. It ensures access to quality healthcare services regardless of location.</p>',
    },
    {
        name: 'What does international medical insurance cover?',
        content: '<p>Coverage typically includes:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Emergency medical care</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Hospitalization and surgeries</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Outpatient treatments and consultations</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Prescription medications</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Preventive care and vaccinations</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Dental and vision care (optional add-ons)</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Medical evacuation and repatriation</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Maternity care (optional add-ons)</li></ul>',
    },
    {
        name: 'What is the difference between travel insurance and international medical insurance?',
        content: '<p>Travel insurance is designed for short-term trips and typically covers trip cancellations, lost luggage, and emergency medical care. International medical insurance, on the other hand, provides long-term health coverage for individuals living or working abroad, covering a broader range of medical services and treatments.</p>',
    },
    {
        name: 'How do I choose the right international medical insurance plan?',
        content: '<p>Consider the following factors:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Coverage Needs: Assess your medical needs and the services you require.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Network of Providers: Ensure the plan includes access to healthcare providers in your destination country.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Policy Limits: Review coverage limits for medical expenses and treatments.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Cost: Compare premiums, deductibles, and out-of-pocket costs.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Additional Benefits: Look for added benefits such as medical evacuation, dental and vision care, and preventive services.</li></ul>',
    },
    {
        name: 'How do I file a claim?',
        content: '<p>Our claims process is hassle free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5 list-decimal"><li>Contact Insurer: Notify your insurance provider as soon as possible.</li><li>Gather Documentation: Collect all necessary documents, such as medical bills, receipts, and claim forms.</li><li>Submit Claim: Submit the completed claim form and documentation to your insurance provider.</li></ol><p>It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink to="/contact-acentria-group" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'Is maternity care covered?',
        content: '<p>Maternity care is often available as an optional add-on to international medical insurance plans. Coverage may include prenatal care, delivery, and postnatal care. Be sure to check the specific terms and conditions of your policy.</p>',
    },
    {
        name: 'What is medical evacuation and repatriation?',
        content: '<p>Medical evacuation involves transporting you to the nearest medical facility equipped to handle your condition. Repatriation refers to returning you to your home country for continued medical treatment if necessary. These services are typically covered under international medical insurance plans.</p>',
    },
    {
        name: 'Can I include my family in the plan?',
        content: '<p>Yes, our international medical insurance plans offer family coverage, allowing you to include your spouse and dependents under a single policy.</p>',
    },
    {
        name: 'How can I access healthcare services abroad?',
        content: '<p>Our international medical insurance plans provide access to a network of healthcare providers worldwide. You can use our online portal or contact our customer service for assistance in finding and accessing healthcare services in your destination country.</p>',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
]);

const benefits = ref([
    {
        name: 'Trusted Global Provider',
        icon: 'fas fa-shield-alt',
        description: 'A leader in international medical insurance in Kenya with years of experience and expertise.',
    },
    {
        name: 'Customer-Focused Service',
        icon: 'fas fa-users',
        description: 'Personalized assistance and fast claims processing to ensure customer satisfaction.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-headset',
        description: 'Emergency medical support anytime, anywhere for your peace of mind.',
    },
    {
        name: 'Wide Healthcare Network',
        icon: 'fas fa-network-wired',
        description: 'Access to top-tier hospitals and specialists worldwide for high-quality care.',
    },
    {
        name: 'Flexible & Affordable Plans',
        icon: 'fas fa-money-bill-wave',
        description: 'Coverage options tailored to match your healthcare needs and budget.',
    },
    {
        name: 'Digital Convenience',
        icon: 'fas fa-mobile-alt',
        description: 'Compare plans, get quotes, and manage policies online or via our mobile app for hassle-free service.',
    },
]);


const whyTheInsurance = ref({
    title: 'Why Choose <span class="text-brand-primary">International Medical Insurance</span>',
    description: '<p>We ensure that wherever life takes you, you have access to <strong>world-class healthcare</strong>. Whether you\'re traveling for business, relocating, or studying abroad, our<strong>comprehensive international medical insurance</strong> provides peace of mind and financial security—because when protection is done smart, it’s done with care.</p > ',
});

const whatsCovered = ref([
    {
        name: 'Worldwide Medical Coverage',
        icon: 'fas fa-globe',
        description: 'No matter where you are, your health is protected with our comprehensive worldwide plans.',
    },
    {
        name: 'Hospitalization & Emergency Care',
        icon: 'fas fa-hospital',
        description: 'Covers surgeries, ICU stays, specialist treatments, and other critical emergency care needs.',
    },
    {
        name: 'Preventive Healthcare',
        icon: 'fas fa-syringe',
        description: 'Includes vaccinations, wellness check-ups, and screenings to help you maintain good health.',
    },
    {
        name: 'Dental & Vision Care',
        icon: 'fas fa-tooth',
        description: 'Optional add-ons for dental treatments and eye care to ensure complete health coverage.',
    },
    {
        name: 'Medical Evacuation & Repatriation',
        icon: 'fas fa-plane',
        description: 'Provides coverage for emergency transport to the nearest medical facility or back home.',
    },
    {
        name: '24/7 Telemedicine Support',
        icon: 'fas fa-video',
        description: 'Virtual consultations with healthcare professionals anytime, anywhere for convenience and care.',
    },
    {
        name: 'Flexible Payment Options',
        icon: 'fas fa-wallet',
        description: 'Choose a payment plan that aligns with your budget and lifestyle needs.',
    },
]);


const benefits2 = ref([
    {
        name: 'Global Healthcare Access',
        icon: 'fas fa-hospital',
        description: 'Get medical care in top hospitals and clinics worldwide, ensuring your health is always a priority.',
    },
    {
        name: 'Comprehensive Protection',
        icon: 'fas fa-shield-alt',
        description: 'Coverage for emergency care, hospitalization, and specialist treatments for total peace of mind.',
    },
    {
        name: '24/7 Medical Support',
        icon: 'fas fa-phone-alt',
        description: 'Round-the-clock assistance for emergencies and healthcare guidance no matter where you are.',
    },
    {
        name: 'Flexible & Affordable Plans',
        icon: 'fas fa-money-bill-wave',
        description: 'Choose a plan that fits your travel and lifestyle needs while staying within your budget.',
    },
    {
        name: 'Family Coverage Options',
        icon: 'fas fa-users',
        description: 'Extend protection to your loved ones while abroad with our family-friendly plans.',
    },
]);


const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started Today!</span>',
    description: 'Secure your health with our international medical insurance. Compare plans and get a quote today!',
});




</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

        <div class="container py-5">
            <h2 class="section-heading pb-5">
                Why Choose <br> <span class="text-brand-primary"> International Medical Insurance</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div v-for="principle in benefits2"
                    class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                    <div class="flex flex-col">
                        <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                        <h4 class="card-heading pb-1">{{
                            principle.name }}</h4>
                        <p class="content">{{ principle.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-5">
            <h1 class="section-heading pb-6">Easy & Hassle-Free <span
                    class="text-brand-primary">Claim
                    Process</span></h1>
            <p class="content">
                Our streamlined claims process ensures fast reimbursements and easy access to medical care.
                💡 Familiarize yourself with your coverage and required claim documents before traveling.

            </p>
            <div class="mt-5">
                <NuxtLink to="/contact-acentria-group"
                    class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                    Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
            </div>
        </div>

        <div class="container mx-auto px-4 py-2 mt-5">
            <h1 class="section-heading pb-5">Frequently <span class="text-brand-primary">Asked Questions</span>
            </h1>
            <p class="content pb-5">We have all the answers to your questions.</p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container py-5">
            <h1 class="section-heading pb-5">Why <span class="text-brand-primary">Choose Us</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="card-heading pb-1 ">

                        </h5>
                        <p class="content">
                            {{ benefit.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <ContactForm />
    </div>



</template>
