<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Drive with Confidence, Every Mile of the Way',
    title: 'Hit the Road with Confidence',
    image: 'https://images.pexels.com/photos/533562/pexels-photo-533562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'Every time you drive, you’re taking on a world of possibilities. However, those possibilities can include accidents, damages, and unexpected troubles. That’s where Acentria’s Motor Vehicle Insurance steps in – to keep you on track and protected through all of life’s adventures.'
})

const faqs = ref([
    {
        name: 'Can I use my car insurance for someone else\'s car or if I\'m driving a rental car?',
        content:'Typically, your car insurance covers you while driving your own vehicle. However, coverage may extend to rental cars, so check your policy or contact us to confirm and find out more .'
    },
    {
        name: 'What benefits do I get with a comprehensive plan?',
        content: 'A comprehensive car insurance plan offers extensive protection, including coverage for accidents, theft, vandalism, natural disasters, animal collisions, falling objects, fire damage, and more. Additional benefits may include roadside assistance, rental car reimbursement, and coverage for custom parts. To learn more about the benefits of a comprehensive plan and how it can meet your specific needs, call us today.'
    },
    {
        name: 'What if I want to customize my car insurance coverage?',
        content: 'You can often customize your coverage by adding optional features or endorsements. For example, you can add coverage for rental cars, roadside assistance, or coverage for custom parts and equipment. Call us today and find out what kind of customizations are included in this cover'
    },
    {
        name: 'What happens if I\'m in an accident and need to file a claim?',
        content: 'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'What\'s included in the cover package?',
        content: 'Car insurance usually covers damage to your vehicle, liability for injuries or damage to others, and medical expenses. It can also include coverage for theft and vandalism. Contact us today and find out a full list of what\'s covered in this package'
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
