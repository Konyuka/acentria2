<template>
    <Popover class="isolate z-50 shadow-3xl w-auto font-sans bg-transparent">

        <div class="justify-center">
            <div class="">
                <!-- <PopoverButton @click="openFlyover(theMenu.name)" -->
                <!-- @mouseleave="activeClick = false" -->
                <!-- @mouseleave="closeFlyOver()" -->
                <!-- @mouseenter="openFlyover(theMenu.name)" -->
                <NuxtLink :to="theMenu.link" @click="openFlyover(theMenu.name, 'click')" @mouseenter="openFlyover(theMenu.name, 'hover')"
                    @mouseleave="closeFlyOver()" :class="[
                        openMenu === theMenu.name ?
                            'text-brand-primary border-b-red-600 border-b-4' :
                            'text-black'
                    ]" class="pr-2 hover:border-b-red-600 hover:border-b-4 py-1 subheading-class 
             !text-[15.5px] !ring-0 focus inline-flex items-center gap-x-1 
             font-semibold duration-200 hover:text-brand-primary">
                    {{ theMenu.name }}
                </NuxtLink>
            </div>
        </div>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-0"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-0">

            <!-- @mouseenter="keepOpen(theMenu.name)" @mouseleave="closeFlyOver(close)" -->
            <div v-if="openMenu === theMenu.name" v-motion-fade-visible class="!-left-[16vw] w-[91vw] h-20 mt-[60px] mx-auto 
               absolute inset-x-0 top-0 -z-20 bg-white shadow-2xl" @mouseenter="keepOpen()"
                @mouseleave="closeFlyOver()">

                <div class="relative border-b-4 border-brand-primary px-5 my-2">
                    <NuxtImg
                        src="https://img.freepik.com/free-vector/paper-style-white-monochrome-background_52683-66443.jpg?t=st=1731668657~exp=1731672257~hmac=076a7a4e668df8f1f10457e768ab3c441439e1709b43343e2a4671bf79b786d2&w=740"
                        alt="" class="absolute inset-0 -z-10 h-full w-full object-fit" />

                    <div class="absolute inset-0 bg-white opacity-75 -z-10"></div>

                    <div class="h-auto">

                        <div class="grid grid-cols-12">

                            <div class="col-span-4 relative border-r-2 border-red-600 h-full mt-2">

                                <div class="flex flex-col gap-1 mx-3 mt-7">
                                    <h2 class="text-2xl font-semibold" v-html="currentMainHeading"></h2>
                                    <p class="text-[13px] leading-normal">
                                        {{ currentMainDescription }}
                                    </p>
                                    <div class="mt-5">
                                        <NuxtLink :to="ctaLink"
                                            class="button-animation leading-normal font-semibold flex text-gray-600">
                                            Read More About {{ ctaWording }}
                                            <span
                                                class="ml-2 h-6 w-6 rounded-full border-[1px]  border-gray-400 flex items-center justify-center">
                                                <i class="text-[10px] fas fa-arrow-right"></i>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </div>


                            </div>

                            <div class="col-span-8 ml-4">
                                <div class="pt-2 grid grid-cols-12 gap-2 max-w-full px-2">
                                    <div class="col-span-5">
                                        <!-- <h1 class="ml-2 font-semibold text-lg" v-html="currentMainMenu"></h1> -->
                                        <div class="relative pt-2 flex flex-col gap-1 mt-7">
                                            <div v-show="!item.type" v-for="(item, index) in currentMenuItems">
                                                <p @click="setSubmenu(item, index)"
                                                    @mouseenter="setSubmenu(item, index)"
                                                    :class="[currentSubmenu === item.name ? 'text-brand-primary bg-red-100' : '']"
                                                    class="rounded-md py-1 px-5 group hover:cursor-pointer hover:text-brand-primary font-semibold text-[15px]">
                                                    {{ item.name }} <i v-if="currentSubmenu === item.name"
                                                        class="absolute right-4 text-brand-primary ml-8 fas fa-arrow-right mt-1"></i>
                                                </p>
                                            </div>
                                            <div v-show="currentMenu === 'Insurance'">
                                                <div class="flex flex-col gap-1">
                                                    <div v-show="item.type" v-for="(item, index) in currentMenuItems">
                                                        <p @click="setSubmenu(item, index)"
                                                            @mouseenter="setSubmenu(item, index)"
                                                            :class="[currentSubmenu === item.name ? 'text-black bg-red-100' : '']"
                                                            class="rounded-md py-1 px-5 group hover:cursor-pointer hover:text-brand-primary font-semibold text-[15px]">
                                                            {{ item.name }} <i v-if="currentSubmenu === item.name"
                                                                class="absolute right-4 text-brand-primary ml-8 fas fa-arrow-right mt-1"></i>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="col-span-7 relative flex flex-col gap-1 border-l-2 border-red-600 h-full pl-5">
                                        <!-- <h1 class="font-semibold text-lg" v-html=currentLinksHeading></h1> -->
                                        <div class="grid grid-cols-2 mt-6">
                                            <NuxtLink @click="goToSection(submenuItem.name)" :to="submenuItem.link"
                                                v-for="submenuItem in currentSubmenuItems" :key="submenuItem.name"
                                                class="group hover:cursor-pointer hover:text-black hover:bg-red-100 transition duration-700 rounded-md p-2 font-semibold text-[15px]">
                                                <div class="flex justify-between">
                                                    {{ submenuItem.name }}
                                                    <i
                                                        class="text-brand-primary mr-2 fas fa-angle-right text-[10px] mt-1.5"></i>
                                                </div>
                                                <p class="text-[10px]">
                                                    {{ submenuItem.description }}
                                                </p>
                                            </NuxtLink>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class=" mt-8">
                        <div class="flex px-10">
                            <!-- <div>
   
                               </div> -->
                            <div class="flex col-span-2 w-full justify-between !pr-5">
                                <NuxtLink v-for="item in footerOptions" :key="item.name" :to="item.link"
                                    @click="closeFlyOver()"
                                    class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-[13px] font-semibold leading-normal text-black sm:justify-center sm:px-0">
                                    <i :class="item.icon" class="flex-none group-hover:text-black text-brand-primary" />
                                    {{ item.name }} <i class="fas fa-arrow-right"></i>
                                </NuxtLink>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </transition>

    </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const props = defineProps({
    theMenu: Object,
})

