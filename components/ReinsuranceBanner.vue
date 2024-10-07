<script setup>

const props = defineProps({
    content: Object
})

</script>

<template>

    <div>
        <div class="relative isolate overflow-hidden bg-white py-10">
            <img :src="content.image" alt="Windmill"
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-black opacity-60"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-black opacity-60"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
            <div class="relative z-50 mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-7xl lg:mx-0 text-center">
                    <h2 class="font-sans text-4xl font-bold tracking-tight text-brand-primary sm:text-6xl">
                        {{ content.title }}
                    </h2>
                </div>
            </div>
        </div>
    </div>


</template>

<style></style>