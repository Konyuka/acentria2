<script setup>
const teams = ref([
    {
        name: "Enosh Bolo ",
        title: "Chairman",
        profile: "Enosh is experienced in Organizational development, HR Advisory, and Public Sector reforms in areas of restructuring Job Evaluation, HR audits and policies review and development, change management, productivity improvements & measurements, strategy formulation, performance management, training and research. He is a member of the ILO Dialogue Forum on formulation of Global Strategy for G20 to address global challenges such as global economic up skilling out of downturn, vocational education and training, and development of the HR toolkit for the teaching profession. He is experienced in matters of leadership, governance and industrial relations having served as the Deputy Executive Director, Federation of Kenya Employers (FKE), Head of Consulting, Kenya Institute of Management (KIM), Head of School improvement program and staff training, Ministry of Education in the Seychelles. He is also a Company of the Year Award (COYA) consultant and served as Board member to Sports Stadia, National Industrial Training Council of DIT and HELB.",
        image: "img/enosh.jpg",
    },
    {
        name: "Flossie Njagi",
        title: "Chairlady",
        profile: "Flossie, a seasoned C-suit Corporate Leader in the Human Resources field, who has influenced high performing cultures with progressive technical resources, prolific communications and robust development programs that bring double digit revenue growth with over 16 years’ experience in corporate exposure, Flossie has extensive experience leading organizational transformations. I employ current human capital practices that attract and retain high-potential talent and is backed by a record of developing executable people strategy that motivates teams individually and financially to exceed the corporate objectives through various economic cycles. Flossie has a Bachelor of Education with honours from Kenyatta University, a post-graduate National Diploma in Human Resources Management from IHRM and an MBA degree from Strathmore Business School, with an International Business class exposure at IESE Business School, University of Navara, Spain and a Certified Practicing Member of IHRM (K).",
        image: "img/flo.jpg",
    },
    {
        name: "Eric Orende",
        title: "Board Secretary",
        profile: "Mr. Orende has extensive experience in Litigation and Alternative Dispute Resolution in the areas of Banking and Finance; Insurance; Employment Law; Consumer Protection; Constitutional and Administrative Law, Real Estate and Environmental Matters. With over 1o years’ experience, he has specialised in advising and representing clients in the areas of employment law, public procurement, tax law, defamation, judicial review, debt collection claims, criminal law, industrial accident claims and landlord and tenant disputes. Erick Orende is a graduate of Moi University with a Bachelor of Laws (L.L.B) (Hons.) degree and was admitted to the Bar as an Advocate of the High Court of Kenya in the year 2011.",
        image: "img/eric.jpg",
    },
    {
        name: "Moses Musau",
        title: "CEO / Managing Director",
        profile:"Moses is one the pioneers of Acentria Group and focuses on developing insurance & Reinsurance solutions that strengthen Acentria’s presence in the market and its commitment to client-relationships and exceptional service. With over 18 years of industry experience, he specializes in the overall growth of Acentria as is passionate about Empowering, Innovation and Prosperity. Moses holds a master’s in strategic management (Daystar University) Bachelor of commerce Finance Jomo Kenyatta University of technology, He is also a Fellow of the chartered Insurance Institute of Kenya (FIIK) and Holds a diploma in Insurance institute of Kenya (AIIK)",
        image: "https://acentriagroup.com/wp-content/uploads/2024/02/mose-1.jpg",
    },
    {
        name: "Carolyne Wambu",
        title: "Executive Director",
        profile: "Carolyne Wanjiku Wambu is one the pioneers of Acentria Group and focuses on Innovation and strategy in developing business solutions that strengthen Acentria’s presence in the market and its commitment to client-relationships and exceptional service. With over 15 years of industry experience, she specializes in the overall growth of Acentria in digitisation, and optimization of information technology for Prosperity. Carolyne holds an MBA in strategic Planning, Bachelor of Science in Computer Science from Catholic University She also has certification in Cisco Certified Network Associate (CCNA).",
        image: "img/caro.jpg",
    },
    {
        name: "Isabella Mwende",
        title: "Executive Director",
        profile: "Carolyne Wanjiku Wambu is one the pioneers of Acentria Group and focuses on Innovation and strategy in developing business solutions that strengthen Acentria’s presence in the market and its commitment to client-relationships and exceptional service. With over 15 years of industry experience, she specializes in the overall growth of Acentria in digitisation, and optimization of information technology for Prosperity. Carolyne holds an MBA in strategic Planning, Bachelor of Science in Computer Science from Catholic University She also has certification in Cisco Certified Network Associate (CCNA).",
        image: "img/isa.jpg",
    },
    {
        name: "Stephen Wandera",
        title: "Executive Director",
        profile: "Stephen O. Wandera is a highly respected figure in the reinsurance and insurance sectors, with over four decades of experience in East and Central Africa. Having held numerous senior executive positions, including CEO and Regional Director roles, Stephen brings extensive leadership, business growth, oversight, and risk management expertise to the boardroom. Stephen has served as a Non-Executive Director and Chairman for a number of companies, including Britam Life Assurance Kenya and Britam General Insurance Kenya, where his strategic oversight contributed to significant regional business expansion. His tenure as Principal Executive Director for Britam Holdings Plc saw him oversee the Group's P&L across seven insurance companies in six countries. Beyond his corporate achievements, Stephen is a co-founder and chairman of The Maven Mentorship Society, a philanthropic initiative aimed at providing underprivileged teenagers with research-based global best practice mentorship. His deep commitment to community service is also evident from his various leadership roles in service organizations, including the Association of Kenya Insurers (AKI) and the Kenya Private Sector Alliance (KEPSA). Stephen is passionate about nurturing future leaders and continues to make impactful contributions to the insurance industry and society through his non-executive roles, consultancy, and philanthropic work.",
        image: "img/steve.jpg",
    },
    
    
],)


