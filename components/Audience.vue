<script setup>
const props = defineProps({
    InsuranceCardsContent: Object,
})

</script>

<template>
    <div class="bg-white">
        <section id="" class="relative py-4 lg:py-10">
            <div class="container px-4">
                <div class="pb-7 text-left">
                    <h1 v-html="InsuranceCardsContent.title"
                        class="font-sans  text-2xl text-black font-semibold">
                    </h1>
                </div>
                <div>
                    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-0">
                        <div v-for="user in InsuranceCardsContent.users" :key="user.name"
                            class="shadow-2xl group button-animation border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit rounded-xl bg-white p-5 w-full h-full">
                            <div class="font-sans flex h-fit flex-col">
                                <div class="flex justify-between">
                                    <h4 id="" class="font-sans subheading-class font-semibold">
                                        {{ user.name }}
                                    </h4>
                                    <i class="material-symbols-outlined text-brand-primary text-4xl pb-2"
                                        translate="no">health_and_safety</i>
                                </div>
                                <p class="font-sans text-sm text-gray-700 leading-tight">
                                    {{ user.description }}
                                </p>
                                <!-- <button
                                    class=" group-hover:scale-90 rounded duration-200 px-3 py-1 whitespace-nowrap bg-black/20 text-black group-hover:bg-brand-red-2 active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 mt-2 flex font-semibold"
                                    type="submit">
                                    <div class="flex items-center justify-center w-full">
                                        <div class="px-2 text-center text-[12px]">
                                            Get a Quote
                                        </div>
                                        <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                                            fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                            <g fill-rule="evenodd">
                                                <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                                <path class="transition-all duration-75 translate-x-0 transform-none"
                                                    d="M1 1l4 4-4 4"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>