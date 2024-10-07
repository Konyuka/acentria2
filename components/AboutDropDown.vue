<script setup>


let hideTimeout = null;

const isAboutUsDropdownVisible = ref(true);
const isCompaniesDropdownVisible = ref(false);
const isCorporateGovernanceDropdownVisible = ref(false);
const isOurCommitmentDropdownVisible = ref(false);
const isSustainabilityDropdownVisible = ref(false);
const isJoinUsDropdownVisible = ref(false);
const isLeadershipDropdownVisible = ref(false);
const isAwardsRecognitionsDropdownVisible = ref(false);
const isClientTestimonialsDropdownVisible = ref(false);
const isNewsUpdatesDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    isAboutUsDropdownVisible.value = false;
    isCompaniesDropdownVisible.value = false;
    isCorporateGovernanceDropdownVisible.value = false;
    isOurCommitmentDropdownVisible.value = false;
    isSustainabilityDropdownVisible.value = false;
    isJoinUsDropdownVisible.value = false;
    isLeadershipDropdownVisible.value = false;
    isAwardsRecognitionsDropdownVisible.value = false;
    isClientTestimonialsDropdownVisible.value = false;
    isNewsUpdatesDropdownVisible.value = false;

    if (menu == 'aboutUs') {
        isAboutUsDropdownVisible.value = true;
    } else if (menu == 'companies') {
        isCompaniesDropdownVisible.value = true;
    } else if (menu == 'corporateGovernance') {
        isCorporateGovernanceDropdownVisible.value = true;
    } else if (menu == 'ourCommitment') {
        isOurCommitmentDropdownVisible.value = true;
    } else if (menu == 'sustainability') {
        isSustainabilityDropdownVisible.value = true;
    } else if (menu == 'joinUs') {
        isJoinUsDropdownVisible.value = true;
    } else if (menu == 'leadership') {
        isLeadershipDropdownVisible.value = true;
    } else if (menu == 'awardsRecognitions') {
        isAwardsRecognitionsDropdownVisible.value = true;
    } else if (menu == 'clientTestimonials') {
        isClientTestimonialsDropdownVisible.value = true;
    } else if (menu == 'newsUpdates') {
        isNewsUpdatesDropdownVisible.value = true;
    }
};

const hideDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        if (menu == 'aboutUs') {
            isAboutUsDropdownVisible.value = false;
        } else if (menu == 'companies') {
            isCompaniesDropdownVisible.value = false;
        } else if (menu == 'corporateGovernance') {
            isCorporateGovernanceDropdownVisible.value = false;
        } else if (menu == 'ourCommitment') {
            isOurCommitmentDropdownVisible.value = false;
        } else if (menu == 'sustainability') {
            isSustainabilityDropdownVisible.value = false;
        } else if (menu == 'joinUs') {
            isJoinUsDropdownVisible.value = false;
        } else if (menu == 'leadership') {
            isLeadershipDropdownVisible.value = false;
        } else if (menu == 'awardsRecognitions') {
            isAwardsRecognitionsDropdownVisible.value = false;
        } else if (menu == 'clientTestimonials') {
            isClientTestimonialsDropdownVisible.value = false;
        } else if (menu == 'newsUpdates') {
            isNewsUpdatesDropdownVisible.value = false;
        }
    }, 200);
};


    const aboutUs = ref([
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
        name: 'Awards & Recognitions',
    description: 'See the awards and recognitions we have received over the years.',
        link: '/about-us/who-we-are',
    },
    ]);

    const companies = ref([
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
    ]);

    const corporateGovernance = ref([
    {
        name: 'How we work',
    description: 'Learn about our corporate governance practices and ethical standards.',
    link: '/about-us/how-we-work',
    },
    {
        name: 'Our risk Management',
    description: 'Understand our approach to risk management and mitigation.',
    link: '/about-us/our-risk-management',
    },
    {
        name: 'Customer feedback & dispute resolution',
    description: 'See how we handle customer feedback and resolve disputes.',
    link: '/about-us/customer-feedback-dispute-resolution',
    },
    {
        name: 'Complaint',
    description: 'Learn about our complaint handling process and how to file a complaint.',
    link: '/about-us/complaint',
    },
    {
        name: 'Data Privacy',
    description: 'Read about our commitment to data privacy and protection.',
        link: '/privacy-policy',
    },
    ]);

    const ourCommitment = ref([
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
    ]);

    const sustainability = ref([
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
    ]);

    const joinUs = ref([
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
    ]);

    const leadership = ref([
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
    ]);

    const awardsRecognitions = ref([
    {
        name: 'Awards & Recognitions',
    description: 'Discover the awards and recognitions we have earned.',
            link: '/about-acentria-group',
    },
    ]);

    const clientTestimonials = ref([
    {
        name: 'What Our Customers are Saying',
    description: 'Read testimonials from our satisfied customers.',
    link: '/about-acentria-group',
    },
    ]);

    const newsUpdates = ref([
    {
        name: 'Blogs',
    description: 'Stay updated with our latest blog posts and articles.',
    link: '/acentria-news-and-blogs',
    },
    {
        name: 'Events',
    description: 'Find out about upcoming events and activities.',
        link: '/acentria-news-and-blogs',
    },
    {
        name: 'Media',
    description: 'Access our media resources and press releases.',
        link: '/acentria-news-and-blogs',
    },
    ]);


const setScrollTo = (name) => {
    localStorage.setItem('scrollTo', name);
}    
onMounted(() => {
    showDropdown('personal')
    isAboutUsDropdownVisible.value = true;
})
</script>