const emits = defineEmits([
    'openBoardProfile'
])



const profileContent = ref(null)

defineExpose({
    profileContent
})

const openProfile = (member) => {
    profileContent.value = member
    emits('openBoardProfile')
}

</script>

<template>
    <div class="container px-4 py-10">
        <div class="text-center">
            <h2 id=""
                class="heading-class text-brand-primary mb-2">
                <span class="text-black">Board of</span>
                Directors
            </h2>
            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4 font-sans mb-5"
                data-v-inspector="components/Why.vue:47:21">
                Acentria's Board of Directors is a team of highly experienced and accomplished professionals, dedicated
                to steering the company towards sustainable growth and success.
                The board oversees strategic decisions,
                risk management, and corporate governance, ensuring that Acentria consistently meets the needs of its
                clients while maintaining the highest standards of service and ethical conduct. Through strong
                leadership and a commitment to fostering innovation, the board plays a crucial role in shaping the
                company's vision and driving long-term success.
            </p>
        </div>
        <div class="container mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-3 lg:grid-cols-4">

            <div v-for="member in teams" @click="openProfile(member)" class="flex shadow-xl button-animation">
                <div class="w-full cursor-pointer rounded-xl bg-white">
                    <NuxtImg alt="Brian Stafford" loading="lazy" width="400" height="400" decoding="async" data-nimg="1"
                        class="p-5 min-h-[150px] w-full rounded-t-xl object-cover md:min-h-[200px]"
                        style="color: transparent" :src="member.image" />
                    <div class="font-sans flex max-h-[200px] flex-col items-center p-4">
                        <span class="text-md font-bold text-light-title">
                            {{ member.name }}
                        </span>
                        <span class="mb-4 flex-grow text-sm text-light-content">
                            {{ member.title }}
                        </span>
                        <span class="font-bold text-brand-primary">
                            Read Bio
                        </span>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped></style>