<template>
    <Popover class="isolate z-50 shadow-3xl w-auto font-sans bg-transparent">
        <div class="justify-center">
            <div class="">
                <PopoverButton @click="openFlyover(theMenu.name)"
                    :class="[currentMenu === theMenu.name && activeClick ? 'text-brand-primary border-b-red-600 border-b-4' : 'text-black']"
                    class="pr-2 hover:border-b-red-600 hover:border-b-4 py-1 subheading-class !text-[15.5px] !ring-0 focus inline-flex items-center gap-x-1 font-semibold duration-200 hover:text-brand-primary">
                    {{ theMenu.name }}
                </PopoverButton>
            </div>
        </div>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-0"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-0">


            <PopoverPanel v-if="activeClick"
                class="!-left-[18vw] w-[93vw] h-20 mt-[65px] mx-auto absolute inset-x-0 top-0 -z-20 bg-white shadow-2xl">

                <!-- <div @click="closeFlyOver()" class="-z-50 fixed inset-0 bg-black/15 transition-opacity"
                    aria-hidden="true"></div> -->

                <div class="relative border-b-4 border-brand-primary">
                    <NuxtImg src="https://img.freepik.com/free-vector/paper-style-white-monochrome-background_52683-66443.jpg?t=st=1731668657~exp=1731672257~hmac=076a7a4e668df8f1f10457e768ab3c441439e1709b43343e2a4671bf79b786d2&w=740"
                        alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />

                    <div class="absolute inset-0 bg-white opacity-75 -z-10"></div>

                    <div class="h-auto mt-8">
                        <div class="ml-4 flex font-semibold text-[15px] text-black">
                            <!-- {{ flyoverHeader }} -->
                        </div>
                        <div class="grid grid-cols-7">


                            <div class="col-span-2 relative border-r-4 border-red-600 h-56 mt-2">

                                <h1 class="ml-5 font-semibold" v-html="currentMainMenu"></h1>
                                
                                <div class="relative pl-10 pt-2 flex flex-col gap-2">
                                    <div v-show="!item.type" v-for="(item, index) in currentMenuItems">
                                        <p @click="setSubmenu(item, index)"
                                            :class="[currentSubmenu === item.name ? 'text-brand-primary !underline underline-offset-4 ml-2' : '']"
                                            class="group hover:cursor-pointer hover:text-brand-primary font-semibold text-[14px]">
                                            <!-- <i :class="item.icon" class="mr-2"></i> -->
                                            {{ item.name }}
                                            <!-- <i
                                                class="absolute right-4 group-hover:text-brand-primary ml-8 fas fa-caret-right"></i> -->
                                        </p>
                                    </div>

                                    <div v-show="currentMenu === 'Insurance'">
                                        <div class="-ml-6 my-2 font-semibold text-[15px] text-black">
                                            Special <span class="text-brand-primary">Lines Insurance</span>
                                        </div>

                                        <div class="flex flex-col gap-2">
                                            <div v-show="item.type" v-for="(item, index) in currentMenuItems">
                                                <p @click="setSubmenu(item, index)"
                                                    :class="[currentSubmenu === item.name ? 'text-brand-primary !underline underline-offset-4 ml-2' : '']"
                                                    class="group hover:cursor-pointer hover:text-brand-primary font-semibold text-[14px]">
                                                    <!-- <i :class="item.icon" class="mr-2"></i> -->
                                                    {{ item.name }}
                                                    <!-- <i
                                                        class="absolute right-4 group-hover:text-brand-primary ml-8 fas fa-caret-right"></i> -->
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div class="col-span-5 ml-4">
                                <div class="pt-2 grid grid-cols-3 gap-2 max-w-full px-2">



                                    <div class="flex flex-col gap-1 mx-3">
                                        <h2 class="text-md font-semibold" v-html="currentMenuSubtitle"></h2>
                                        <p class="text-[13px] leading-normal">
                                            {{ currentMenuDescription }}
                                        </p>
                                    </div>

                                    <div class="relative flex flex-col gap-1 border-l-4 border-red-600 h-56 pl-5">
                                        <h1 class="font-semibold" v-html=currentLinksHeading></h1>
                                        <NuxtLink :to="submenuItem.link" v-for="submenuItem in currentSubmenuItems"
                                            :key="submenuItem.name"
                                            class="group hover:underline hover:cursor-pointer hover:text-brand-primary font-semibold text-[13px]">
                                            <i class="group-hover:text-brand-primary mr-2 fas fa-caret-right"></i>
                                            {{ submenuItem.name }}
                                        </NuxtLink>

                                        <div v-show="currentMenu === 'Insurance'" class="absolute bottom-5 mt-2 text-brand-primary col-span-1 text-[15px]">
                                            <i class="fas fa-award mr-2"></i> <span class="text-black">Get
                                                discounts</span>
                                            upto
                                            3%
                                        </div>
                                    </div>

                                    <div>
                                        <div class="w-auto dark:border-gray-700">
                                            <div class="w-full rounded h-38">
                                                <NuxtImg :src="popoverImage" alt="Display picture of Silene Tokyo" role="img" class="object-cover h-full w-full overflow-hidden rounded shadow-xl" />
                                            </div>
                                            <div class="flex w-full items-center justify-between pt-6 pb-1">
                                                <p class="text-xl font-normal text-gray-800 dark:text-white ">
                                                    <button
                                                        class="button-animation hover:bg-brand-primary px-3 py-0.5 bg-black text-white text-[10px]">
                                                        {{ ctaButton }}
                                                    </button>
                                                </p>
                                                <div class="flex justify-center">
                                                    <!-- <a aria-label="Open github" role="link" href="javascript:void(0)"
                                                        class="button-animation mx-2">
                                                        <i class="fas fa-paper-plane"></i>
                                                    </a>
                                                    <a aria-label="Open github" role="link" href="javascript:void(0)"
                                                        class="button-animation mx-2">
                                                        <i class="fas fa-mobile-alt"></i>
                                                    </a> -->

                                                </div>
                                            </div>
                                            <p v-show="currentMenu === 'Insurance'" class="mt-2 text-[12px] text-gray-600 leading-4">
                                                Do it yourself or let us help you <br> <span
                                                    class="text-brand-primary underline underline-offset-2">Get a quote
                                                    now!</span>
                                            </p>


                                        </div>
                                    </div>

                                </div>

                                <div class="h-10 grid grid-cols-3 gap-2 font-bold">
                                    <div v-show="currentMenu">
                                        <!-- <button
                                            class="ml-8 button-animation !hover:bg-brand-primary px-3 py-1 bg-black/15 text-black text-[14px]">
                                            Download our App on <i class="fab fa-google-play text-brand-primary"></i> &
                                            <i class="fab fa-apple text-brand-primary"></i>
                                        </button> -->
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="">
                        <div class="flex px-10">
                            <!-- <div>

                            </div> -->
                            <div class="flex col-span-2 w-full justify-between !pr-5">
                                <NuxtLink v-for="item in footerOptions" :key="item.name" :to="item.link"  @click="closeFlyOver()"
                                    class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-[13px] font-semibold leading-normal text-black sm:justify-center sm:px-0">
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
const currentMainMenu = ref(null)
const currentSubmenu = ref(null)
const currentMenuSubtitle = ref(null)
const currentMenuHeading = ref(null)
const currentLinksHeading = ref(null)
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
]);
const actuarialFooterMenus = ref([
    {
        name: 'Actuarial Home Page',
        icon: 'fas fa-home',
        link: '/acentria-group-actuarial',
    },
]);