const openMenu = ref(null)

const currentMenu = ref(null)

const currentMenuItems = ref(null)
const currentMainMenu = ref(null)
const currentMainHeading = ref(null)
const currentMainDescription = ref(null)
const currentSubmenu = ref(null)
const currentMenuSubtitle = ref(null)
const currentMenuHeading = ref(null)
const currentLinksHeading = ref(null)
const currentMenuDescription = ref(null)
const currentSubmenuItems = ref(null)
const footerOptions = ref(null)
const flyoverHeader = ref(null)

const ctaWording = computed(()=>{
    if(currentMenu.value == 'Insurance'){
        return 'Insurance'
    }else if(currentMenu.value == 'Reinsurance'){
        return 'Reinsurance'
    }else if(currentMenu.value == 'Actuarial'){
        return 'Actuarial'
    }else if(currentMenu.value == 'About'){
        return 'Our History'
    }
})

const ctaLink = computed(()=>{
    if(currentMenu.value == 'Insurance'){
        return '/acentria-group-insurance'
    }else if(currentMenu.value == 'Reinsurance'){
        return '/acentria-group-reinsurance'
    }else if(currentMenu.value == 'Actuarial'){
        return '/acentria-group-actuarial'
    }else if(currentMenu.value == 'About'){
        return '/about-us/who-we-are'
    }
})


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
]);
const actuarialFooterMenus = ref([
    {
        name: 'Actuarial Home Page',
        icon: 'fas fa-home',
        link: '/acentria-group-actuarial',
    },
]);
const insightsFooterMenus = ref([
    {
        name: 'Insights Home Page',
        icon: 'fas fa-home',
        link: '/acentria-group-actuarial',
    },
]);

