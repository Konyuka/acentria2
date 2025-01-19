<script setup>
const stats = ref([
    {
        number: '13k+',
        title: 'Customers'
    },
    {
        number: '10+',
        title: 'Years'
    },
    {
        number: '5+',
        title: 'Awards'
    },
    {
        number: '5+',
        title: 'Countries'
    },
    {
        number: '24h',
        title: 'Support'
    }
]);
</script>

<template>
    <div class="container py-5">
        <div class="text-left mb-10">
            <h2 class="section-heading text-white">
                Top Choice for Professional <span class="text-brand-primary">Services & Client Satisfaction</span>
            </h2>
        </div>
        <div class="text-white font-sans">
            <div class="flex flex-wrap justify-left w-full justify-around">

                <div v-for="stat in stats" class="flex items-center justify-center mb-12">
                    <div class="border-brand-divider border-l-4 !border-l-black pl-6">
                        <span class="flex text-3xl font-semibold">
                            {{ stat.number }}
                        </span>
                        <p class="section-heading text-white">
                            {{ stat.title }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
}
</style>