const AboutMenus = ref([
    {
        name: 'About Us',
        linksHeading: 'About Us<span class="text-brand-primary"> Links<span/>',
        mainMenu: 'Company <span class="text-brand-primary">Profile<span/>',
        subMenu: 'Acentria <span class="text-brand-primary">Profile Details<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'At Acentria Group, we propel prosperity to infinite possibilities. Our expert team is dedicated to providing innovative & comprehensive insurance, reinsurance & actuarial solutions to help you achieve your financial goals. ',
        icon: 'fas fa-info-circle',
        items: [
            {
                name: 'Who we are',
                description: 'Learn about our history, mission, and the values that drive us. Discover how we have grown over the years and the milestones we have achieved. Our commitment to excellence and integrity has been the cornerstone of our success.',
                link: '/about-us/who-we-are',
            },
            {
                name: 'What we do',
                description: 'Discover the range of services and solutions we offer to our clients. From insurance and reinsurance to actuarial consulting, we provide comprehensive solutions tailored to meet your needs. Our innovative approach ensures that we stay ahead of industry trends.',
                link: '/about-us/what-we-do',
            },
            {
                name: 'Our Journey',
                description: 'Explore our journey from inception to becoming a market leader. Learn about the challenges we have overcome and the successes we have celebrated. Our journey is a testament to our resilience and dedication to our mission.',
                link: '/about-us/our-journey',
            },
            {
                name: 'Our Vision, Mission & Values',
                description: 'Understand our vision, mission, and the core values that guide our actions. Our vision is to be a global leader in providing innovative solutions. Our mission is to deliver exceptional value to our clients, and our values are rooted in integrity, excellence, and collaboration.',
                link: '/about-us/vision-mission-values',
            },
            {
                name: 'Corporate Culture',
                description: 'Understand our culture and the core values that guide our actions. Our corporate culture fosters innovation, collaboration, and a commitment to excellence. We believe in empowering our employees and creating a positive work environment.',
                link: '/corporate-culture',
            },
            {
                name: 'Our Brand',
                description: 'Understand our culture and the core values that guide our actions. Our brand represents our commitment to quality and excellence. We strive to build a brand that is synonymous with trust, reliability, and innovation.',
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
                description: 'Discover our governance structure and meet the leaders who guide Acentria Group towards success. Our governance framework ensures transparency, accountability, and ethical conduct in all our operations. We are committed to upholding the highest standards of corporate governance.',
                link: '/meet-the-team',
            },
            {
                name: 'Board',
                description: 'Meet the members of our board of directors. Our board provides strategic direction and oversight, ensuring that we achieve our goals and objectives. The diverse expertise and experience of our board members contribute to our success.',
                link: '/meet-the-team',
            },
            {
                name: 'Management Team',
                description: 'Learn about our experienced management team. Our management team is responsible for the day-to-day operations of the company, driving performance and ensuring that we deliver value to our clients. Their leadership and dedication are key to our success.',
                link: '/meet-the-team',
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
                description: 'Our dedication to providing exceptional service to our customers. We prioritize our customers\' needs and work tirelessly to ensure their satisfaction. Our customer-centric approach drives our success and builds lasting relationships.',
                link: '/our-commitment',
            },
            {
                name: 'Our Partners',
                description: 'Building strong and lasting relationships with our partners. We collaborate with our partners to deliver innovative solutions and achieve mutual success. Our partnerships are built on trust, respect, and shared goals.',
                link: '/our-commitment',
            },
            {
                name: 'Our Staff',
                description: 'Investing in our staff to foster growth and development. We believe that our employees are our greatest asset, and we are committed to their professional growth and well-being. Our supportive work environment encourages continuous learning and development.',
                link: '/our-commitment',
            },
            {
                name: 'Our Communities',
                description: 'Contributing positively to the communities we serve. We are dedicated to making a positive impact through our corporate social responsibility initiatives. Our community engagement efforts focus on sustainability, education, and social welfare.',
                link: '/our-commitment',
            },
        ]
    },
    {
        name: 'Our Lines of Business',
        linksHeading: 'Lines of <span class="text-brand-primary">Business<span/>',
        subMenu: 'Business <span class="text-brand-primary">Solutions<span/>',
        description: 'Explore the diverse range of business solutions we offer. Our comprehensive suite of services is designed to meet the unique needs of our clients. ',
        icon: 'fas fa-briefcase',
        items: [
            {
                name: 'Insurance',
                description: 'Providing comprehensive insurance solutions to protect your assets. Our insurance products are designed to offer maximum protection and peace of mind. We work closely with our clients to understand their needs and provide tailored insurance solutions.',
                link: '/acentria-group-insurance',
            },
            {
                name: 'Reinsurance',
                description: 'Offering reinsurance services to help manage risk effectively. Our reinsurance solutions provide financial stability and risk management support to our clients. We leverage our expertise and industry knowledge to deliver effective reinsurance solutions.',
                link: '/acentria-group-reinsurance',
            },
            {
                name: 'Actuarial & Finance Services',
                description: 'Delivering expert actuarial and financial consulting services. Our actuarial and finance services are designed to provide valuable insights and support to our clients. We help our clients make informed decisions and achieve their financial objectives.',
                link: '/acentria-group-actuarial',
            },
            {
                name: 'Technology',
                description: 'Innovating with cutting-edge technology solutions for various industries. Our technology solutions are designed to drive efficiency, innovation, and growth. We work with our clients to implement technology solutions that meet their specific needs and challenges.',
                link: '/acentria-group-technology',
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
                description: 'Our commitment to sustainability and responsible business practices. We strive to integrate sustainability into all aspects of our operations. Our purpose is to create long-term value for our stakeholders while contributing to a sustainable future.',
                link: '/esg',
            },
            {
                name: 'Goals & Commitments',
                description: 'Our sustainability goals and the commitments we have made. We have set ambitious sustainability goals and are committed to achieving them. Our goals include reducing greenhouse gas emissions, promoting renewable energy, and supporting sustainable development.',
                link: '/esg',
            },
            {
                name: 'Commitments',
                description: 'Detailed information about our sustainability commitments. We are committed to transparency and accountability in our sustainability efforts. Our commitments include regular reporting on our progress and engaging with stakeholders to drive continuous improvement.',
                link: '/esg',
            },
            {
                name: 'Sustainability Policies',
                description: 'Our policies and guidelines for sustainable business operations. Our sustainability policies provide a framework for our actions and decisions. We are committed to implementing best practices and continuously improving our sustainability performance.',
                link: '/esg',
            },
        ]
    },
    {
        name: 'Join Us',
        linksHeading: 'Join <span class="text-brand-primary">Us<span/>',
        subMenu: 'Get <span class="text-brand-primary">Involved<span/>',
        description: 'Join us and become a part of the Acentria Group family. We offer a range of opportunities for individuals and organizations to get involved with our company. ',
        icon: 'fas fa-users',
        items: [
            {
                name: 'New Customer',
                description: 'Join us as a new customer and experience our exceptional services. We are committed to providing our customers with the highest level of service and support. Our customer-centric approach ensures that we meet your needs and exceed your expectations.',
                link: '/join-our-team',
            },
            {
                name: 'Suppliers',
                description: 'Partner with us as a supplier and grow your business. We value our relationships with our suppliers and work collaboratively to achieve mutual success. Our supplier partnerships are built on trust, respect, and shared goals.',
                link: '/join-our-team',
            },
            {
                name: 'Careers',
                description: 'Explore career opportunities and join our dynamic team. We offer a range of career opportunities for talented individuals who are passionate about making a difference. Our supportive work environment and commitment to employee development make Acentria Group a great place to build your career.',
                link: '/acentria-group-careers',
            },
        ]
    },
])
const InsuranceMenus = ref([
    {
        name: 'Insurance Personal Covers',
        linksHeading: 'My Personal <span class="text-brand-primary">Insurance Covers<span/>',
        mainMenu: 'Insurance <span class="text-brand-primary">Solutions<span/>',
        subMenu: 'Why Personal <span class="text-brand-primary">Insurance?<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'Personal insurance is essential because it provides comprehensive coverage tailored to your individual needs, ensuring peace of mind and financial security. ',
        icon: 'fas fa-user',
        items: [
            {
                name: 'My Health Insurance',
                description: 'Personal health insurance is essential because it provides comprehensive health coverage tailored to your needs, ensuring peace of mind and access to quality healthcare services. It helps cover medical expenses, including doctor visits, hospital stays, and prescription medications, protecting you from high out-of-pocket costs.',
                link: '/insurance/health-insurance',
            },
            {
                name: 'My Life Insurance',
                description: 'Personal life insurance is crucial as it secures your family\'s future with our flexible life insurance plans, providing financial stability and peace of mind. It ensures that your loved ones are financially protected in the event of your untimely death, covering expenses such as mortgage payments, education costs, and daily living expenses.',
                link: '/insurance/life-insurance',
            },
            {
                name: 'My Home Insurance',
                description: 'Personal home insurance is vital because it protects your home and belongings with our comprehensive home insurance plans, offering peace of mind and financial security. It covers damages caused by events like fire, theft, and natural disasters, ensuring that you can repair or replace your property without significant financial burden.',
                link: '/insurance/home-insurance',
            },
            {
                name: 'My Car Insurance',
                description: 'Personal car insurance is important as it allows you to drive with confidence knowing your vehicle is protected with our comprehensive car insurance plans. It covers damages to your car, liability for injuries and property damage to others, and medical expenses resulting from accidents, ensuring financial protection on the road.',
                link: '/insurance/motor-insurance',
            },
            {
                name: 'My Travel Insurance',
                description: 'Personal travel insurance is necessary because it lets you explore the world worry-free with our travel insurance, offering coverage for unexpected events and emergencies. It covers trip cancellations, medical emergencies, lost luggage, and other travel-related issues, providing financial protection and assistance during your travels.',
                link: '/insurance/travel-insurance',
            },
        ]
    },
    {
        name: 'Insurance Corporate Covers',
        linksHeading: 'My Corporate <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Corporate <span class="text-brand-primary">Insurance?<span/>',
        description: 'Corporate insurance is crucial as it provides tailored solutions to protect your business and employees from various risks and uncertainties.',
        icon: 'fas fa-building',
        items: [
            {
                name: 'Staff Health Cover',
                description: 'Corporate staff health cover is essential as it ensures the well-being of your employees with our comprehensive health cover, providing access to quality healthcare services. It helps attract and retain top talent, reduces absenteeism, and enhances productivity by ensuring employees are healthy and well-cared for.',
                link: '/insurance/staff-health-cover',
            },
            {
                name: 'Staff Travel Cover',
                description: 'Corporate staff travel cover is important because it protects your staff during business trips with our travel cover, offering coverage for unexpected events and emergencies. It ensures that employees are safe and supported while traveling for work, covering medical emergencies, trip cancellations, and lost luggage.',
                link: '/insurance/staff-travel-cover',
            },
            {
                name: 'Office Content Cover',
                description: 'Corporate office content cover is crucial as it safeguards your office assets with our office content cover, providing protection against damage or loss. It covers office equipment, furniture, and other valuable items from risks such as fire, theft, and natural disasters, ensuring business continuity and financial protection.',
                link: '/insurance/office-content-cover',
            },
            {
                name: 'Cyber Liability Cover',
                description: 'Corporate cyber liability cover is vital because it protects your business from cyber threats with our cyber liability cover, offering financial protection against data breaches and cyber attacks. It covers costs related to data recovery, legal fees, and customer notification, ensuring your business can recover quickly from cyber incidents.',
                link: '/insurance/cyber-liability-cover',
            },
            {
                name: 'Credit Risk Cover',
                description: 'Corporate credit risk cover is necessary as it mitigates financial risks with our credit risk cover, ensuring your business is protected against customer defaults and insolvencies. It helps maintain cash flow and financial stability by covering losses from unpaid invoices and bad debts, allowing your business to grow confidently.',
                link: '/insurance/credit-risk-cover',
            },
        ]
    },
    {
        name: 'Insurance Business Covers',
        linksHeading: 'My Business <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Business <span class="text-brand-primary">Insurance?<span/>',
        description: 'Business insurance is essential as it provides comprehensive solutions to protect your enterprise from various risks and uncertainties. ',
        icon: 'fas fa-money-bill-wave',
        items: [
            {
                name: 'Biashara Cover',
                description: 'Business insurance is essential as it provides comprehensive business insurance solutions tailored to protect your enterprise from various risks and uncertainties. It covers property damage, liability claims, and business interruptions, ensuring your business can recover and continue operations smoothly after unexpected events.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'General Liability Insurance',
                description: 'Business general liability insurance is crucial as it shields your business from legal claims with our general liability insurance, covering bodily injury, property damage, and more. It protects your business from financial losses due to lawsuits and claims, ensuring you can operate without the fear of significant legal expenses.',
                link: '/insurance/general-liability-insurance',
            },
            {
                name: 'Product Liability Insurance',
                description: 'Business product liability insurance is important because it protects your business against claims related to product defects with our product liability insurance, ensuring financial security. It covers legal fees, settlements, and medical costs arising from defective products, safeguarding your business reputation and finances.',
                link: '/insurance/product-liability-insurance',
            },
            {
                name: 'Commercial Property Insurance',
                description: 'Business commercial property insurance is vital as it safeguards your commercial property with our insurance plans, offering coverage against damage, theft, and other risks. It ensures that your business premises, equipment, and inventory are protected, allowing you to focus on growth and operations without financial worries.',
                link: '/insurance/commercial-property-insurance',
            },
            {
                name: 'Crops and Livestock',
                description: 'Business crops and livestock insurance is necessary because it ensures the protection of your agricultural investments with our crops and livestock insurance, covering a range of farming risks. It protects against losses due to natural disasters, diseases, and other perils, ensuring the financial stability and sustainability of your farming operations.',
                link: '/insurance/crops-and-livestock',
            },
        ]
    },
    {
        name: 'Insurance Industrial Covers',
        linksHeading: 'My Industrial <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Industrial <span class="text-brand-primary">Insurance?<span/>',
        description: 'Industrial insurance is vital as it provides comprehensive coverage for all industrial risks, ensuring your business operations are protected. ',
        icon: 'fas fa-industry',
        items: [
            {
                name: 'Industrial all risk cover',
                description: 'Industrial insurance is essential as it provides comprehensive coverage for all industrial risks, ensuring your business operations are protected. It covers property damage, machinery breakdown, and business interruptions, allowing your industrial operations to recover quickly and continue without significant financial losses.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Public Liability',
                description: 'Industrial public liability insurance is crucial as it provides protection against claims of personal injury or property damage caused by your business activities. It covers legal fees, settlements, and medical costs, ensuring your business can operate without the fear of significant financial burdens from liability claims.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Personal accident',
                description: 'Industrial staff personal accident insurance is important because it provides coverage for accidents that occur to your staff during the course of their employment. It covers medical expenses, lost wages, and rehabilitation costs, ensuring your employees are supported and your business can maintain productivity.',
                link: '/insurance/biasahara-cover',
            },
            {
                name: 'Staff Work Benefit Injury Act (WIBA)',
                description: 'Industrial WIBA insurance is vital as it ensures compliance with the Work Injury Benefits Act, providing compensation for work-related injuries. It covers medical expenses, disability benefits, and death benefits, ensuring your employees are protected and your business meets legal requirements.',
                link: '/insurance/biasahara-cover',
            },
        ]
    },
    {
        type: 'special',
        name: 'Insurance Aviation Covers',
        linksHeading: 'My Aviation <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Aviation <span class="text-brand-primary">Insurance?<span/>',
        description: 'Aviation insurance is essential as it provides comprehensive coverage for aircraft, pilots, and aviation operations, protecting against risks such as damage, liability, and loss. ',
        icon: 'fas fa-plane',
        items: [
            {
                name: 'Aviation Insurance',
                description: 'Aviation insurance is essential as it provides coverage for aircraft, pilots, and aviation operations, protecting against risks such as damage, liability, and loss. It ensures financial protection for aviation businesses, covering repair costs, legal fees, and compensation for third-party damages, ensuring safe and secure operations.',
                link: '/insurance/aviation-cover',
            },
        ]
    },
    {
        type: 'special',
        name: 'Insurance Marine Covers',
        linksHeading: 'My Marine <span class="text-brand-primary">Insurance Covers<span/>',
        subMenu: 'Why Marine <span class="text-brand-primary">Insurance?<span/>',
        description: 'Marine insurance is crucial as it provides comprehensive coverage for vessels, cargo, and marine operations, protecting against risks such as damage, loss, and liability. ',
        icon: 'fas fa-ship',
        items: [
            {
                name: 'Marine Insurance',
                description: ' Marine insurance is crucial as it provides comprehensive coverage for vessels, cargo, and marine operations, protecting against risks such as damage, loss, and liability. It ensures financial protection for marine businesses, covering repair costs, legal fees, and compensation for third-party damages, ensuring safe and secure operations.',
                link: '/insurance/biasahara-cover',
            },
            
        ]
    },
])
const ReinsuranceMenus = ref([
    {
        name: 'Reinsurance Services',
        linksHeading: 'Reinsurance<span class="text-brand-primary"> Services<span/>',
        mainMenu: 'Reinsurance <span class="text-brand-primary">Products<span/>',
        subMenu: 'Our <span class="text-brand-primary">Services<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
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
        linksHeading: 'Reinsurance<span class="text-brand-primary"> Solutions<span/>',
        subMenu: 'Our <span class="text-brand-primary">Solutions<span/>',
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
        linksHeading: 'Data<span class="text-brand-primary"> & Modeling<span/>',
        subMenu: 'Data <span class="text-brand-primary">& Modelling<span/>',
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
        name: 'Actuarial Services',
        linksHeading: 'Actuarial<span class="text-brand-primary"> Services<span/>',
        mainMenu: 'Actuarial <span class="text-brand-primary">Products<span/>',
        subMenu: 'Our <span class="text-brand-primary">Services<span/>',
        menuHeading: 'Acentria <span class="text-brand-primary">Profile Links<span/>',
        description: 'Explore our comprehensive actuarial consulting services designed to optimize your financial strategies and enhance your business operations.',
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
        name: 'AcentRe',
        linksHeading: 'Actuarial<span class="text-brand-primary"> Systems<span/>',
        subMenu: 'Acentria <span class="text-brand-primary">Reinsurance Softwares<span/>',
        description: ' Our software provides advanced analytics, risk management tools, and seamless integration capabilities to help you manage your reinsurance portfolio efficiently. ',
        icon: 'fas fa-box',
        items: [
            {
                name: 'AcentRe Reinsurance Software',
                description: 'Optimize your reinsurance strategy with AcentRe\'s comprehensive solutions, designed for maximum efficiency and effectiveness.',
                link: '/reinsurance/acentre-reinsurance-solution',
            },
        ]
    },
])


