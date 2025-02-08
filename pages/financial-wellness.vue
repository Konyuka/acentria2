<script setup>

const ReinsuranceBannerContent = ref({
    title: 'Financial Stability and Security',
    subTitle: 'Financial Wellness',
    image: 'https://img.freepik.com/free-photo/financial-analyst-following-real-time-stock-market-exchange-forex-global-trade-report-male-broker-analyzing-currency-statistics-with-profit-buy-sell-hedge-fund-index-money_482257-46558.jpg?t=st=1736485216~exp=1736488816~hmac=3d5525c5f6091caa674b512044d420654f0f7dd56ddf56c47aa3b322154d6eb4&w=1060',
})

const currentMenu = ref('Comprehensive');
const setMenu = (menu) => {
    currentMenu.value = menu
}
const setMobileMenu = (event) => {
    const selectedValue = event.target.value;
    currentMenu.value = selectedValue
}

const benefits = ref([
    {
        name: 'Life Insurance',
        icon: 'fas fa-heartbeat',
        description: 'Secure your family\'s future with our range of life insurance policies, including term, whole, and education life insurance.',
    },
    {
        name: 'Health Insurance',
        icon: 'fas fa-hospital',
        description: 'Access quality healthcare and protect yourself from high medical costs with our health insurance plans.',
    },
    {
        name: 'Disability Insurance',
        icon: 'fas fa-wheelchair',
        description: 'Safeguard your income with disability insurance that provides financial support in case of illness or injury.',
    },
]);

const benefits2 = ref([
    {
        name: 'Home Insurance',
        icon: 'fas fa-home',
        description: 'Protect your home and personal belongings from damage, theft, and natural disasters with our comprehensive home insurance plans.',
    },
    {
        name: 'Motor Insurance',
        icon: 'fas fa-car',
        description: 'Stay covered on the road with our auto insurance policies, offering liability, collision, and comprehensive coverage.',
    },
    {
        name: 'Business Insurance',
        icon: 'fas fa-briefcase',
        description: 'Keep your business secure with our tailored business insurance solutions, including property, liability, and workers\' compensation coverage.',
    },
]);

const specials = ref([
    {
        name: 'Personalized Financial <br/> <span class="text-brand-primary">Plans</span>',
        img: 'https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?t=st=1736484475~exp=1736488075~hmac=69cf6751c0fd2f9e45e26e6582e6d01c906c81f102765e024dd69f6ca8c05b86&w=826',
        description: 'Work with our financial advisors to create a customized plan that meets your unique needs and goals.',
    },
    {
        name: 'Retirement <br/> <span class="text-brand-primary">Planning</span>',
        img: 'https://img.freepik.com/free-vector/hand-drawn-happy-retirement-lettering_23-2148925574.jpg?t=st=1736484711~exp=1736488311~hmac=ccb898aa3503caf00625901a72ae6e8aad03bf1cb3708e4fe7ee73353dda63e9&w=900',
        description: 'Ensure a comfortable and secure retirement with our strategic retirement planning services.',
    },
    {
        name: 'Debt <br/> <span class="text-brand-primary">Management</span>',
        img: 'https://img.freepik.com/free-photo/young-african-couple-facing-financial-problem-able-pay-out-debts-desperate-male-glasses-holding-hands-his-cheeks-feeling-stressed-while-managing-family-budget-kitchen-table_273609-1980.jpg?t=st=1736484751~exp=1736488351~hmac=97ca149c453f98f2a7732b25da89b2730361fe4ee5af61712e7cfb77a444bab3&w=900',
        description: 'Get help managing and reducing debt, improving your overall financial health.',
    },
    {
        name: 'Estate <br/> <span class="text-brand-primary">Planning</span>',
        img: 'https://img.freepik.com/free-photo/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept_1387-310.jpg?t=st=1736484794~exp=1736488394~hmac=7c4a7aa4fe91952d0483189e9565027506042f64e3cb0a14b7813cfd349231e1&w=900',
        description: 'Ensure ease in management of your estate by your beneficiaries. Engage our financial and legal experts to guide you.',
    },
]);

const features = [
    {
        icon: 'fas fa-chalkboard-teacher',
        title: 'Workshops & Seminars',
        description: 'Attend our informative sessions on various financial and insurance topics to stay informed and empowered. <br> <NuxtLink to="/insights-sections" class="text-brand-primary underline italic">Link to the insights sections</NuxtLink>',
    },
    {
        icon: 'fas fa-tools',
        title: 'Online Tools & Resources',
        description: 'Access a wealth of articles, calculators, and guides to support your financial journey. <br> <NuxtLink to="/online-tools" class="text-brand-primary underline italic">Access our online tools</NuxtLink>',
    },
    {
        icon: 'fas fa-user-friends',
        title: 'One-on-One Coaching',
        description: 'Benefit from personalized coaching sessions with financial experts to address specific concerns & goals. <br> <NuxtLink to="/contact" class="text-brand-primary underline italic">Contact us today</NuxtLink>',
    },
];



