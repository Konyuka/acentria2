<template>
    <div class="lg:border-b lg:border-t lg:border-gray-200">
        <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
            <ol role="list"
                class="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
                <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative overflow-hidden lg:flex-1">
                    <div
                        :class="[stepIdx === 0 ? 'rounded-t-md border-b-0' : '', stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '', 'overflow-hidden border border-gray-200 lg:border-0']">
                        <button v-if="step.status === 'complete'" @click="setMenu('mission')" class="group">
                            <span :class="[currentMenu === 'mission' ? 'bg-brand-primary' : 'bg-transparent']"
                                class="absolute left-0 top-0 h-full w-1 group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                aria-hidden="true" />
                            <span
                                :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium']">
                                <span class="flex-shrink-0">
                                    <span :class="[currentMenu === 'mission' ? 'bg-brand-primary' : 'bg-gray-500']"
                                        class="flex h-10 w-10 items-center justify-center rounded-full">
                                        <i class="text-white fas fa-compass text-xl" aria-hidden="true"></i>
                                    </span>
                                </span>
                                <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
                                    <span class="text-4xl font-medium text-center">{{ step.name }}</span>
                                    <!-- <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                                </span>
                            </span>
                        </button>
                        <button v-else-if="step.status === 'current'" @click="setMenu('vision')" class="group">
                            <span :class="[currentMenu === 'vision' ? 'bg-brand-primary' : 'bg-transparent']"
                                class="absolute left-0 top-0 h-full w-1 group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                aria-hidden="true" />
                            <span
                                :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium']">
                                <span class="flex-shrink-0">
                                    <span :class="[currentMenu === 'vision' ? 'bg-brand-primary' : 'bg-gray-500']"
                                        class="flex h-10 w-10 items-center justify-center rounded-full">
                                        <i class="text-white fas fa-eye text-xl" aria-hidden="true"></i>
                                    </span>
                                </span>
                                <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
                                    <span class="text-4xl font-medium text-center">{{ step.name }}</span>
                                    <!-- <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                                </span>
                            </span>
                        </button>
                        <button v-else @click="setMenu('values')" class="group">
                            <span :class="[currentMenu === 'values' ? 'bg-brand-primary' :'bg-transparent']"
                                class="absolute left-0 top-0 h-full w-1 group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                aria-hidden="true" />
                            <span
                                :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'flex items-start px-6 py-5 text-sm font-medium']">
                                <span class="flex-shrink-0">
                                    <span :class="[currentMenu === 'values' ? 'bg-brand-primary' : 'bg-gray-500']"
                                        class="flex h-10 w-10 items-center justify-center rounded-full">
                                        <i class="text-white fas fa-gem text-xl" aria-hidden="true"></i>
                                    </span>
                                </span>
                                <span class="ml-4 mt-0.5 flex min-w-0 flex-col">
                                    <span class="text-4xl font-medium text-center">{{ step.name }}</span>
                                    <!-- <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                                </span>
                            </span>
                        </button>

                        <template v-if="stepIdx !== 0">
                            <!-- Separator -->
                            <div class="absolute inset-0 left-0 top-0 hidden w-3 lg:block" aria-hidden="true">
                                <svg class="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none"
                                    preserveAspectRatio="none">
                                    <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor"
                                        vector-effect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </template>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";



const currentMenu = ref('mission');
defineExpose({
    currentMenu,
})

const setMenu = (menu) => {
    currentMenu.value = menu;
}
const steps = [
    { id: '01', name: 'Our Mission', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
    { id: '02', name: 'Our Vision', description: 'Cursus semper viverra.', href: '#', status: 'current' },
    { id: '03', name: 'Our Values', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
]
</script>