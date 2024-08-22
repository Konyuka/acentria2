<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: '',
    title: 'Safeguard your business against digital threats.',
    image: 'https://images.pexels.com/photos/38275/anonymous-studio-figure-photography-facial-mask-38275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'With Acentria, you’re not just getting insurance; you’re getting a partner committed to your digital security. Don’t leave your business vulnerable to cyber threats.let’s fortify your business’s digital defenses with the best cyber insurance coverage available. Your digital future deserves nothing less than the best protection'
})

const InsuranceCardsContent = ref({
    title: 'Who is this medical insurance for?',
    users: [
        {
            name: 'Myself',
            icon: 'fas fa-user',
            description: 'Stay healthy without the stress. Get medical insurance that\'s got your back',
        },
        {
            name: 'My family',
            icon: 'fas fa-users',
            description: 'Safeguard your family\'s health & wellbeing because their smiles mean everything.',
        },
        {
            name: 'My Parents',
            icon: 'fas fa-users',
            description: 'Give your parents the gift of protection and care. Safeguard their future together.',
        },
    ],
})

const InsuranceFaqsContent = ref({

})

const faqs = ref([
    {
        name: 'What types of cyber risks does cyber liability cover typically protect against?',
        content:'Cyber liability cover typically protects against risks such as data breaches, ransomware attacks, hacking, unauthorized access, network interruptions, and legal liabilities arising from cyber incidents.'
    },
    {
        name: 'Is cyber liability insurance only for large businesses, or is it suitable for (SMEs) as well?',
        content:'Cyber liability insurance is suitable for businesses of all sizes, including SMEs. In fact, smaller businesses can be more vulnerable to cyber threats, making coverage even more crucial.'
    },
    {
        name: 'Which business should consider this cover?',
        content:'While cyber threats can affect any industry, businesses that handle sensitive customer data, financial information, or proprietary data are often more at risk and may benefit from cyber liability coverage.'
    },
    {
        name: 'How do I claim & How fast is the claim process ?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'How are premiums determined?',
        content:'Premiums for cyber liability insurance are based on factors such as the size of the business, industry, security measures in place, the amount of coverage needed, and previous cyber incident history.'
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
        <InsuranceFaqs :content="faqs" />
        <InsuranceWhy />
        <InTouch />
    </div>



</template>
