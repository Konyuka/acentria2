<script setup>
// import CountUp from 'vue-countup-v2';
</script>

<template>
    <div class="container mx-auto max-w-6xl py-10">
        <div class="text-center mb-10">
            <h2 class="text-2xl font-semibold text-white">
                Top Choice for Professional <span class="text-brand-primary">Services and Client Satisfaction</span>
            </h2>
        </div>
        <div id="stats" class="text-white font-sans">
            <div class="flex flex-wrap justify-center gap-16">
                <div class="flex items-center justify-center mb-12">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                        <span class="flex text-2xl font-semibold">
                            <CountUp :end-val="13" />k+
                        </span>
                        <p class="text-base md:text-xl font-semibold">
                            Customers
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center mb-12">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                        <span class="flex text-2xl font-semibold">
                            <CountUp :end-val="10" />+
                        </span>
                        <p class="text-base md:text-xl font-semibold">
                            Years
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center mb-12">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                        <span class="flex text-2xl font-semibold">
                            <CountUp :end-val="5" />+
                        </span>
                        <p class="text-base md:text-xl font-semibold">
                            Awards
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center mb-12">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                        <span class="flex text-2xl font-semibold">
                            <CountUp :end-val="5" />+
                        </span>
                        <p class="text-base md:text-xl font-semibold">
                            Countries
                        </p>
                    </div>
                </div>
                <div class="flex items-center justify-center mb-12">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                        <span class="flex text-2xl font-semibold">
                            <CountUp :end-val="13" />h
                        </span>
                        <p class="text-base md:text-xl font-semibold">
                            Support
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