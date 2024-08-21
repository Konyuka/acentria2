<script setup>
const props = defineProps({
    whys: Array
})

</script>

<template>
    <div>

        <section id="" class="relative py-8 lg:py-20 bg-white text-center">
            <div class="container px-4">
                <h2
                    class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                    Why work with <span class="text-brand-primary">Acentria</span>
                </h2>
            </div>
        </section>
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0 mb-10">

            <div v-for="item in whys"
                class="button-animation border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                <div class="font-sans flex h-fit flex-col">

                    <i class="material-symbols-outlined text-brand-primary text-4xl pb-4" translate="no">{{ item.icon
                        }}</i>
                    <div>
                        <h4 id=""
                            class="font-sans text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                            {{ item.name }}
                        </h4>
                    </div>
                    <p
                        class="font-sans text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                        {{ item.content }}
                    </p>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped></style>