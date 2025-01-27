<script setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const incentives = [
    {
        name: 'Who we are',
        icon: 'fas fa-users',
        link: '/about-us/who-we-are',
        description: "Acentria Group of companies is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, Technology and Investment Advisory.",
    },
    {
        name: 'What We Do',
        icon: 'fas fa-briefcase',
        link: '/about-us/who-we-are',
        description: "At Acentria Group, we deliver transformative products and solutions in Risk and Insurance, Reinsurance, Actuarial, Investment Advisory, and Technology.",
    },
    {
        name: 'Our journey',
        icon: 'fas fa-road',
        link: '/about-us/who-we-are',
        description: "At Acentria Group, our journey is a testament to resilience, vision, and the boundless possibilities that come with dedication.",
    },
]

const specials = ref([
    {
        name: 'Insurance & Reinsurance',
        overview: 'The insurance and reinsurance sector is the backbone of risk management, ensuring businesses and individuals are safeguarded against unforeseen events. This industry requires strategic solutions that address complex risk portfolios while complying with ever-changing regulatory requirements.',
        expertise: [
            'Comprehensive insurance and reinsurance programs tailored to unique needs.',
            'Advanced risk modeling and actuarial analysis.',
            'Claims management powered by technology for faster resolutions.',
            'Cyber risk solutions for emerging threats.',
            'Advisory services for regulatory compliance.',
        ],
        faqs: [
            {
                name: 'What types of insurance products do you specialize in?',
                content: 'We specialize in property, liability, health, and specialty insurance solutions.',
            },
            {
                name: 'How do you manage claims effectively?',
                content: 'Our team leverages smart technologies and deep expertise to streamline claims processes.',
            },
            {
                name: 'What is reinsurance, and how does it benefit insurers?',
                content: 'Reinsurance helps insurers manage risk portfolios and improve financial stability.',
            },
            {
                name: 'Do you offer solutions for emerging risks like cyber threats?',
                content: 'Yes, we provide tailored policies for new and evolving risks, including cyber insurance.',
            },
            {
                name: 'How do you ensure compliance with regulatory requirements?',
                content: 'Our actuarial and financial services team stays updated on regulations to guide compliance.',
            },
        ],
        img: '/img/rope-gray.jpeg'
    },


    {
        name: 'Professionals & Business Services',
        overview: 'From legal firms to consultancy businesses, professional service providers require protection against errors, omissions, and operational risks. We help safeguard your reputation and assets.',
        expertise: [
            'Professional indemnity insurance tailored to industry-specific needs.',
            'Data protection and cybersecurity advisory.',
            'Employee benefits solutions to attract and retain talent.',
            'Business interruption coverage supported by predictive analytics.',
        ],
        faqs: [
            {
                name: 'What is professional indemnity insurance?',
                content: 'It covers legal costs and damages arising from claims of negligence or mistakes in your services.',
            },
            {
                name: 'Do you offer cyber risk solutions for service providers?',
                content: 'Yes, we provide comprehensive cybersecurity insurance and advisory services.',
            },
            {
                name: 'What is business interruption insurance?',
                content: 'It compensates for lost income during disruptions to your operations.',
            },
            {
                name: 'Can you help design employee benefits packages?',
                content: 'Yes, our actuarial and financial services division creates customized benefits plans.',
            },
            {
                name: 'Do you offer liability coverage for legal firms?',
                content: 'Yes, we provide tailored liability insurance for legal and other professional services.',
            },
        ],
        img: '/img/discussion.jpg'
        // img: '/img/Professionals& Business Service.JPG'
    },
    {
        name: 'Technology',
        overview: 'In a world driven by technology, companies face unique challenges such as data breaches, intellectual property risks, and rapid innovation cycles. We provide customized solutions to help tech companies stay resilient.',
        expertise: [
            'Cyber liability insurance for advanced threat protection.',
            'Intellectual property risk coverage supported by smart analytics.',
            'Business continuity planning tailored to the tech ecosystem.',
            'Risk mitigation for software and hardware failures.',
        ],
        faqs: [
            {
                name: 'What is cyber liability insurance?',
                content: 'It protects against losses resulting from data breaches and cyber-attacks.',
            },
            {
                name: 'Do you assist with intellectual property disputes?',
                content: 'Yes, we provide risk coverage and advisory for intellectual property-related claims.',
            },
            {
                name: 'What solutions do you offer for business continuity?',
                content: 'We design strategies to minimize downtime and ensure operational resilience.',
            },
            {
                name: 'How do you address hardware failures?',
                content: 'We offer insurance and risk management strategies for critical IT equipment.',
            },
            {
                name: 'Do you provide coverage for software liabilities?',
                content: 'Yes, we offer solutions to address risks related to software failures and liabilities.',
            },
        ],
        img: '/img/tech2.jpg'
        // img: '/img/industry-tech.jpg'
    },
    {
        name: 'Financial Institutions',
        overview: 'Financial institutions operate in a dynamic environment where stability, security, and compliance are paramount. From banks to microfinance institutions, we understand the intricacies of financial risk and operational challenges.',
        expertise: [
            'Financial risk management strategies supported by actuarial insights.',
            'Credit risk insurance and financial guarantee solutions.',
            'Fraud prevention and advanced cybersecurity measures.',
            'Advisory services for compliance with global standards.',
        ],
        faqs: [
            {
                name: 'What services do you offer for microfinance institutions?',
                content: 'We provide credit risk analysis, operational risk management, and compliance frameworks.',
            },
            {
                name: 'How do you address cybersecurity threats?',
                content: 'Our technology division offers robust cybersecurity policies and risk mitigation tools.',
            },
            {
                name: 'What is credit risk insurance?',
                content: 'It protects lenders from losses due to borrower default.',
            },
            {
                name: 'How do you help with regulatory compliance?',
                content: 'We offer advisory services and tools to meet local and international standards.',
            },
            {
                name: 'Do you provide risk assessment for digital banking platforms?',
                content: 'Yes, we conduct comprehensive assessments using smart tools to mitigate digital banking risks.',
            },
        ],
        img: '/img/iStock-483918009.jpg'
    },
    {
        name: 'Transport & Logistics',
        overview: 'The transport and logistics industry is vital to global trade but is exposed to risks such as cargo damage, regulatory compliance, and geopolitical issues. Our services are designed to keep your operations running smoothly.',
        expertise: [
            'Marine and cargo insurance.',
            'Fleet management insurance for operational efficiency.',
            'Risk coverage for supply chain disruptions.',
            'Advisory on international regulatory compliance.',
        ],
        faqs: [
            {
                name: 'Do you offer marine insurance?',
                content: 'Yes, we provide comprehensive coverage for marine cargo and vessels.',
            },
            {
                name: 'How do you handle claims for cargo damage?',
                content: 'We ensure prompt claim processing supported by advanced technology.',
            },
            {
                name: 'What is fleet management insurance?',
                content: 'It covers risks associated with the operation of vehicle fleets.',
            },
            {
                name: 'How do you mitigate supply chain risks?',
                content: 'We offer tailored insurance and risk management solutions for logistical challenges.',
            },
            {
                name: 'Do you address cross-border transport risks?',
                content: 'Yes, we provide comprehensive coverage for international transport operations.',
            },
        ],
        img: '/img/logistics.jpeg'
    },
    {
        name: 'Hospitality, Travel & Leisure',
        overview: 'The hospitality and travel sector must manage risks related to customer safety, property damage, and unforeseen disruptions. We help businesses in this industry thrive by offering customized solutions.',
        expertise: [
            'Public liability and property insurance.',
            'Cybersecurity solutions for customer data protection.',
            'Risk management for events and large gatherings.',
            'Business interruption coverage for operational continuity.',
        ],
        faqs: [
            {
                name: 'What does business interruption insurance cover?',
                content: 'It compensates for lost income due to disruptions like natural disasters or pandemics.',
            },
            {
                name: 'Do you provide event-specific insurance?',
                content: 'Yes, we tailor coverage for events and large gatherings.',
            },
            {
                name: 'What is public liability insurance?',
                content: 'It covers legal claims due to injuries or damages to third parties on your premises.',
            },
            {
                name: 'How do you protect customer data?',
                content: 'We offer comprehensive cybersecurity insurance and advisory services.',
            },
            {
                name: 'Do you offer solutions for travel disruptions?',
                content: 'Yes, we provide travel insurance and advisory services to manage unexpected interruptions.',
            },
        ],
        img: '/img/travel3.jpg'
    },

    {
        name: 'Industrial & Manufacturing',
        overview: 'The industrial and manufacturing sector faces challenges ranging from supply chain disruptions to workplace safety and environmental regulations. Our solutions are designed to mitigate these risks effectively.',
        expertise: [
            'Machinery breakdown insurance tailored to industrial needs.',
            'Supply chain risk coverage enhanced by smart tracking tools.',
            'Environmental liability assessments and compliance strategies.',
            'Workplace safety advisory backed by data-driven insights.',
        ],
        faqs: [
            {
                name: 'Do you provide solutions for environmental risks?',
                content: 'Yes, we offer liability insurance and compliance advisory for environmental challenges.',
            },
            {
                name: 'How do you support supply chain resilience?',
                content: 'Our tailored insurance and technology solutions address logistical challenges.',
            },
            {
                name: 'What is machinery breakdown insurance?',
                content: 'It covers losses arising from unexpected equipment failures.',
            },
            {
                name: 'How do you ensure workplace safety compliance?',
                content: 'We conduct risk assessments using advanced tools and provide actionable recommendations.',
            },
            {
                name: 'Do you offer product liability coverage?',
                content: 'Yes, we provide comprehensive coverage for manufacturing defects and related risks.',
            },
        ],
        img: '/img/inda.png'
    },
    {
        name: 'Construction & Real Estate',
        overview: 'Construction and real estate projects are fraught with risks, from project delays to property damage and compliance issues. Our solutions are designed to address these challenges head-on.',
        expertise: [
            'Contractors’ all-risk insurance for comprehensive coverage.',
            'Real estate liability coverage tailored to industry demands.',
            'Risk assessments for project financing supported by actuarial insights.',
            'Advisory on regulatory and safety compliance.',
        ],
        faqs: [
            {
                name: 'What is contractors’ all-risk insurance?',
                content: 'It provides coverage for property damage and third-party injury claims during construction.',
            },
            {
                name: 'Do you offer solutions for real estate developers?',
                content: 'Yes, we provide tailored risk management and liability insurance for developers.',
            },
            {
                name: 'How do you manage project delays?',
                content: 'We offer delay-in-startup coverage and other solutions to mitigate financial impacts.',
            },
            {
                name: 'What is real estate liability insurance?',
                content: 'It protects property owners and developers against legal claims related to the use of their property.',
            },
            {
                name: 'Do you provide coverage for equipment and machinery?',
                content: 'Yes, we offer tailored insurance solutions for construction equipment and machinery.',
            },
        ],
        img: '/img/construction.jpg'
    },
    {
        name: 'Mining & Natural Resources',
        overview: 'Mining and natural resources are critical to global economies but face unique risks such as operational hazards, environmental impact, and regulatory compliance. Our solutions are designed to help clients manage these challenges effectively.',
        expertise: [
            'Environmental liability coverage and compliance advisory.',
            'Equipment and operational risk insurance.',
            'Business interruption solutions tailored to mining operations.',
            'Risk assessment for exploration and extraction activities.',
        ],
        faqs: [
            {
                name: 'What is environmental liability coverage?',
                content: 'It protects against costs related to environmental damage and cleanup efforts.',
            },
            {
                name: 'Do you provide risk coverage for mining equipment?',
                content: 'Yes, we offer tailored insurance for operational equipment and machinery.',
            },
            {
                name: 'How do you address business interruptions in mining operations?',
                content: 'We provide insurance to cover losses due to operational halts.',
            },
            {
                name: 'What solutions do you offer for exploration risks?',
                content: 'We provide coverage for geological and operational risks during exploration.',
            },
            {
                name: 'How do you ensure compliance with environmental regulations?',
                content: 'Our actuarial and advisory teams help clients align operations with regulatory requirements.',
            },
        ],
        img: '/img/mining.jpg'
    },
]);

