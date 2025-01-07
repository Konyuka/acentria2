<script setup>
const stage = ref(1)

const setStage = (number) => {
    console.log(stage)
    stage.value = parseInt(number) 
}
</script>

<template>
    <div class="!font-sans">
        <div>

            <div v-show="stage==1" class="flex flex-col gap-2">
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
                    <p class="text-md italic text-gray-600">So we can get in touch with you promptly.</p>
                </div>
                <div>
                    <button @click="setStage(2)"
                        class="mt-2 button-animation text-brand-primary group text-xl font-semibold">
                        Proceed
                        <i class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                    </button>
                </div>
            </div>

            <div v-show="stage == 2" class="flex flex-col gap-2">
                <div class="my-3">
                    <p class="text-md italic text-gray-600">
                        Please input your target department
                        <br />
                        Helps channel your issue to the right support
                    </p>
                </div>
                <div class="flex gap-20 ">


                    <div class="select">
                        <div class="selected" data-default="All" data-finance="Finance" data-claims="Claims"
                            data-client-relations="Client Relations" data-media-relations="Media Relations"
                            data-actuarial="Actuarial" data-reinsurance="Reinsurance" data-technology="Technology"
                            data-investment="Investment" data-other="Other" data-three="option-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="arrow">
                                <path
                                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z">
                                </path>
                            </svg>
                        </div>
                        <div class="options">
                            <div title="all">
                                <input id="all" name="option" type="radio" checked="" />
                                <label class="option" for="all" data-txt="All"></label>
                            </div>
                            <div title="finance">
                                <input id="finance" name="option" type="radio" />
                                <label class="option" for="finance" data-txt="Finance"></label>
                            </div>
                            <div title="claims">
                                <input id="claims" name="option" type="radio" />
                                <label class="option" for="claims" data-txt="Claims"></label>
                            </div>
                            <div title="client-relations">
                                <input id="client-relations" name="option" type="radio" />
                                <label class="option" for="client-relations" data-txt="Client Relations"></label>
                            </div>
                            <div title="media-relations">
                                <input id="media-relations" name="option" type="radio" />
                                <label class="option" for="media-relations" data-txt="Media Relations"></label>
                            </div>
                            <div title="actuarial">
                                <input id="actuarial" name="option" type="radio" />
                                <label class="option" for="actuarial" data-txt="Actuarial"></label>
                            </div>
                            <div title="reinsurance">
                                <input id="reinsurance" name="option" type="radio" />
                                <label class="option" for="reinsurance" data-txt="Reinsurance"></label>
                            </div>
                            <div title="technology">
                                <input id="technology" name="option" type="radio" />
                                <label class="option" for="technology" data-txt="Technology"></label>
                            </div>
                            <div title="investment">
                                <input id="investment" name="option" type="radio" />
                                <label class="option" for="investment" data-txt="Investment"></label>
                            </div>
                            <div title="other">
                                <input id="other" name="option" type="radio" />
                                <label class="option" for="other" data-txt="Other"></label>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h1 @click="setStage(3)"
                            class="mt-2 button-animation text-brand-primary group text-xl font-semibold">
                            Proceed
                            <i
                                class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                        </h1>
                    </div>

                </div>





            </div>

            <div v-show="stage == 3" class="flex flex-col gap-2">


                <div class="mat-input ">
                    <label for="description">Description of the Issue</label>
                    <textarea id="description" type="textarea" placeholder="I need assitance on..." />
                </div>
                <div class="my-3">
                    <p class="text-md italic text-gray-600">
                        Please describe the problem or assistance you need.
                    </p>
                </div>


                <div>
                    <button @click="setStage(4)"
                        class="mt-2 button-animation text-brand-primary group text-xl font-semibold">
                        Proceed
                        <i class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                    </button>
                </div>
            </div>

            <div v-show="stage == 4" class="flex flex-col gap-2">


                <div class="mat-input ">
                    <label for="food">Relevant Details</label>
                    <textarea id="food" type="textarea" placeholder="You can paste links too..." />
                </div>
                <div class="my-3">
                    <p class="text-md italic text-gray-600">
                        Any specific information that might help us understand your situation better.
                    </p>
                </div>


                <div>
                    <button @click="setStage(5)"
                        class="mt-2 button-animation text-brand-primary group text-xl font-semibold">
                        Proceed
                        <i class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                    </button>
                </div>
            </div>

            <div v-show="stage == 5" class="flex flex-col gap-2">
                <div class="my-3">
                    <p class="text-md italic text-gray-600">
                        Let us know how you would like us to reach you
                    </p>
                </div>
                <div class="flex gap-20 ">

                    <div class="checkbox-wrapper">
                        <input checked="" type="checkbox" class="check" id="check1-61">
                        <label for="check1-61" class="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                                        stroke="black" stroke-width="3" fill="none" class="path1"></path>
                                </g>
                            </svg>
                            <span class="text-black font-medium">Mobile Phone</span>
                        </label>
                    </div>

                    <div class="checkbox-wrapper">
                        <input checked="" type="checkbox" class="check" id="check1-62">
                        <label for="check1-62" class="label">
                            <svg width="45" height="45" viewBox="0 0 95 95">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
                                        stroke="black" stroke-width="3" fill="none" class="path2"></path>
                                </g>
                            </svg>
                            <span class="text-black font-medium">Email Address</span>
                        </label>
                    </div>



                </div>

                <div>
                    <h1 @click="setStage(6)"
                        class="mt-10 button-animation text-brand-primary group text-3xl font-semibold">
                        Submit
                        <i class="ml-3 text-3xl text-brand-primary fas fa-paper-plane"></i>
                    </h1>
                </div>




            </div>

            <div v-show="stage == 6" class="flex flex-col gap-2">



                <div class="mt-20 flex flex-col justify-center items-center">
                    <h1 class="text-lg font-semibold text-center">
                        We are committed to resolving your issues <span class="text-brand-primary">as quickly and
                            efficiently as possible.</span>
                    </h1>
                    <p class="text-md italic text-gray-600">
                        Thank you for choosing Acentria. We look forward to assisting you.
                    </p>
                </div>


            </div>

        </div>
    </div>
