<template>
    <Popover class="isolate z-50 shadow-3xl w-32">
        <div class="bg-white py-2 justify-center flex">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <PopoverButton @click="openFlyover(theMenu.name)"
                    :class="[currentMenu === theMenu.name ? 'text-brand-primary' : 'text-black']"
                    class="ring-0 inline-flex items-center gap-x-1 text-sm font-semibold duration-700 hover:font-bold leading-6 hover:text-brand-primary">
                    <i :class="theMenu.icon" class="mr-2 text-brand-primary"></i> {{ theMenu.name }}
                    <!-- <ChevronDownIcon class="h-5 w-5" aria-hidden="true" /> -->
                </PopoverButton>
            </div>
        </div>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-1" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">

            <!-- <PopoverPanel
                class=" w-screen absolute inset-x-0 top-0 -z-20 bg-white pt-8 shadow-lg ring-1 border-1 ring-gray-900/5">
                <div
                    class="my-5 z-50 bg-white mx-auto grid grid-cols-1 px-5 py-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 gap-8">
                    <div v-for="item in currentMenuItems" :key="item.name" @click="setSubmenu(item)"
                        :class="[currentSubmenu === item.name ? 'bg-gray-200 scale-105' : 'bg-gray-100']"
                        class="relative hover:cursor-pointer hover:scale-105 duration-700 ease-in-out transform transition group mx-3 flex gap-6 rounded-sm text-sm leading-6 hover:bg-gray-200 sm:flex-col sm:py-5 px-3">
                        <div
                            class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <i 
                                :class="[item.icon, currentSubmenu === item.name ? 'text-brand-primary' : 'text-black']"
                                class=" group-hover:text-brand-primary text-xl"></i>
                        </div>
                        <div>
                            <a :href="item.href"
                                :class="[currentSubmenu === item.name ? 'text-brand-primary' : 'text-black']"
                                class="font-bold  text-md">
                                {{ item.name }}
                                <span class="absolute inset-0" />
                            </a>
                        </div>
                        <div 
                        v-if="currentSubmenu === item.name"
                        class="absolute -bottom-4 ml-5 bg-gray-200 h-14 w-3 -mb-10">
                        </div>
                    </div>
                </div>

                <div v-if="currentSubmenuItems !== null" class="bg-gray-200">
                    <div class="mx-auto max-w-full">
                        <div
                            class="z-50 bg-gray-200 mx-auto grid grid-cols-1 gap-4 px-5 py-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
                            <NuxtLink :to="item.link" v-for="item in currentSubmenuItems" :key="item.name"
                                class="bg-gray-100 button-animation group relative mx-2 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 sm:flex-col sm:p-6">


                                <div>
                                    <a :href="item.href" class="font-bold text-brand-primary text-xs">
                                        {{ item.name }}
                                        <span class="absolute inset-0" />
                                    </a>
                                    <p class="mt-1 text-black text-xs">{{ item.description }}</p>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>

                </div>

                <div class="bg-gray-50">
                    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div
                            class="grid grid-cols-3 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                            <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                                class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
                                <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </PopoverPanel> -->
            <PopoverPanel
                class=" w-screen absolute inset-x-0 top-0 -z-20 bg-white pt-8 shadow-lg ring-1 border-1 ring-gray-900/5">
                <div
                    class="my-5 z-50 bg-white mx-auto grid grid-cols-1 px-5 py-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 gap-8">

                    <template v-for="(item, index) in currentMenuItems" :key="item.name">
                        <!-- Individual Menu Item -->
                        <div @click="setSubmenu(item, index)"
                            :class="[currentSubmenu === item.name ? 'bg-gray-200 scale-105' : 'bg-gray-100']"
                            class="relative hover:cursor-pointer hover:scale-105 duration-700 ease-in-out transform transition group mx-3 flex gap-6 rounded-sm text-sm leading-6 hover:bg-gray-200 sm:flex-col sm:py-5 px-3">
                            <div
                                class="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <i :class="[item.icon, currentSubmenu === item.name ? 'text-brand-primary' : 'text-black']"
                                    class=" group-hover:text-brand-primary text-xl"></i>
                            </div>
                            <div>
                                <a :href="item.href"
                                    :class="[currentSubmenu === item.name ? 'text-brand-primary' : 'text-black']"
                                    class="font-bold  text-md">
                                    {{ item.name }}
                                    <span class="absolute inset-0" />
                                </a>
                            </div>
                            <div v-if="currentSubmenu === item.name"
                                class="absolute -bottom-4 ml-5 bg-gray-200 h-14 w-3 -mb-10">
                            </div>
                        </div>

                        <!-- Conditionally Insert Submenu Items Between Rows -->
                        <!-- Check if the index is at the end of a row (for lg:grid-cols-4), insert submenu row after it -->
                        <div v-if="(index + 1) % 4 === 0 && currentSubmenuItems !== null && selectedIndex <= index"
                            class="col-span-4 bg-gray-200">
                            <div class="mx-auto max-w-full">
                                <div
                                    class="z-50 bg-gray-200 mx-auto grid grid-cols-1 gap-4 px-5 py-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
                                    <NuxtLink :to="item.link" v-for="submenuItem in currentSubmenuItems"
                                        :key="submenuItem.name"
                                        class="bg-gray-100 button-animation group relative mx-2 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 sm:flex-col sm:p-6">
                                        <div>
                                            <a :href="submenuItem.href" class="font-bold text-brand-primary text-xs">
                                                {{ submenuItem.name }}
                                                <span class="absolute inset-0" />
                                            </a>
                                            <p class="mt-1 text-black text-xs">{{ submenuItem.description }}</p>
                                        </div>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <div class="bg-gray-50">
                    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div
                            class="grid grid-cols-3 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                            <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                                class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
                                <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </PopoverPanel>


        </transition>
    </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/vue/20/solid'
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    theMenu: String,
    // callsToAction: Array,
})

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers with our engagement tool',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: FingerPrintIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using",
        href: '#',
        icon: SquaresPlusIcon,
    },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
    { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

const currentMenu = ref(null)
const currentMenuItems = ref(null)
const currentSubmenu = ref(null)
const currentSubmenuItems = ref(null)

const AboutMenus = ref([
    {
        name: 'About Us',
        icon: 'fas fa-info-circle',
        items: [
            {
                name: 'Who we are',
                description: 'Learn about our history, mission, and the values that drive us.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'What we do',
                description: 'Discover the range of services and solutions we offer to our clients.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'Our Journey',
                description: 'Explore our journey from inception to becoming a market leader.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'Our vision, Mission & Values',
                description: 'Understand our vision, mission, and the core values that guide our actions.',
                link: '/about-us/who-we-are',
            },
        ]
    },
    {
        name: 'Leadership',
        icon: 'fas fa-user-tie',
        items: [
            {
                name: 'My Health',
                description: 'Comprehensive health coverage tailored to your needs, ensuring peace of mind and access to quality healthcare services.',
                link: '/insurance/health-insurance',
            },
            {
                name: 'My Life',
                description: 'Secure your family\'s future with our flexible life insurance plans, providing financial stability and peace of mind.',
                link: '/insurance/life-insurance',
            },
            {
                name: 'My Home',
                description: 'Protect your home and belongings with our comprehensive home insurance plans, offering peace of mind and financial security.',
                link: '/insurance/home-insurance',
            },
            {
                name: 'My Car',
                description: 'Drive with confidence knowing your vehicle is protected with our comprehensive car insurance plans.',
                link: '/insurance/motor-insurance',
            },
            {
                name: 'My Travel',
                description: 'Explore the world worry-free with our travel insurance, offering coverage for unexpected events and emergencies.',
                link: '/insurance/travel-insurance',
            },
        ]
    },
    {
        name: 'Our Commitment',
        icon: 'fas fa-handshake',
        items: [
            {
                name: 'Our Customers',
                description: 'Our dedication to providing exceptional service to our customers.',
                link: '/about-us/our-customers',
            },
            {
                name: 'Our Partners',
                description: 'Building strong and lasting relationships with our partners.',
                link: '/about-us/our-partners',
            },
            {
                name: 'Our Staff',
                description: 'Investing in our staff to foster growth and development.',
                link: '/about-us/our-staff',
            },
            {
                name: 'Our communities',
                description: 'Contributing positively to the communities we serve.',
                link: '/about-us/our-communities',
            },
        ]
    },
    {
        name: 'Our Lines of Business',
        icon: 'fas fa-briefcase',
        items: [
            {
                name: 'Insurance',
                description: 'Providing comprehensive insurance solutions to protect your assets.',
                link: '/acentria-group-insurance',
            },
            {
                name: 'Reinsurance',
                description: 'Offering reinsurance services to help manage risk effectively.',
                link: '/acentria-group-reinsurance',
            },
            {
                name: 'Actuarial & Finance services',
                description: 'Delivering expert actuarial and financial consulting services.',
                link: '/acentria-group-actuarial',
            },
            {
                name: 'Technology',
                description: 'Innovating with cutting-edge technology solutions for various industries.',
                link: '/acentria-group-insurance',
            },
        ]
    },
    {
        name: 'Corporate Governance',
        icon: 'fas fa-gavel',
        items: [
            {
                name: 'How we work',
                description: 'Learn about our corporate governance practices and ethical standards.',
                link: '/corporate-governance',
            },
            {
                name: 'Our risk Management',
                description: 'Understand our approach to risk management and mitigation.',
                link: '/corporate-governance',
            },
            {
                name: 'Customer feedback & dispute resolution',
                description: 'See how we handle customer feedback and resolve disputes.',
                link: '/corporate-governance',
            },
            {
                name: 'Complaint',
                description: 'Learn about our complaint handling process and how to file a complaint.',
                link: '/corporate-governance',
            },
            {
                name: 'Data Privacy',
                description: 'Read about our commitment to data privacy and protection.',
                link: '/corporate-governance',
            },
        ]
    },
    {
        name: 'Sustainability',
        icon: 'fas fa-leaf',
        items: [
            {
                name: 'Our purpose',
                description: 'Our commitment to sustainability and responsible business practices.',
                link: '/esg',
            },
            {
                name: 'Goals & commitments',
                description: 'Our sustainability goals and the commitments we have made.',
                link: '/esg',
            },
            {
                name: 'Commitments',
                description: 'Detailed information about our sustainability commitments.',
                link: '/esg',
            },
            {
                name: 'Sustainability policies',
                description: 'Our policies and guidelines for sustainable business operations.',
                link: '/esg',
            },
        ]
    },
    {
        name: 'Join Us',
        icon: 'fas fa-users',
        items: [
            {
                name: 'New customer',
                description: 'Join us as a new customer and experience our exceptional services.',
                link: '/contact-acentria-group',
            },
            {
                name: 'Suppliers',
                description: 'Partner with us as a supplier and grow your business.',
                link: '/contact-acentria-group',
            },
            {
                name: 'Careers',
                description: 'Explore career opportunities and join our dynamic team.',
                link: '/acentria-group-careers',
            },
        ]
    },
])

const InsuranceMenus = ref([
    {
        name: 'Personal Cover',
        icon: 'fas fa-user',
        items: [
            {
                name: 'My Health',
                description: 'Comprehensive health coverage tailored to your needs, ensuring peace of mind and access to quality healthcare services.',
                link: '/insurance/health-insurance',
            },
            {
                name: 'My Life',
                description: 'Secure your family\'s future with our flexible life insurance plans, providing financial stability and peace of mind.',
                link: '/insurance/life-insurance',
            },
            {
                name: 'My Home',
                description: 'Protect your home and belongings with our comprehensive home insurance plans, offering peace of mind and financial security.',
                link: '/insurance/home-insurance',
            },
            {
                name: 'My Car',
                description: 'Drive with confidence knowing your vehicle is protected with our comprehensive car insurance plans.',
                link: '/insurance/motor-insurance',
            },
            {
                name: 'My Travel',
                description: 'Explore the world worry-free with our travel insurance, offering coverage for unexpected events and emergencies.',
                link: '/insurance/travel-insurance',
            },
        ]
    },
    {
        name: 'Corporate Cover',
        icon: 'fas fa-building',
        items: [
            {
                name: 'Staff Health Cover',
                description: 'Ensure the well-being of your employees with our comprehensive health cover, providing access to quality healthcare services.',
                link: '/insurance/staff-health-cover',
            },
            {
                name: 'Staff Travel Cover',
                description: 'Protect your staff during business trips with our travel cover, offering coverage for unexpected events and emergencies.',
                link: '/insurance/staff-travel-cover',
            },
            {
                name: 'Office Content Cover',
                description: 'Safeguard your office assets with our office content cover, providing protection against damage or loss.',
                link: '/insurance/office-content-cover',
            },
            {
                name: 'Cyber Liability Cover',
                description: 'Protect your business from cyber threats with our cyber liability cover, offering financial protection against data breaches and cyber attacks.',
                link: '/insurance/cyber-liability-cover',
            },
            {
                name: 'Credit Risk Cover',
                description: 'Mitigate financial risks with our credit risk cover, ensuring your business is protected against customer defaults and insolvencies.',
                link: '/insurance/credit-risk-cover',
            },
        ]
    },
    {
        name: 'Business Cover',
        icon: 'fas fa-money-bill-wave',
        items: [
            {
                name: 'Biashara Cover',
                description: 'Comprehensive business insurance solutions tailored to protect your enterprise from various risks and uncertainties.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'General Liability Insurance',
                description: 'Shield your business from legal claims with our general liability insurance, covering bodily injury, property damage, and more.',
                link: '/insurance/general-liability-insurance',
            },
            {
                name: 'Product Liability Insurance',
                description: 'Protect your business against claims related to product defects with our product liability insurance, ensuring financial security.',
                link: '/insurance/product-liability-insurance',
            },
            {
                name: 'Commercial Property Insurance',
                description: 'Safeguard your commercial property with our insurance plans, offering coverage against damage, theft, and other risks.',
                link: '/insurance/commercial-property-insurance',
            },
            {
                name: 'Crops and Livestock',
                description: 'Ensure the protection of your agricultural investments with our crops and livestock insurance, covering a range of farming risks.',
                link: '/insurance/crops-and-livestock',
            },
        ]
    },
    {
        name: 'Industrial, Manufacturing & Eng.',
        icon: 'fas fa-industry',
        items: [
            {
                name: 'Industrial all risk cover',
                description: 'Comprehensive coverage for all industrial risks, ensuring your business operations are protected.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Public Liability',
                description: 'Protection against claims of personal injury or property damage caused by your business activities.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Personal accident',
                description: 'Coverage for accidents that occur to your staff during the course of their employment.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Work Benefit Injury Act (WIBA)',
                description: 'Compliance with the Work Injury Benefits Act, providing compensation for work-related injuries.',
                link: '/insurance/biasahara-cover',
            },
        ]
    },
    {
        name: 'Contractors & Developers',
        icon: 'fas fa-hard-hat',
        items: [
            {
                name: 'Contractors all Risk',
                description: 'Comprehensive insurance for contractors, covering a wide range of risks associated with construction projects.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Public Liability',
                description: 'Protection against legal liabilities arising from third-party injuries or property damage.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Personal accident',
                description: 'Insurance coverage for personal accidents that may occur to your staff on the job.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Work Benefit Injury Act (WIBA)',
                description: 'Ensuring compliance with WIBA, providing benefits for work-related injuries to your staff.',
                link: '/insurance/biasahara-cover',
            },
        ]
    },
    {
        name: 'Career / Professional covers',
        icon: 'fas fa-user-tie',
        items: [
            {
                name: 'Doctors Professional Indemnity',
                description: 'Protection for medical professionals against claims of malpractice or professional negligence.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Lawyers Professional Indemnity',
                description: 'Coverage for legal professionals against claims of errors, omissions, or negligence in their practice.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Pilots Professional Indemnity',
                description: 'Insurance for pilots, covering liabilities arising from professional errors or negligence.',
                link: '/insurance/biasahara-cover',
            },
        ]
    },
    {
        name: 'Schools & Institutions covers',
        icon: 'fas fa-school',
        items: [
            {
                name: 'Student attachment',
                description: 'Insurance coverage for students during their attachment or internship programs.',
                link: '/insurance/biasahara-cover',
            }
        ]
    },
    {
        name: 'Agriculture Insurance',
        icon: 'fas fa-tractor',
        items: [
            {
                name: 'Agro insurance',
                description: 'Comprehensive coverage for agricultural activities, protecting against a variety of risks.',
                link: '/insurance/biasahara-cover',
            },
        ]
    },
    {
        name: 'Claims ',
        icon: 'fas fa-file-invoice-dollar',
        items: [
            {
                name: 'Claims Overview',
                description: 'Get a comprehensive overview of the claims process, including what to expect and how to get started.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Claims Process',
                description: 'Learn about the step-by-step process for filing a claim and what documentation is required.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Claims FAQ',
                description: 'Find answers to frequently asked questions about the claims process and how to resolve common issues.',
                link: '/insurance/biasahara-cover',
            },
        ]
    }
])

const ReinsuranceMenus = ref([
   {
        name: 'Reinsurance Services',
        icon: 'fas fa-sync-alt',
        items: [
            {
                name: 'Reinsurance Optimization',
                description: 'Maximize your reinsurance efficiency with our optimization services, tailored to enhance your risk management strategies.',
                link: '/reinsurance/reinsurance-optimization',
            },
            {
                name: 'Treaty Administration',
                description: 'Streamline your reinsurance agreements with our comprehensive treaty administration services, ensuring smooth operations.',
                link: '/reinsurance/treaty-administration',
            },
            {
                name: 'Claims Management',
                description: 'Efficiently handle reinsurance claims with our expert management services, providing timely and accurate claim resolutions.',
                link: '/reinsurance/claims-management',
            },
            {
                name: 'Value Addition',
                description: 'Enhance your reinsurance portfolio with our value addition services, offering innovative solutions and expert insights.',
                link: '/reinsurance/value-addition',
            },
        ]
   }, 
   {
        name: 'Reinsurance Solutions',
       icon: 'fas fa-cogs',
        items: [
            {
                name: 'Facultative Solutions',
                description: 'Access tailored reinsurance coverage with our facultative solutions, designed to meet specific risk requirements.',
                link: '/reinsurance/facultative-solution',
            },
            {
                name: 'Treaty Solutions',
                description: 'Secure comprehensive reinsurance protection with our treaty solutions, offering stability and financial security.',
                link: '/reinsurance/treaty-solutions',
            },
            {
                name: 'Special Lines Solutions',
                description: 'Protect unique and high-risk exposures with our special lines solutions, providing specialized reinsurance coverage.',
                link: '/reinsurance/special-lines',
            },
        ]
   }, 
   {
        name: 'Data & Modelling',
       icon: 'fas fa-database',
        items: [
            {
                name: 'Reinsurance Data Analytics Tool',
                description: 'Leverage data-driven insights with our reinsurance data analytics tool, enhancing decision-making and risk assessment.',
                link: '/reinsurance/reinsurance-data-analytics-tool',
            },
            {
                name: 'Acentre Reinsurance Solution',
                description: 'Optimize your reinsurance strategy with Acentre\'s comprehensive solutions, designed for maximum efficiency and effectiveness.',
                link: '/reinsurance/acentre-reinsurance-solution',
            },
            {
                name: 'Catastrophic Modelling',
                description: 'Prepare for extreme events with our catastrophic modelling services, providing accurate risk assessments and mitigation strategies.',
                link: '/reinsurance/catastrophic-modelling',
            },
            {
                name: 'Return On Risk Adjusted Capital',
                description: 'Maximize your financial performance with our return on risk-adjusted capital services, ensuring optimal capital allocation.',
                link: '/reinsurance/return-on-risk-adjusted-capital',
            },
        ]
   }, 
])

const ActuarialMenus = ref([
    {
        name: 'Actuarial Consulting',
        icon: 'fas fa-chart-line',
        items: [
            {
                name: 'Financial Services',
                description: 'Enhance your financial strategies with our expert actuarial services, providing insights and solutions for optimal financial management.',
                link: '/actuarial/financial-services',
            },
            {
                name: 'Insurance Consulting',
                description: 'Optimize your insurance operations with our consulting services, offering expert advice and innovative solutions.',
                link: '/actuarial/insurance-consulting',
            },
            {
                name: 'Reinsurance Consulting',
                description: 'Strengthen your reinsurance strategies with our consulting services, providing tailored solutions and expert insights.',
                link: '/actuarial/reinsurance-consulting',
            },
        ]
    },
    {
        name: 'Actuarial Services',
        icon: 'fas fa-calculator',
        items: [
            {
                name: 'IFRS17 Implementation',
                description: 'Ensure compliance with IFRS 17 standards with our implementation services, offering expert guidance and support.',
                link: '/actuarial/ifrs-17-implementation',
            },
            {
                name: 'Innovation and Digitization',
                description: 'Transform your business with our innovation and digitization services, leveraging cutting-edge technology and expertise.',
                link: '/actuarial/innovation-and-digitization',
            },
            {
                name: 'Retirement and Employee Benefits',
                description: 'Optimize your retirement and employee benefits programs with our actuarial services, ensuring financial security and employee satisfaction.',
                link: '/actuarial/retirement-and-employee-benefits',
            },
        ]
    },
    {
        name: 'Actuarial Products',
        icon: 'fas fa-box',
        items: [
            {
                name: 'AcentRe',
                description: 'Optimize your reinsurance strategy with AcentRe\'s comprehensive solutions, designed for maximum efficiency and effectiveness.',
                link: '/reinsurance/acentre-reinsurance-solution',
            },
            {
                name: 'Data Analytics Tool',
                description: 'Leverage data-driven insights with our data analysis tool, enhancing decision-making and risk assessment.',
                link: '/reinsurance/reinsurance-data-analytics-tool',
            },
        ]
    },
])

const selectedIndex = ref(null)

const openFlyover = (menu) => {
    if (currentMenu.value === menu) {
        currentMenu.value = null
        return
    } else {
        currentMenu.value = menu
        if (currentMenu.value === 'About') {
            currentMenuItems.value = AboutMenus.value
        }
        if (currentMenu.value === 'Insurance') {
            currentMenuItems.value = InsuranceMenus.value
        }
        if (currentMenu.value === 'Reinsurance') {
            currentMenuItems.value = ReinsuranceMenus.value
        }
        if (currentMenu.value === 'Actuarial') {
            currentMenuItems.value = ActuarialMenus.value
        }

    }
}

const setSubmenu = (menu, index) => {

    if(currentSubmenu.value === menu.name){
        currentSubmenu.value = null
        currentSubmenuItems.value = null
        selectedIndex.value = null
        return

    }
    currentSubmenu.value = menu.name
    currentSubmenuItems.value = menu.items
    selectedIndex.value = index;
    if(menu.name === 'Personal Cover'){
        currentSubmenuItems.value = currentMenuItems.value[0].items
    }
}

</script>