const whys = ref([
    {
        name: 'We create innovative, future-ready solutions that stay ahead of industry trends.',
        icon: 'fas fa-lightbulb',
    },
    {
        name: 'We provide real-time, adaptive service delivery that flexes with your needs.',
        icon: 'fas fa-sync-alt',
    },
    {
        name: 'We design intelligent solutions that are both user-centric and future-focused.',
        icon: 'fas fa-user-cog',
    },
    {
        name: 'We deliver data-driven customer experiences tailored to evolving market demands.',
        icon: 'fas fa-chart-line',
    },
    // {
    //     name: 'We implement smart processes and methodologies backed by competitive, value-based pricing.',
    //     icon: 'fas fa-cogs',
    // },
    // {
    //     name: 'We attract and retain forward-thinking talent skilled in blending artificial and human intelligence.',
    //     icon: 'fas fa-users',
    // },
    // {
    //     name: 'We develop and integrate seamless smart systems, platforms, and automated workflows that boost efficiency and agility.',
    //     icon: 'fas fa-network-wired',
    // },
    // {
    //     name: 'We communicate transformative insights, demonstrating how intelligence, innovation, and implementation converge into truly “smart” solutions.',
    //     icon: 'fas fa-comments',
    // },
]);

const features = [
    {
        img: '/img/rope-gray.jpeg',
        title: 'Insurance',
        description: 'Mitigating Risks, Maximizing Opportunities',
        url: '/acentria-group-insurance',
    },
    {
        img: '/img/reinsure.jpeg',
        title: 'Reinsurance',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-reinsurance',
    },
    {
        img: '/img/ACTUARIAL- MAIN PAGE.jpg',
        title: 'Actuarial',
        description: 'Empowering Decisions, Simplifying Complexity',
        url: '/acentria-group-actuarial',
    },
    {
        img: '/img/industry-tech.jpg',
        title: 'Technology',
        description: 'Building prosperity, Securing Futures',
        url: '/lines-of-business',
    },
    {
        img: '/img/iStock-483918009.jpg',
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-investment',
    },
];

