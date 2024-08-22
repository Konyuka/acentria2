<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Treaty Reinsurance',
    image: 'https://images.pexels.com/photos/1264438/pexels-photo-1264438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Claims Management Expertise',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'At Acentria Re, we understand that timely claims recovery plays an integral role in enhancing the financial stability, operational efficiency, and reputation of cedants. It not only aligns with regulatory standards but also enhances customer satisfaction and provides a competitive edge in the dynamic insurance market. Our seasoned team of experts brings a wealth of experience in claims management, processing, and dispute resolution. We leverage on technology, robust systems, and experienced claims experts to carefully evaluate and expedite claims, prioritizing accuracy, and efficiency at every stage of the process',
})

const faqs = ref([
    {
        name: 'Strategic Business Review',
        content: 'Our treaty review approach entails: Review the company’s current reinsurance program, including the types of risks covered, the reinsuring panel, premium volumes, and the frequency and severity of the claims. Analyze the company’s risk profiles considering its business model, geographical exposure, and other relevant factors. Identify the company\'s key drivers of risk and profitability, as well as reinsurance coverage for each type of risk.Develop a reinsurance optimization strategy, setting an adequate level of retention and reinsurance coverage structure to meet the company’s strategic objectives.Use of modeling tools to inform and improve decision- making.'
    },
    {
        name: 'Treaty Reinsurance and Retro Treaty Programs',
        content: 'Treaty reinsurance and retrocession programs are integral components of risk management in the insurance industry. Treaty reinsurance involves a mutually beneficial agreement between an insurer and a reinsurer, where a portion of risks is transferred to the reinsurer in exchange for a premium. On the other hand, retrocession, or retro treaty programs, represent a more intricate layer of risk management, where reinsurers purchase reinsurance from other reinsurers to further protect themselves against potential losses. These multi-layered strategies offer enhanced risk management, financial stability, and access to a global reinsurance market, ultimately safeguarding the industry\'s ability to provide security and stability to policyholders.As a leading Reinsurance broker, our strength lies in unparalleled proficiency in treaty negotiation, strategic placement, and innovative structuring.'
    },
    {
        name: 'Non Proportional Treaties',
        content:'Excess of Loss (XOL) - Stop Loss Excess - Catastrophe Excess of Loss - Net Account XL'
    },
    {
        name: 'Propotional Treaties',
        content:'Quota Share - Surplus - Quota Share and Surplus'
    },
    {
        name: 'Facultative Obligatory Treaty',
        content: 'Facultative obligatory treaties are a vital component of reinsurance, offering insurers a flexible and tailored approach to managing specific and unique risks. In these agreements, insurers have the discretion to cede or retain specific risks, allowing for individualized underwriting and risk management. This flexibility is particularly useful for addressing high-value, complex, or non-standard risks that may not fit within standard reinsurance treaties. Facultative obligatory treaties provide insurers with the ability to customize coverage on a case-by-case basis, aligning with their risk appetite and business goals, ultimately enhancing risk management and contributing to the insurance industry\'s stability and success.'
    },
])

</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        
        <div class="grid grid-cols-2">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 align-center my-10">
                <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">

                        <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Our Approach
                        </p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            Our tailored treaty reinsurance programs provide clients with comprehensive coverage for
                            their portfolio of risk. The programs
                            aim to assist clients in preserving their capital by ensuring proper risk management
                            structures that enable the identification,

                            mitigation, and transfer of risks.

                            We adopt a 360-degree approach to treaty analysis with an objective of giving clients
                            well-balanced programs aimed at achieving optimum treaty structure that help reduce
                            exposure, smooth earnings, supplement

                            capital, and create surplus capital.
                            This is achieved through advice from our team of experts, which includes technical
                            reinsurance analysts, data analysts, and
                            actuaries. Our clientele includes; insurance and reinsurance companies.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ReinsuranceFaqs :content="faqs" />
            </div>
        </div>

        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