</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Financial <span class="text-brand-primary">Assurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Welcome to Acentria, where financial wellness and comprehensive insurance solutions converge. Our
                mission is to empower you with the knowledge and tools you need to achieve financial stability and
                security through our tailored insurance services.
            </p>
        </div>

        <div class="container bg-white max-w-screen mx-auto py-5">
            <div class="sm:hidden px-4">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select @change="setMobileMenu($event)" id="tabs" name="tabs"
                    class="block w-full rounded-md border-gray-300 focus:border-brand-primary focus:ring-brand-primary py-2 font-semibold">
                    <option selected value="blogs">Blogs</option>
                    <option value="event">Events</option>
                </select>
            </div>
            <div class="hidden sm:block font-sans">
                <div class="divide-x divide-gray-200">
                    <nav class="-mb-px flex font-sans gap-20" aria-label="Tabs">
                        <button @click="setMenu('Comprehensive')"
                            :class="[currentMenu == 'Comprehensive' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/2 px-1 py-4 text-center text-xl font-semibold hover:text-brand-primary">
                            <i class="fas fa-images mr-2"></i> Comprehensive Coverage
                        </button>
                        <button @click="setMenu('Financial')"
                            :class="[currentMenu == 'Financial' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/2 px-1 py-4 text-center text-xl font-semibold hover:text-brand-primary">
                            <i class="fas fa-blog mr-2"></i> Financial Protection
                        </button>
                    </nav>
                </div>
            </div>
        </div>

        <div>
            <div v-if="currentMenu == 'Comprehensive'" class="py-2 px-6">
                <section class="relative py-1">
                    <div class="container px-4">
                        <h2 class="text-2xl !font-semibold text-black mb-4">
                            Comprehensive <span class="text-brand-primary"> Coverage</span>
                        </h2>
                        <div class="my-5">
                            <p class="text-sm leading-normal">
                                At Acentria, we understand that insurance is a crucial component of financial wellness.
                                Our comprehensive coverage options are designed to protect you and your loved ones from
                                unexpected events and financial hardships.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="principle in benefits"
                                class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                                <div class="flex flex-col">
                                    <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                    <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                        principle.name }}</h4>
                                    <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div v-if="currentMenu == 'Financial'" class="py-2 px-6">
                <section class="relative py-1">
                    <div class="container px-4">
                        <h2 class="text-2xl !font-semibold text-black mb-4">
                            Financial <span class="text-brand-primary"> Protection</span>
                        </h2>
                        <div class="my-5">
                            <p class="text-sm leading-normal">
                                Our insurance services are built to provide robust financial protection, ensuring that
                                you can weather any storm and maintain your financial well-being.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="principle in benefits2"
                                class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                                <div class="flex flex-col">
                                    <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                    <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                        principle.name }}</h4>
                                    <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="bg-white">
            <div class="container py-10">
                <div class="">
                    <h2 class="text-2xl font-semibold text- mb-4">
                        Financial Planning <span class="text-brand-primary">& Advisory</span>
                    </h2>
                </div>

                <div class=" mx-auto text-black">
                    <p>
                        Achieving financial wellness goes beyond just having the right insurance policies. Our financial
                        planning and advisory services complement our insurance offerings, helping you make informed
                        decisions and plan for the future.

                    </p>

                    <div class="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <a v-for="product in specials" :key="product.id" @click="setLineData(product)"
                            class="button-animation group shadow-md p-3 rounded-md">
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                                <NuxtImg format="webp"  :src="product.img" :alt="product.img"
                                    class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div class=" mt-4 flex flex-col items-start justify-between subsection-heading text-black">
                                <h6 class="text-lg" v-html="product.name"></h6>
                                <p class="font-normal leading-normal text-xs italic mt-3">
                                    {{ product.description }}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto pb-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Education <span class="text-brand-primary">& Resources</span>
            </h1>
            <p class="my-6 text-xs leading-normal">
                We believe that knowledge is power. That's why we provide educational resources to help you understand
                the importance of financial wellness and how insurance plays a vital role in it.
            </p>

            <div class="mb-5">
                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
                    <NuxtLink :to="feature.url" v-for="feature in features"
                        class="button-animation flex px-3 py-2 shadow-md border-l-4 border-brand-primary">
                        <div class="mr-6">
                            <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                        </div>
                        <div>
                            <div class="flex justify-between items-center w-full">
                                <p class="subsection-heading text-left">
                                    {{ feature.title }}
                                </p>

                            </div>

                            <div class="mt-1 text-black">
                                <p v-html="feature.description"></p>
                            </div>

                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="container mx-auto pb-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Choose Us</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                At Acentria, we are committed to your financial wellness. Our experienced team is dedicated to providing
                exceptional service and personalized solutions that cater to your needs. With our competitive pricing,
                comprehensive coverage options, and unwavering support, you can trust us to help you achieve financial
                security and peace of mind.
                Explore our financial wellness services through insurance and take the first step towards a secure and
                prosperous future. <br>
                <NuxtLink class="text-brand-primary underline italic">Contact us today to learn more.</NuxtLink>

            </p>


        </div>

        <div class="container mx-auto pb-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Online <span class="text-brand-primary">Tools</span>
            </h1>
            <div class="relative gap-10 lg:basis-1/2 flex items-center">
                <NuxtLink to="/contact-acentria-group"
                    class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                    Retirement Benefits Calculator
                    <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
                <NuxtLink to="/contact-acentria-group"
                    class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm">
                    Budgeting tool
                    <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
            </div>


        </div>

    </section>

</template>

<style scoped></style>