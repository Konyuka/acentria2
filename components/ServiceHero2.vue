<script setup>
const props = defineProps({
  content: Object,
});

</script>

<template>
    <div class="relative h-[95vh] border-b-4 border-brand-primary">
        <div>
            <video autoplay muted loop class="drop-shadow-md w-full h-[95vh] object-cover fixed top-0 left-0 z-[-1]"
                :src="content.vid" style="color: transparent">
                Your browser does not support the video tag.
            </video>
            <!-- Overlay div -->
            <div class="absolute inset-0 bg-black opacity-20 h-[95vh]"></div>
        </div>
        <div>
            <div class="absolute my-auto h-full left-0 container content-center align-middle justify-center">
                <div
                    class="flex flex-col items-center bg-cover px-4 py-6 text-center lg:px-10 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div class="max-w-2xl">
                        <h1 v-html="content.title"
                            class="font-sans tracking-normal text-[42px]  text-white font-semibold leading-tight lg:leading-tight">
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>