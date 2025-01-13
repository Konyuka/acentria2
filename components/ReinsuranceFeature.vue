<script setup>

const props = defineProps({
    content: Object
})

const styledTitle = computed(()=>{
    return splitAndStyle(props.content.title);
})

const splitAndStyle = (text) => {
    const words = text.split(' ');
    const half = Math.ceil(words.length / 2);
    const firstHalf = words.slice(0, half).join(' ');
    const secondHalf = words.slice(half).join(' ');
    return `${firstHalf} <span class="text-brand-primary">${secondHalf}</span>`;
}

const faqs = ref([
    {
        name: 'Treaty Bidding, Negotiation, and Placement',
        content: 'To ensure efficiency and effectiveness in treaty structuring, bidding, negotiation, and placement, we set up clear timelines that guide the treaty renewal action plan from the lobbying stage, treaty analysis, proposals and presentations, panel selection, quotation and negotiation, and signing of cover notes.'
    },
    {
        name: 'Technical Accounting',
        content: 'We provide both parties with a detailed calculation for the Profit Commission, Premium Adjustment, Sliding Scale Commission, Loss participation, etc. We make sure that all statements received from the cedant follow the agreed-upon terms and conditions included in the slip. Moreover, we make sure they are transferred to the reinsurers within the assigned time frame set in the respective contracts.'
    },
    {
        name: 'Special Acceptance',
        content: 'We assist cedants on reinsurance agreements that deviate from standard terms or involve unique and complex risks through negotiation with reinsurers to find a mutually beneficial agreement that addresses these specific needs. We also structure tailored solutions to develop structured reinsurance agreements that addresses the unique requirements of the cedant. This may involve drafting custom policy wordings and clauses to accommodate the special acceptance.'
    },
    {
        name: 'Contract Wording and Policy Review',
        content: 'Acentria Re offers contract wording and policy review services to our clients to ensure that reinsurance treaties and underlying insurance policies align effectively, mitigate potential coverage gaps or ambiguities, and provide optimal risk transfer solutions. We assist clients in developing and refining reinsurance contract wordings to meet their specific needs.'
    },
    {
        name: 'Documentation and Compliance',
        content: 'We ensure that the reinsurance contract and associated documentation comply with relevant laws, regulations, and industry standards. This includes compliance with financial solvency requirements, licensing obligations, reporting obligations, and other legal and regulatory mandates specific to the jurisdiction in which the treaty operates. Review and management of amendments/endorsement to assess the impact of proposed amendments, evaluate their compliance with regulatory requirements, and ensure that the revised contract accurately reflects the agreed-upon modifications.'
    },
    {
        name: 'Rensurance Wording',
        content: 'An in-depth understanding of reinsurance wording is a fundamental requirement for insurance and reinsurance professionals. It directly impacts risk management, regulatory compliance, transparency, and the overall financial stability of insurance companies. Clear, precise, and comprehensive reinsurance wordings ensures that cedants/reinsurers; Achieve their desired level of risk transfer. Eliminate ambiguities and claim disputes. Clearly establish contractual obligations of each party and avoid breaches. Align their intended reinsurance arrangements with companies’ reinsurance management strategies. Our team of experts has a wealth of experience in review and advisory on reinsurance wordings.'
    },


])

</script>

<template>

    <div>
        <div class="overflow-hidden bg-white py-4 sm:py-6 lg:py-8">
            <div class="container mx-auto">
                <div
                    class="font-sans mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <!-- <h2 class="text-base font-semibold leading-7 text-brand-primary">Acentria Reinsurance Brokers</h2> -->
                            <p v-html="styledTitle"
                                class="mt-2 text-2xl sm:text-2xl font-semibold leading-normal text-gray-900">
                            </p>
                            <p class="mt-4 sm:mt-6 text-xs text-black leading-normal">
                                {{ content.content }}
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center lg:justify-end">
                        <NuxtImg :src="content.image" alt="Product screenshot"
                            class="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:h-1/4" />
                    </div>
                </div>

                <div>
                    <Accordion :faqs="faqs" />

                   
                </div>
            </div>
        </div>
    </div>

</template>

<style></style>