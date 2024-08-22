<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: '',
    title: 'Protect your commercial assets.',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we understand that your business’s physical assets are the foundation of your success. That’s why we offer top-notch Commercial Property Insurance, providing you with the peace of mind that your investments are protected. Our policies are tailored to your unique needs, ensuring that your buildings, equipment, and inventory are safeguarded against unexpected disasters.'
})

const faqs = ref([
    {
        name: 'What is commercial property insurance, and why is it important for businesses?',
        content: 'Commercial property insurance is a type of coverage that protects a business\'s physical assets, including buildings, equipment, inventory, and more, against various risks such as fire, theft, vandalism, and natural disasters.It\'s important for businesses because it helps ensure the financial stability of the company by covering repair or replacement costs in case of property damage.'
    },
    {
        name: 'Can commercial property insurance protect against liability claims arising from accidents on the insured property?',
        content:'No, commercial property insurance typically focuses on physical property damage. Liability claims are covered by general liability insurance, which is a separate policy. However, businesses often bundle both coverages for comprehensive protection.'
    },
    {
        name: 'How are premiums determined?',
        content:'Premiums for commercial property insurance are determined based on factors like the value of the insured property, location, construction type, fire protection measures, and the chosen coverage limits.'
    },
    {
        name: 'What types of risks does commercial property insurance typically protect against?',
        content:'Commercial property insurance typically covers risks such as fire, vandalism, theft, windstorms, hail, explosions, and water damage. Some policies also offer coverage for earthquakes and floods.'
    },
    {
        name: 'How do I make a claim & How fast is the claim process?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'How can I get started?',
        content: '<b>1.Compare and Choose:</b> Compare insurance quotes, select a plan that suits your needs, and make the purchase. <br> <b>2.Register and Get Insured:</b> Register for your chosen plan, and you\'ll be insured. <br><br> Our agent will reach out and follow up with you to ensure you have been insured and provide you with all the necessary information, including an insurance card, access to the self- help portal, your insurance certificate, and any other requirements you may need.',
    },
])

</script>

<template>

    <div>
        <InsuranceBanner :content="InsuranceBannerContent" />
        <InsuranceFaqs class="mt-10" :content="faqs" />
        <InsuranceWhy />
        <InTouch />
    </div>



</template>
