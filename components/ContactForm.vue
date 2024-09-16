<script setup>

</script>

<template>
    <section id="register-section" class="py-8 relative">
        <div class="container px-4">
            <div class="mx-auto max-w-4xl pb-10 text-center lg:pb-16">
                <h2 id=""
                    class="font-sans text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight undefined !text-xl md:!text-4xl 2xl:text-4xl lg:pb-4">
                    Let’s talk.
                </h2>
                <p></p>
                <p></p>
            </div>
            <div class="grid grid-cols-1 gap-14 lg:grid-cols-form-block">

                <div class="h-fit rounded-xl bg-brand-primary px-12 py-14 shadow-card">
                    <h5
                        class="font-sans text-md text-white leading-tight lg:leading-tight pb-2">
                        Interested in learning more about how Acentria Group can support your business? Fill in your
                        details, and one of our experts will reach out to you with personalized information on our
                        comprehensive services. Let’s start a conversation.
                    </h5>
                </div>

                <form class="font-sans border-brand-gray-100 rounded-xl border bg-brand-white px-10 py-12 shadow-card">
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                        <div class="relative pb-7">
                            <label for="FirstName"
                                class="text-light-title block pl-2 text-sm font-semibold leading-6">First
                                name</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input name="FirstName" id="FirstName" placeholder="First Name"
                                    class="block w-full rounded-md border-0 py-2 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                        <div class="relative pb-7">
                            <label for="LastName"
                                class="text-light-title block pl-2 text-sm font-semibold leading-6">Last
                                name</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input name="LastName" id="LastName" placeholder="Last Name"
                                    class="block w-full rounded-md border-0 py-2 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                        <div class="relative pb-7">
                            <label for="WorkEmail"
                                class="text-light-title block pl-2 text-sm font-semibold leading-6">
                                Email address
                            </label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="material-symbols-outlined text-2xl text-light-icon"
                                        translate="no">mail</i>
                                </div>
                                <input name="WorkEmail" id="WorkEmail" placeholder="Work Email"
                                    class="block w-full rounded-md border-0 py-2 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                        <div class="relative pb-7">
                            <label for="PhoneNumber"
                                class="text-light-title block pl-2 text-sm font-semibold leading-6">Phone
                                number</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="material-symbols-outlined text-2xl text-light-icon"
                                        translate="no">phone</i>
                                </div>
                                <input name="PhoneNumber" id="PhoneNumber" placeholder="+1 555 555 5555"
                                    class="block w-full rounded-md border-0 py-2 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 false">
                        <div class="relative pb-7">
                            <label for="CompanyName"
                                class="text-light-title block pl-2 text-sm font-semibold leading-6">Your
                                company name</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="material-symbols-outlined text-2xl text-light-icon"
                                        translate="no">business</i>
                                </div>
                                <input name="CompanyName" id="CompanyName" placeholder="Your company"
                                    class="block w-full rounded-md border-0 py-2 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-base leading-normal font-sans text-light-content pl-4 text-xs">
                        By submitting this form, you agree to receive the
                        information requested as well as sales and/or marketing
                        communication on resources, news, and events related to
                        Acentria Group. You can unsubscribe at
                        any time or manage the types of communication you would
                        like to receive by visiting our
                        <a class="text-brand-primary underline" target="_blank"
                            href="#">Preference Center
                        </a>                       
                    </p>
                    <button
                        class="group rounded border-2 border-brand-primary duration-200 px-3 py-2 font-semibold whitespace-nowrap bg-brand-primary rounded text-brand-white hover:bg-brand-red-2 active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 mt-8 flex font-semibold"
                        type="submit">
                        <div class="flex items-center justify-center">
                            <div class="px-2">Let’s talk.</div>
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none"
                                        d="M1 1l4 4-4 4"></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                </form>
                <form hidden="" class="hidden" id="mktoForm_12556"></form>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>