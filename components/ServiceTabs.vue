m<script setup>
const props = defineProps({
    serviceHeading: String,
    menus: Array,
    data: Array,
});

const selectedMenu = ref(props.menus[0].tag)
const menuOptions = ref(null)

const currentRoute = computed(() => {
    const route = useRoute();
    return route.path;
})

const gridCols =  computed(() => {
  
    if (currentRoute.value === '/acentria-group-reinsurance') {
        return 'grid-cols-4'
    }else{
        return 'grid-cols-2'
    }
})

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
    <div class="container py-5">

        <h2 v-html="serviceHeading" class="font-sans section-heading pb-5">
        </h2>

        <div :class="gridCols" class="grid gap-4 pb-5">
            <button v-for="menu in menus" @click="setMenu(menu.tag)"
                :class="selectedMenu === menu.tag ? 'bg-brand-primary text-white' : 'bg-black text-white'"
                class="card-heading button-animation inline-flex items-center justify-center rounded-sm hover:bg-brand-primary hover:text-white px-4 py-2">
                <i :class="menu.icon" class="mr-3"></i> {{ menu.name }}
            </button>
        </div>

        <div :class="[gridClass]" class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
            <NuxtLink :href="item.link" v-for="item in menuOptions"
                class="button-animation border-t-2 border-solid border-gray-200 shadow-2xl m-auto flex min-h-fit md:min-h-auto rounded-md bg-white/30 px-5 py-2 w-full h-full">
                <div class="font-sans flex h-fit flex-col w-full">
                    <div class="flex flex-row justify-between card-heading mb-3">
                        <h4 v-html="item.name"></h4>
                        <i :class="item.icon" class="text-brand-primary"></i>
                    </div>
                    <div class="content">
                        <p>
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped></style>