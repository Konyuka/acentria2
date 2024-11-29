<script setup>
const route = useRoute();
const currentRoute = computed(() => route.path);

const company = computed(() => {
    if (currentRoute.value == '/acentria-group-insurance') {
        return 'Acentria Insurance Brokers'
    } else if (currentRoute.value == '/acentria-group-reinsurance') {
        return 'Acentria Reinsurance Brokers'

    } else if (currentRoute.value == '/acentria-group-actuarial') {
        return 'Acentria Actuarial & Investments'

    } else {
        return 'Acentria Group'
    }
})
</script>

<template>
    <section class="relative py-5 mx-auto container">
        <div class="">
            <div class="pb-2 text-left">
                <h2 id="" class="heading-class lg:pb-4">
                    Let’s <span class="text-brand-primary">Talk</span>
                </h2>
            </div>
            <div class="my-5 grid grid-cols-1 gap-5 lg:grid-cols-form-block">

                <div class="h-fit rounded-xl bg-black px-5 md:px-12 py-5 md:py-14 shadow-card">

                    <div>
                        <img alt="Image of null" loading="lazy" decoding="async" data-nimg="1"
                            style="color: transparent; object-fit: cover"
                            src="https://www.shutterstock.com/shutterstock/photos/2312975601/display_1500/stock-photo-portrait-black-woman-and-smile-in-call-center-for-telemarketing-customer-service-or-business-in-2312975601.jpg"
                            class="rounded-xl w-full h-[30vh]" />
                    </div>
                    <h5 class="mt-2 text-[13px] text-white leading-normal pb-2">
                        Interested in learning more about how {{ company }} can support your business? Fill in your
                        details, and one of our experts will reach out to you with personalized information on our
                        comprehensive services. Let’s start a conversation.
                    </h5>
                </div>

                <form
                    class="font-sans border-brand-gray-100 rounded-xl border bg-brand-white px-2 md:px-10 py-5 shadow-card">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div class="relative pb-2">
                            <label for="FirstName" class="subheading-class pl-2">First
                                name</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input name="FirstName" id="FirstName" names="First Name"
                                    class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 names:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                        <div class="relative pb-2">
                            <label for="LastName" class="subheading-class pl-2">Last
                                name</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <input name="LastName" id="LastName" names="Last Name"
                                    class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 names:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
                        <div class="relative pb-2">
                            <label for="WorkEmail" class="subheading-class pl-2">
                                Email address
                            </label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="material-symbols-outlined text-2xl text-brand-primary"
                                        translate="no">mail</i>
                                </div>
                                <input name="WorkEmail" id="WorkEmail" names="Email Address"
                                    class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 names:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                        <div class="relative pb-2">
                            <label for="PhoneNumber" class="subheading-class pl-2">Phone
                                number</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="material-symbols-outlined text-2xl text-brand-primary"
                                        translate="no">phone</i>
                                </div>
                                <input name="PhoneNumber" id="PhoneNumber" names="+254 712 123 123"
                                    class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 names:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 false mt-5">
                        <div class="relative pb-2">
                            <label for="CompanyName" class="subheading-class pl-2 ">
                                Company name</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <i class="material-symbols-outlined text-2xl text-brand-primary"
                                        translate="no">business</i>
                                </div>
                                <input name="CompanyName" id="CompanyName" names="Your company"
                                    class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 names:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                            </div>
                        </div>
                    </div>

                    <p class="leading-tight mt-2 text-[12px] italic text-gray-400">
                        By submitting this form, you agree to receive the
                        information requested as well as sales and/or marketing
                        communication on resources, news, and events related to
                        Acentria Group.
                    </p>

                    <div class="mt-5">
                        <NuxtLink href="/meet-the-team"
                            class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                            Lets Talk
                            <i class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                    </div>


                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>