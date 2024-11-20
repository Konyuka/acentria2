<script setup>
const props = defineProps({
    menus: Array,
    data: Array,
});

const selectedMenu = ref(props.menus[0].tag)
const menuOptions = ref(null)

const gridClass = computed(()=>{
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

        <div class="grid md:grid-cols-3 gap-4 mb-5">

            <button v-for="menu in menus" @click="setMenu(menu.tag)"
                :class="selectedMenu === menu.tag ? 'bg-brand-primary text-white' : 'bg-white/40 text-black'"
                class="subheading-class shadow-2xl button-animation inline-flex items-center justify-center rounded-sm transition-colors duration-300 focus:outline-none hover:bg-black hover:text-white focus:ring-brand-primary-dark px-4 py-3 ">
                <i :class="menu.icon" class="mr-3"></i> {{ menu.name }}
            </button>

        </div>

        <div :class="[gridClass]" class="container grid grid-cols-1 md:grid-cols-2 gap-4 py-0">

            <NuxtLink :href="item.link" v-for="item in menuOptions"
                class="button-animation border-t-8 border-solid border-black shadow-2xl m-auto flex min-h-fit md:min-h-auto  rounded-md bg-white/30 px-5 py-2  w-full h-full">
                <div class="font-sans flex h-fit flex-col">


                    <div class="flex flex-row justify-between w-full">
                        <div>
                            <h4 id="" class="text-[12px] font-semibold">
                                {{ item.name }}
                            </h4>
                        </div>
                        <div>
                        <i class="material-symbols-outlined text-brand-primary text-xl pb-0">{{item.icon}}</i>
                        </div>
                    </div>
                    <div class="">
                        <p class="text-[12px] leading-4  text-white">
                            {{ item.content }}
                        </p>
                        <i
                            class=" fas fa-arrow-right mt-1 font-bold text-left right-0 text-lg group-hover:text-brand-primary text-black duration-700"></i>
                    </div>
                </div>
            </NuxtLink>

        </div>

    </div>
</template>

<style scoped></style>