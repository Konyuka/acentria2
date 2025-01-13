<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Unlock the full potential of your reinsurance program',
    subTitle: 'Treaty Administration',
    image: '/img/treaty-admin.jpg',
})
const ReinsuranceFeatureContent = ref({
    title: 'Our Approach',
    image: 'https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, our approach to treaty administration excellence is rooted in expertise, cutting-edge technology, and a commitment to delivering value to our clients. We don’t just understand treaty administration; we master it. Recognizing the pivotal role of aligning our goals with your specific treaty needs in the ever-evolving insurance and reinsurance industry, we bring a comprehensive approach that transforms complexity into stability, reliability, and a distinct competitive advantage for our esteemed clients. Your satisfaction and success are at the core of our priorities, and our strategic treaty administration and management excellence manifest this unwavering commitment.'
})

const systems = ref([
    {
        name: 'Acent<span class="text-brand-primary">Re </span>',
        link: '/reinsurance/acentre-reinsurance-solution',
        image: 'https://images.pexels.com/photos/5699447/pexels-photo-5699447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'AcentRe is an innovative online software solution that transforms how insurers understand and manage risk, optimize returns, and plan reinsurance strategies.',
    },
    {
        name: 'Data Analytics<span class="text-brand-primary"> Tool</span>',
        link: '/reinsurance/reinsurance-data-analytics-tool',
        image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Our data analytics platform offers features to help the organizations leverage data-driven insights for improved risk management & decision-making',
    },
])


const benefits = ref([
    {
        name: 'Comprehensive Risk Assessment',
        icon: 'fas fa-search',
        description: 'Understanding your unique risk profile is the first step toward effective risk management. Our comprehensive risk assessment services help you identify potential vulnerabilities and develop strategies to address them.',
        items: [
            {
                name: 'Risk Identification',
                description: 'Thorough analysis to uncover potential risks that could impact your financial well-being.',
            },
            {
                name: 'Risk Evaluation',
                description: 'Assessment of the likelihood and potential impact of identified risks.',
            },
            {
                name: 'Risk Prioritization',
                description: 'Ranking of risks based on their severity and the urgency of mitigation efforts.',
            },
        ],
    },
    {
        name: 'Innovation and Technology',
        icon: 'fas fa-user-shield',
        items: [
            {
                name: 'Automated Processes',
                description: 'Our state-of-the-art software automates over 90% of manual processes, improving efficiency and reducing operational risks',
            },
        ],
    },
]);


</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="container">
                <h1 class="my-5 heading-class text-left">
                    Treaty <span class="text-brand-primary"> Administration
                    </span>
                </h1>
                <p
                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                    Unlock the full potential of your reinsurance program with our comprehensive Treaty Administration
                    services. By seamlessly managing all aspects of your reinsurance treaties, from contract setup to
                    claims handling, we ensure maximum efficiency, accuracy, and compliance.
                    Let us help you navigate the complexities of reinsurance with precision and confidence.
                </p>
            </div>

        </div>

        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="pb-10">
            <Accordion2 />
        </div>


        <div class="bg-white pb-6">
            <div class="container">
                <h1 class="my-3 heading-class text-left">
                    Elite Tech Tools for<br> <span class="text-brand-primary"> Optimal Reinsurance Solutions</span>
                </h1>
            </div>

            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-4">

                <article v-for="service in systems"
                    class="button-animation shadow-2xl border-l-2 px-4 py-2 border-brand-primary group flex flex-col items-start justify-between">
                    <NuxtLink class="w-full" :to="service.link">
                        <div class="max-w-full">

                            <div class="font-sans group relative">
                                <div class="flex">
                                    <h3 v-html="service.name"
                                        class="text-lg font-semibold mt-3 line-clamp-2 subheading-class leading-normal text-black transition-colors group-hover:text-brand-primary">
                                    </h3>
                                    <i class="fas fa-trademark"></i>
                                </div>
                                <p class="mt-2 text-xs leading-normal text-black">
                                    {{ service.content }}
                                </p>
                            </div>

                            <span class="text-black">Learn More <i class="mt-2 fas fa-arrow-right ml-3"></i></span>
                        </div>
                    </NuxtLink>
                </article>

            </div>
        </div>

        <div class="container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Why Choose <span class="text-brand-primary"> Acentria</span>
            </h2>

            <div class="pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div v-for="principle in benefits"
                    class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                    <div class="flex flex-col">
                        <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                        <h4 class="font-bold text-black !text-[18px] pb-1 leading-normal">{{
                            principle.name }}</h4>
                        <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                        <div class="pt-5 grid grid-cols-1 gap-5">
                            <div v-for="item in principle.items" class="flex flex-col gap-2">
                                <h1 class="!font-semibold text-[14px]"> <i
                                        class="fas fa-caret-right text-brand-primary mr-2"></i> {{
                                    item.name }}</h1>
                                <p class="text-[12px]">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <!-- <ReinsuranceWhy /> -->
        <ContactForm />
    </div>



</template>
