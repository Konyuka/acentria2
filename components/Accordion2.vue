<template>
    <div class="accordion-container container font-sanst-sans ">
        <h1 class="m-5 heading-class text-left">
            Treaty <span class="text-brand-primary"> Review Process
            </span>
        </h1>
        <div class="grid grid-cols-2 gap-5">
            <div v-for="(item, index) in accordionItems" :key="index" class="accordion-item">
                <div class="accordion-header" @click="toggleAccordion(index)">
                    <div class="number-circle !bg-red-300 ">{{ index + 1 }}</div>
                    <div class="accordion-header-text !font-semibold">
                        <h3>{{ item.title }}</h3>
                    </div>
                    <i :class="openIndex === index ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="icon"></i>
                </div>
                <div v-show="openIndex === index" class="accordion-content">
                    <p>{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const accordionItems = ref([
    {
        title: "Strategic Business Review",
        content:
            "We do a comprehensive assessment and evaluation of treaty portfolio and overall business strategy. We analyze the effectiveness and profitability of existing treaty agreements and develop strategic recommendations for future growth and success.",
    },
    {
        title: "Legal and Regulatory",
        content:
            "We review the terms and conditions of the treaty agreements to ensure they are legally binding and enforceable by analyzing the obligations of both the reinsurer and the primary insurer to avoid any potential breaches.",
    },
    {
        title: "Financial Reviews and Analysis",
        content:
            "Financial reviews and analysis are crucial components of treaty analysis. We do a detailed examination of the financial aspects related to the treaty agreements to ensure their effectiveness, profitability, and alignment with the company's overall financial goals.",
    },
    {
        title: "Actuarial and Modelling",
        content:
            "We deploy the use of statistical methods, mathematical models, and actuarial techniques to assess risks, estimate potential losses, and determine the appropriate pricing and structure of reinsurance treaties.",
    },
    {
        title: "Treaty Optimization and Design",
        content:
            "Being a key component of treaty analysis in the reinsurance industry. We strategically structure and fine-tune reinsurance treaties to align with the company's goals which in return maximize profitability and effectively manage risk.",
    },
]);


const openIndex = ref(null);

const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
.accordion-container {
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    overflow: hidden;
}

.accordion-item {
    border-bottom: 1px solid #e5e5e5;
    padding: 1rem 1.5rem;
}

.accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.accordion-header:hover {
    background-color: #f9f9f9;
}

.number-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e0e0e0;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-right: 1rem;
    font-size: 14px;
}

.accordion-header-text h3 {
    font-size: 16px;
    color: #333;
    font-weight: 600;
    margin: 0;
}

.icon {
    font-size: 14px;
    color: #666;
    transition: transform 0.3s ease;
}

.accordion-content {
    margin-top: 1rem;
    font-size: 14px;
    color: #666;
    line-height: 1.6;
}
</style>