const selectedIndex = ref(null)
const activeClick = ref(false)
const router = useRouter()

const ctaButton = computed(()=>{
    if(currentMenu.value=='Insurance'){
        return 'Compare Quotes Instantly'
    }
    if(currentMenu.value=='Reinsurance' ){
        return 'Book a Consultation'
    }
    if (currentMenu.value == 'Actuarial'){
        return 'Book a Demo'
    }
    if(currentMenu.value=='About'){
        return 'Learn More'
    }
})

const popoverImage = computed(()=>{
    if(currentMenu.value=='Insurance'){
        return '/img/tracy.jpg'
    }
    if(currentMenu.value=='Reinsurance'){
        return '/img/simo3.jpg'
    }
    if(currentMenu.value=='Actuarial'){
        return '/img/what.jpg'
    }
    if(currentMenu.value=='About'){
        return '/img/cover.jpg'
    }
})

const openFlyover = (menu) => {
    // console.log(currentMenu.value)
    if (menu == 'Investment') {
        router.push('/acentria-group-investment');
        return;
    }
    if (menu == 'Technology') {
        window.open('https://tech.acentriagroup.com/', '_blank');
        return;
    }
    if (currentMenu.value === menu) {
        // currentMenu.value = null
        return
    } else {
        activeClick.value = true
        currentMenu.value = menu
        if (currentMenu.value === 'About') {
            flyoverHeader.value = 'Acentria Group'
            currentMenuItems.value = AboutMenus.value
            currentMainMenu.value = currentMenuItems.value[0]?.mainMenu
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
            currentSubmenu.value = 'Actuarial Services'
            currentSubmenuItems.value = currentMenuItems.value[0]?.items
            currentMenuSubtitle.value = currentMenuItems.value[0]?.subMenu
            currentLinksHeading.value = currentMenuItems.value[0]?.linksHeading
            currentMenuHeading.value = currentMenuItems.value[0]?.menuHeading
            currentMenuDescription.value = currentMenuItems.value[0]?.description
            footerOptions.value = actuarialFooterMenus.value
        }

    }
    // console.log(currentMenu.value)
}

const closeFlyOver = () => {
    currentMenu.value = null
    activeClick.value = false
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