const AboutMenus = ref([
    {
        name: 'About Us',
        linksHeading: 'About Us<span class="text-brand-primary"> Links<span/>',
        mainMenu: 'Company <span class="text-brand-primary">Profile<span/>',
        mainHeading: 'Acentria <span class="text-brand-primary"> Group<span/>',
        mainDescription: 'At Acentria Group, we shape the future of our partners through our expertise and solutions by EMPOWERING the vision of our clients and communities. Through INNOVATIVE thinking, we deliver the best solutions that enhance PROSPERITY. We are constantly seeking better ways to manage risk, guiding effective pathways to achieve SMART and sustainable outcomes.',
        subMenu: 'Acentria <span class="text-brand-primary">Profile Details<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'At Acentria Group, we propel prosperity to infinite possibilities. Our expert team is dedicated to providing innovative & comprehensive insurance, reinsurance & actuarial solutions to help you achieve your financial goals. ',
        icon: 'fas fa-info-circle',
        items: [
            {
                name: 'Who we are',
                description: 'Learn about our history, mission, and values.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'What we do',
                description: 'Discover the range of services and solutions we offer.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'Our Journey',
                description: 'Explore our journey from inception to market leader.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'Vision, Mission & Values',
                description: 'Understand our vision, mission, and core values.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'Corporate Culture',
                description: 'Our culture fosters innovation, collaboration, and excellence.',
                link: '/corporate-culture',
            },
            {
                name: 'Our Brand',
                description: 'Our brand represents trust, reliability, and innovation.',
                link: '/our-brand',
            },
        ]
    },
    {
        name: 'Leadership & Governance',
        linksHeading: 'Leadership <span class="text-brand-primary">& Governance<span/>',
        subMenu: 'Governance <span class="text-brand-primary">Structure<span/>',
        description: 'Meet the leaders who guide Acentria Group towards success. Our leadership team is composed of experienced professionals who bring a wealth of knowledge and expertise to the organization. Their strategic vision and commitment to excellence drive our success and ensure that we remain at the forefront of the industry.',
        icon: 'fas fa-user-tie',
        items: [
            {
                name: 'Our Governance',
                description: 'Discover our governance structure and meet our leaders.',
                link: '/meet-the-team',
            },
            {
                name: 'Board',
                description: 'Meet our board of directors providing strategic direction.',
                link: '/meet-the-team',
            },
            {
                name: 'Management Team',
                description: 'Learn about our experienced and dedicated management team.',
                link: '/meet-the-team',
            },
        ]
    },
    {
        name: 'Our Business Capability',
        linksHeading: 'Lines of <span class="text-brand-primary">Business<span/>',
        subMenu: 'Business <span class="text-brand-primary">Solutions<span/>',
        description: 'Explore the diverse range of business solutions we offer. Our comprehensive suite of services is designed to meet the unique needs of our clients. ',
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
                name: 'Actuarial & Finance Services',
                description: 'Delivering expert actuarial and financial consulting services.',
                link: '/acentria-group-actuarial',
            },
            {
                name: 'Technology',
                description: 'Innovating with cutting-edge technology solutions for various industries.',
                link: '/acentria-group-technology',
            },
        ]
    },
    {
        name: 'Our Commitment',
        linksHeading: 'Our <span class="text-brand-primary">Commitment<span/>',
        subMenu: 'Commitment <span class="text-brand-primary">to Excellence<span/>',
        description: 'Our dedication to providing exceptional service and building strong relationships. We are committed to exceeding our clients\' expectations and delivering solutions that meet their needs. ',
        icon: 'fas fa-handshake',
        items: [
            {
                name: 'Our Customers',
                description: 'Providing exceptional service and prioritizing customer satisfaction.',
                link: '/our-commitment',
            },
            {
                name: 'Our Partners',
                description: 'Building strong, lasting relationships with our trusted partners.',
                link: '/our-commitment',
            },
            {
                name: 'Our Staff',
                description: 'Investing in our staff to foster growth and development.',
                link: '/our-commitment',
            },
            {
                name: 'Our Communities',
                description: 'Contributing positively to the communities we serve.',
                link: '/our-commitment',
            },
        ]
    },
    {
        name: 'Sustainability',
        linksHeading: 'Our <span class="text-brand-primary">Sustainability<span/>',
        subMenu: 'Sustainable <span class="text-brand-primary">Practices<span/>',
        description: 'Our commitment to sustainability and responsible business practices. We are dedicated to minimizing our environmental impact and promoting sustainable practices. ',
        icon: 'fas fa-leaf',
        items: [
            {
                name: 'Our Purpose',
                description: 'Our commitment to sustainability and responsible business practices.',
                link: '/esg',
            },
            {
                name: 'Goals & Commitments',
                description: 'Our sustainability goals and the commitments we have made.',
                link: '/esg',
            },
            {
                name: 'Commitments',
                description: 'Detailed information about our sustainability commitments.',
                link: '/esg',
            },
            {
                name: 'Sustainability Policies',
                description: 'Our policies and guidelines for sustainable business operations.',
                link: '/esg',
            },
        ]
    },
    {
        name: 'Let\'s Grow Together',
        linksHeading: 'Join <span class="text-brand-primary">Us<span/>',
        subMenu: 'Get <span class="text-brand-primary">Involved<span/>',
        description: 'Join us and become a part of the Acentria Group family. We offer a range of opportunities for individuals and organizations to get involved with our company. ',
        icon: 'fas fa-users',
        items: [
            {
                name: 'New Customer',
                description: 'Join us and experience our exceptional customer services.',
                link: '/join-our-team',
            },
            {
                name: 'Suppliers',
                description: 'Partner with us and grow your business together.',
                link: '/join-our-team',
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
        name: 'Personal Covers',
        linksHeading: 'My Personal <span class="text-brand-primary">Insurance Covers<span/>',
        mainMenu: 'Insurance <span class="text-brand-primary">Solutions<span/>',
        mainHeading: 'Insurance & <span class="text-brand-primary">Risk Management<span/>',
        mainDescription: 'Acentria is one of the leading independent specialist insurance broking firms, operating both in Kenya and international markets. Our dedicated risk teams combine specialized insurance brokerage services with deep analytical expertise to provide tailored solutions that meet the unique needs of our clients worldwide.',
        subMenu: 'Why Personal <span class="text-brand-primary">Insurance?<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'Personal insurance is essential because it provides comprehensive coverage tailored to your individual needs, ensuring peace of mind and financial security. ',
        icon: 'fas fa-user',
        items: [
            {
                name: 'My Health',
                description: 'Comprehensive health coverage for peace of mind.',
                link: '/insurance/health-insurance',
            },
            {
                name: 'My Life',
                description: 'Secure your family\'s future with flexible life insurance.',
                link: '/insurance/life-insurance',
            },
            {
                name: 'My Home',
                description: 'Protect your home and belongings with comprehensive coverage.',
                link: '/insurance/home-insurance',
            },
            {
                name: 'My Car',
                description: 'Drive confidently with our comprehensive car insurance plans.',
                link: '/insurance/motor-insurance',
            },
            {
                name: 'My Travel',
                description: 'Explore the world worry-free with our travel insurance.',
                link: '/insurance/travel-insurance',
            },
        ]
    },
    {
        name: 'Corporate Covers',
        linksHeading: 'My Corporate <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Corporate <span class="text-brand-primary">Insurance?<span/>',
        description: 'Corporate insurance is crucial as it provides tailored solutions to protect your business and employees from various risks and uncertainties.',
        icon: 'fas fa-building',
        items: [
            {
                name: 'Staff Health Cover',
                description: 'Ensure employee well-being with comprehensive health coverage.',
                link: '/insurance/staff-health-cover',
            },
            {
                name: 'Staff Travel Cover',
                description: 'Protect employees during business trips with travel coverage.',
                link: '/insurance/staff-travel-cover',
            },
            {
                name: 'Office Content Cover',
                description: 'Safeguard office assets against damage or loss.',
                link: '/insurance/office-content-cover',
            },
            {
                name: 'Cyber Liability Cover',
                description: 'Protect your business from cyber threats and data breaches.',
                link: '/insurance/cyber-liability-cover',
            },
            {
                name: 'Credit Risk Cover',
                description: 'Mitigate financial risks from customer defaults and insolvencies.',
                link: '/insurance/credit-risk-cover',
            },
        ]
    },
    {
        name: 'Business Covers',
        linksHeading: 'My Business <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Business <span class="text-brand-primary">Insurance?<span/>',
        description: 'Business insurance is essential as it provides comprehensive solutions to protect your enterprise from various risks and uncertainties. ',
        icon: 'fas fa-money-bill-wave',
        items: [
            {
                name: 'Biashara Cover',
                description: 'Comprehensive business insurance to protect your enterprise from risks.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'General Liability',
                description: 'Shield your business from legal claims and financial losses.',
                link: '/insurance/general-liability-insurance',
            },
            {
                name: 'Product Liability',
                description: 'Protect against claims related to product defects and liabilities.',
                link: '/insurance/product-liability-insurance',
            },
            {
                name: 'Commercial Property',
                description: 'Safeguard your commercial property against damage, theft, and risks.',
                link: '/insurance/commercial-property-insurance',
            },
            {
                name: 'Crops and Livestock',
                description: 'Protect your agricultural investments from a range of farming risks.',
                link: '/insurance/crops-and-livestock',
            },
        ]
    },
    {
        name: 'Industrial Covers',
        linksHeading: 'My Industrial <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Industrial <span class="text-brand-primary">Insurance?<span/>',
        description: 'Industrial insurance is vital as it provides comprehensive coverage for all industrial risks, ensuring your business operations are protected. ',
        icon: 'fas fa-industry',
        items: [
            {
                name: 'Industrial All Risk Cover',
                description: 'Comprehensive coverage for all industrial risks and operations.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Public Liability',
                description: 'Protection against claims of injury or property damage.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Personal Accident',
                description: 'Coverage for accidents occurring to staff during employment.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Work Benefit Injury Act (WIBA)',
                description: 'Compensation for work-related injuries under WIBA regulations.',
                link: '/insurance/biasahara-cover',
            },
        ]
    },
    {
        type: 'special',
        name: 'Aviation Covers',
        linksHeading: 'My Aviation <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Aviation <span class="text-brand-primary">Insurance?<span/>',
        description: 'Comprehensive coverage for aircraft, pilots, and aviation operations.',
        icon: 'fas fa-plane',
        items: [
            {
                name: 'Aviation Insurance',
                description: 'Coverage for aircraft, pilots, and aviation operations.',
                link: '/insurance/aviation-cover',
            },
        ]
    },
    // {
    //     type: 'special',
    //     name: 'Marine Covers',
    //     linksHeading: 'My Marine <span class="text-brand-primary">Insurance Covers<span/>',
    //     subMenu: 'Why Marine <span class="text-brand-primary">Insurance?<span/>',
    //     description: 'Comprehensive coverage for vessels, cargo, and marine operations.',
    //     icon: 'fas fa-ship',
    //     items: [
    //         {
    //             name: 'Marine Insurance',
    //             description: 'Coverage for vessels, cargo, and marine operations.',
    //             link: '/insurance/biasahara-cover',
    //         },
    //     ]
    // },
])
const ReinsuranceMenus = ref([
    {
        name: 'Reinsurance Services',
        linksHeading: 'Reinsurance<span class="text-brand-primary"> Services<span/>',
        mainMenu: 'Reinsurance <span class="text-brand-primary">Products<span/>',
        mainHeading: '<span class="text-brand-primary">Reinsurance<span/>',
        mainDescription: 'Acentria Re is one of the leading independent specialist (re)insurance broking firms, serving both the Kenyan and international markets. Our dedicated risk teams combine specialized reinsurance brokerage services with in-depth analytical expertise to provide tailored solutions for our clients worldwide.',
        subMenu: 'Our <span class="text-brand-primary">Services<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'Explore our comprehensive reinsurance services for risk management.',
        icon: 'fas fa-sync-alt',
        items: [
            {
                name: 'Reinsurance Optimization',
                description: 'Maximize reinsurance efficiency with our optimization services.',
                link: '/reinsurance/reinsurance-optimization',
            },
            {
                name: 'Treaty Administration',
                description: 'Streamline reinsurance agreements with our treaty administration.',
                link: '/reinsurance/treaty-administration',
            },
            {
                name: 'Claims Management',
                description: 'Efficiently handle reinsurance claims with our management services.',
                link: '/reinsurance/claims-management',
            },
            {
                name: 'Value Addition',
                description: 'Enhance your reinsurance portfolio with our value addition services.',
                link: '/reinsurance/value-addition',
            },
        ]
    },
    {
        name: 'Reinsurance Solutions',
        linksHeading: 'Reinsurance<span class="text-brand-primary"> Solutions<span/>',
        subMenu: 'Our <span class="text-brand-primary">Solutions<span/>',
        description: 'Discover tailored reinsurance solutions for specific risk requirements.',
        icon: 'fas fa-cogs',
        items: [
            {
                name: 'Facultative Solutions',
                description: 'Access tailored reinsurance coverage with our facultative solutions.',
                link: '/reinsurance/facultative-solution',
            },
            {
                name: 'Treaty Solutions',
                description: 'Secure comprehensive reinsurance protection with our treaty solutions.',
                link: '/reinsurance/treaty-solutions',
            },
            {
                name: 'Special Lines Solutions',
                description: 'Protect unique exposures with our special lines reinsurance solutions.',
                link: '/reinsurance/special-lines',
            },
        ]
    },
    {
        name: 'Data  Analytics',
        linksHeading: 'Data<span class="text-brand-primary"> & Modeling<span/>',
        subMenu: 'Data <span class="text-brand-primary">& Modelling<span/>',
        description: 'Leverage data-driven insights and advanced modelling techniques.',
        icon: 'fas fa-database',
        items: [
            {
                name: 'Reinsurance Data Analytics Tool',
                description: 'Enhance decision-making with our reinsurance data analytics tool.',
                link: '/reinsurance/reinsurance-data-analytics-tool',
            },
            {
                name: 'Acentre Reinsurance Solution',
                description: 'Optimize reinsurance strategy with Acentre\'s comprehensive solutions.',
                link: '/reinsurance/acentre-reinsurance-solution',
            },
            {
                name: 'Return On Risk Adjusted Capital',
                description: 'Maximize financial performance with risk-adjusted capital services.',
                link: '/reinsurance/return-on-risk-adjusted-capital',
            },
        ]
    },
    {
        name: 'Modelling',
        linksHeading: 'Data<span class="text-brand-primary"> & Modeling<span/>',
        subMenu: 'Data <span class="text-brand-primary">& Modelling<span/>',
        description: 'Leverage data-driven insights and advanced modelling techniques.',
        icon: 'fas fa-database',
        items: [
            {
                name: 'Catastrophic Modelling',
                description: 'Prepare for extreme events with our catastrophic modelling services.',
                link: '/reinsurance/catastrophic-modelling',
            },
        ]
    },
])
const ActuarialMenus = ref([
    {
        name: 'Actuarial Services',
        linksHeading: 'Actuarial<span class="text-brand-primary"> Services<span/>',
        mainMenu: 'Actuarial <span class="text-brand-primary">Products<span/>',
        mainHeading: 'Actuarial & <span class="text-brand-primary">Financial Services<span/>',
        mainDescription: 'Our Actuarial & Financial Services team is one of the leading independent specialist firms, operating in Kenya and international markets. Led by a signing actuary, our team excels in utilizing financial, risk, and capital modeling to help clients navigate and manage the complexities inherent in business.',
        subMenu: 'Our <span class="text-brand-primary">Services<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'Explore our comprehensive actuarial consulting services for financial strategies.',
        icon: 'fas fa-chart-line',
        items: [
            {
                name: 'Financial Services',
                description: 'Enhance financial strategies with our expert actuarial services.',
                link: '/actuarial/financial-services',
            },
            {
                name: 'Insurance Consulting',
                description: 'Optimize insurance operations with our expert consulting services.',
                link: '/actuarial/insurance-consulting',
            },
            {
                name: 'Reinsurance Consulting',
                description: 'Strengthen reinsurance strategies with our tailored consulting services.',
                link: '/actuarial/reinsurance-consulting',
            },
            {
                name: 'IFRS17 Implementation',
                description: 'Ensure compliance with IFRS 17 standards with our services.',
                link: '/actuarial/ifrs-17-implementation',
            },
            {
                name: 'Innovation and Digitization',
                description: 'Transform your business with our innovation and digitization services.',
                link: '/actuarial/innovation-and-digitization',
            },
            {
                name: 'Retirement and Employee Benefits',
                description: 'Optimize retirement and employee benefits programs with our services.',
                link: '/actuarial/retirement-and-employee-benefits',
            },
        ]
    },
    {
        name: 'AcentRe',
        linksHeading: 'Actuarial<span class="text-brand-primary"> Systems<span/>',
        subMenu: 'Acentria <span class="text-brand-primary">Reinsurance Softwares<span/>',
        description: 'Advanced analytics and risk management tools for reinsurance portfolio.',
        icon: 'fas fa-box',
        items: [
            {
                name: 'AcentRe Reinsurance Software',
                description: 'Optimize reinsurance strategy with AcentRe\'s comprehensive solutions.',
                link: '/reinsurance/acentre-reinsurance-solution',
            },
        ]
    },
])
const InsightsMenus = ref([
    {
        name: 'Our Insights',
        linksHeading: 'Actuarial<span class="text-brand-primary"> Services<span/>',
        mainMenu: 'Actuarial <span class="text-brand-primary">Products<span/>',
        mainHeading: 'Acentria\'s <span class="text-brand-primary">Insights<span/>',
        mainDescription: 'Acentria\'s Insights provide expert analysis and updates on the latest trends in insurance, reinsurance, actuarial, and technology sectors.',
        subMenu: 'Our <span class="text-brand-primary">Services<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'Explore our comprehensive actuarial consulting services for financial strategies.',
        icon: 'fas fa-chart-line',
        items: [
            {
                name: 'Insurance',
                description: 'Stay updated with the latest trends in insurance.',
                link: '/insights/insurance',
            },
            {
                name: 'Reinsurance',
                description: 'Gain insights into the reinsurance industry and practices.',
                link: '/insights/reinsurance',
            },
            {
                name: 'Actuarial',
                description: 'Explore actuarial insights and financial strategies.',
                link: '/insights/actuarial',
            },
            {
                name: 'Technology',
                description: 'Discover technological advancements in the insurance sector.',
                link: '/insights/technology',
            },
            {
                name: 'Events',
                description: 'Stay informed about upcoming industry events and conferences.',
                link: '/insights/events',
            },
            {
                name: 'Case Studies',
                description: 'Read detailed case studies on successful projects and solutions.',
                link: '/insights/case-studies',
            },
            {
                name: 'Reports',
                description: 'Access comprehensive reports on industry trends and analysis.',
                link: '/insights/reports',
            },
        ]
    },
])

