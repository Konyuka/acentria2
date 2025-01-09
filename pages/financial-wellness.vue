<script setup>

const ReinsuranceBannerContent = ref({
    title: 'Financial Stability and Security',
    subTitle: 'Financial Wellness',
    image: '/img/nurse.jpg',
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

    </section>

</template>

<style scoped></style>