<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div class="hidden md:block">
        <section class="relative py-10">
            <div class="container px-4">
                <div class="font-sans container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0">
                    <div v-for="(item, index) in data" :key="index"
                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                        <div class="flex h-fit flex-col">
                            <i :class="item.icon" class="text-brand-primary text-4xl pb-4" translate="no"></i>
                            <div>
                                <h4
                                    class="subheading-class pb-4 md:pb-5">
                                   {{ item.name }}
                                </h4>
                            </div>
                            <p
                                class="text-light-content text-xs leading-normal">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>