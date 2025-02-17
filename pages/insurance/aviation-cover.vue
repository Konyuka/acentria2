<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Aviation Insurance',
    title: 'Expert Aviation Insurance',
    heading: 'Specialist aviation insurance brokers',
    image: '/img/in-aviation.jpg',
    content: 'We provide aviation professionals with insurance policies tailored to their unique needs. Our dedicated team of aviation insurance brokers combines in-depth industry knowledge and exceptional service to offer you strategic advice, comprehensive coverage, and competitive pricing. Regardless of your flying experience or the type of aircraft you operate, we’re here to ensure your peace of mind with coverage that lets you fly confidently.'
})


const faqs = ref([
    {
        name: 'What does an aviation insurance broker do?',
        content: 'We act as your advisor, helping you identify and secure the best insurance coverage for your aircraft, operations, and aviation-related activities. We assess your unique risks, negotiate with insurers on your behalf, and ensure you get competitive rates and comprehensive protection.'
    },
    {
        name: 'Why should I use an aviation insurance broker instead of going directly to an insurer?',
        content: 'We provide specialized expertise, access to multiple insurers, and personalized service. We advocate for you, ensuring you get the best terms and support during claims, which might not be possible when dealing directly with a single insurer.'
    },
    {
        name: 'What types of aviation insurance can a broker provide?',
        content: 'Brokers offer a range of aviation insurance solutions, including: <br/> •	Hull and liability insurance. <br/>•	Pilot Loss of License(PLOL) insurance. <br/>•	Hangarkeepers liability insurance. <br/>•	Drone / UAV insurance. <br/>•	War and terrorism coverage. <br/>•	Personal accident coverage for pilots and crew. <br/>•	Airport and ground handling liability insurance.'
    },
    {
        name: 'How do brokers determine the best coverage for me?',
        content: 'We evaluate factors like: <br/> • Type and use of the aircraft (commercial, private, training, etc.). <br/> • Operational regions and geographical scope. <br/> • Pilot experience and certification. <br/> • Aircraft maintenance records. <br/> • Budget and coverage preferences.'

    },
    {
        name: 'How can a broker help me save on premiums?',
        content: 'Our relationships with multiple insurers and reinsurance markets, allows us to negotiate competitive rates. We can also recommend cost-saving measures, such as improving safety practices or selecting the most suitable deductibles.'
    },
    {
        name: 'What support does a broker provide during a claim?',
        content: 'We are your advocate, guiding you through the claims process, ensuring proper documentation, and negotiating with insurers to secure a fair and timely settlement.'
    },
    {
        name: 'Can a broker help with regulatory compliance?',
        content: 'Yes, we ensure your insurance meets local and international aviation regulatory requirements, such as those from the Kenya Civil Aviation Authority (KCAA) or the International Civil Aviation Organization (ICAO).'
    },
    {
        name: 'Does an aviation insurance broker offer drone insurance?',
        content: 'Yes, we provide drone/UAV insurance, covering hull damage, third-party liability, and payload equipment.'
    },
    {
        name: 'How is the cost of aviation insurance determined?',
        content: 'The cost depends on factors such as: <br/> • Type and value of the aircraft. <br/> • Pilot experience and accident history. <br/> • Intended use of the aircraft. <br/> • Geographical area of operation. <br/> • Coverage limits and additional options.'
    },
    {
        name: 'What is Pilot Loss of License (PLOL) insurance, and why is it important?',
        content: 'PLOL insurance provides financial compensation to pilots who lose their license due to medical or other unforeseen circumstances. It’s critical for ensuring financial stability during career disruptions.'
    },
    {
        name: 'Can you provide coverage for multiple aircraft under one policy?',
        content: 'Yes, we do fleet insurance policies for clients with multiple aircraft, offering simplified management and potential cost savings.'
    },
    {
        name: 'What does Hangarkeepers Liability Insurance cover?',
        content: 'This policy protects businesses (e.g., FBOs, hangar operators) against liability for damage to aircraft under their care, custody, or control.'
    },
    {
        name: 'Does aviation insurance cover war and terrorism risks?',
        content: 'Yes, war and terrorism coverage can be added to most policies to protect against politically motivated acts like hijacking or sabotage, we call this hull war.'
    },
    {
        name: 'Can brokers help with international flight coverage?',
        content: 'Absolutely. we can arrange insurance that includes international operations, ensuring compliance with regulations and protection in all operating regions.'
    },
    {
        name: 'How can a broker help my aviation business grow?',
        content: 'At Acentria we offer a penetration test that provides risk management advice, ensures adequate coverage for expansion needs, and helps mitigate financial risks, allowing you to focus on scaling your business confidently.'
    },
    {
        name: 'How do I choose the right aviation insurance broker?',
        content: 'Look for brokers with: <br/> • Extensive experience in aviation insurance. <br/> • Strong relationships with reputable insurers. <br/> • Excellent claims support services. <br/> • Positive reviews and industry reputation.'

    },
    {
        name: 'What documentation do I need to get started with an aviation insurance broker?',
        content: 'Typically, you’ll need: <br/> • Aircraft registration and value details. <br/> • Pilot experience and licensing information. <br/> • Maintenance and operational records. <br/> • Details of previous insurance and claims history.'
    },


])

