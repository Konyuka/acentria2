<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Finances!',
    title: 'Safeguarding Your Financial Stability',
    image: 'https://img.freepik.com/free-photo/close-up-business-people-working-with-business-document-discussion-meeting_1150-1469.jpg?t=st=1736579313~exp=1736582913~hmac=b20458f82d9cd708082bb798ac38f97e7eae8fad0d3dd0042ac00fd69d798449&w=900',
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
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your corporate operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of corporate insurance and find the best solutions for your needs.',
    },
    {
        name: 'Easy Claims Process',
        icon: 'fas fa-check-circle',
        description: 'Our claims process is hassle free. It is important to familiarize yourself with your policy coverage and necessary claims documents when purchasing cover. Our team of experts are readily available to guide you through the process. <a href="/launch-claim" class="text-brand-primary underline">Launch a claim</a>.',
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
        name: 'Group Life Assurance',
        icon: 'fas fa-users',
        coverage: 'Provides a lump sum payment to the beneficiaries of an employee in the event of their death.',
        benefits: 'Offers financial support to the employee\'s family, helping to cover funeral costs, outstanding debts, and living expenses.',
    },
    {
        name: 'Voluntary Life Assurance',
        icon: 'fas fa-hand-holding-heart',
        coverage: 'Allows employees to purchase additional life assurance coverage at discounted group rates.',
        benefits: 'Provides employees with the flexibility to enhance their coverage based on their individual needs and circumstances.',
    },
    {
        name: 'Dependent Life Assurance',
        icon: 'fas fa-child',
        coverage: 'Provides coverage for the dependents of employees, ensuring financial support in the event of their death.',
        benefits: 'Offers peace of mind to employees, knowing their loved ones are protected.',
    },
    {
        name: 'Acentria Last Expense',
        icon: 'fas fa-cross',
        coverage: 'Provides a simple and affordable way to cover costs such as funeral services, burial or cremation, and other end-of-life expenses, ensuring your family can focus on celebrating your life and legacy. Get a cover for premiums as low as KES 1,500 Per Annum.',
        benefits: 'Alleviate the cost and hustle of funeral expense contributions by employees.',
    },
    {
        name: 'Critical Illness',
        icon: 'fas fa-heartbeat',
        coverage: 'Provides coverage for the employees and dependents against financial burden as a result of severe health conditions. Our policy covers a wide range of critical illnesses, including cancer, heart attack, stroke, and more.',
        benefits: 'Our critical illness insurance provides a safety net to help you manage the financial impact of severe health conditions, allowing you to focus on your recovery without added stress.',
    },
    {
        name: 'Financial Loss Insurance',
        icon: 'fas fa-piggy-bank',
        coverage: 'Protects against financial losses resulting from various hazards, including fraud, embezzlement, and other criminal activities.',
        benefits: 'Ensures that your business can recover from financial setbacks, maintaining stability and continuity.',
    },
    {
        name: 'Money Insurance',
        icon: 'fas fa-money-bill-wave',
        coverage: 'Protects cash, cheques, and other financial instruments against loss or theft while on your premises or in transit.',
        benefits: 'Provides financial protection for your liquid assets, ensuring that your business operations are not disrupted by unexpected losses.',
    },
    {
        name: 'Fidelity Guarantee Insurance',
        icon: 'fas fa-user-lock',
        coverage: 'Protects against losses due to employee dishonesty, including theft, fraud, and embezzlement.',
        benefits: 'Maintains trust and integrity within your organization by ensuring financial protection against internal risks.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-laptop-code',
        coverage: 'Protects against financial losses resulting from cyberattacks, data breaches, and other cyber incidents.',
        benefits: 'Covers costs related to data recovery, legal fees, notification expenses, and potential fines, helping you manage the financial impact of cyber threats.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost income and additional expenses incurred due to disruptions in your operations.',
        benefits: 'Helps maintain financial stability and continuity of operations during unexpected interruptions.',
    },
    {
        name: 'Directors and Officers (D&O) Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Provides protection for the personal assets of directors and officers in the event of claims made against them for wrongful acts in their capacity as company leaders.',
        benefits: 'Ensures that your leadership team can make decisions confidently, knowing they are protected against personal liability.',
    },
]);



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
                Financial Losses <span class="text-brand-primary">& Money Covers</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                In the corporate world, financial losses can arise from various unforeseen events, impacting your
                business's stability and growth. Our comprehensive financial losses and money insurance covers are
                designed to protect your business from these risks, ensuring financial security and peace of mind.
            </p>
        </div>

        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of Life <span class="text-brand-primary">
                    Assurance Covers</span>
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
            <h1 class="text-2xl font-semibold pb-10">Why Choose Our <span class="text-brand-primary">Insurance</span>
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
                Protect your corporate assets with our reliable and comprehensive financial losses and money insurance
                solutions. <span class="text-brand-primary italic underline">Contact us today</span> to learn more about
                our policies and how we can help you secure your future
                in the corporate world.
            </p>
        </div>

        <ContactForm />
    </div>



</template>