<template>
    <div>
        <!-- <div class="h-8">

        </div> -->
        <div
            class="min-w-[10vw] flex flex-row shadow-4xl absolute bottom-0 left-[-285px] translate-y-full duration-800 z-50">

            <div class="flex flex-col min-w-[24vw]">
                <div class="bg-gray-300 border-r border-brand-divider p-5 min-h-screen">
                    <NuxtLink to="/acentria-group-insurance" @click="setScrollTo()"
                        class="group flex w-full flex-row items-center gap-2 whitespace-nowrap px-2 py-2 text-sm font-semibold text-black hover:bg-brand-primary hover:text-brand-primary hover:cursor-pointer false">
                        <span class="group-hover:button-animation text-xl mt-3 text-brand-primary">
                            Acentria Group
                        </span>
                    </NuxtLink>
                    <div class="flex">
                        <!-- <i class="fas fa-caret-right mr-2 ml-4 text-brand-primary"></i> -->
                        <p class="px-2 text-xs text-black">
                            Acentria Group of companies is a trusted global consultant in Risk and Insurance,
                            Reinsurance, Actuarial, Technology and Investment Advisory.
                            Our journey is about Empowering dreams, igniting imagination, and propelling prosperity to
                            infinite possibilities

                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col min-w-[25vw] min-h-screen overflow-y-scroll">
                <div class="border-r border-brand-divider">

                    <a @mouseenter="showDropdown('aboutUs')" @mouseleave="hideDropdown('aboutUs')" href="#"
                        :class="[isAboutUsDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-calculator text-lg undefined" translate="no"></i>
                        About Us <i
                            :class="[isAboutUsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isAboutUsDropdownVisible" @mouseenter="showDropdown('aboutUs')"
                        @mouseleave="hideDropdown('aboutUs')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in aboutUs" @click="setScrollTo(item.name)">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('companies')" @mouseleave="hideDropdown('companies')" href="#"
                        :class="[isCompaniesDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-building text-lg undefined" translate="no"></i>
                        Companies <i
                            :class="[isCompaniesDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isCompaniesDropdownVisible" @mouseenter="showDropdown('companies')"
                        @mouseleave="hideDropdown('companies')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in companies" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('corporateGovernance')"
                        @mouseleave="hideDropdown('corporateGovernance')" href="#"
                        :class="[isCorporateGovernanceDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-gavel text-lg undefined" translate="no"></i>
                        Corporate Governance <i
                            :class="[isCorporateGovernanceDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isCorporateGovernanceDropdownVisible" @mouseenter="showDropdown('corporateGovernance')"
                        @mouseleave="hideDropdown('corporateGovernance')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in corporateGovernance" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('ourCommitment')" @mouseleave="hideDropdown('ourCommitment')" href="#"
                        :class="[isOurCommitmentDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-hand-holding-heart text-lg undefined" translate="no"></i>
                        Our Commitment <i
                            :class="[isOurCommitmentDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isOurCommitmentDropdownVisible" @mouseenter="showDropdown('ourCommitment')"
                        @mouseleave="hideDropdown('ourCommitment')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in ourCommitment" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('sustainability')" @mouseleave="hideDropdown('sustainability')"
                        href="#" :class="[isSustainabilityDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-leaf text-lg undefined" translate="no"></i>
                        Sustainability <i
                            :class="[isSustainabilityDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isSustainabilityDropdownVisible" @mouseenter="showDropdown('sustainability')"
                        @mouseleave="hideDropdown('sustainability')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in sustainability" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('joinUs')" @mouseleave="hideDropdown('joinUs')" href="#"
                        :class="[isJoinUsDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-users text-lg undefined" translate="no"></i>
                        Join Us <i
                            :class="[isJoinUsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isJoinUsDropdownVisible" @mouseenter="showDropdown('joinUs')"
                        @mouseleave="hideDropdown('joinUs')" class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in joinUs" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('leadership')" @mouseleave="hideDropdown('leadership')" href="#"
                        :class="[isLeadershipDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-users text-lg undefined" translate="no"></i>
                        Leadership <i
                            :class="[isLeadershipDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isLeadershipDropdownVisible" @mouseenter="showDropdown('leadership')"
                        @mouseleave="hideDropdown('leadership')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in leadership" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('awardsRecognitions')" @mouseleave="hideDropdown('awardsRecognitions')"
                        href="#" :class="[isAwardsRecognitionsDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-trophy text-lg undefined" translate="no"></i>
                        Awards & Recognitions <i
                            :class="[isAwardsRecognitionsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isAwardsRecognitionsDropdownVisible" @mouseenter="showDropdown('awardsRecognitions')"
                        @mouseleave="hideDropdown('awardsRecognitions')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in awardsRecognitions" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('clientTestimonials')" @mouseleave="hideDropdown('clientTestimonials')"
                        href="#" :class="[isClientTestimonialsDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-comments text-lg undefined" translate="no"></i>
                        Client Testimonials <i
                            :class="[isClientTestimonialsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isClientTestimonialsDropdownVisible" @mouseenter="showDropdown('clientTestimonials')"
                        @mouseleave="hideDropdown('clientTestimonials')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in clientTestimonials" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('newsUpdates')" @mouseleave="hideDropdown('newsUpdates')" href="#"
                        :class="[isNewsUpdatesDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-newspaper text-lg undefined" translate="no"></i>
                        News & Updates <i
                            :class="[isNewsUpdatesDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isNewsUpdatesDropdownVisible" @mouseenter="showDropdown('newsUpdates')"
                        @mouseleave="hideDropdown('newsUpdates')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in newsUpdates" :key="item.name">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="flex h-screen flex-col bg-white px-8 py-4 border-r border-brand-divider"></div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
