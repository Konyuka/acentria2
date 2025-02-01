<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Claims',
    title: 'Claims process for <span class="text-brand-primary">car accidents or vehicle damage<span/>',
    image: 'https://images.contentstack.io/v3/assets/blt62d40591b3650da3/blt08bda91eaf9ac258/64dbe1d4b8cb28eb0fbbc203/image-break_claims-auto_car-on-desert-road_1160.jpg?auto=webp',
    content:'Auto insurance claims are easy to file. Our Progressive representatives help you through the process and make sure your repairs are handled quickly and efficiently. We strive to get you back on the road as soon as possible.'
})


const faqs = ref([
    {
        name: 'What does SME business cover typically include?',
        content: 'SME business cover includes coverage options such as general liability insurance, property insurance, workers\' compensation, commercial auto insurance, cyber liability insurance, and business interruption insurance, among others.'
    },
    {
        name: 'Can this cover be customized to match specific needs?',
        content:'Yes, SME business cover is often customizable. Businesses can tailor their coverage by selecting the types and amounts of insurance that best address their unique risks and requirements.'
    },
    {
        name: 'How are premiums determined?',
        content: 'Premiums for SME business cover are determined based on factors like the industry, the size of the business, the location, the type and amount of coverage needed, and the business\'s claims history.'
    },
    {
        name: 'Can this cover help protect against legal claims and lawsuits from customers or employees?',
        content:'Yes, SME business cover often includes general liability insurance, which provides coverage for legal claims and lawsuits stemming from bodily injury, property damage, or other liabilities associated with the business.'
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

const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria</span>`)
const whys = ref([
    {
        title: 'We save you money',
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products, ensure prudent risk management, reduce your loss ratios, and hence save you on cost',
        icon: 'savings',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile products and scope',
        icon: 'support_agent',
    },
    {
        title: 'Easy claim process',
        content: 'Our claims process is hassle-free, and we are proud of our service',
        icon: 'assignment_turned_in',
    },
    {
        title: 'Prompt Quotations',
        content: 'Let us help you with the best timely quotations for your needs',
        icon: 'query_builder',
    },
    {
        title: 'Convenience',
        content: 'Our services and solutions are simplified for clients\' use.',
        icon: 'thumb_up',
    },
    {
        title: 'Peace of Mind',
        content: 'Your peace of mind is our priority. Our team of experts shall offer professional advice for your needs.',
        icon: 'sentiment_satisfied',
    },
])

const carClaims = ref([
    {
        number: '01',
        title: 'Submit your Claim',
        content: 'You can easily file a claim by logging in to your policy online, through the mobile app, or by calling our claims center. If you\'re not a Progressive customer, you can file a claim online as a guest. We just need some basic info from you to get started. We connect you with the right experts at the right time to make sure everything goes smoothly. You can contact a claims rep if you have questions, and you’ll likely work with an estimator who will inspect your car and write an estimate describing the cost of repairs.'
    },
    {
        number: '02',
        title: 'Inspection and Repair Options',
        content: 'A rep asks if you want to get your repairs completed or receive payment. The choice is yours! If you’re not sure, you can get an estimate first to see how much repairs cost or what your payment is for the repairs. If you finance or lease your car, your lender may require you to get the repairs. If you\'re getting repairs, you can choose one of our convenient network shop locations. Or your rep can schedule time for an estimator to inspect your vehicle (if they haven\'t done so already) at your shop of choice, or at a Progressive drive-in location (where available). If your car is a total loss, it’s handled differently. See more about total loss claims.'
    },
    {
        number: '03',
        title: 'Schedule your Repairs',
        content: 'Your rep schedules repairs through a network repair shop or any other shop you’d like. We help you through the process to make sure all repairs are being handled properly.'
    },
    {
        number: '04',
        title: 'Your Car is Repaired',
        content: 'No matter which shop you choose, we manage the repairs from start to finish. Then, when everything is complete, just pick up your newly repaired car and go. If you used a shop in our approved network, your repairs are guaranteed for as long as you own or lease your vehicle.'
    }
])

const windscreenClaims = ref([
    {
        number: '01',
        title: 'Submit your Claim',
        content: 'You can submit your claim by logging in to your policy online, using the mobile app, or calling our claims center. A representative walks you through your coverages and next steps. They also ask for a few more details to determine if your glass can be repaired or replaced and explain your costs and the benefits of getting it fixed right away. Learn more about glass windshield repairs and replacements.'
    },
    {
        number: '02',
        title: 'You can schedule the repair or replacement at your convenience',
        content: 'Keep in mind, the choice of where you get your repair or replacement done is yours. We recommend Safelite AutoGlass or one of its affiliate shops to provide you with a quick and easy repair option. In most cases, they can repair or replace your glass at your home or work, or you can go to one of their shops. It usually takes less than 30 minutes for repairs and 60 minutes for replacements, though it is recommended that you don’t drive your vehicle for at least one hour after a replacement. Safelite AutoGlass even guarantees their work and cleans out your car for free!'
    },
    {
        number: '03',
        title: 'Your glass is fixed',
        content: 'If your glass can be repaired (and you have comprehensive coverage), you don’t have to pay anything. If it’s a full replacement, you may have to pay your deductible, depending on your state. Keep in mind, you might see a small blemish where the repair was completed. If you’re not satisfied, we’ll replace your windshield, but you have to pay your deductible, depending on your state.'
    }
])
</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />


        <div class="container my-10 flex flex-col gap-5 divide-y-4">
            <div v-for="claim in carClaims" class="p-5">
                <h1 class="subsection-heading">
                    <span class="font-semibold">{{ claim.number }}</span> <span
                        class="font-semibold text-brand-primary">/</span>
                    {{ claim.title }}
                </h1>

                <p class="ml-5 mt-5 text-xs leading-normal" v-html="claim.content"></p>
            </div>
        </div>

        <div class="container max-w-6xl pt-5">
            <div class="mt-5">
                <h1 class="section-heading">
                    Claims process for <span class="text-brand-primary">windshield and glass repairs</span>
                </h1>
            </div>
        </div>

        <div class="container my-10 flex flex-col gap-5 divide-y-4">
            <div v-for="claim in windscreenClaims" class="p-5">
                <h1 class="subsection-heading">
                    <span class="font-semibold">{{ claim.number }}</span> <span
                        class="font-semibold text-brand-primary">/</span>
                    {{ claim.title }}
                </h1>

                <p class="ml-5 mt-5 text-xs leading-normal" v-html="claim.content"></p>
            </div>
        </div>


        <!-- <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" /> -->
        
        <!-- <Accordion :faqs="faqs" /> -->

        <ContactForm />
    </div>



</template>
