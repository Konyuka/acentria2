<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Health!',
    title: 'Prioritize Employee Well-being with Our Staff Health Insurance',
    image: 'https://img.freepik.com/free-photo/smiling-black-male-doctor-holding-pointing-red-apple_1262-12499.jpg?t=st=1736527509~exp=1736531109~hmac=9b5bedc2e3fab0c1a24379e5d01602afdd414d215081cde1cca6c585f4400392&w=900',
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
        content: '<p>Our claims process is hassle free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Report the Incident: Notify us as soon as possible.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Gather Documentation: Collect necessary documents, such as receipts, photos of the damage, and any relevant reports.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Submit the Claim: Submit the completed claim form and documentation to your insurance provider.</li></ol><p>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink to="/" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
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

const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria</span>`)
const whys = ref([
    {
        title: 'We save you money',
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products & reduce your loss ratios',
        icon: 'savings',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile products and scope',
        icon: 'support_agent',
    },
    {
        title: 'Easy claim process',
        content: 'Our claims process is hassle-free, and we are proud of our service',
        icon: 'assignment_turned_in',
    },
    {
        title: 'Prompt Quotations',
        content: 'Let us help you with the best timely quotations for your needs',
        icon: 'query_builder',
    },
    {
        title: 'Convenience',
        content: 'Our services and solutions are simplified for clients\' use.',
        icon: 'thumb_up',
    },
    {
        title: 'Peace of Mind',
        content: 'Your peace of mind is our priority. Our team of experts shall offer professional advice for your needs.',
        icon: 'sentiment_satisfied',
    },
])

const benefits3 = ref([
    {
        name: 'Affordable Plans',
        icon: 'fas fa-money-bill-wave-sign',
        description: 'We offer a range of plans to fit different budgets and healthcare needs, ensuring everyone has access to quality health insurance.',
    },
    {
        name: 'Network of Providers',
        icon: 'fas fa-hospital',
        description: 'Access to an extensive network of healthcare providers, ensuring your employees receive the best care possible.',
    },
    {
        name: 'Employee Focus',
        icon: 'fas fa-user-check',
        description: 'We prioritize the well-being of your employees, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: 'Purchasing health insurance should be quick and easy. Our <span class="text-brand-primary">online platform</span> allows you to compare plans, get quotes, and purchase coverage in just a few clicks. Plus, our mobile app makes it convenient to access your policy information and <a href="/report-claim" class="text-brand-primary underline">file reimbursement claims</a> on the go.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-clock',
        description: 'Our dedicated support team is available around the clock to assist you with any health-related issues.',
    },
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'With years of experience and a strong reputation, we are a trusted name in the health insurance industry.',
    },
]);


const benefits2 = ref([
    {
        name: 'Corporate Covers',
        icon: 'fas fa-users',
        description: 'Purchased by an employer for employees only, or with their families (spouses and children). This cover is flexible and can be customized to the employer’s needs. The plan can be fully insured or partly funded (Hybrid).',
    },
    {
        name: 'Micro Covers (SME)',
        icon: 'fas fa-briefcase',
        description: 'Designed for small and micro enterprises with populations of 3-10 employees. These plans waive waiting periods and co-pays, offering a tailored solution for businesses seeking off-the-shelf products.',
    },
    {
        name: 'International Medical Cover',
        icon: 'fas fa-plane',
        description: 'Ideal for individuals planning to spend more than a year abroad or frequent travelers. This cover provides access to private healthcare in your country of residence and internationally.',
    },
]);

const benefits = ref([
    
    {
        name: 'Outpatient Care',
        icon: 'fas fa-stethoscope',
        description: 'Access to outpatient services, including doctor visits, specialist consultations, and diagnostic tests.',
    },
    {
        name: 'Maternity and Newborn Care',
        icon: 'fas fa-baby',
        description: 'Comprehensive coverage for maternity care, childbirth, and newborn health services.',
    },
    {
        name: 'Chronic Disease Management',
        icon: 'fas fa-heartbeat',
        description: 'Support and coverage for managing chronic conditions such as diabetes, hypertension, and asthma.',
    },
    {
        name: 'Preventive Care',
        icon: 'fas fa-shield-virus',
        description: 'Coverage for routine check-ups, vaccinations, and preventive screenings to help employees maintain their health and catch potential issues early.',
    },
    {
        name: 'Dental and Vision Care',
        icon: 'fas fa-teeth',
        description: 'Includes coverage for dental and vision care, supporting overall health and well-being.',
    },
    {
        name: 'Mental Health Support',
        icon: 'fas fa-brain',
        description: 'Access to mental health services, including counseling and therapy, to support employees\' emotional and psychological well-being.',
    },
    {
        name: 'Prescription Drug Coverage',
        icon: 'fas fa-pills',
        description: 'Coverage for prescription medications, ensuring employees can access necessary treatments without financial strain.',
    },
    {
        name: 'Wellness Programs',
        icon: 'fas fa-dumbbell',
        description: 'Access to wellness programs, including fitness memberships, nutrition counseling, and health education, promoting a healthy lifestyle for employees.',
    },
    {
        name: 'Family Coverage',
        icon: 'fas fa-users',
        description: 'Options to include coverage for employees\' families, ensuring their loved ones are protected and cared for.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-clock',
        description: 'Access to 24/7 assistance services for medical advice and support, providing peace of mind for employees and their families.',
    },
    {
        name: 'Customizable Plans',
        icon: 'fas fa-cogs',
        description: 'Tailor your health insurance plan to meet the specific needs of your workforce, ensuring comprehensive and relevant coverage.',
    },
    {
        name: 'Comprehensive Medical Coverage',
        icon: 'fas fa-notes-medical',
        description: 'Access to a wide range of medical services, including hospitalization, specialist consultations, surgeries, and emergency care, ensuring your employees receive the best care possible. The panel of providers shall be readily available on the <span class="text-brand-primary italic">self-help portal</span> or availed to you by our <span class="text-brand-primary italic">customer care.</span>',
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
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Staff <span class="text-brand-primary">Health Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Investing in your employees' health and well-being is crucial for fostering a productive and motivated
                workforce. Our staff health insurance provides extensive coverage to ensure your team has access to
                quality healthcare, promoting a healthier and happier work environment.
            </p>
        </div>

        <div class="container mx-auto pb-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                What’s Health <span class="text-brand-primary">Insurance Plans?</span>
            </h1>
            <p class="my-6 text-xs leading-normal">
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
                                <p class="subheading-class text-left">
                                    {{ feature.name }}
                                </p>

                            </div>

                            <div class="mt-1 text-black text-xs leading-normal">
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
                    <h1 class="text-2xl !font-semibold text-black mb-5">
                        What are the <span class="text-brand-primary">Key benefits?</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                    principle.name }}</h4>
                                <p class="text-sm leading-normal text-black" v-html="principle.description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why <span class="text-brand-primary">Choose Us</span>
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
                Prioritize the health and well-being of your employees. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our
                policies and how we can help you provide the best care and support, ensuring your employees and their
                families stay healthy and protected.
            </p>
        </div>

        <ContactForm />
    </div>



</template>
