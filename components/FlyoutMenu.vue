<template>
    <Popover class="isolate z-50 shadow-3xl w-auto font-sans bg-transparent">
        <div class="justify-center">
            <div class="">
                <PopoverButton @click="openFlyover(theMenu.name)"
                    :class="[currentMenu === theMenu.name ? 'text-brand-primary border-b-red-600 border-b-4' : 'text-black']"
                    class="pr-2 hover:border-b-red-600 hover:border-b-4 py-1 subheading-class !text-[15.5px] !ring-0 focus inline-flex items-center gap-x-1 font-semibold duration-200 hover:text-brand-primary">
                    {{ theMenu.name }}
                </PopoverButton>
            </div>
        </div>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-0"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-0">


            <PopoverPanel v-if="activeClick"
                class="!-left-[18vw] w-[87vw] h-20 mt-[67px] mx-auto absolute inset-x-0 top-0 -z-20 bg-white shadow-2xl">

                <!-- <div @click="closeFlyOver()" class="-z-50 fixed inset-0 bg-black/15 transition-opacity"
                    aria-hidden="true"></div> -->

                <div class="relative">
                    <img src="https://img.freepik.com/free-vector/paper-style-white-monochrome-background_52683-66443.jpg?t=st=1731668657~exp=1731672257~hmac=076a7a4e668df8f1f10457e768ab3c441439e1709b43343e2a4671bf79b786d2&w=740"
                        alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />

                    <div class="absolute inset-0 bg-white opacity-75 -z-10"></div>

                    <div class="h-10  justify-center content-center mt-0">
                        <div class="ml-10 flex text-lg font-semibold subheading-class text-black">
                            <div>
                                {{ flyoverHeader }}
                            </div>
                            <div class="ml-[30vw] text-brand-primary col-span-1 text-[16px]">
                                <i class="fas fa-award mr-2"></i> <span class="text-black">Get discounts</span>
                                upto
                                3%
                            </div>
                        </div>
                    </div>

                    <div class="h-auto ">
                        <div class="grid grid-cols-3 h-full">
                            <div class="col-span-1 relative">
                                <div class="relative pl-16 py-5 flex flex-col gap-3">
                                    <div v-for="(item, index) in currentMenuItems">
                                        <p @click="setSubmenu(item, index)"
                                            :class="[currentSubmenu === item.name ? 'text-brand-primary' : '']"
                                            class="group hover:cursor-pointer hover:text-brand-primary font-semibold text-md">
                                            <i :class="item.icon" class="mr-2"></i>
                                            {{ item.name }}
                                            <i
                                                class="absolute right-4 group-hover:text-brand-primary ml-8 fas fa-caret-right"></i>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                </div>
                                <div class="absolute px-8 font-bold bottom-3">
                                    <p class="text-[12px] mb-1">
                                        We propel prosperity to infinite possibilities.
                                    </p>
                                    <div class="grid grid-cols-3 gap-1">
                                        <div><span class="text-brand-primary text-[13px]">#</span> Empower <div
                                                class="w-20 bg-black/10 h-1"></div>
                                        </div>
                                        <div class="text-brand-primary"><span
                                                class="text-brand-primary text-[13px]">#</span>
                                            Innovate
                                            <div class="w-20 bg-black/10 h-1"></div>
                                        </div>
                                        <div><span class="text-brand-primary text-[13px]">#</span> Prosper <div
                                                class="w-20 bg-black/10 h-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-2 ml-4">
                                <div class="py-5 grid grid-cols-3 gap-2 max-w-full px-2">

                                    <div class="flex flex-col gap-4 border-r-4 border-red-600 h-56">
                                        <NuxtLink :to="submenuItem.link" v-for="submenuItem in currentSubmenuItems"
                                            :key="submenuItem.name"
                                            class="group hover:underline hover:cursor-pointer hover:text-brand-primary font-semibold text-[13.2px]">
                                            {{ submenuItem.name }}
                                        </NuxtLink>
                                    </div>

                                    <div class="flex flex-col gap-3 mx-3">
                                        <h2 class="text-md font-semibold">{{ currentMenuSubtitle }}</h2>
                                        <p class="text-[13px] leading-normal">
                                            {{ currentMenuDescription }}
                                        </p>
                                    </div>

                                    <div>
                                        <div class="w-auto dark:border-gray-700">
                                            <div class="w-full rounded h-40">
                                                <img src="/img/call.jpg" alt="Display picture of Silene Tokyo"
                                                    role="img"
                                                    class="object-cover h-full w-full overflow-hidden rounded shadow">
                                            </div>
                                            <div class="flex w-full items-center justify-between pt-6 pb-1">
                                                <p class="text-xl font-normal text-gray-800 dark:text-white ">
                                                    <button
                                                        class="button-animation hover:bg-brand-primary px-3 py-0.5 bg-black text-white text-[10px]">
                                                        Compare Quotes Instantly
                                                    </button>
                                                </p>
                                                <div class="flex justify-center">
                                                    <a aria-label="Open github" role="link" href="javascript:void(0)"
                                                        class="button-animation mx-2">
                                                        <i class="fas fa-paper-plane"></i>
                                                    </a>
                                                    <a aria-label="Open github" role="link" href="javascript:void(0)"
                                                        class="button-animation mx-2">
                                                        <i class="fas fa-mobile-alt"></i>
                                                    </a>

                                                </div>
                                            </div>
                                            <p class="mt-2 text-[12px] text-gray-600 leading-4">
                                                Do it yourself or let us help you <br> <span
                                                    class="text-brand-primary underline underline-offset-2">Get a quote
                                                    now!</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div class="h-10 grid grid-cols-3 gap-2 font-bold">
                                    <div></div>
                                    <!-- <div class="text-brand-primary col-span-1 text-[16px]">
                                        <i class="fas fa-award mr-2"></i> <span class="text-black">Get discounts</span>
                                        upto
                                        3%
                                    </div> -->

                                    <div>
                                        <button
                                            class="button-animation !hover:bg-brand-primary px-3 py-1 bg-black/15 text-black text-[10px]">
                                            Download our App on <i class="fab fa-google-play text-brand-primary"></i> &
                                            <i class="fab fa-apple text-brand-primary"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div class="flex px-10">
                            <!-- <div>

                            </div> -->
                            <div class="flex col-span-2 w-full justify-between !pr-5">
                                <NuxtLink v-for="item in footerOptions" :key="item.name" :to="item.link"
                                    class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-xs font-semibold leading-normal text-black sm:justify-center sm:px-0">
                                    <i :class="item.icon" class="flex-none group-hover:text-black text-brand-primary" />
                                    {{ item.name }} <i class="fas fa-arrow-right"></i>
                                </NuxtLink>

                            </div>
                        </div>
                    </div>
                </div>


            </PopoverPanel>


        </transition>
    </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const props = defineProps({
    theMenu: String,
})

