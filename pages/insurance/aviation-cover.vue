<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Aviation Insurance',
    title: 'Expert Aviation Insurance',
    heading: 'Specialist aviation insurance brokers',
    image:'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'We provide aviation professionals with insurance policies tailored to their unique needs. Our dedicated team of aviation insurance brokers combines in-depth industry knowledge and exceptional service to offer you strategic advice, comprehensive coverage, and competitive pricing. Regardless of your flying experience or the type of aircraft you operate, we’re here to ensure your peace of mind with coverage that lets you fly confidently.'
})


const faqs = ref([
    {
        name: 'What types of aviation insurance do you offer?',
        content:'We provide a wide range of aviation insurance solutions, including coverage for small aircraft, UAVs (unmanned aerial vehicles), helicopters, hangars, and liability insurance for commercial activities. Our policies are tailored to meet the unique needs of the aviation industry, its assets, and associated businesses.'
    },
    {
        name: 'How do you tailor insurance policies to individual needs?',
        content:'As the details of aviation insurance are highly complex, it requires personalisation to suit your specific requirements. We start by understanding your operations and the aircraft you use. Based on this information, we then tailor your policy to ensure it covers your exact requirements, including any necessary policy extensions.'
    },
    {
        name: 'Do I need to work with an aviation insurance broker?',
        content:'Working with a broker means you have an advocate on your side to handle everything from policy comparisons to renewal processes and handling claims, saving you time and headaches. Our expertise also means we can secure the most competitive premiums and policy conditions.'
    },
    {
        name: 'What happens if I need to make a claim?',
        content:'In the event of a claim, we take care of the entire process on your behalf. We review the circumstances surrounding the claim, liaise with insurers, and work towards a resolution, allowing you to sit back and relax.'
    },
    {
        name: 'Where do you offer coverage?',
        content:'Our aviation insurance specialists are based in Kenya and provide insurance to aviation professionals and businesses across Africa'
    },

])

const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria</span>`)
const whys = ref([
    {
        title: 'We save you money',
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products, ensure prudent risk management, reduce your loss ratios, and hence save you on cost',
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

const exploreAviation = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Our Footprints <span class="text-brand-primary">in Aviation</span>',
    subheading: '',
    image: 'https://images.pexels.com/photos/45230/aircraft-double-decker-airport-army-aviation-space-45230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/',
    content:'At Acentria, we leverage our deep understanding of the industry to bridge these gaps. We take a proactive approach to risk management and provide you with insights and expert advice you need to remain compliant and safe. We cover all potential risks and advise strategies to mitigate them, ensuring you’re always prepared and protected. Our commitment to fostering a long-lasting relationship means we’re here for you, from policy inception to claim resolution, offering ongoing support to keep your operations soaring smoothly.'
})

const joinAsMembers = ref([
    {
        name: 'Aircraft Insurance',
        icon: 'fas fa-plane',
        description: 'Aircraft insurance is a specialised product that can be complex for many aircraft owners and operators to fully understand. Whether you’re looking to insure a small aircraft to a turbine helicopter, our team of expert aviation insurance brokers is here to help.',
    },
    {
        name: 'UAV Insurance',
        icon: 'fas fa-tablet-button',
        description: 'UAV insurance is essential for drone ownership and operation within Australia, requiring all operators to possess the necessary qualifications and insurance for their drones’ specific usage purposes. Our in-depth knowledge of both the aviation and the UAV sectors guarantees that our clients are fully insured and protected against all related risks. We offer expert guidance tailored to your equipment and experience level.',
    },
    {
        name: 'Hangarkeepers’ liability insurance',
        icon: 'fas fa-warehouse',
        description: 'Whether you’re seeking coverage for your private hangar or need liability insurance for commercial aviation activities like aircraft maintenance and airport support services, we offer a comprehensive and detailed service.',
    },
    {
        name: 'Hangar Insurance',
        icon: 'fas fa-building',
        description: 'Our team of aviation insurance brokers is equipped to guide you through your Hangar Insurance requirements, securing the most favourable premiums and policy conditions from a variety of Australian-based insurers.',
    },
    {
        name: 'Helicopter insurance',
        icon: 'fas fa-helicopter',
        description: 'Whether you operate helicopters for private or commercial purposes, we offer guidance on the best helicopter insurance options across Australia. We can also provide advice on additional liability cover for helicopters used in the tourism industry.',
    },
    {
        name: 'Hot air balloon insurance',
        icon: 'fas fa-wind',
        description: 'Hot air balloons present a unique risk for aviation insurance, differing from those associated with helicopters or planes. Given their frequent use in the tourism industry, they often necessitate broader liability coverage.',
    },
])
</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <ContentPic :content="exploreAviation" />

        <div class=" w-full h-full container mx-auto max-w-6xl">
            <div class=" !font-sans  my-0">
                <div class="py-10 sm:px-2 lg:px-4">
                    <div class="lg:max-w-none">
                        <div class="justify-between content-center">
                            <h2 class="heading-class text-black text-left">
                                Our Aviation <span class="text-brand-primary">Insurances</span>
                            </h2>
                        </div>
                        <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3">
                            <div v-for="member in joinAsMembers" :key="member.name"
                                class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8  border-brand-primary">
                                <div class="sm:flex-shrink-0 flex justify-center">
                                    <i :class="member.icon" class="text-black text-2xl"></i>
                                </div>
                                <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 class="subheading-class text-brand-primary flex justify-center">{{ member.name
                                        }}</h3>
                                    <p class="mt-2 text-[12px] text-gray-500">{{ member.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="!bg-white/5">
            <div class="container py-5">
                <h4 class="heading-class">Why might you need an <span class="text-brand-primary">aviation insurance
                        broker?</span></h4>
                <p class="text-xs leading-normal text-content-light py-3">
                    As brokers, we advocate for you from the initial policy setup, through renewals, to handling claims.
                    We eliminate the time-consuming hassle of comparing policies as we tailor coverage to suit your
                    aircraft’s operational requirements and identify essential policy extensions.
                    <br /><br />
                    In the event of a claim, we oversee the process, addressing all relevant details and liaising with
                    the insurer on your behalf, ensuring a stress-free and seamless resolution process.
                </p>
            </div>
        </div>

        <div class="container mt-10">
            <h1 class="heading-class">Frequently <span class="text-brand-primary">Asked Questions</span></h1>
            <p class="text-[25px] text-light-content">We have all the answers to your questions.</p>
        </div>

        <Accordion :faqs="faqs" />

        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <ContactForm />
    </div>



</template>
