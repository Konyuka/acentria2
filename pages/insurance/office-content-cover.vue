<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: '',
    title: 'Protect your office\'s valuable assets.',
    image: 'https://images.pexels.com/photos/265072/pexels-photo-265072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'With Acentria’s office content insurance, you can rest easy knowing that your office equipment, furnishings, and technology are protected against a range of risks, including theft, fire, and natural disasters. We tailor our coverage to meet your specific needs, so you never pay for more than what you require.'
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
        name: 'What types of assets and items does office content cover typically protect?',
        content:'Office content cover typically protects assets like office furniture, computers, printers, office supplies, inventory, and important documents.'
    },
    {
        name: 'Can I get coverage for expensive or specialized equipment used in my office?',
        content:'Yes, businesses can often obtain coverage for expensive or specialized equipment by specifying these items in their office content insurance policy. This ensures that high-value assets are adequately protected.'
    },
    {
        name: 'Are employee personal belongings covered?',
        content:'Office content insurance typically covers business assets and items, not personal belongings of employees. Employees may need separate insurance for their personal items.'
    },
    {
        name: 'How do I claim & How fast is the claim process?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'How are premiums calculated?',
        content:'Premiums for office content insurance are based on factors like the value of insured items, location, security measures, and the chosen coverage limits'
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
