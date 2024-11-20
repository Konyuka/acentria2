<script setup>
const props = defineProps({
    InsuranceCardsContent: Object,
})

</script>

<template>
    <div class="text-white bg-white">
        <div class="undefined">
            <section id="" class="relative py-4 lg:py-10">
                <div class="container px-4">
                    <div class="pb-10 text-left lg:pb-14">
                        <h2 v-html="InsuranceCardsContent.title"
                            class="font-sans tracking-normal text-3xl text-black font-semibold leading-tight lg:leading-tight">
                        </h2>
                    </div>
                    <div>

                        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-0">

                            <div v-for="user in InsuranceCardsContent.users" :key="user.name"
                                class="shadow-2xl group button-animation border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit rounded-xl bg-white p-5 w-full h-full">
                                <div class="font-sans flex h-fit flex-col">
                                    <div class="flex justify-between">
                                        <h4 id=""
                                            class="font-sans subheading-class font-semibold">
                                            {{ user.name }}
                                        </h4>
                                        <i class="material-symbols-outlined text-brand-primary text-4xl pb-2"
                                            translate="no">health_and_safety</i>
                                    </div>
                                    <p
                                        class="font-sans font-regular text-light-content text-xs font-normal not-italic leading-normal">
                                        {{ user.description }}
                                    </p>
                                    <button
                                        class="group-hover:scale-90 rounded border-2 border-brand-primary duration-200 px-3 py-2 whitespace-nowrap bg-brand-primary rounded text-brand-white hover:bg-brand-red-2 active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 mt-1 flex font-semibold"
                                        type="submit" data-v-inspector="components/ContactForm.vue:105:21">
                                        <div class="flex items-center justify-center !text-center w-full"
                                            data-v-inspector="components/ContactForm.vue:108:25">
                                            <div class="px-2 text-center text-xs"
                                                data-v-inspector="components/ContactForm.vue:109:29">
                                                Get a Quote
                                            </div>
                                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true"
                                                data-v-inspector="components/ContactForm.vue:110:29">
                                                <g fill-rule="evenodd"
                                                    data-v-inspector="components/ContactForm.vue:112:33">
                                                    <path class="transition-opacity opacity-0" d="M0 5h7"
                                                        data-v-inspector="components/ContactForm.vue:113:37"></path>
                                                    <path
                                                        class="transition-all duration-75 translate-x-0 transform-none"
                                                        d="M1 1l4 4-4 4"
                                                        data-v-inspector="components/ContactForm.vue:114:37"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped></style>