const currentMenu = ref(null)
const currentMenuItems = ref(null)
const currentSubmenu = ref(null)
const currentMenuSubtitle = ref(null)
const currentMenuDescription = ref(null)
const currentSubmenuItems = ref(null)
const footerOptions = ref(null)
const flyoverHeader = ref(null)

const aboutFooterMenus = ref([
    {
        name: 'About Acentria Group',
        icon: 'fas fa-info-circle',
        link: '/',
    },
    {
        name: 'News & Updates',
        icon: 'fas fa-newspaper',
        link: '/acentria-news-and-blogs',
    },
    {
        name: 'Contact Us',
        icon: 'fas fa-envelope',
        link: 'contact-acentria-group',
    },
]);
const insuranceFooterMenus = ref([
    {
        name: 'Insurance Home Page',
        icon: 'fas fa-home',
        link: '/acentria-group-insurance',
    },
    {
        name: 'Renew your Policy',
        icon: 'fas fa-redo',
        link: '/contact-acentria-group',
    },
    {
        name: 'Report a Claim',
        icon: 'fas fa-file-alt',
        link: '/contact-acentria-group',
    },
]);
const reinsuranceFooterMenus = ref([
    {
        name: 'Reinsurance Home Page',
        icon: 'fas fa-home',
        link: '/acentria-group-reinsurance',
    },
    {
        name: 'Renew your Policy',
        icon: 'fas fa-redo',
        link: '/contact-acentria-group',
    },
    {
        name: 'Report a Claim',
        icon: 'fas fa-file-alt',
        link: '/contact-acentria-group',
    },
]);
const actuarialFooterMenus = ref([
    {
        name: 'Actuarial Home Page',
        icon: 'fas fa-home',
        link: '/acentria-group-actuarial',
    },
    {
        name: 'Book a Product Demo',
        icon: 'fas fa-calendar-alt',
        link: '/contact-acentria-group',
    },
    {
        name: 'Book a Consultation',
        icon: 'fas fa-calendar-check',
        link: '/contact-acentria-group',
    },
]);