const selectedIndex = ref(null)
const activeClick = ref(false)
const activeHover = ref(false)
const router = useRouter()

const ctaButton = computed(() => {
    if (currentMenu.value == 'Insurance') {
        return 'Compare Quotes Instantly'
    }
    if (currentMenu.value == 'Reinsurance') {
        return 'Book a Consultation'
    }
    if (currentMenu.value == 'Actuarial') {
        return 'Book a Demo'
    }
    if (currentMenu.value == 'About') {
        return 'Learn More'
    }
})

const popoverImage = computed(() => {
    if (currentMenu.value == 'Insurance') {
        return '/img/tracy.jpg'
    }
    if (currentMenu.value == 'Reinsurance') {
        return '/img/simo3.jpg'
    }
    if (currentMenu.value == 'Actuarial') {
        return '/img/what.jpg'
    }
    if (currentMenu.value == 'About') {
        return '/img/cover.jpg'
    }
})


let hideTimeout = null;
const openFlyover = (menu, type) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = null
    }

    // if (openMenu.value === menu && type === 'click') {
    //     openMenu.value = null
    //     return
    // }

    if (menu == 'Investment') {
        if(type=='hover'){
            return;
        }else{
            router.push('/acentria-group-investment');
            return;
        }
    }
    if (menu == 'Technology') {
        if (type == 'hover') {
            return;
        } else {
            window.open('https://acentria-tech.vercel.app/', '_blank');
            return;
        }
    }
    if (currentMenu.value === menu) {
        // currentMenu.value = null
        return
    } else {

        // activeClick.value = true
        // activeHover.value = true
        currentMenu.value = menu
        openMenu.value = menu


        if (type === 'click'){
            if (currentMainMenu.value === 'About') {
                router.push('/about-us/who-we-are');
            }
            if (currentMainMenu.value === 'Insurance') {
                router.push('/acentria-group-insurance');
            }
            if (currentMainMenu.value === 'Reinsurance') {
                router.push('/acentria-group-reinsurance');
            }
            if (currentMainMenu.value === 'Actuarial') {
                router.push('/acentria-group-actuarial');
            }
            // return;
        }else{
            if (currentMenu.value === 'About') {
                flyoverHeader.value = 'Acentria Group'
                currentMenuItems.value = AboutMenus.value
                currentMainMenu.value = currentMenuItems.value[0]?.mainMenu
                currentMainDescription.value = currentMenuItems.value[0]?.mainDescription
                currentMainHeading.value = currentMenuItems.value[0]?.mainHeading
                currentSubmenu.value = 'About Us'
                currentSubmenuItems.value = currentMenuItems.value[0]?.items
                currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
                currentLinksHeading.value = currentMenuItems.value[0]?.linksHeading
                currentMenuHeading.value = currentMenuItems.value[0]?.menuHeading
                currentMenuDescription.value = currentMenuItems.value[0]?.description
                footerOptions.value = aboutFooterMenus.value
            }
            if (currentMenu.value === 'Insurance') {
                flyoverHeader.value = 'Insurance Solutions'
                currentMenuItems.value = InsuranceMenus.value
                currentMainMenu.value = currentMenuItems.value[0]?.mainMenu
                currentMainDescription.value = currentMenuItems.value[0]?.mainDescription
                currentMainHeading.value = currentMenuItems.value[0]?.mainHeading
                currentSubmenu.value = 'Insurance Personal Covers'
                currentSubmenuItems.value = currentMenuItems.value[0]?.items
                currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
                currentLinksHeading.value = currentMenuItems.value[0]?.linksHeading
                currentMenuHeading.value = currentMenuItems.value[0]?.menuHeading
                currentMenuDescription.value = currentMenuItems.value[0]?.description
                footerOptions.value = insuranceFooterMenus.value
            }
            if (currentMenu.value === 'Reinsurance') {
                flyoverHeader.value = 'Reinsurance Solutions'
                currentMenuItems.value = ReinsuranceMenus.value
                currentMainMenu.value = currentMenuItems.value[0]?.mainMenu
                currentMainDescription.value = currentMenuItems.value[0]?.mainDescription
                currentMainHeading.value = currentMenuItems.value[0]?.mainHeading
                currentSubmenu.value = 'Reinsurance Services'
                currentSubmenuItems.value = currentMenuItems.value[0]?.items
                currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
                currentLinksHeading.value = currentMenuItems.value[0]?.linksHeading
                currentMenuHeading.value = currentMenuItems.value[0]?.menuHeading
                currentMenuDescription.value = currentMenuItems.value[0]?.description
                footerOptions.value = reinsuranceFooterMenus.value
            }
            if (currentMenu.value === 'Actuarial') {
                flyoverHeader.value = 'Actuarial Services'
                currentMenuItems.value = ActuarialMenus.value
                currentMainMenu.value = currentMenuItems.value[0]?.mainMenu
                currentMainDescription.value = currentMenuItems.value[0]?.mainDescription
                currentMainHeading.value = currentMenuItems.value[0]?.mainHeading
                currentSubmenu.value = 'Actuarial Services'
                currentSubmenuItems.value = currentMenuItems.value[0]?.items
                currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
                currentLinksHeading.value = currentMenuItems.value[0]?.linksHeading
                currentMenuHeading.value = currentMenuItems.value[0]?.menuHeading
                currentMenuDescription.value = currentMenuItems.value[0]?.description
                footerOptions.value = actuarialFooterMenus.value
            }
            if (currentMenu.value === 'Insights') {
                flyoverHeader.value = 'Acentria Insights'
                currentMenuItems.value = InsightsMenus.value
                currentMainMenu.value = currentMenuItems.value[0]?.mainMenu
                currentMainDescription.value = currentMenuItems.value[0]?.mainDescription
                currentMainHeading.value = currentMenuItems.value[0]?.mainHeading
                currentSubmenu.value = 'Our Insights'
                currentSubmenuItems.value = currentMenuItems.value[0]?.items
                currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
                currentLinksHeading.value = currentMenuItems.value[0]?.linksHeading
                currentMenuHeading.value = currentMenuItems.value[0]?.menuHeading
                currentMenuDescription.value = currentMenuItems.value[0]?.description
                footerOptions.value = insightsFooterMenus.value
            }
        }

    }
}

