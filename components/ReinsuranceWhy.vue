<script setup>

const props = defineProps({
    content: Object
})

const reinsuranceFeatures = [
    {
        icon: 'fas fa-lightbulb',
        title: 'Innovation',
        description: 'We are passionate about innovation because we believe it is a driving force that fuels creativity, curiosity, and the pursuit of novel ideas and solutions.'
    },
    {
        icon: 'fas fa-calculator',
        title: 'Data Analytics',
        description: 'Our ability to use data, advanced analytics, and technology to extract valuable insights helps us guide businesses to make informed decisions.'
    },
    {
        icon: 'fas fa-eye',
        title: 'Distinctive Insight',
        description: 'We offer distinctive consumer insight capabilities to help our clients understand the needs and preferences of their clients.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Better Results',
        description: 'Achieving better results and long-term prosperity is a shared goal for Acentria Group, individuals, organizations, and societies alike.'
    }
];

</script>

<template>
    <div class="bg-white py-10">
        <div class="container mx-auto">
            <div class="font-sans mx-5 md:mx-auto">
                <div class="mx-auto text-left">
                    <h2 class="text-2xl font-bold text-gray-900">
                        Why Partner <span class="text-brand-primary">With Acentria</span>
                    </h2>
                </div>
                <p class="font-sans mx-auto mt-6 text-left text-xs leading-normal text-secondary">
                    At Acentria, we’re not just offering reinsurance; we’re delivering peace of mind wrapped in a
                    tailored experience. Our streamlined process isn’t just easy – it’s your shortcut to worry-free
                    coverage. We’re not just about coverage; we’re about your confidence, your security, and a
                    reinsurance experience that goes beyond expectations.
                </p>

                <div class="isolate mx-5 md:mx-auto mt-10 grid gap-6 md:grid-cols-4 mb-10">

                    <div v-for="feature in reinsuranceFeatures"
                        class="rounded-md px-4 py-6 ring-1 ring-brand-primary shadow-xl">
                        <div class="flex justify-between">
                            <h2 class="mt-3 text-center text-lg font-semibold text-gray-900">
                                {{ feature.title }}
                            </h2>
                            <h2 class="text-center text-lg font-semibold text-gray-900">
                                <i :class="feature.icon" class="text-xl text-brand-primary"></i>
                            </h2>
                        </div>
                        <p class="text-left mt-2 text-sm leading-relaxed">
                            {{ feature.description }}
                        </p>
                    </div>



                </div>

            </div>
        </div>
    </div>
</template>

<style></style>