const profileModal = ref(false);
const currentIndustry = ref(null);

const openProfileModal = (product) => {
    currentIndustry.value = product;
    profileModal.value = true
}

const introContent = ref({
    orientation: 'image-left',
    heading: 'Welcome to <span class="text-brand-primary">  Acentria</span>',
    subheading: 'A Reliable Partner <span class="text-brand-primary">  You Can Trust</span>',
    image: '/img/lady-shake.jpg',
    link: '/',
    content: 'Acentria is a world class Insurance Broker that has skills and expertise to combine specialized insurance brokerage services with deep analytics to provide tailored smart solutions that meet the unique needs of our clients worldwide. We pride ourselves as top-notch insurance experts with a reputation to handle complex risks and claims.',
})

</script>

<template>
    <div class="bg-white font-sans">

        <div class="container">

            <div class="grid grid-cols-12 gap-10 py-10">
                <div class="col-span-5 relative flex items-center">
                    <NuxtImg alt="content" loading="lazy" decoding="async"
                        class="w-full h-auto shadow-2xl rounded-lg !object-cover"
                        src="/img/comitment to our partners.jpg" />
                </div>
                <div class="col-span-7 flex flex-col justify-center">
                    <div class="pb-3">
                        <h1 class="section-heading">
                            Shaping the future for our partners through empowerment &
                            <span class="text-brand-primary">
                                innovative solutions that drive
                                prosperity and ensure success.
                            </span>
                        </h1>
                        <h4 class="card-heading pt-5 !normal-case">
                            Let us help you navigate the
                            complexities of today’s world and
                            unlock your true potential.
                        </h4>
                    </div>
                    <div>
                        <NuxtLink to="/about-us/who-we-are">
                            <AppButton title="Learn More" />
                        </NuxtLink>

                    </div>
                </div>
            </div>

            <div class="py-5">
                <h2 class=" section-heading pb-3">
                    Our <span class="text-brand-primary">Capabilities</span>
                </h2>
                <div>
                    <p class="pb-5">
                        At Acentria Group, we offer a comprehensive suite of services tailored to meet the evolving
                        needs
                        of our clients. Through innovation, expertise, and unwavering dedication, we empower businesses
                        and individuals to thrive across the following areas.

                    </p>
                    <div class="grid grid-cols-5 gap-3 py-10">
                        <HighlightCard :item="feature" v-for="feature in features" :key="feature.name" />
                    </div>
                    <p class="pb-5">
                        We provide expert insights and innovative solutions designed to address complex challenges and
                        unlock new opportunities. Our capabilities span a diverse range of fields, enabling us to
                        deliver
                        customized strategies that drive growth, mitigate risks, and enhance prosperity in an
                        ever-changing global landscape.
                        With a focus on inclusivity, sustainability, and impactful results, we leverage our expertise to
                        ensure success for our clients, colleagues, and the communities we serve.
                    </p>
                </div>
            </div>

            <div class="py-5">
                <!-- <h2 class="section-heading pb-3">
                    The <span class="text-brand-primary">Industries</span>
                </h2> -->




                <h2 class="section-heading !normal-case py-5">
                    Explore the <span class="text-brand-primary"> Industries</span>
                </h2>

                <h2 class="max-w-5xl section-heading !normal-case italic !text-[20px]">
                    We blend innovation, expertise, and a nuanced understanding of industry-specific challenges to
                    empower our clients in
                    <span class="text-brand-primary">
                        achieving their objectives with precision & impact by addressing complex
                        needs with tailored strategies.
                    </span>
                </h2>

                <!-- <p>
                    At Acentria Group, our divisions in Insurance Broking, Reinsurance Broking, Actuarial and
                    Financial Services, and Technology enable us to offer cutting-edge, industry-specific
                    solutions. Guided by our brand promise, "Done Smart," we combine innovation, expertise, and
                    a deep understanding of industry challenges to help our clients achieve their goals
                    efficiently and effectively.
                </p> -->

                <Carousel :items-to-show="3" :wrap-around="true" :transition="500" :autoplay="2000" class="py-10">
                    <Slide v-for="product in specials" :key="product.id">
                        <div class="carousel__item">
                            <button @click="openProfileModal(product)" class="button-animation group w-full">
                                <div
                                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                                    <NuxtImg :src="product.img" :alt="product.name"
                                        class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                </div>
                                <div class="flex flex-col items-center justify-between mt-4">
                                    <h4 class="card-heading pb-1">{{ product.name }}</h4>
                                    <p class="small-text italic">
                                        Learn More <i class="ml-2 fas fa-arrow-right text-brand-primary"></i>
                                    </p>
                                </div>
                            </button>
                        </div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>

                <div v-if="profileModal" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
                    aria-modal="true">
                    <div class="fixed inset-0 bg-black/20"></div>

                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-3xl pl-10">

                                <div class="pointer-events-auto w-screen max-w-3xl">
                                    <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div class="px-4 sm:px-6">
                                            <div class="flex items-start justify-between">
                                                <h2 class="text-base font-semibold leading-6 text-gray-900"
                                                    id="slide-over-title">

                                                </h2>
                                                <div class="ml-3 flex h-7 items-center">
                                                    <button @click="profileModal = false" type="button"
                                                        class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                                        <span class="absolute -inset-2.5"></span>
                                                        <span class="sr-only">Close panel</span>
                                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                            data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                            <div class="relative z-0 flex flex-1 overflow-hidden">
                                                <main
                                                    class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">


                                                    <article>
                                                        <div class="bg-white rounded-lg shadow-lg">
                                                            <h2 class="text-2xl font-bold text-brand-primary">{{
                                                                currentIndustry.name }} <span
                                                                    class="text-black">Industry</span></h2>
                                                            <p class="mt-4 text-gray-700">{{
                                                                currentIndustry.overview }}</p>
                                                            <h3 class="mt-6 text-xl font-semibold">Expertise:
                                                            </h3>
                                                            <ul class="list-disc ml-6 mt-2">
                                                                <li v-for="(item, index) in currentIndustry.expertise"
                                                                    :key="index" class="text-gray-600">
                                                                    {{ item }}
                                                                </li>
                                                            </ul>
                                                            <h3 class="mt-6 text-xl font-semibold">FAQs:</h3>
                                                            <div class="mt-2">

                                                                <Accordion :faqs="currentIndustry.faqs" />

                                                            </div>
                                                            <button
                                                                class="mt-6 px-4 py-2 bg-gray-700 text-white rounded-md"
                                                                @click="profileModal = false">
                                                                Close
                                                            </button>
                                                        </div>

                                                    </article>
                                                </main>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-5">
                <h1 class="section-heading pb-5">
                    Why Acentria <span class="text-brand-primary">Group?</span>
                </h1>
                <div class="grid grid-cols-12 gap-10">
                    <div class="col-span-5 relative flex items-center">
                        <NuxtImg alt="content" loading="lazy" decoding="async"
                            class="w-full h-auto shadow-2xl rounded-lg !object-cover"
                            src="/img/our brand promise.JPG" />
                    </div>
                    <div class="col-span-7 flex flex-col justify-center">
                        <div class="pb-3">
                            <h1 class="card-heading !text-[20px]">
                                We Ensure <span class="text-brand-primary">Smart!</span>
                            </h1>
                            <h2 class="section-heading py-3 !normal-case">
                                We communicate transformative insights, demonstrating how <span
                                    class="text-brand-primary"> intelligence, innovation, &
                                    implementation converge into truly “Smart”
                                    solutions.</span>
                            </h2>

                        </div>
                        <div class="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div v-for="feature in whys"
                                class="flex px-3 py-3 shadow-md border-l-4 border-brand-primary">
                                <div class="mr-6">
                                    <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                                </div>
                                <div>
                                    <div class="flex justify-between items-center w-full">
                                        <p class="content">
                                            {{ feature.name }}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
.carousel__item {
    min-height: 200px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
}

.carousel__slide {
    padding: 10px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>