const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria Aviation Insurance</span>`)
const whys = ref([
    {
        title: 'Comprehensive Coverage',
        content: 'From private pilots to commercial fleets, we cover every aspect of aviation operations.',
        icon: 'shield'
    },
    {
        title: '24/7 Claims & Risk Support',
        content: 'We’re always available for emergency claims assistance and risk advisory, ensuring peace of mind.',
        icon: 'support_agent'
    },
    {
        title: 'Global Reinsurance Backing',
        content: 'Partnered with A-rated global insurers for financial stability and security.',
        icon: 'public'
    },
    {
        title: 'Proactive Risk Management',
        content: 'We go beyond insurance to help mitigate potential risks and improve operational safety.',
        icon: 'assessment'
    }
]);


const exploreAviation = ref({
    orientation: 'image-right',
    heading: 'Aviation<span class="text-brand-primary"> Insurance</span>',
    subheading: '',
    image: '/img/63.jpg',
    link: '/',
    content:'At Acentria, we provide aviation professionals with insurance policies tailored to their unique needs. Our dedicated team of aviation insurance brokers combines in-depth industry knowledge and exceptional service to offer you strategic advice, comprehensive coverage, and competitive pricing. Regardless of your flying experience or the type of aircraft you operate, we’re here to ensure your peace of mind with coverage that lets you fly confidently.'
})
const whatWeDo = ref({
    orientation: 'image-left',
    heading: 'What <span class="text-brand-primary">We Do</span>',
    subheading: '',
    image: '/img/59.jpg',
    link: '/',
    content:'Our mission extends beyond offering general insurance coverage; we aim to build long-term relationships with our clients to ensure their aviation ventures remain safe with tailored insurance solutions and comprehensive risk management. We specialise in creating custom policies for small aircraft, UAVs (unmanned aerial vehicles), and helicopters, as well as hangarkeepers’ liability and additional insurance catered to the needs of the aviation industry, its assets, and associated businesses. At Acentria, we leverage our deep understanding of the industry to bridge these gaps. We take a proactive approach to risk management and provide you with insights and expert advice you need to remain compliant and safe. We cover all potential risks and advise strategies to mitigate them, ensuring you’re always prepared and protected. Our commitment to fostering a long-lasting relationship means we’re here for you, from policy inception to claim resolution, offering ongoing support to keep your operations soaring smoothly.'
})
const whyAviation = ref({
    orientation: 'image-right',
    heading: 'Why might you need an <span class="text-brand-primary">aviation insurance broker?</span>',
    subheading: '',
    image: '/img/53.jpg',
    link: '/',
    content:'Navigating the complexities of aviation insurance requires specialized expertise and a deep understanding of industry-specific risks. We serve as your trusted advisor, providing tailored solutions and expert guidance to safeguard your operations. We specialize in addressing unique aviation risks, including aircraft hull damage, third-party liabilities, pilot loss of license (PLOL), and war-related exposures, while offering access to A-rated insurance markets for competitive pricing and extensive coverage.'
})

const joinAsMembers = ref([
    {
        name: 'Aircraft Hull Insurance',
        icon: 'fas fa-plane',
        description: 'Coverage: <br/> <div class="ml-3">• All-Risks Hull Coverage – Protection for aircraft in-flight and on the ground. <br/> • Ground Risks Hull Coverage – Covers aircraft while parked or undergoing maintenance.</div>'
    },
    {
        name: 'Aviation Liability Insurance',
        icon: 'fas fa-shield-alt',
        description: 'Coverage: <br/> <div class="ml-3">• Passenger Liability Insurance – Covers legal liability for passenger injuries or fatalities. <br/> • Third-Party Liability Insurance – Protection against claims from damages to people or property. <br/> • Baggage Liability Insurance – Covers loss, damage, or mishandling of passenger baggage.</div>'
    },
    {
        name: 'Pilot Loss of License (PLOL) Insurance',
        icon: 'fas fa-id-badge',
        description: 'Coverage: <br/> <div class="ml-3">• Loss of license due to illness, injury, or permanent disability.</div> <br/> Benefits: Provides income replacement to help pilots maintain financial stability.'
    },
    {
        name: 'Hull War and Allied Perils Insurance',
        icon: 'fas fa-bomb',
        description: 'Coverage: <br/> <div class="ml-3">• Protection against war, terrorism, hijacking, riots, and politically motivated risks.</div>'
    },
    {
        name: 'Ground Risk Insurance',
        icon: 'fas fa-cloud',
        description: 'Coverage: <br/> <div class="ml-3">• Weather-related damage to aircraft. <br/> • Incidents involving ground handling operations.</div>'
    },
    {
        name: 'Drone & UAV Insurance',
        icon: 'fas fa-drone',
        description: 'Coverage: Tailored for commercial drone operators and UAV businesses. <br/> <div class="ml-3">• Hull Insurance – Covers damage or loss of the UAV. <br/> • Third-Party Liability – Protects against claims for injuries or damages caused by drones. <br/> • Payload & Equipment Coverage – Protects high-value drone equipment and sensors.</div>'
    },
    {
        name: 'Hangarkeepers Liability Insurance',
        icon: 'fas fa-warehouse',
        description: 'Coverage: <br/> <div class="ml-3">• Liability protection for hangar operators, MROs (Maintenance, Repair, Overhaul), and Fixed Base Operators (FBOs).</div>'
    },
    {
        name: 'Personal Accident Insurance for Aviation Personnel',
        icon: 'fas fa-user-shield',
        description: 'Coverage: <br/> <div class="ml-3">• Protection for pilots, crew members, and ground personnel in case of injury or accident.</div>'
    },
    {
        name: 'Airport Liability Insurance',
        icon: 'fas fa-plane-departure',
        description: 'Coverage: <br/> <div class="ml-3">• Public liability – Covers injuries or property damage at airports. <br/> • Hangarkeeper’s liability – Covers aircraft under the care of ground services. <br/> • Environmental liability – Covers pollution and environmental damage claims.</div>'
    },
    {
        name: 'Aviation Products Liability Insurance',
        icon: 'fas fa-cogs',
        description: 'Coverage: <br/> <div class="ml-3">• Protection against legal costs and settlements related to aviation product failures.</div>'
    },
    {
        name: 'Aviation Cargo Insurance',
        icon: 'fas fa-box',
        description: 'Coverage: <br/> <div class="ml-3">• Protection for freight forwarders and logistics companies handling cargo shipments. <br/> • Optional add-ons for high-value shipments.</div>'
    },
    {
        name: 'Flight School Insurance',
        icon: 'fas fa-school',
        description: 'Coverage: <br/> <div class="ml-3">• Hull & liability coverage for training aircraft. <br/> • PLOL coverage for student pilots.</div>'
    },
    {
        name: 'Cyber Liability Insurance for Aviation',
        icon: 'fas fa-shield-virus',
        description: 'Coverage: <br/> <div class="ml-3">• Data restoration coverage in case of cyberattacks. <br/> • Liability protection against third-party claims due to cyber breaches.</div>'
    }
]);

const content = ref({
    vid: '/img/hd1.mp4',
    pageTitle: 'Acentria Group Insurance',
    title: 'Expert aviation insurance solutions <br/> <span class="text-brand-primary">for every aspect of your journey!</span>',
})
</script>

<template>

    <div class="">

        <ServiceHero2 :content="content" />

        <ContentPic :content="exploreAviation" />
        <ContentPic :content="whatWeDo" />
        <ContentPic :content="whyAviation" />

        <div class="w-full h-full container mx-auto max-w-6xl">
            <div class="font-sans my-0">
                <div class="py-10 sm:px-2 lg:px-4">
                    <div class="lg:max-w-none">
                        <div class="justify-between content-center">
                            <h2 class="text-2xl font-semibold text-black text-left">
                                Our Aviation <span class="text-brand-primary">Insurance & Solutions</span>
                            </h2>
                        </div>
                        <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-4">
                            <div v-for="member in joinAsMembers" :key="member.name"
                                class="group button-animation sm:flex lg:block bg-gray-50 py-2 rounded-xs border-t-8 border-brand-primary">
                                <div class="mt-1 sm:ml-6 sm:mt-0 lg:ml-0">
                                    <h3 class="text-left text-[14px] font-semibold text-brand-primary flex">
                                        {{ member.name }}
                                    </h3>
                                    <p class="mt-2 text-[14px] text-black" v-html="member.description"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="bg-white">
            <div class="container py-5">
                <h4 class="text-2xl font-semibold">Why might you need an <span class="text-brand-primary">aviation
                        insurance broker?</span></h4>
                <p class="text-sm leading-normal text-gray-700 py-3">
                    As brokers, we advocate for you from the initial policy setup, through renewals, to handling claims.
                    We eliminate the time-consuming hassle of comparing policies as we tailor coverage to suit your
                    aircraft’s operational requirements and identify essential policy extensions.
                    <br /><br />
                    In the event of a claim, we oversee the process, addressing all relevant details and liaising with
                    the insurer on your behalf, ensuring a stress-free and seamless resolution process.
                </p>
            </div>
        </div> -->

        <div class="bg-white py-5">
            <div class="container pb-5">
                <h1 class="text-2xl font-semibold">Frequently <span class="text-brand-primary">Asked Questions</span>
                </h1>
                <p class="text-sm text-gray-700">We have all the answers to your questions.</p>
            </div>
            <Accordion :faqs="faqs" />
        </div>

        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <div class="bg-white">
            <div class="container py-7">
                <p class="text-xl font-semibold leading-normal">
                    For tailored advice or more questions, contact <span class="text-brand-primary">Acentria Aviation
                        Insurance</span> to speak with our expert brokers today.
                </p>
                <p class="text-sm italic mt-5 text-black">
                    At Acentria Group, we’re committed to protecting your aviation operations, ensuring peace of mind
                    for you and your stakeholders. <br> Contact us today to discuss the right coverage for your needs.
                </p>
            </div>
        </div>

        <ContactForm />
    </div>



</template>
