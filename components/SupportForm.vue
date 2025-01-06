<script setup>
const stage = ref(1)

const setStage = (stage) => {
    stage.value = stage
}
</script>

<template>
    <div class="!font-sans">
        <div>

            <div v-if="stage==1" class="flex flex-col gap-2">
                <div class="mat-input ">
                    <label for="food">Your Name</label>
                    <input id="food" type="text" placeholder="John Doe" />
                </div>
                <div class="mat-input ">
                    <label for="food">Your Mobile</label>
                    <input id="food" type="text" placeholder="+254 716 202 298" />
                </div>
                <div class="mat-input ">
                    <label for="food">Your Email</label>
                    <input id="food" type="text" placeholder="mail@example.com" />
                </div>
                <div class="my-3">
                    <p class="text-md italic">So we can get in touch with you promptly.</p>
                </div>
                <div>
                    <h1 @click="setStage(1)"
                        class="mt-2 button-animation text-brand-primary group text-xl font-semibold">
                        Proceed
                        <i class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                    </h1>
                </div>
            </div>

            <div v-if="stage == 2" class="flex flex-col gap-2">
                <div class="mat-input ">
                    <label for="food">Your Name</label>
                    <input id="food" type="text" placeholder="John Doe" />
                </div>
                <div class="mat-input ">
                    <label for="food">Your Mobile</label>
                    <input id="food" type="text" placeholder="+254 716 202 298" />
                </div>
                <div class="mat-input ">
                    <label for="food">Your Email</label>
                    <input id="food" type="text" placeholder="mail@example.com" />
                </div>
                <div class="my-3">
                    <p class="text-md italic">So that we can channel your issue </p>
                </div>
                <div>
                    <h1 @click="setStage(2)"
                        class="mt-2 button-animation text-brand-primary group text-xl font-semibold">
                        Proceed
                        <i class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                    </h1>
                </div>
            </div>




        </div>
    </div>
</template>

<style scoped>

.mat-input {
    position: relative;
    font-size: inherit;
}

.mat-input input {
    border-width: 0 0 1px;
    outline: none;
    background-color: #0000000a;
    border-radius: 4px 4px 0 0;
    padding: 1.8em 0.75em 0.75em;
    border-color: #8c8c8c;
    border-style: solid;
    font-size: inherit;
    transition: 0.1s;
    width: 600px
}

.mat-input input:hover,
.mat-input input:focus {
    border-bottom-width: 2px;
    padding-bottom: calc(0.75em - 1px);
}

.mat-input input:hover {
    border-color: #121212;
}

.mat-input input:focus {
    border-color: #ed1c24;
}

.mat-input label {
    position: absolute;
    top: 1.4em;
    left: 1em;
    pointer-events: none;
    transition: 0.2s;
    color: #0009;
}

.mat-input:has(input:focus) label {
    color: #ed1c24;
}

.mat-input:has(input:focus) label,
.mat-input:not(:has(input:placeholder-shown)) label {
    top: 0.75em;
    font-size: 0.8em;
}

.mat-input input::placeholder {
    opacity: 0;
    transition: 0.2s;
    color: #aaa;
}

.mat-input input:focus::placeholder {
    opacity: 1;
}
</style>