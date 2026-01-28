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

const wordings = computed(() => {
    if (currentRoute.value == '/insurance/health-insurance') {
        const words = {
            title: 'Get Your Health <br><span class="text-brand-primary">Insurance  Quote Today</span>',
            content: '<b>Secure your peace of mind</b> with our <b>affordable</b> and <b>reliable health insurance plans</b>. Let us walk with you toward a <b>healthier</b>, <b>happier future</b>.',
        }
        return words
    } else if (currentRoute.value == '/insurance/motor-insurance') {
        const words = {
            title: 'Get a Motor <br><span class="text-brand-primary">Insurance  Quote Today</span>',
            content: '<p>Protect your vehicle with a <strong>trusted, reliable, and affordable motor insurance plan</strong>.</p> <p> <em>Compare quotes, choose the best plan, and get covered in minutes!</em></p>',
        }
        return words
    }
    else if (currentRoute.value == '/insurance/travel-insurance') {
        const words = {
            title: 'Get a Travel <br><span class="text-brand-primary">Insurance  Quote Today</span>',
            content: 'Wherever you go, we go with you. Let’s ensure your journey is safe, secure, and stress-free. Compare travel insurance plans and get covered today!',
        }
        return words
    }
    else if (currentRoute.value == '/insurance/international-medical') {
        const words = {
            title: 'Get International  <br><span class="text-brand-primary">Medical Insurance Quote Today!</span>',
            content: 'Your health is your greatest asset. Wherever you go, we ensure you’re covered.  Compare international medical insurance plans and get covered today!',
        }
        return words
    }
    else if (currentRoute.value == '/insurance/golfers-insurance') {
        const words = {
            title: 'Get a Golfer’s <br><span class="text-brand-primary"> Insurance Quote Today!</span>',
            content: 'Your game deserves the best protection. Let’s ensure every swing, every round, and every achievement is backed by smart coverage. Compare golfer’s insurance plans and get covered today!',
        }
        return words
    }
    else {
        const words = {
            title: 'Engage <span class="text-brand-primary">an Expert</span>',
            content: 'Interested in learning more about how we can support your business? Fill in your details, and one of our experts will reach out to you with personalized information on our comprehensive services. Let’s start a conversation.',
        }
        return words
    }
})


</script>

<template>
    <section class="relative py-5 mx-auto container">
        <div class="text-left">
            <h2 class="section-heading" v-html="wordings.title">

            </h2>
        </div>

        <div class="py-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div class="h-fit rounded-md bg-black px-2 py-5 md:py-14 shadow-card">
                <div>
                    <NuxtImg format="webp" alt="Image of null" loading="lazy" decoding="async" data-nimg="1"
                        style="color: transparent; object-fit: cover" src="/img/Talk to Us.avif"
                        class="rounded-xl w-full h-[45vh]" />
                </div>
                <h5 class="content text-white py-2" v-html="wordings.content">

                </h5>
            </div>

            <form
                class="font-sans border-brand-gray-100 rounded-xl border bg-brand-white px-2 md:px-10 py-5 shadow-card">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div class="relative pb-2">
                        <label for="FirstName" class="text-sm font-semibold pl-2">First name</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-user text-md text-brand-primary"></i>
                            </div>
                            <input name="FirstName" id="FirstName"
                                class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="relative pb-2">
                        <label for="LastName" class="text-sm font-semibold pl-2">Last name</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-user text-md text-brand-primary"></i>
                            </div>
                            <input name="LastName" id="LastName"
                                class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
                    <div class="relative pb-2">
                        <label for="WorkEmail" class="text-sm font-semibold pl-2">Email address</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-envelope text-md text-brand-primary"></i>
                            </div>
                            <input name="WorkEmail" id="WorkEmail"
                                class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="relative pb-2">
                        <label for="PhoneNumber" class="text-sm font-semibold pl-2">Phone number</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-phone text-md text-brand-primary"></i>
                            </div>
                            <input name="PhoneNumber" id="PhoneNumber"
                                class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 mt-5">
                    <div class="relative pb-2">
                        <label for="CompanyName" class="text-sm font-semibold pl-2">Company name</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-building text-md text-brand-primary"></i>
                            </div>
                            <input name="CompanyName" id="CompanyName"
                                class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <p class="small-text text-[10px] mt-2 italic">
                    By submitting this form, you agree to receive the information requested as well as sales and/or
                    marketing communication on resources, news, and events related to Acentria Group.
                </p>

                <div class="mt-10">
                    <NuxtLink to="/meet-the-team" class="mt-5">
                        <AppButton title="Let's Talk" />

                    </NuxtLink>
                </div>
            </form>
        </div>

    </section>
</template>

<style scoped>
@media (max-width: 768px) {
    .text-2xl {
        font-size: 1.5rem;
    }

    .text-4xl {
        font-size: 2.25rem;
    }

    .text-base {
        font-size: 1rem;
    }
}
</style>
