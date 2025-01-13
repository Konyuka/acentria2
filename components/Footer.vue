<script setup>
import { computed } from 'vue';
import { ref } from "vue";

const currentYear = computed(() => {
    const currentDate = new Date();
    return currentDate.getFullYear();
})

const menuItem = ref([
    {
        name: 'Company',
        items: [
            {
                name: 'Home',
                icon: 'fas fa-home',
                link: '/',
            },
            // {
            //     name: 'About',
            //     icon: 'fas fa-info-circle',
            //     link: '/about-acentria-group',
            // },
            {
                name: 'Insights',
                icon: 'fas fa-blog',
                link: '/acentria-news-and-blogs',
            },
            {
                name: 'Careers',
                icon: 'fas fa-briefcase',
                link: '/acentria-group-careers',
            },
            {
                name: 'CSR',
                icon: 'fas fa-hands-helping',
                link: '/csr',
            },
            {
                name: 'ESG',
                icon: 'fas fa-leaf',
                link: '/esg',
            },
        ]
    },
    {
        name: 'Services',
        items: [
            {
                name: 'Insurance',
                icon: 'fas fa-shield-alt',
                link: '/acentria-group-insurance',
            },
            {
                name: 'Reinsurance',
                icon: 'fas fa-sync-alt',
                link: '/acentria-group-reinsurance',
            },
            
            {
                name: 'Actuarial',
                icon: 'fas fa-calculator',
                link: '/acentria-group-actuarial',
            },
            {
                name: 'Technology',
                icon: 'fas fa-laptop-code',
                link: '',
            },
            {
                name: 'Investment',
                icon: 'fas fa-chart-line',
                link: '/acentria-group-investment',
            },
        ]
    },
    {
        name: 'Legal',
        items: [
            {
                name: 'Privacy Policy',
                icon: 'fas fa-user-secret',
                link: '/privacy-policy',
            },
            {
                name: 'Cookie Policy',
                icon: 'fas fa-cookie-bite',
                link: '/cookie-policy',
            },
            {
                name: 'Terms & Conditions',
                icon: 'fas fa-file-contract',
                link: '/tnc',
            },
            {
                name: 'Ethics & Compliance',
                icon: 'fas fa-balance-scale',
                link: '/ethics-and-compliance',
            },
            {
                name: 'Complaints',
                icon: 'fas fa-bullhorn',
                link: '/whistle-blowing',
            },
        ]
    },
    {
        name: 'Contact Us',
        items: [
            {
                name: '+254 705 200 222',
                icon: 'fas fa-phone-alt',
                link: '/contact-acentria-group',
            },
            {
                name: 'info@acentriagroup.com',
                icon: 'fas fa-envelope',
                link: '',
            },
            {
                name: 'P.O Box 5864-00100 Nairobi',
                icon: 'fas fa-map-marker-alt',
                link: '',
            },
            {
                name: 'West Park Towers, Westlands',
                icon: 'fas fa-building',
                link: '',
            },
        ]
    },
]);


const chosenItem = ref(null)
const chosenMenu = ref(null)

const showItem = (item) => {

    if (chosenItem.value !== null) {
        chosenItem.value = null
        chosenMenu.value = null
    }else{
        if (item == 'Company') {
            chosenMenu.value = 'Company'
            chosenItem.value = menuItem.value[0]
        } else if (item == 'Services') {
            chosenMenu.value = 'Services'
            chosenItem.value = menuItem.value[1]
        } else if (item == 'Help Center') {
            chosenMenu.value = 'Help Center'
            chosenItem.value = menuItem.value[2]
        } else if (item == 'Legal') {
            chosenMenu.value = 'Legal'
            chosenItem.value = menuItem.value[2]
        }
    }
}

const showDropdown = (menu) => {
    if (menu?.name == chosenMenu.value) {
        return true
    }else{
        return false
    }
}


</script>

