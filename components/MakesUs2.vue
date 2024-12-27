<script setup>
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
        items: [
            '• Bankers Blanket Bond',
            '• Cyber Insurance',
            '• Commercial Crime',
            '• Trade Credit',
            '• Directors & Officers Liability',
            '• Professional Indemnity'
        ],
        img: 'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Financial Lines Insurance provides essential coverage for businesses and professionals against the unique risks they face in their financial and managerial operations. This includes protection for directors and officers, professional indemnity, cyber incidents, fidelity fraud, and specialized risks within financial institutions. “In a world of evolving financial risks and regulated business environment, financial lines insurance is your safeguard for sound decision-making and business continuity.”'
    },
    {
        name: 'Financial Institutions',
        items: [
            '• Advance Payment Bonds',
            '• Performance Bonds',
            '• Bid Bonds',
            '• Customs and Warehousing Bonds',
            '• Retention and Maintenance Bonds'
        ],
        img: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Bonds and guarantees are specialized financial instruments used to provide assurance and security in business transactions.'
    },
    {
        name: 'Industrials & Manufacturing',
        items: [
            '• Political Violence including Riot, Strike and Civil Commotion',
            '• Terrorism and Sabotage',
            '• Business interruption'
        ],
        img: 'https://images.pexels.com/photos/2698473/pexels-photo-2698473.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'In uncertain times, having the right coverage in place ensures your business is shielded from the impact of political unrest and terrorism. At Acentria, we help our clients identify the exposures to such risks and provide tailored reinsurance solutions that offer protection against a wide range of threats, including war, civil commotion, insurrection, and terrorist attacks.'
    },
    {
        name: 'Professionals & Business Service',
        items: [
            '• Marine Hull',
            '• Marine Cargo',
            '• Marine Hull and Machinery',
            '• Protection and Indemnity',
            '• Goods in Transit',
            '• Aquaculture'
        ],
        img: 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Marine insurance is a cornerstone of global trade, offering protection against the risks associated with the transportation of goods and vessels across seas, rivers, and other waterways. We specialize in designing comprehensive marine reinsurance solutions tailored to the unique needs of shipping companies, logistics providers, and businesses engaged in international trade. Our expertise and global market access enable us to secure competitive terms and innovative reinsurance arrangements that ensure seamless risk transfer.'
    },
    {
        name: 'Technology',
        items: [
            '• Geothermal plants',
            '• Renewable energy',
            '• Power plants',
            '• Utilities',
            '• Offshore Energy',
            '• Onshore Energy',
            '• Onshore Energy construction Business'
        ],
        img: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'With access to global markets and expertise in energy risk assessment, we design programs that deliver comprehensive protection for upstream, midstream, and downstream operations. Our solutions are customized to support both traditional and renewable energy projects, ensuring clients stay resilient in a rapidly evolving industry.'
    },
    {
        name: 'Transport & Logistics',
        items: [
            '• Hull All Risk Hull War Aviation',
            '• Product & Premises Liability Airport',
            '• Terminal Liability Ground Handling',
            '• Liability Hangar Keepers Liability',
            '• Third Party Liability Passenger Legal',
            '• Liability Combined Single Liability',
            '• Aviation Refuelers Liability'
        ],
        img: '/img/63.jpg',
        description: 'Aviation insurance provides essential protection for the complex and high-stakes risks faced by the aviation industry, covering everything from aircraft hull and liability to passenger and cargo exposures. Whether for commercial airlines, private operators, or airport facilities, our specialized coverage ensures financial resilience in the face of accidents, mechanical failures, natural disasters, or third-party claims. "Empowering the aviation industry to thrive, even in turbulent times.”'
    },
    {
        name: 'Hospitality, Travel & Leisure',
        items: [
            '• Professional Indemnity',
            '• Public & Products Liability',
            '• Employers Liability',
            '• Trustee Liability',
            '• Directors and Officers Liability',
            '• Product Recall',
            '• Environmental Liability'
        ],
        img: 'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Casualty and liability insurance provides essential protection for businesses against third-party claims arising from injuries, property damage, or legal liabilities. This class of insurance covers a wide range of exposures, including general liability, employer’s liability, product liability, professional liability, and environmental liability.'
    },
    {
        name: 'Construction & Real Estate',
        items: [
            '• Fire and Allied Perils',
            '• Fire loss of profit Industrial All Risk',
            '• Asset All Risk Deterioration of Stock',
            '• Advance Loss of Profits',
            '• Machinery Breakdown',
            '• Contractors Plant and Machinery',
            '• Electronic Equipment Insurance',
            '• Erection All Risks',
            '• Contractors All Risks',
            '• Delay in start-up Insurance'
        ],
        img: 'https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Property and engineering insurance is designed to protect businesses and assets against physical damage, financial loss, and risks associated with construction and operational activities. This includes coverage for commercial properties, industrial facilities, construction projects, and specialized engineering risks such as machinery breakdown and project delays. From safeguarding infrastructure investments to mitigating the risks of natural disasters and technical failures, we help our clients protect what matters most.'
    },
    {
        name: 'Mining & Natural Resources',
        items: [
            '• Individual Life',
            '• Group Life',
            '• Group Credit & Mortgage',
            '• Keyman Insurance'
        ],
        img: 'https://images.pexels.com/photos/208189/pexels-photo-208189.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Life insurance plays a pivotal role in providing financial security and peace of mind to individuals and families. As a reinsurance broker, we specialize in supporting life insurers by designing reinsurance solutions that help them manage risks, improve capital efficiency, and ensure long-term sustainability. From traditional life insurance to innovative products like critical illness and annuities, our tailored programs address the evolving needs of the life insurance market.'
    },
    {
        name: 'Energy & Power',
        items: [
            '• Individual Life',
            '• Group Life',
            '• Group Credit & Mortgage',
            '• Keyman Insurance'
        ],
        img: 'https://images.pexels.com/photos/208189/pexels-photo-208189.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Life insurance plays a pivotal role in providing financial security and peace of mind to individuals and families. As a reinsurance broker, we specialize in supporting life insurers by designing reinsurance solutions that help them manage risks, improve capital efficiency, and ensure long-term sustainability. From traditional life insurance to innovative products like critical illness and annuities, our tailored programs address the evolving needs of the life insurance market.'
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
    {
        name: 'We implement smart processes and methodologies backed by competitive, value-based pricing.',
        icon: 'fas fa-cogs',
    },
    {
        name: 'We attract and retain forward-thinking talent skilled in blending artificial and human intelligence.',
        icon: 'fas fa-users',
    },
    {
        name: 'We develop and integrate seamless smart systems, platforms, and automated workflows that boost efficiency and agility.',
        icon: 'fas fa-network-wired',
    },
    {
        name: 'We communicate transformative insights, demonstrating how intelligence, innovation, and implementation converge into truly “smart” solutions.',
        icon: 'fas fa-comments',
    },
]);
</script>

