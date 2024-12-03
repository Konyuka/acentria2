<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Specialized Services',
    subTitle: 'Special Lines Of Business',
    image: 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Special Lines Of Business',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Acentia excels in providing specialized reinsurance solutions for a wide range of unique and challenging lines of business. Our commitment to understanding the complexities of niche industries and emerging risks sets us apart as a leader in the reinsurance sector. With a dedicated team of experts and underwriters, Acentria is well-equipped to address the complex requirements of special lines of business, such as aviation, space, energy, cyber liability, terrorism, art and collectibles, and specialty liability coverage like directors and officers (D&O) insurance.',
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
        img:'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
        img: 'https://images.pexels.com/photos/2698473/pexels-photo-2698473.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        img:'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
        img: 'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
        img: 'https://images.pexels.com/photos/208189/pexels-photo-208189.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Life insurance plays a pivotal role in providing financial security and peace of mind to individuals and families. As a reinsurance broker, we specialize in supporting life insurers by designing reinsurance solutions that help them manage risks, improve capital efficiency, and ensure long-term sustainability. From traditional life insurance to innovative products like critical illness and annuities, our tailored programs address the evolving needs of the life insurance market.'
    }
]);

const openPopover = ref(false)
const lineData = ref(null)

const setLineData = (line) => {
    lineData.value = line
    openPopover.value = true
}
</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="bg-white font-sans">
            <div class="container mx-auto max-w-6xl px-4 py-0">
                <h2 class="text-2xl font-semibold text-black text-left mb-5">
                    Reinsurance <span class="text-brand-primary">Lines</span>
                </h2>
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="product in specials" :key="product.id" @click="setLineData(product)"
                        class="button-animation group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                            <img :src="product.img" :alt="product.img"
                                class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <div class=" mt-4 flex flex-col items-center justify-between subheading-class text-black">
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

        <ReinsuranceWhy />
        <ContactForm />

        <div v-if="openPopover" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
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
                                            Product Details
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button @click="openPopover = false" type="button"
                                                class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                                <span class="absolute -inset-2.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true" data-slot="icon">
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
                                                <!-- Profile header -->
                                                <div>
                                                    <div>
                                                        <div class=" w-full bg-cover bg-center bg-no-repeat bg-gray-600 mb-0 -mt-3 sticky top-[22vh] -z-20"
                                                            style="background-image:url('/img/bg.png');">
                                                            <div class="container">
                                                                <div
                                                                    class="flex items-center bg-cover px-4 py-1 text-center md:py-7 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                                                                    <div
                                                                        class="min-h-[20vh] flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                            <div class="flex">
                                                                <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                    :src="lineData.img" alt="">
                                                                <div class="mt-14 sm:ml-6 sm:flex-1">
                                                                    <div>
                                                                        <div class="flex items-center">
                                                                            <h3 id=""
                                                                                class="text-xl pb-2 md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight text-black font-bold">
                                                                                {{ lineData.name }}
                                                                            </h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="mt-2 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                                <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                                    <h1
                                                                        class="truncate text-2xl font-bold text-black">
                                                                        check
                                                                        {{ lineData.description }}
                                                                    </h1>
                                                                </div>
                                                                <div
                                                                    class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <!-- Description list -->
                                                <div class="mt-5 font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                        <div class="sm:col-span-2">
                                                            <dt class="text-xl font-semibold text-black">About <span class="text-brand-primary">{{ lineData.name }}</span></dt>
                                                            <dd class="mt-2 max-w-full text-[14px] leading-normal text-gray-900">
                                                                <p>
                                                                    {{ lineData.description }}
                                                                </p>

                                                            </dd>
                                                        </div>
                                                        <div class="sm:col-span-2">
                                                            <dt class="text-xl font-semibold text-black">Our Areas <span class="text-brand-primary">of Expertise</span></dt>
                                                            <dd class="mt-2 max-w-full text-[14px] leading-normal text-gray-900">

                                                                <div class="grid grid-cols-2 gap-4">
                                                                    <p v-for="item in lineData.items">
                                                                        {{ item }}
                                                                    </p>
                                                                </div>

                                                            </dd>
                                                        </div>
                                                    </dl>
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



</template>