<template>
    <div>
        <div class="font-sans w-full border-t-8 border-black bg-black/70 px-4 py-3">
            <div class="container mx-auto">
                <!-- Links -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 text-sm px-auto my-4">

                    <div class="flex items-center justify-center pr-10">
                        <NuxtLink to="/">
                            <NuxtImg alt="Acentria" fetchPriority="high" decoding="async" data-nimg="1"
                                class="mr-8 w-full h-16" style="color: transparent; object-fit: contain;"
                                src="/img/LogoW.png" />
                        </NuxtLink>
                    </div>
                    
                    <div v-for="item in menuItem" :key="item.name"
                        class="pointer-events-auto relative z-10 overflow-hidden border-b-[1px] border-brand-gray-6 lg:border-0">
                        <h3 class="mb-1 flex items-center justify-between text-base font-bold lg:text-xl">
                            <span class="hidden">{{ item.name }}</span>
                            <button @click="showItem(item.name)"
                                class="relative z-20 m-0 flex w-full cursor-pointer select-none items-center justify-between py-2 font-normal text-dark-title">
                                <span>{{ item.name }}</span>
                                <span class="lg:hidden">
                                    <div class="block">
                                        <svg v-show="chosenItem === null" version="1.1" viewBox="0 0 100 100"
                                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                            stroke-width="10" stroke-linecap="round"
                                            class="h-4 w-4 transform stroke-dark-title transition-transform duration-300 undefined">
                                            <g class="chevron__container transition-transform -translate-y-3">
                                                <line stroke-width="10" stroke-linecap="round"
                                                    class="origin-[50px_50px] transform transition-transform duration-300 undefined rotate-[40deg]"
                                                    x1="10" y1="50" x2="50" y2="50"></line>
                                                <line stroke-width="10" stroke-linecap="round"
                                                    class="origin-[50px_50px] transform transition-transform duration-300 undefined -rotate-[40deg]"
                                                    x1="90" y1="50" x2="50" y2="50"></line>
                                            </g>
                                        </svg>
                                        <svg v-show="chosenItem !== null" version="1.1" viewBox="0 0 100 100"
                                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                                            stroke-width="10" stroke-linecap="round"
                                            class="h-4 w-4 transform stroke-dark-title transition-transform duration-300 undefined">
                                            <g class="chevron__container transition-transform translate-y-0">
                                                <line stroke-width="10" stroke-linecap="round"
                                                    class="origin-[50px_50px] transform transition-transform duration-300 undefined rotate-0"
                                                    x1="10" y1="50" x2="50" y2="50"></line>
                                                <line stroke-width="10" stroke-linecap="round"
                                                    class="origin-[50px_50px] transform transition-transform duration-300 undefined rotate-0"
                                                    x1="90" y1="50" x2="50" y2="50"></line>
                                            </g>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </h3>

                        <ul v-if="chosenItem?.name === item.name"
                            class="lg:hidden left-0 top-full -z-10 flex w-full list-none flex-col gap-5 overflow-hidden pb-2 will-change-transform lg:mb-0 visible static transform-none opacity-100 transition-all duration-300">
                            <li v-for="link in item.items" :key="link.name" class="my-1 text-dark-content">
                                <NuxtLink :to="link.link"
                                    class="cursor-pointer font-bold text-dark-title hover:text-dark-title hover:underline text-xs relative flex items-center">
                                    {{ link.name }}
                                </NuxtLink>
                            </li>
                        </ul>

                        <ul
                            class="left-0 top-full -z-10 flex w-full list-none flex-col gap-0 overflow-hidden will-change-transform lg:mb-0 invisible absolute -translate-y-24 opacity-0 lg:visible lg:static lg:transform-none lg:opacity-100 lg:transition-none">
                            <li v-for="link in item.items" :key="link.name"
                                class="button-animation mb-0 text-dark-content">
                                <NuxtLink :to="link.link"
                                    class="text-[13px] cursor-pointer font-normal text-dark-title hover:text-gray-100 relative flex items-center">
                                    <i :class="link.icon" class="text-brand-primary mr-2"></i> {{ link.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr class="h-0.25 bg-brand-divider mb-2" />
                <h2 class="text-white mb-2 text-center md:text-left">Connect with us</h2>
                <div class="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                    <!-- socials -->
                    <div class="flex items-center justify-end md:justify-end md:col-span-1">
                        <div class="flex gap-6">
                            <a href="https://www.facebook.com/Acentriagroup" target="_blank">
                                <div
                                    class="bg-white w-6 h-6 rounded-xs flex justify-center items-center button-animation">
                                    <i
                                        class="!text-md fab fa-facebook icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/acentriagroup/" target="_blank">
                                <div
                                    class="bg-white w-6 h-6 rounded-xs flex justify-center items-center button-animation">
                                    <i
                                        class="!text-md fab fa-instagram icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://x.com/acentriagroup?lang=en" target="_blank">
                                <div
                                    class="bg-white w-6 h-6 rounded-xs flex justify-center items-center button-animation">
                                    <i
                                        class="!text-md fab fa-x-twitter icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company/acentria-groupltd/" target="_blank">
                                <div
                                    class="bg-white w-6 h-6 rounded-xs flex justify-center items-center button-animation">
                                    <i
                                        class="!text-md fab fa-linkedin icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://www.tiktok.com/@acentria.group" target="_blank">
                                <div
                                    class="bg-white w-6 h-6 rounded-xs flex justify-center items-center button-animation">
                                    <i
                                        class="!text-md fab fa-tiktok icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
                        <div class="text-sm text-dark-content">
                            © {{ currentYear }} Acentria Group. All rights reserved.
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
                        <div class="text-sm text-dark-content">
                            Developed by <a href="https://tech.acentriagroup.com" target="_blank"
                                class="underline !button-animation">Acentria Technologies</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.force_white {
    color: white !important;
}

.force_white:hover {
    color: #ed1c24 !important;
}
</style>