const AboutMenus = ref([
    {
        name: 'About Us',
        subMenu: 'About Acentria',
        description: 'At Acentria Group, we propel prosperity to infinite possibilities.',
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
            {
                name: 'Corporate Culture',
                description: 'Understand our culture and the core values that guide our actions.',
                link: '/corporate-culture',
            },
            {
                name: 'Our Brand',
                description: 'Understand our culture and the core values that guide our actions.',
                link: '/our-brand',
            },
        ]
    },
    {
        name: 'Leadership & Governance',
        subMenu: 'Governance Structure',
        description: 'Meet the leaders who guide Acentria Group towards success.',
        icon: 'fas fa-user-tie',
        items: [
            {
                name: 'Our Governance',
                description: 'Discover our governance structure and meet the leaders who guide Acentria Group towards success.',
                link: '/meet-the-team',
            },
            {
                name: 'Board',
                description: 'Meet the members of our board of directors.',
                link: '/meet-the-team',
            },
            {
                name: 'Management Team',
                description: 'Learn about our experienced management team.',
                link: '/meet-the-team',
            },
        ]
    },
    {
        name: 'Our Commitment',
        subMenu: 'Commitment to Excellence',
        description: 'Our dedication to providing exceptional service and building strong relationships.',
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
        subMenu: 'Business Solutions',
        description: 'Explore the diverse range of business solutions we offer.',
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
        name: 'Sustainability',
        subMenu: 'Sustainable Practices',
        description: 'Our commitment to sustainability and responsible business practices.',
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
        subMenu: 'Get Involved',
        description: 'Join us and become a part of the Acentria Group family.',
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
        subMenu: 'Personal Insurance',
        description: 'Comprehensive personal insurance solutions tailored to your individual needs.',
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
        subMenu: 'Corporate Insurance',
        description: 'Tailored corporate insurance solutions to protect your business and employees.',
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
        subMenu: 'Business Insurance',
        description: 'Comprehensive business insurance solutions to protect your enterprise from various risks.',
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
        name: 'Industrial Covers',
        subMenu: 'Industrial Insurance',
        description: 'Comprehensive industrial insurance solutions to protect your business operations.',
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
        subMenu: 'Contractor Insurance',
        description: 'Comprehensive insurance solutions for contractors and developers.',
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
        name: 'Career & Profession',
        subMenu: 'Professional Insurance',
        description: 'Insurance solutions tailored for various professions to protect against professional risks.',
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
        name: 'Claims & Filing',
        subMenu: 'Claims Process',
        description: 'Information and guidance on the claims process and how to file a claim.',
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
        subMenu: 'Our Services',
        description: 'Explore our comprehensive reinsurance services designed to optimize your risk management strategies.',
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
        subMenu: 'Our Solutions',
        description: 'Discover our tailored reinsurance solutions designed to meet specific risk requirements and provide financial security.',
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
        subMenu: 'Data & Modelling',
        description: 'Leverage data-driven insights and advanced modelling techniques to enhance your reinsurance strategy.',
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
const activeClick = ref(false)
const router = useRouter()

const openFlyover = (menu) => {
    if (menu == 'Investment') {
        router.push('/acentria-group-investment');
        return;
    }
    if (menu == 'Technology') {
        window.open('https://tech.acentriagroup.com/', '_blank');
        return;
    }
    if (currentMenu.value === menu) {
        currentMenu.value = null
        return
    } else {
        activeClick.value = true
        currentMenu.value = menu
        if (currentMenu.value === 'About') {
            flyoverHeader.value = 'Acentria Group'
            currentMenuItems.value = AboutMenus.value
            currentSubmenu.value = 'About Us'
            currentSubmenuItems.value = currentMenuItems.value[0]?.items
            currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
            currentMenuDescription.value = currentMenuItems.value[0]?.description
            footerOptions.value = aboutFooterMenus.value
        }
        if (currentMenu.value === 'Insurance') {
            // router.push('/acentria-group-insurance');
            flyoverHeader.value = 'Insurance Solutions'
            currentMenuItems.value = InsuranceMenus.value
            currentSubmenu.value = 'Personal Cover'
            currentSubmenuItems.value = currentMenuItems.value[0]?.items
            currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
            currentMenuDescription.value = currentMenuItems.value[0]?.description
            footerOptions.value = insuranceFooterMenus.value
        }
        if (currentMenu.value === 'Reinsurance') {
            // router.push('/acentria-group-reinsurance');
            flyoverHeader.value = 'Reinsurance Solutions'
            currentMenuItems.value = ReinsuranceMenus.value
            currentSubmenu.value = 'Reinsurance Services'
            currentSubmenuItems.value = currentMenuItems.value[0]?.items
            currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
            currentMenuDescription.value = currentMenuItems.value[0]?.description
            footerOptions.value = reinsuranceFooterMenus.value
        }
        if (currentMenu.value === 'Actuarial') {
            // router.push('/acentria-group-actuarial');
            flyoverHeader.value = 'Actuarial Services'
            currentMenuItems.value = ActuarialMenus.value
            currentSubmenu.value = 'Actuarial Consulting'
            currentSubmenuItems.value = currentMenuItems.value[0]?.items
            currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
            currentMenuDescription.value = currentMenuItems.value[0]?.description
            footerOptions.value = actuarialFooterMenus.value
        }

    }
}

const closeFlyOver = () => {
    activeClick.value = false
    currentMenu.value = null
    currentMenuItems.value = null
    currentSubmenu.value = null
    currentSubmenuItems.value = null
    selectedIndex.value = null
    footerOptions.value = null
    currentMenuSubtitle.value = null
    currentMenuDescription.value = null
    footerOptions.value = null
    flyoverHeader.value = null
}
const currentRoute = computed(() => {
    const route = useRoute();
    return route.path;
})
watch(currentRoute, (newValue) => {
    if (newValue) {
        closeFlyOver()
    }
})

const setSubmenu = (menu, index) => {

    if (currentSubmenu.value === menu.name) {
        currentSubmenu.value = null
        currentSubmenuItems.value = null
        selectedIndex.value = null
        return

    }
    currentSubmenu.value = menu.name
    currentMenuSubtitle.value = menu.subMenu
    currentMenuDescription.value = menu.description
    currentSubmenuItems.value = menu.items
    selectedIndex.value = index;
    if (menu.name === 'Personal Cover') {
        currentSubmenuItems.value = currentMenuItems.value[0].items
    }
}

const shouldInsertSubmenu = (index) => {
    const isEndOfRow = (index + 1) % 5 === 0;
    const isLastItem = index + 1 === currentMenuItems.value?.length;
    const result = (isEndOfRow || isLastItem) && currentSubmenuItems.value?.length > 0 && selectedIndex.value <= index;

    if (result) {
        console.log('Index:', index)
        console.log('Selected Index:', selectedIndex.value)
        if (index <= 4 && selectedIndex.value < 4) {
            return true
        }
        if (index > 4 && selectedIndex.value > 4) {
            return true
        }
    }
};

</script>