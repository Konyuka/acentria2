<script setup>
const props = defineProps({
  content: Object,
});

</script>

<template>
    <div class="relative w-full h-auto bg-cover bg-center bg-no-repeat false mt-20" style="
                  background-image: url(https://cdn.sanity.io/images/33u1mixi/production/9586fc11ddcb60222de682cdb07fe9d57103448b-1440x595.svg?fit=max&amp;auto=format);
                ">
        <div class="container">
            <div
                class="flex flex-col items-center bg-cover px-4 py-6 text-center lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                <div
                    class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left">
                    <div>
                        <label
                            class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight uppercase">
                            {{ content.pageTitle }}
                        </label>
                    </div>
                    <div class="w-full">
                        <h1
                            class="font-sans tracking-normal text-3xl  text-gray-900 font-semibold leading-tight lg:leading-tight">
                            {{ content.title }}
                        </h1>
                    </div>
                    <div>
                        <p
                            class="font-sans tracking-normal text-md text-gray-900 leading-tight lg:leading-tight pb-2">
                            {{ content.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>