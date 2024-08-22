<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Secure Your Family\'s Future, Today',
    title: 'Protect your family\'s tomorrow, today',
    image: 'https://images.pexels.com/photos/5727734/pexels-photo-5727734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Discover our life insurance & make sure your loved ones are safe and sound, no matter what happens. Let’s talk about securing your loved ones’ future. Explore our life insurance options and ensure their financial well-being, no matter what life brings.',
})

const InsuranceCardsContent = ref({
    title:'Which plan is right for you & your family?',
    users: [
        {
            name:'Personal Accident Cover',
            icon:'fas fa-user',
            description: 'Unforeseen accidents can leave a lasting impact not only on our lives, but also on our loved ones too. With our accident insurance plan, you’re secured of a payout in case of accidental death or disability. It’s the safety net you and your family can rely on during difficult moments. Your well-being is our priority, and this plan is our way of ensuring you\'re insured.',
        },
        {
            name:'Critical Illness Cover',
            icon: 'fas fa-users',
            description: 'Life\'s challenges can strike at any time, and our Extra for Serious Illness plan is here to provide vital support.Offering financial assistance if you face a severe illness or a significant accident, this plan stands by you, even if you don\'t pass away. It\'s an extra layer of protection that demonstrates our commitment to your well- being.',
        },
        {
            name:'Last Expense Policy',
            icon: 'fas fa-users',
            description: 'Are you worried about the financial impact your final expenses might have on your loved ones when you\'re no longer here? Let us put your mind at ease with our Last Expense Policy – the ultimate solution for providing financial reprieve to the insured loved ones for funeral related expenses.',
        },
        {
            name:'Education Protection Plan',
            icon: 'fas fa-users',
            description: 'You\'ve always dreamed big for your child, and we\'re here to make those dreams come true no matter what. Our Education Protection Plan ensures that your child\'s educational journey remains uninterrupted, even if you\'re no longer there to guide them. This plan guarantees funds for their education if something unexpected happens to you. Give your child the gift of a bright future with our Education Protection',
        },
        {
            name:'Individual life Assurance',
            icon: 'fas fa-users',
            description:'Your life is a precious gift, and ensuring the financial security of your loved ones should be a top priority. With our Individual Life Assurance policy, you can create a legacy of protection and support for those you care about the most',
        },
        {
            name:'Annuities & Income Draw Down',
            icon: 'fas fa-users',
            description:'In a world of financial uncertainty, planning for a secure and comfortable retirement is of paramount importance. Annuities and Income Draw Down are two powerful tools to help you achieve your retirement goals, each with its unique advantages.',
        },
    ],
})

const InsuranceFaqsContent = ref({

})

const faqs = ref([
    {
        name: 'What does health insurance typically cover?',
        content: 'Health insurance plans offered by Acentria generally cover a wide range of medical expenses, including doctor visits, hospital stays, prescription medications, preventive care, and more. The cover provides; inpatient, outpatient, maternity, dental and optical benefits. Coverage can vary based on the specific plan you choose, so its essential to review the details of each plan carefully. Contact us to get a full list of what we cover in this package.',
    },
    {
        name: 'What benefits do I get with a comprehensive plan?',
        content: 'Acentria\'s comprehensive health insurance plans offer extensive coverage for a wide range of medical expenses.These plans typically include coverage for hospitalization, doctor\'s visits, prescription drugs, preventive care, emergency services, diagnostic tests, mental health services, maternity and newborn care, and more. A comprehensive plan also provides optional dental and vision coverage, wellness programs, and access to network providers. <br><br> <b>Contact us to review the specific terms and conditions of your chosen Insurance plan.</b> ',
    },
    {
        name: 'Which healthcare facilities is the cover accepted?',
        content: 'This cover is accepted at a range of healthcare facilities, including major private hospitals, community hospitals, clinics, physicians and specialists, diagnostic and imaging centers, and pharmacies. To find out which healthcare facilities are in-network for your plan, contact us for a list of covered providers in your area. This ensures you receive maximum benefits and minimize out-of-pocket expenses.',
    },
    {
        name: 'How do I claim & How fast is the claim process?',
        content: 'Acentria Insurance takes between10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our representatives to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.',
    },
    {
        name: 'Which is the best plan for me?',
        content: 'Our plans are comprehensively designed to give your family extensive coverage, both local and international. We guide you through the health plan, which is likely to be most cost effective based on your needs and also maximizing coverage while staying on a budget. We give you the ability to choose your doctor, and preferred medical facility, giving you control over your healthcare',
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
        <InsuranceCards :content="InsuranceCardsContent" />
        <InsuranceFaqs :content="faqs" />
        <InsuranceWhy />
        <InTouch />
    </div>



</template>