const keepOpen = (theMenuName) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout)
        hideTimeout = null
    }
};

const closeFlyOver = (close) => {
    // close()
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        openMenu.value = null
        hideTimeout = null

        currentMenu.value = null
        activeClick.value = false
        activeHover.value = false
        currentMenuItems.value = null
        currentSubmenu.value = null
        currentSubmenuItems.value = null
        selectedIndex.value = null
        footerOptions.value = null
        currentMenuSubtitle.value = null
        currentMenuDescription.value = null
        footerOptions.value = null
        flyoverHeader.value = null
    }, 100);
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
watch(() => currentMenu.value, (value) => {
    // console.log(value)
    if(value==null){
        closeFlyOver()
    }
})

const goToSection = (section) => {
    // activeClick.value=false
    closeFlyOver()
    localStorage.setItem('targetSection', section);
}

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
    currentLinksHeading.value = menu.linksHeading
    currentSubmenuItems.value = menu.items
    selectedIndex.value = index;
    // if (menu.name === 'Personal Cover') {
    //     currentSubmenuItems.value = currentMenuItems.value[0].items
    // }
}

const shouldInsertSubmenu = (index) => {
    const isEndOfRow = (index + 1) % 5 === 0;
    const isLastItem = index + 1 === currentMenuItems.value?.length;
    const result = (isEndOfRow || isLastItem) && currentSubmenuItems.value?.length > 0 && selectedIndex.value <= index;

    if (result) {
        if (index <= 4 && selectedIndex.value < 4) {
            return true
        }
        if (index > 4 && selectedIndex.value > 4) {
            return true
        }
    }
};

</script>