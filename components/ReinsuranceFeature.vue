<script setup>

const props = defineProps({
    content: Object
})

const styledTitle = computed(()=>{
    return splitAndStyle(props.content.title);
})

const splitAndStyle = (text) => {
    const words = text.split(' ');
    const half = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, half).join(' ');
    const secondHalf = words.slice(half).join(' ');
    return `${firstHalf} <span class="text-brand-primary">${secondHalf}</span>`;
}


</script>

<template>

    <div>
        <div class="overflow-hidden bg-white py-4 sm:py-6 lg:py-8">
            <div class="container mx-auto">
                <div
                    class="font-sans mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <!-- <h2 class="text-base font-semibold leading-7 text-brand-primary">Acentria Reinsurance Brokers</h2> -->
                            <p v-html="styledTitle"
                                class="mt-2 section-heading">
                            </p>
                            <p class="mt-4 sm:mt-6 text-xs text-black leading-normal">
                                {{ content.content }}
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center lg:justify-end">
                        <NuxtImg format="webp"  :src="content.image" alt="Product screenshot"
                            class="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:h-1/4" />
                    </div>
                </div>

                
            </div>
        </div>
    </div>

</template>

<style></style>