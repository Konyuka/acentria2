<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Facultative Solutions',
    subTitle: 'Enhanced Risk Management',
    image: 'https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Best of Our Facultative Solutions',
    image: 'https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'We assist our clients in increasing their risk capacity by offering alternative and innovative channels for individual risks where treaty capacities are limited. The facultative arrangement is both under proportional and non-proportional forms. Risks under this arrangement are placed with well-rated securities and take into consideration the risk appetite and profile of both the ceding and the securing companies.',
})

const services = ref(
    [
        {
            name: 'Energy',
            image: 'https://www.guycarp.com/content/dam/guycarp-rebrand/adobe-assets/Energy/Energy-009-solar-panels-wind-turbines-96622127.jpeg',
            content: 'On-shore | Off-shore | Terrorism | Renewable | Utilities',
            icon: 'fas fa-bolt'
        },
        {
            name: 'Car/Ear',
            image: 'https://www.guycarp.com/content/dam/guycarp-rebrand/adobe-assets/Construction/Construction-001-man-harness-179035709.jpeg',
            content: 'Advance loss of profits | Civil works | Construction liability | Contractors plant & equipment | Engineering | Terrorism',
            icon: 'fas fa-hard-hat'
        },
        {
            name: 'Property',
            image: 'https://www.guycarp.com/content/dam/guycarp-rebrand/adobe-assets/City/City-006-abstract-building-268916410.jpeg',
            content: 'Commercial property | Heavy & process industry | Infrastructure | Municipalities | Terrorism',
            icon: 'fas fa-building'
        },
        {
            name: 'Casualty',
            image: 'https://www.guycarp.com/content/dam/guycarp-rebrand/adobe-assets/Terrorism/Terrorism-001-disaster-catastrophe-217590408.jpeg',
            content: 'General liability | Product liability | Product recall | Terrorism',
            icon: 'fas fa-shield-alt'
        },
        {
            name: 'Specialty',
            image: 'https://www.guycarp.com/content/dam/guycarp-rebrand/adobe-assets/Medical/Pandemic-001-coronavirus-pathogen-covid-19-virus-pandemic-327378972.jpeg',
            content: 'Agriculture | Directors & officers | Financial & commercial crime | Medical malpractice | Professional indemnity',
            icon: 'fas fa-star'
        },
        {
            name: 'Marine',
            image: 'https://www.guycarp.com/content/dam/guycarp-rebrand/adobe-assets/Marine/Marine-003-ship-aerial-cargo-204103708.jpeg',
            content: 'Aquaculture | Cargo | Fine arts | Hull | Liability | P & I',
            icon: 'fas fa-ship'
        }
    ]
)

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
                    Automatic and semiautomatic reinsurance structures for property and casualty help you make the most
                    of opportunities, improve capital management and advance underwriting strategies. These programs
                    deliver more cost-effective risk transfer solutions than some treaty risk transfer products, while
                    providing additional limits and/or modifying attachment points. They integrate seamless and
                    efficient reinsurance risk cessions, accounting and processing functions. You are able to carve out
                    a segment of exposure to enhance treaty placement: an Auto Carve Out, for example, or unique
                    property risks which fall out of reinsurance treaty parameters or present an otherwise outlying risk
                    to your portfolio.
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div>
            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">

                <a href="#" v-for="item in services"
                    class="relative flex flex-row gap-2 border-2 border-gray-200 p-5 rounded-lg">
                    <i :class="item.icon" class="text-4xl text-brand-primary mr-2"></i>
                    <div class="relative">
                        <div class="flex justify-between w-full">
                            <h5 v-html="item.name" class="text-lg pb-1 font-semibold leading-normal text-black"></h5>
                        </div>
                        <p class="mt-3 leading-normal font-regular text-black text-[14px]">
                            {{ item.content }}
                        </p>
                        <!-- <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i> -->
                    </div>
                </a>

            </div>
        </div>

        <ContactForm />
    </div>



</template>