<template>
    <div class="font-sans">

        <div class="bg-white py-5">

            <div class=" container grid grid-cols-7 gap-2">
                <div class="col-span-3 mt-5 container max-w-6xl mx-auto justify-between content-center">

                    <!-- <h3 class="font-semibold text-xl mt-2">
                                Sharing an <span class="text-brand-primary">ambitious spirit!</span>
                            </h3> -->
                    <h2 class="text-5xl font-semibold text-left">
                        About
                    </h2>
                    <h1 class="text-[10rem] text-transparent bg-clip-text bg-contain bg-center leading-none font-extrabold tracking-tighter"
                        style="background-image: url('/img/sun-tornado.png');">
                        <div class="-ml-3">
                            US
                        </div>
                    </h1>
                </div>

                <div class="col-span-4 relative mt-5">
                    <h2 class="text-2xl font-semibold text-left">
                        <span class="text-brand-primary"> Acentria Group</span>
                    </h2>
                    <div class="relative mx-auto pt-4">
                        We drive the future for our partners through expertise and innovative solutions, empowering the
                        visions of our clients and the communities we serve. By fostering innovation, we deliver the
                        best
                        strategies to enhance prosperity and success.
                        <br><br>
                        Our mission is to continuously seek better ways to manage risks and guide effective pathways
                        toward
                        achieving smart outcomes. We go beyond addressing risks to unlocking rewards—for our clients,
                        our
                        company, our colleagues, and the communities we proudly serve.
                    </div>

                    <div class="my-5">
                        <NuxtLink to="/about-us/who-we-are"
                            class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                            Learn More <i data-v-02281a80="" class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                    </div>

                </div>
            </div>

            <div class="container my-10">
                <h1 class="text-semibold text-2xl text-center leading-none">
                    “At Acentria, we reject the notion that "better" is enough, We go beyond normal thinking to ensure
                    that
                    we deliver the smartest and most optimal solution possible”
                </h1>
            </div>

            <div class="container mt-5">
                <div
                    class="font-sans grid  grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-x-1 gap-y-2 text-base leading-normal text-gray-600">
                    <NuxtLink v-motion-fade-visible :to="incentive.link" v-for="incentive in incentives"
                        :key="incentive.name"
                        class="shadow-2xl button-animation relative flex flex-row gap-1 border-2 border-black/10 py-5 px-5 rounded-lg">
                        <i :class="incentive.icon" class="text-4xl text-brand-primary mr-2"></i>
                        <div class="relative">
                            <div class="flex justify-between w-full">
                                <h5 v-html="incentive.name" class="text-md pb-1 font-semibold leading-tight text-black">
                                </h5>
                            </div>
                            <p class="leading-normal font-regular text-light-content text-[14px]">
                                {{ incentive.description }}
                            </p>
                            <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>



        <div class="container relative min-h-[60vh] ">
            <div class="mb-24 bottom-0 absolute max-w-7xl mx-auto !py-auto ]">
                <h2 class="text-[46px] font-semibold text-white py-1">
                    “SMART people, SMART solutions, SMART technology, SMART organization, SMART clients“
                </h2>

            </div>
        </div>

        <div class="bg-white">

            <div class="container mx-auto pt-10 ">
                <div class="mx-auto max-w-6xl lg:mx-0 mb-2">
                    <h2 class="text-2xl font-semibold text-black">
                        Our <span class="text-brand-primary">Capabilities</span>
                    </h2>
                </div>

                <div>
                    <p class="my-5 text-sm leading-normal">
                        At Acentria Group, we offer a comprehensive suite of services tailored to meet the evolving
                        needs
                        of our clients. Through innovation, expertise, and unwavering dedication, we empower businesses
                        and individuals to thrive across the following areas.
                        <br><br>
                        <Services />
                        <br>
                        We provide expert insights and innovative solutions designed to address complex challenges and
                        unlock new opportunities. Our capabilities span a diverse range of fields, enabling us to
                        deliver
                        customized strategies that drive growth, mitigate risks, and enhance prosperity in an
                        ever-changing global landscape.
                        <br><br>
                        With a focus on inclusivity, sustainability, and impactful results, we leverage our expertise to
                        ensure success for our clients, colleagues, and the communities we serve.

                    </p>
                </div>

                <div class="pt-5">
                    <div class="">
                        <h2 class="text-2xl font-semibold text- mb-4">
                            The <span class="text-brand-primary">Industries</span>
                        </h2>
                    </div>

                    <div class=" mx-auto text-black">
                        <p>
                            Every industry faces similar global challenges and opportunities, yet each has its own
                            unique
                            dynamics that call for specialized support.
                            At Acentria Group, We bring an unparalleled blend of industry-specific expertise, tap into
                            extensive
                            industry-specific data, analytics, technology and insights to craft solutions tailored
                            precisely to your needs.
                        </p>

                        <div class="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            <a v-for="product in specials" :key="product.id" @click="setLineData(product)"
                                class="button-animation group">
                                <div
                                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                                    <NuxtImg :src="product.img" :alt="product.img"
                                        class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                </div>
                                <div
                                    class=" mt-4 flex flex-col items-center justify-between subheading-class text-black">
                                    <h3 class="text-xs">{{ product.name }}</h3>
                                    <p class="text-xs italic mt-3">
                                        Learn More <i class="ml-2 fas fa-arrow-right text-brand-primary"></i>
                                    </p>
                                </div>
                                <!-- <p class="mt-1 text-xs italic text-gray-500">{{ product.description }}</p> -->
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            <div class="container mx-auto py-10">
                <div class="mx-auto max-w-6xl lg:mx-0 mb-2">
                    <h2 class="text-2xl font-semibold text-black">
                        Why Acentria <span class="text-brand-primary">Group?</span>
                    </h2>
                    <h3 class="font-semibold text-xl mt-2">
                        We Ensure<span class="text-brand-primary"> Smart!</span>
                    </h3>
                </div>

                <div class="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div v-for="feature in whys" class="flex px-3 py-3 shadow-md border-l-4 border-brand-primary">
                        <div class="mr-6">
                            <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                        </div>
                        <div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-[14px] text-black font-medium text-left">
                                    {{ feature.name }}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">
                <div class="relative py-4 lg:basis-1/2">
                    <NuxtImg v-motion-fade-visible alt="Image of Enable growth" loading="lazy" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain"
                        class="mt-8 w-full h-[310px] shadow-2xl rounded-lg !object-cover" src="/img/inspire.webp" />
                </div>
                <div class="mt-2 flex flex-col justify-center items-center lg:basis-1/2">
                    <div class="container">
                        <h2 class="text-2xl font-semibold text-left -ml-5">
                            Our <span class="text-brand-primary">Purpose</span>
                        </h2>
                    </div>
                    <div class="text-light-content">
                        <p class="mt-2 text-sm leading-normal text-gray-700 !text-inherit mb-4">
                            Our purpose is to passionately lead the way in empowering the vision of our clients and
                            communities through innovative thinking. By delivering the best solutions to enhance
                            prosperity,
                            we create value in an ever-evolving global environment.
                            <br><br>
                            Every day, we go beyond merely meeting compliance and regulatory standards—we strive to
                            exceed
                            expectations. By concentrating on areas where our expertise has the greatest impact, we
                            empower
                            people and businesses to thrive inclusively and sustainably.

                        </p>
                    </div>
                </div>
            </div> -->

        </div>


    </div>
</template>

<style scoped></style>