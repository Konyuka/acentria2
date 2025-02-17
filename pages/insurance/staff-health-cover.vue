<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Staff Health Insurance',
    title: 'Prioritize Employee Well-being with Our Staff Health Insurance',
    image: 'https://img.freepik.com/free-photo/smiling-black-male-doctor-holding-pointing-red-apple_1262-12499.jpg?t=st=1736527509~exp=1736531109~hmac=9b5bedc2e3fab0c1a24379e5d01602afdd414d215081cde1cca6c585f4400392&w=900',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const benefits3 = ref([
    {
        name: 'Affordable Plans',
        icon: 'fas fa-money-bill-wave',
        description: 'Cost-effective health insurance solutions tailored for businesses of all sizes, ensuring quality healthcare at competitive rates.',
    },
    {
        name: 'Extensive Healthcare Network',
        icon: 'fas fa-hospital',
        description: 'Access to leading hospitals and healthcare providers in Kenya and beyond, ensuring employees receive top-quality medical care.',
    },
    {
        name: 'Employee-Focused Care',
        icon: 'fas fa-user-check',
        description: 'Fast claims processing and dedicated support to ensure your employees get the care they need without hassle.',
    },
    {
        name: 'Digital Convenience',
        icon: 'fas fa-mobile-alt',
        description: 'Compare plans, get quotes, and manage policies easily through our <span class="text-brand-primary">online platform</span> or mobile app. <a href="/report-claim" class="text-brand-primary underline">File reimbursement claims</a> in just a few clicks.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-clock',
        description: 'Round-the-clock medical support and emergency helpline to provide immediate assistance whenever needed.',
    },
]);

const benefits2 = ref([
    {
        name: 'Corporate Covers',
        icon: 'fas fa-users',
        description: 'Designed for businesses and organizations, providing flexible, customizable healthcare benefits for employees and their families.',
    },
    {
        name: 'Micro Covers (SME Helth insurance)',
        icon: 'fas fa-briefcase',
        description: 'Perfect for small businesses (3-10 employees), offering affordable coverage with waived waiting periods and co-pays.',
    },
    {
        name: 'International Medical Cover',
        icon: 'fas fa-plane',
        description: 'Ideal for frequent travelers, ensuring seamless healthcare access locally and abroad.',
    },
]);

const benefits = ref([
    {
        name: 'Outpatient Care',
        icon: 'fas fa-stethoscope',
        description: 'Covers doctor visits, specialist consultations, and diagnostic tests to ensure employees receive timely medical attention.',
    },
    {
        name: 'Maternity & Newborn Care',
        icon: 'fas fa-baby',
        description: 'Comprehensive coverage for childbirth and postnatal care, ensuring a smooth and safe experience for both mother and baby.',
    },
    {
        name: 'Chronic Disease Management',
        icon: 'fas fa-heartbeat',
        description: 'Support for managing chronic conditions like diabetes, hypertension, and asthma, helping employees maintain long-term health.',
    },
    {
        name: 'Preventive Care',
        icon: 'fas fa-shield-virus',
        description: 'Routine check-ups, vaccinations, and wellness screenings to promote employee health and prevent illnesses before they start.',
    },
    {
        name: 'Dental & Vision Care',
        icon: 'fas fa-teeth',
        description: 'Includes coverage for eye care, dental procedures, and regular check-ups to maintain overall well-being.',
    },
    {
        name: 'Mental Health Support',
        icon: 'fas fa-brain',
        description: 'Access to counseling, therapy, and emotional well-being services to support employees’ mental health and work-life balance.',
    },
    {
        name: 'Prescription Drug Coverage',
        icon: 'fas fa-pills',
        description: 'Ensures employees can access necessary medications affordably, reducing financial strain and improving adherence to treatment.',
    },
    {
        name: 'Wellness Programs',
        icon: 'fas fa-dumbbell',
        description: 'Includes gym memberships, nutrition counseling, and health education to encourage a healthy and active lifestyle.',
    },
    {
        name: '24/7 Medical Assistance',
        icon: 'fas fa-clock',
        description: 'Immediate access to medical support services and helplines, providing peace of mind at any hour.',
    },
    {
        name: 'Customizable Plans',
        icon: 'fas fa-cogs',
        description: 'Tailor coverage based on your workforce’s unique needs and budget, ensuring the best healthcare solutions for your employees.',
    },
    {
        name: 'Comprehensive Medical Coverage',
        icon: 'fas fa-notes-medical',
        description: 'Access to hospitalization, surgeries, emergency care, and specialist consultations. The panel of providers shall be readily available on the <span class="text-brand-primary italic">self-help portal</span> or availed to you by our <span class="text-brand-primary italic">customer care.</span>',
    },
]);





