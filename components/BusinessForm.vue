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

            <div v-show="stage == 1" class="flex flex-col gap-2">
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
                    <p class="text-md italic text-gray-600">Optional Fields</p>
                </div>
                <div class="mat-input ">
                    <label for="food">Company Name</label>
                    <input id="food" type="text" placeholder="Company XYZ" />
                </div>
                <div class="mat-input ">
                    <label for="food">Niche Industry</label>
                    <input id="food" type="text" placeholder="Real Estate" />
                </div>
                <div class="mat-input ">
                    <label for="food">Annual Revenue</label>
                    <input id="food" type="text" placeholder="500,000 - 1,000,000 USD" />
                </div>

                <div>
                    <button @click="setStage(3)"
                        class="mt-5 button-animation text-brand-primary group text-xl font-semibold">
                        Proceed
                        <i class="ml-3 text-[20px] group-hover:text-brand-primary fas fa-arrow-right text-gray-500"></i>
                    </button>
                </div>

            </div>

            <div v-show="stage == 3" class="flex flex-col gap-2">


                <div class="mat-input ">
                    <label for="description">Nature of the Inquiry</label>
                    <textarea id="description" type="textarea" placeholder="I need clarification on..." />
                </div>
                <div class="my-3">
                    <p class="text-md italic text-gray-600">
                        Please describe the services or products you are interested in.
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
                    <label for="food">Specific Requirements</label>
                    <textarea id="food" type="textarea" placeholder="You can paste links too..." />
                </div>
                <div class="my-3">
                    <p class="text-md italic text-gray-600">
                        Any particular needs or specifications you have.
                    </p>
                </div>

                <div class="col-span-full font-sans">
                    <label for="cover-photo" class="block text-md font-semibold text-gray-700">Document Uploads</label>
                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div class="text-center">
                            <i class="fas fa-folder text-gray-500 text-xl"></i>
                            <div class="mt-4 flex text-sm/6 text-gray-600">
                                <label for="file-upload"
                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-brand-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-primary focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Attech relevant files</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs/5 text-gray-600">PDF, Word, Excel, JPG up to 10MB</p>
                        </div>
                    </div>
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
                        We look forward to hearing from you and <br> <span class="text-brand-primary">discussing how
                            we
                            can
                            support your business.</span>
                    </h1>
                    <p class="text-md italic text-gray-600">
                        Thank you for considering Acentria.
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