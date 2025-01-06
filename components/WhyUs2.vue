<template>
    <div class="bg-white py-5 px-6 font-sans">
        <div class="bg-white">
            <div class="py-5 text-left container">
                <h2 class="heading-class text-black">
                    Why Partner <span class="text-brand-primary"> with Acentria</span>
                </h2>
                <p class="text-xs mt-3 text-black">
                    We understand that choosing the right insurance provider is a crucial decision. Here are some
                    compelling reasons why you should partner with us:
                </p>
            </div>
        </div>
        <div class="container py-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
                <div v-for="(item, index) in benefits" :key="index">
                    <div class="text-red-600 text-5xl mb-4">
                        <i :class="item.icon"></i>
                    </div>
                    <h3 class="text-xl font-semibold">{{ item.title }}</h3>
                    <p class="text-black mt-2 text-sm">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BenefitsComponent",
    data() {
        return {
            benefits: [
                {
                    icon: "fas fa-piggy-bank",
                    title: "We Save You Money",
                    description: "We strive to offer competitive pricing without compromising on the quality of coverage. Our goal is to provide you with the best value for your money.",
                },
                {
                    icon: "fas fa-headset",
                    title: "We are there for you",
                    description: "Our dedicated team takes the time to understand your specific requirements and offers personalized service to ensure your satisfaction.",
                },
                {
                    icon: "fas fa-lightbulb",
                    title: "Innovative Solutions",
                    description: "We continuously innovate to bring you the latest and most effective insurance solutions, keeping you ahead in a rapidly changing world.",
                },
                {
                    icon: "fas fa-check-circle",
                    title: "Easy Claims Process",
                    description: "Our claims process is hassle free, and we are proud of our services.",
                },
                {
                    icon: "fas fa-shield-alt",
                    title: "Peace of mind",
                    description: "We offer a wide range of insurance products tailored to meet your unique needs, ensuring you have the right protection for every aspect of your life.",
                },
                {
                    icon: "fas fa-award",
                    title: "Service Excellence",
                    description: "We are proud of our reputation for reliability and trustworthiness.",
                },
            ],
        };
    },
};
</script>

<style>
/* Add any additional styling here if needed */
</style>
