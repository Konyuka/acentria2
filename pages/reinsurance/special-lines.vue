<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Specialized Services',
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
            'Financial institution Businesses',
            'Bankers Blanket Bond',
            'Trade Credit',
            'Cyber Insurance',
            'Commercial Crime',
        ]
    },
    {
        name: 'Bonds and Guarantees',
        items: [
            'Advanced Payment Bonds',
            'Performance Bonds',
            'Bid Bonds',
            'Customs and Warehousing Bonds',
            'Retention & Maintenance Bonds',
        ]
    },
    {
        name: 'Life',
        items: [
            'Individual Life',
            'Group Life',
            'Group Credit & Mortgage',
            'Keyman Insurance',
        ]
    },
    {
        name: 'Political Violence and Terrorism',
        items: [
            'Political Violence including Riot Strike or Civil Commotion',
            'Terrorism and Sabotage',
            'Business Interruption',
        ]
    },
    {
        name:'Marine',
        items:[
            'Cargo',
            'Hull',
            'liability',
            'Aquaculture',
            'Goods in Transit',
            'Marine Cargo',
            'Marine Hull and Machinery',
            'Protection and Indemnity',
        ]
    },
    {
        name: 'Energy',
        items: [
            'Geothermal plants',
            'Renewable energy',
            'Power plants',
            'Utilities',
            'Offshore Energy',
            'Onshore Energy',
            'Onshore Energy construction',
            'Business',
        ]
    },
    {
        name:'Aviation',
        items:[
            'Hull All Risk Hull War Aviation',
            'Product & Premises Liability Airport',
            'Terminal Liability Ground Handling',
            'Liability Hangar Keepers Liability',
            'Third Party Liability Passenger Legal',
            'Liability Combined Single Liability',
            'Aviation Refuelers Liability',
        ]
    },
    {
        name:'Casualty and Liability Classes',
        items:[
            'Professional Indemnity',
            'Public & Products Liability',
            'Employers Liability',
            'Trustee Liability',
            'Directors and Officers Liability',
            'Product Recall',
            'Environmental Liability',
        ]
    },
    {
        name:'Property and Engineering',
        items:[
            'Fire and Allied Perils',
            'Fire loss of profit Industrial All Risk',
            'Asset All Risk Deterioration of Stock',
            'Advance Loss of Profits',
            'Machinery Breakdown',
            'Contractors Plant and Machinery',
            'Electronic Equipment Insurance',
            'Erection All Risks',
            'Contractors All Risks',
            'Delay in start-up Insurance',
        ]
    },
    
])

</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="font-sans mx-auto max-w-6xl px-6 sm:mt-10 lg:px-8 my-10">
            <div class="!mb-10 isolate mx-auto mt-10 grid max-w-[96vw] grid-cols-3 gap-8">

                <div v-for="special in specials" class="p-3 ring-1 ring-brand-primary shadow-xl rounded-md">

                    <h2 id="tier-hobby"
                        class=" text-center text-md font-semibold leading-8 text-white bg-brand-primary flex justify-center content-center p-1 rounded-md">
                        {{ special.name }}
                    </h2>
                    <ul role="list" class="divide-y divide-gray-100">

                        <li v-for="item in special.items" class="flex gap-x-4 py-1">
                            <div class="min-w-0">
                                <p class="text-xs font-semibold leading-6 text-gray-900"><i class="fas fa-caret-right mr-2"></i> {{ item }}</p>
                            </div>
                        </li>

                    </ul>

                </div>



            </div>
        </div>

        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
