<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Unlock customized risk management',
    subTitle: 'Facultative Solutions',
    image: 'https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Our Approach',
    image: 'https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Acentria Re excels in both automatic and semiautomatic solutions, meticulously designed to address your specific risks with precision, ensuring high operational efficiency and cost-effectiveness. We assist our clients in increasing their risk capacity by offering alternative and innovative channels for individual risks where treaty capacities are limited. The facultative arrangement is both under proportional and non-proportional forms. Risks under this arrangement are placed with well-rated securities and take into consideration the risk appetite and profile of both the ceding and the securing companies. Our capability in creating, automatic; facultative obligatory treaties and semiautomatic reinsurance structures for property, liability, and casualty risks will help you make the most of opportunities, improve capital management, and advance underwriting strategies and risk management.'
})


const specials = ref([
    {
        name: 'Financial Lines',
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
        name: 'Bonds and Guarantees',
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
        name: 'Political Violence and Terrorism',
        items: [
            '• Political Violence including Riot, Strike and Civil Commotion',
            '• Terrorism and Sabotage',
            '• Business interruption'
        ],
        img: 'https://img.freepik.com/free-photo/two-soldiers-war_1048-1894.jpg?t=st=1737372802~exp=1737376402~hmac=19d881267372e09f6feb36bfa0ee98f69026e761b19eb97069c65791c6a4e7ef&w=996',
        description: 'In uncertain times, having the right coverage in place ensures your business is shielded from the impact of political unrest and terrorism. At Acentria, we help our clients identify the exposures to such risks and provide tailored reinsurance solutions that offer protection against a wide range of threats, including war, civil commotion, insurrection, and terrorist attacks.'
    },
    {
        name: 'Marine Insurance',
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
        name: 'Energy',
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
        name: 'Aviation',
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
        name: 'Casualty and Liability Insurance',
        items: [
            '• Professional Indemnity',
            '• Public & Products Liability',
            '• Employers Liability',
            '• Trustee Liability',
            '• Directors and Officers Liability',
            '• Product Recall',
            '• Environmental Liability'
        ],
        img: '/img/REINSURANCE FACULTATIVE casuality & Liability.jpg',
        description: 'Casualty and liability insurance provides essential protection for businesses against third-party claims arising from injuries, property damage, or legal liabilities. This class of insurance covers a wide range of exposures, including general liability, employer’s liability, product liability, professional liability, and environmental liability.'
    },
    {
        name: 'Property and Engineering Insurance',
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
        name: 'Life Insurance',
        items: [
            '• Individual Life',
            '• Group Life',
            '• Group Credit & Mortgage',
            '• Keyman Insurance'
        ],
        img: '/img/REINSURANCE FACULTATIVE LIFE.jpg',
        description: 'Life insurance plays a pivotal role in providing financial security and peace of mind to individuals and families. As a reinsurance broker, we specialize in supporting life insurers by designing reinsurance solutions that help them manage risks, improve capital efficiency, and ensure long-term sustainability. From traditional life insurance to innovative products like critical illness and annuities, our tailored programs address the evolving needs of the life insurance market.'
    }
]);

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="container">
                <h1 class="my-5 heading-class text-left">
                    Simplifying Reinsurance <br> <span class="text-brand-primary"> for the Most Complex Risks
                    </span>
                </h1>
                <p
                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                    Unlock customized risk management with our expert Facultative Solutions. By addressing specific
                    risks on an individual basis, we provide tailored reinsurance agreements that align perfectly with
                    your unique needs. Our flexible and precise approach ensures that even the most complex risks are
                    managed effectively, enhancing your financial stability and operational efficiency.

                    Experience the power of bespoke reinsurance strategies and gain a competitive edge in the
                    ever-evolving insurance landscape with our Facultative Solutions.
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="bg-white font-sans py-10">
            <div class="container mx-auto max-w-6xl px-4 py-0">
                <h2 class="text-2xl font-semibold text-black text-left mb-5">
                    Solutions <span class="text-brand-primary">Overview</span>
                </h2>
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="product in specials" :key="product.id" @click="setLineData(product)"
                        class="button-animation group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                            <NuxtImg :src="product.img" :alt="product.img"
                                class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <div class=" mt-4 flex flex-col items-center justify-between subheading-class text-black">
                            <h3 class="text-xs">{{ product.name }}</h3>
                            <p class="text-xs italic mt-3">
                                Learn More <i class="ml-2 fas fa-arrow-right text-brand-primary"></i>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="container mx-auto py-5">
            <h2 class="text-2xl !font-semibold text-black pb-5">
                Why <span class="text-brand-primary"> Choose Us</span>
            </h2>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Extensive Experience
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        A history of successfully managing facultative reinsurance for diverse
                        clients.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Professional Expertise
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        A team of highly skilled professionals with deep industry insights.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <h2 class="text-center text-lg font-semibold text-gray-900">
                        Client-Focused Approach
                    </h2>
                    <p class="text-center mt-2 text-sm leading-relaxed text-gray-700">
                        Solutions tailored to your specific needs and objectives.
                    </p>
                </div>
            </div>
        </div>

        <!-- <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Looking to optimize your facultative reinsurance strategy?
                    <NuxtLink to="/contact-acentria-group" class="font-semibold italic underline">Contact us today
                    </NuxtLink>
                    to learn more about our
                    services and how we can help you achieve your reinsurance goals.
                </p>
            </div>
        </div> -->

        <ContactForm />
    </div>



</template>