</template>

<style scoped>
.checkbox-wrapper input[type="checkbox"] {
    visibility: hidden;
    display: none;
}

.checkbox-wrapper *,
.checkbox-wrapper ::after,
.checkbox-wrapper ::before {
    box-sizing: border-box;
    user-select: none;
}

.checkbox-wrapper {
    position: relative;
    display: block;
    overflow: hidden;
}

.checkbox-wrapper .label {
    cursor: pointer;
}

.checkbox-wrapper .check {
    width: 50px;
    height: 50px;
    position: absolute;
    opacity: 0;
}

.checkbox-wrapper .label svg {
    vertical-align: middle;
}

.checkbox-wrapper .path1 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: .5s stroke-dashoffset;
    opacity: 0;
}
.checkbox-wrapper .path2 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    transition: .5s stroke-dashoffset;
    opacity: 0;
}

.checkbox-wrapper .check:checked+label svg g path {
    stroke-dashoffset: 0;
    opacity: 1;
}






.select {
    width: 400px;
    cursor: pointer;
    position: relative;
    transition: 300ms;
    color: white;
    overflow: hidden;
}

.selected {
    background-color: #2a2f3b;
    height: 60px;
    padding: 10px;
    margin-bottom: 3px;
    border-radius: 5px;
    position: relative;
    z-index: 100000;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.arrow {
    position: relative;
    right: 0px;
    height: 10px;
    transform: rotate(-90deg);
    width: 25px;
    fill: white;
    z-index: 100000;
    transition: 300ms;
}

.options {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    background-color: #2a2f3b;
    position: relative;
    top: -100px;
    opacity: 0;
    transition: 300ms;
}

.select:hover>.options {
    opacity: 1;
    top: 0;
}

.select:hover>.selected .arrow {
    transform: rotate(0deg);
}

.option {
    border-radius: 5px;
    padding: 5px;
    transition: 300ms;
    background-color: #2a2f3b;
    width: 380px;
    font-size: 15px;
}

.option:hover {
    background-color: #323741;
}

.options input[type="radio"] {
    display: none;
}

.options label {
    display: inline-block;
}

.options label::before {
    content: attr(data-txt);
}

.options input[type="radio"]:checked+label {
    display: none;
}

.options input[type="radio"]#all:checked+label {
    display: none;
}

.select:has(.options input[type="radio"]#all:checked) .selected::before {
    content: attr(data-default);
}

.select:has(.options input[type="radio"]#finance:checked) .selected::before {
    content: attr(data-finance);
}

.select:has(.options input[type="radio"]#claims:checked) .selected::before {
    content: attr(data-claims);
}

.select:has(.options input[type="radio"]#client-relations:checked) .selected::before {
    content: attr(data-client-relations);
}

.select:has(.options input[type="radio"]#media-relations:checked) .selected::before {
    content: attr(data-media-relations);
}

.select:has(.options input[type="radio"]#actuarial:checked) .selected::before {
    content: attr(data-actuarial);
}

.select:has(.options input[type="radio"]#reinsurance:checked) .selected::before {
    content: attr(data-reinsurance);
}

.select:has(.options input[type="radio"]#technology:checked) .selected::before {
    content: attr(data-technology);
}

.select:has(.options input[type="radio"]#investment:checked) .selected::before {
    content: attr(data-investment);
}

.select:has(.options input[type="radio"]#other:checked) .selected::before {
    content: attr(data-other);
}





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

.mat-input textarea {
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
.mat-input textarea:hover,
.mat-input textarea:focus {
    border-bottom-width: 2px;
    padding-bottom: calc(0.75em - 1px);
}

.mat-input input:hover {
    border-color: #121212;
}
.mat-input input:focus {
    border-color: #ed1c24;
}
.mat-input textarea:hover {
    border-color: #121212;
}
.mat-input textarea:focus {
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
.mat-input:has(textarea:focus) label {
    color: #ed1c24;
}

.mat-input:has(input:focus) label,
.mat-input:not(:has(input:placeholder-shown)) label {
    top: 0.75em;
    font-size: 0.8em;
}
.mat-input:has(textarea:focus) label,
.mat-input:not(:has(textarea:placeholder-shown)) label {
    top: 0.75em;
    font-size: 0.8em;
}

.mat-input input::placeholder {
    opacity: 0;
    transition: 0.2s;
    color: #aaa;
}
.mat-input textarea::placeholder {
    opacity: 0;
    transition: 0.2s;
    color: #aaa;
}

.mat-input input:focus::placeholder {
    opacity: 1;
}
.mat-input textarea:focus::placeholder {
    opacity: 1;
}
</style>