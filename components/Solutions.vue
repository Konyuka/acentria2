<script setup>
const props = defineProps({
    menus: Array,
    data: Array,
});

const selectedMenu = ref(props.menus[0].tag)
const menuOptions = ref(null)

const gridClass = computed(() => {
    const length = menuOptions.value?.length;
    let columns;
    if (length <= 4) {
        columns = length;
    } else {
        columns = Math.ceil(length / Math.ceil(length / 4));
    }
    return `lg:grid-cols-${columns}`;
})

const setMenu = (menu) => {
    selectedMenu.value = menu
    menuOptions.value = props.data[menu]
}

onMounted(() => {
    menuOptions.value = props.data[selectedMenu.value]
})

</script>

<template>
    <div>
        <div class="grid grid-cols-3 gap-10 mb-5">
            <div>
                <div class="grid md:grid-cols-1 gap-4 mb-5">
                    <button v-for="menu in menus" @click="setMenu(menu.tag)"
                        :class="selectedMenu === menu.tag ? 'bg-brand-primary text-white' : 'bg-black text-white'"
                        class="relative text-md shadow-2xl button-animation inline-flex items-center justify-center rounded-sm transition-colors duration-300 focus:outline-none hover:bg-black hover:text-white focus:ring-brand-primary-dark px-4 py-2">
                        <i :class="menu.icon" class="mr-3"></i> {{ menu.name }}
                        <i v-if="selectedMenu === menu.tag" class="absolute right-2 fas fa-arrow-right text-white"></i>
                    </button>
                </div>
            </div>

            <div class="col-span-2">
                <div class=" h-auto rounded-md shadow-xl p-5">

                    <div class="grid grid-cols-3 gap-x-5 gap-y-10">
                        <NuxtLink :href="item.link" v-for="item in menuOptions" class="flex p-2 bg-black shadow-2xl rounded-md justify-center !text-center hover:scale-90 duration-700 ease-in-out">
                            <i :class="item.icon" class="text-brand-primary text-md pb-0 pr-2"></i>
                            <span class="text-white text-sm -mt-1">{{ item.name }}</span>
                        </NuxtLink>
                    </div>

                </div>

                <!-- <div :class="[gridClass]" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <NuxtLink :href="item.link" v-for="item in menuOptions"
                        class="button-animation border-t-8 border-solid border-black shadow-2xl m-auto flex min-h-fit md:min-h-auto rounded-md bg-white/30 px-5 py-2 w-full h-full">
                        <div class="font-sans flex h-fit flex-col w-full">
                            <div class="flex flex-row justify-between">
                                <h4 id="" class="text-lg font-semibold">
                                    {{ item.name }}
                                </h4>
                                <i :class="item.icon" class="text-brand-primary text-md pb-0"></i>
                            </div>
                            <div class="mt-4">
                                <p class="text-md leading-4 text-gray-600">
                                    {{ item.content }}
                                </p>
                            </div>
                        </div>
                    </NuxtLink>
                </div> -->
            </div>

        </div>

    </div>
</template>

<style scoped></style>