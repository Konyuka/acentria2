<template>
    <div class="bg-black/50 py-4 font-sans">
        <div class="px-6 lg:px-8 ml-20">
            <div class="mx-auto max-w-6xl lg:max-w-none ">
                <dl class="mx-auto max-w-2xl justify-center grid grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-4">
                    <!-- border-r-2 -->
                    <div v-for="(feature, index) in content.contacts" :key="feature.name" :class="canHaveBorder(index)"
                        class="flex flex-col">
                        <dt class="text-base font-semibold leading-7 text-white">
                            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                                <i :class="feature.icon" class=" text-white" aria-hidden="true" />
                            </div>
                            {{ feature.title }}
                        </dt>
                        <dd class="mt-1 flex flex-auto flex-col text-xs leading-7 text-white font-bold tracking-widest">
                            <p class="flex-auto" v-html="feature.description"></p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    content: Object,
})


const canHaveBorder = (index) => {
    if(index > 2) {
        return ''
    }else{
        return 'border-r-2'
    }
}
</script>