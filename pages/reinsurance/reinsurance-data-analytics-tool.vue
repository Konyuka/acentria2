<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Data Analytics tool',
    image: 'https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref(
    {
        description:'',
        items: [
            {
                title: 'Analyze any data structure',
                icon: 'fa-chart-line',
                content: 'AcentRe\'s data analytics tool is your key to unlocking insights hidden in any data structure.Whether you\'re working with structured, semi-structured, or unstructured data, our platform provides the flexibility to dissect, understand, and extract valuable information, regardless of the data\'s form.'
            },
            {
                title: 'Multi-Source Data Capabilities',
                icon: 'fa-database',
                content: 'In today\'s interconnected world, valuable data comes from a multitude of sources.AcentRe\'s data analytics tool seamlessly integrates data from various sources, ensuring that you have a comprehensive, 360-degree view of your insurance operations. This capability allows you to make informed decisions based on a rich data ecosystem.'
            },
            {
                title: 'Unlimited Reports on the Analytics Tool',
                icon: 'fa-file-alt',
                content: 'AcentRe doesn\'t limit your reporting capabilities.Our data analytics tool empowers you to generate an unlimited number of reports on your analytics.This means that you can gain deeper insights, monitor trends, and present your findings effectively, whether you need high - level executive summaries or detailed, granular reports.'
            },
            {
                title: 'Faster ETLs with Ability to Handle Complex Client Needs',
                icon: 'fa-tachometer-alt',
                content: 'Efficiency and adaptability are two core tenets of AcentRe\'s data analytics tool.We streamline the Extract, Transform, Load(ETL) process, significantly reducing data processing times.What\'s more, our platform is designed to accommodate complex, client-specific requirements, ensuring that your data analysis and reporting align precisely with your clients\' unique needs.'
            }
        ]
    }
)

</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white">
            <div class="font-sans mx-auto max-w-7xl px-6 py-5 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 class="font-sans text-3xl font-semibold tracking-tight text-black">
                    Adopt a deliberate data strategy with <br> <span class="text-brand-primary">Acentria's Data Analytics
                        tool</span>
                </h2>
                <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a href="#"
                        class="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Book a demo
                    </a>
                </div>
            </div>
        </div>

        <ReFeatures :content="ReinsuranceFeatureContent" />

        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