const whyTheInsurance = ref({
    title: 'Why Choose <span class="text-brand-primary">Golfer’s Insurance</span>',
    description: 'Golfing is a wonderful sport, but it comes with its share of risks. Our golfer\'s insurance provides specialized coverage to protect you, your equipment, and your liabilities on the course. Ensure you can enjoy your game with peace of mind, knowing that you\'re covered for any unexpected events.',
})

const whatsCovered = ref([
    {
        name: 'Equipment Protection',
        icon: 'fas fa-golf-club',
        description: 'Covers loss, theft, or damage to your golf clubs, bags, and other equipment, ensuring that you\'re always ready to play with confidence.',
    },
    {
        name: 'Personal Liability',
        icon: 'fas fa-user-shield',
        description: 'Provides coverage for any accidental damage or injury you may cause to others while on the golf course, protecting you from potential legal and financial liabilities.',
    },
    {
        name: 'Accident Coverage',
        icon: 'fas fa-ambulance',
        description: 'Includes coverage for accidental injuries sustained while playing golf, such as broken bones or other medical emergencies.',
    },
    {
        name: 'Hole-In-One Coverage',
        icon: 'fas fa-trophy',
        description: 'Celebrate your achievement without financial worry. Our policy covers the cost of traditional hole-in-one celebrations, ensuring you can enjoy the moment.',
    },
    {
        name: 'Trolley and Buggy Cover',
        icon: 'fas fa-car',
        description: 'Protects your golf trolley and buggy against theft or damage, keeping your game running smoothly.',
    },
    {
        name: 'Worldwide Coverage',
        icon: 'fas fa-globe',
        description: 'Whether you\'re playing locally or internationally, our insurance provides coverage wherever you go, ensuring that you\'re protected no matter where your game takes you.',
    },
    {
        name: 'Personal Possessions',
        icon: 'fas fa-briefcase',
        description: 'Coverage for personal possessions that you bring to the golf course, such as watches, phones, or other valuable items.',
    },
])

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started!</span>',
    description: 'Protect yourself and your equipment with our comprehensive golfer\'s insurance. Get a quote today and take the first step towards peace of mind and an enjoyable golfing experience.',
})

</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="pb-5 section-heading">
                Staff <span class="text-brand-primary">Health Insurance</span>
            </h1>
            <p class="mt-6 content">
                A healthy workforce is a productive workforce, and our comprehensive staff health insurance provides the
                best medical coverage to keep your team healthy, happy, and motivated.
                With access to quality healthcare, your employees can focus on what matters most—growing your business.
                When protection is done smart, it’s done with care.

            </p>
        </div>

        <div class="container mx-auto pb-10">
            <h1 class="pb-5 section-heading">
                What’s Health <span class="text-brand-primary">Insurance Plans?</span>
            </h1>
            <p class="my-6 content">
                We provide a variety of health insurance plans tailored to meet the diverse needs of
                individuals,
                families, and businesses. Our plans are designed to cover, individuals, families, seniors
                and children.
            </p>

            <div class="mb-5">
                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
                    <NuxtLink :to="feature.url" v-for="feature in benefits2"
                        class="button-animation flex px-3 py-2 shadow-md border-l-4 border-brand-primary">
                        <div class="mr-6">
                            <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                        </div>
                        <div>
                            <div class="flex justify-between items-center w-full">
                                <p class="card-heading text-left">
                                    {{ feature.name }}
                                </p>

                            </div>

                            <div class="mt-1 content">
                                <p v-html="feature.description"></p>
                            </div>

                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h1 class="section-heading pb-5">
                        What are the <span class="text-brand-primary">Key benefits?</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="card-heading">{{
                                    principle.name }}</h4>
                                <p class="content" v-html="principle.description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <div class="container py-5">
            <h1 class="section-heading pb-5">Why <span class="text-brand-primary">Choose Us</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits3"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="card-heading">

                        </h5>
                        <p class="content" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto py-10">
            <h1 class="pb-5 section-heading">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="mt-6 content">
                Prioritize employee well-being and create a healthier, more productive workforce. Let us walk with you
                in providing the best healthcare solutions.
                <br>
                Compare corporate health insurance plans and get covered today!

            </p>
        </div>

        <ContactForm />
    </div>



</template>
