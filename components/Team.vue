<script setup>
const teams = ref([
    {
        name: "Moses Musau",
        title: "CEO / Managing Director",
        email:"mmusau@acentriagroup.com",
        linkedin: "",
        profile:'Moses Musau Is a Corporate Leader in the Insurance and Reinsurance field, his focus is on developing solutions that strengthen Acentria’s presence as experts in the industry with commitment to exemplary client-relationships and service delivery for the overall growth of Acentria Group. His experience spans over 19 years of corporate exposure, where he has gained extensive experience in leading organizational transformations backed by a record of developing executable people strategy that motivates teams individually and financially to exceed the corporate objectives through various economic cycles. Mr. Moses very passionate about Empowering dreams, igniting imagination and propelling prosperity to infinite possibilities with a solid work ethic often resulting in the setting of high-performance standards in by himself and the others who work or interact with him. He is a logical, analytical and ingenious thinker and long-range planner good at anything that requires rapid and innovative reasoning. He holds a master’s degree in strategic management from Daystar University and a Bachelor of commerce Degree in Finance from Jomo Kenyatta University of Technology- JKUAT, he is also a Fellow of the chartered Insurance Institute of Kenya –(FIIK) and holds a diploma in Insurance institute of Kenya (AIIK).',
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/mose-1.jpg",
    },
    {
        name: "Evelyne Wanjohi",
        title: "General Manager",
        linkedin: "",
        email: "ewanjohi@acentriagroup.com",
        profile:"Evelyne is an accomplished insurance professional with over twelve years of experience in risk management, pensions, insurance, and reinsurance broking. She is passionate about improving insurance penetration through developing insurance solutions, implementing strategies, and stakeholder management. At Acentria Group, she provided strategic guidance to the Insurance and reinsurance Broking, Actuarial and Financial Services, and Investments teams to ensure growth and sustainability, operational efficiency, excellent customer experience, and a better working environment for employees through coordination of the available resources for maximum output. She holds a Master’s Degree in Finance Management from Daystar University and a Bachelor of commerce Degree in Finance from Jomo Kenyatta University of Technology- JKUAT, she is also a Certified Public accountant (CPAK)",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/evelyne-1.jpg",
    },
    {
        name: "Winnie Chitai CPA",
        title: "Head of Finance",
        linkedin: "",
        email: "chitaw@acentriagroup.com",
        profile: "Winnie Chitai is a dynamic and visionary financial leader, spearheading the helm of Financial Management firms with finesse and strategic acumen. As a seasoned professional, she exerts her expertise in orchestrating financing, investment, and liquidity decisions, ensuring astute fiscal governance for optimal organizational success. With over seven years of distinguished experience, Winnie has honed her skills in both internal and external audit across diverse industries, including financial services, stock brokerage, hospitality, nonprofit entities, manufacturing, and agriculture. Her prowess extends to monitoring capital expenditure projects, executing tax planning initiatives, and playing a pivotal role in board-level decision-making processes. Winnie’s academic journey is a testament to her commitment to excellence. Armed with a Bachelor of Commerce Degree in Finance and Accounting from Strathmore University, she has further fortified her credentials as a Certified Public Accountant of Kenya (CPA-K). Currently pursuing an MBA in Strategic Management at Daystar University, Winnie is dedicated to continuous learning and staying at the forefront of industry trends. As a distinguished member of the Institute of Certified Public Accountants of Kenya (ICPAK), Winnie embodies the intersection of academic brilliance and practical acumen, ensuring a holistic approach to financial leadership. Her multifaceted expertise positions her as a trailblazer in the field, consistently contributing to the success and growth of the organizations she serves. In every role she undertakes, Winnie’s commitment to excellence, strategic insight, and unwavering dedication make her a standout professional in financial management services.",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/winnie-1.jpg",
    },
    {
        name: "Maureen Wakini",
        title: "Head of People & Culture",
        linkedin: "",
        email: "mwakini@acentriagroup.com",
        profile: "Maureen has over fifteen (15) years of corporate and consulting experience in Human Resources and Professional coaching. She started her career as a Graduate Trainee at Industrial Promotion Services Limited (IPS Kenya), where she established a solid foundation in industrial relations within the manufacturing and agricultural sectors. Thereafter she joined Westcon-Comstor Sub-Saharan Africa as the Human Resources Manager, overseeing HR operations and Organizational Development in twenty pan-African and two european countries. Subsequently she served as a trusted advisor to senior c-suite leaders on strategic HR initiatives such as talent management, performance development and change management as a Human Resource Business Partner at Janus Continental Group (JCG). While at JCG, she supported the energy, real estate, hospitality sectors and enabling functions. She enjoys reading fictional books and is pursuing creative writing to inspire others. Further, she is Board Secretary at RCLN who is passionate about impacting the community positively and partners with tertiary institutions in training and mentorship programs in order to prepare them for the world of work.",
        image:
            "img/maureen.jpg",
    },
    {
        name: "Symon Gatimu",
        title: "Head of Reinsurance Business",
        linkedin: "",
        email: "sgatimu@acentriagroup.com",
        profile: "Symon Gatimu is a dedicated professional with extensive experience and a deep understanding of the insurance and reinsurance industry. He is committed to driving innovation and empowering both internal teams and external partners at Acentria Group. With a strong track record of leadership, Symon has been pivotal in executing strategic plans that enhance market share, profitability, and client retention. He excels in developing tailored insurance solutions, particularly in specialized lines with limited underwriting capacities, and nurturing relationships with clients and partners across African and international markets. His focus on profitable underwriting and identifying new business opportunities continues to contribute to Acentria's success in the reinsurance sector. Currently pursuing an MBA in Strategic Management at Daystar University, Symon holds a Bachelor's degree in Mathematics and Computer Science from Meru University of Science and Technology, where he graduated with a 2nd Class Upper Division. He is also working toward a Diploma in CII. His professional training includes distinctions such as the Proficiency in Short-Term Reinsurance Practice course, where he was recognized as the best candidate by the College of Insurance in collaboration with ZEP RE Academy. Additionally, he has completed certifications in Upstream Oil & Gas Insurance, Engineering Insurance, Risk Assessment, Advanced Fire & Business Interruption Underwriting, and other key areas of reinsurance. Symon's commitment to continuous professional development, combined with his strategic mindset and innovative approach, positions him as a key leader in the reinsurance field at Acentria Group.",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/symon-1.jpg",
    },
    {
        name: "Donald Were, FIA",
        title: "Actuarial & Financial Services",
        linkedin: "",
        email: "dwere@acentriagroup.com",
        profile: "Donald is the Head of Actuarial and Financial Services at Acentria Group. He is a qualified actuary and a Fellow of the Institute and Faculty of Actuaries in United Kingdom. He holds an MSc in Actuarial Management from Bayes Business School in London, and a Bachelor’s degree in Actuarial Science with Information Technology. He is an expert in actuarial techniques and risk management, with great interest in innovation and how tech and finance can be merged to deliver sustainable financial solutions. He has worked on numerous innovative projects, including development of a reinsurance pricing and optimization tool, to guide (re)insurance companies in impact assessment of reinsurance and retro structures. He is also an expert in the IFRS17 reporting standard and the current secretary to the TASK IFRS Working Party. Before joining Acentria, Donald was responsible for guiding Jubilee Holding Limited in transitioning to the IFRS17 reporting standard across 4 countries in East Africa, namely Kenya, Uganda, Tanzania and Burundi. He also worked for the Insurance Regulatory Authority in Kenya, where he was responsible for actuarial analytics and driving innovation.",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/donald-1.jpg",
    },
    {
        name: "Kelvin Mwangi",
        title: "Head of Direct Broking Business",
        linkedin: "",
        email: "kmwangi@acentriagroup.com",
        profile: "Kelvin is a dedicated and adaptable insurance professional, boasting more than 12 years of industry experience. With a Bachelor of Commerce degree, specializing in insurance from the University of Nairobi, Kelvin has honed his insurance expertise over the years. He’s not just academically qualified; he also holds a professional diploma in insurance from the College of Insurance (AIIK) and an international insurance diploma (ANZIIF) from the Australia and New Zealand Insurance Institute of Finance, as well as credentials from the Cambridge International College in the UK, among various other professional certifications. He has worked in various capacities, including Underwriting, Business Development, Broking, Claims & Recoveries, and Reinsurance Management. His career reflects a commitment to excellence and showcases his leadership qualities, strong work ethic, and exceptional organizational skills. Among his core competencies are Risk Management, Client Relationship Management, Underwriting Pricing, Claims Verification, Legal and Recovery expertise in both Marine and Motor claims, Business Development, and Client Retention. Kelvin is a driving force behind Acentria Group’s mission to provide top-tier insurance services.",
        image:
            "img/kelvo.jpg",
    },
    {
        name: "Fiona Kinyanjui, ACIM",
        title: "Marketing & Branding Manager",
        linkedin: "",
        email: "fkinyanjui@acentriagroup.com",
        profile: "Fiona is an accomplished marketing and brand strategist with a robust professional background spanning nearly half a decade within the banking industry. Her diverse experience has honed her skills in developing and executing effective marketing strategies, strategic communications, brand management, and digital marketing solutions. Having earned a Bachelor’s Degree in Marketing from Daystar University, Fiona’s commitment to professional growth is evident through her certifications from the Chartered Institute of Marketing (CIM-UK). Her certifications in Managing Brands, Planning Campaigns, and Innovation in Marketing exemplify her dedication to staying at the forefront of the industry. Additionally, as an Affiliate member of the Chartered Institute of Marketing (CIM-UK), she remains actively engaged in the latest advancements and best practices within the marketing domain.",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/fiona-1.jpg",
    },
    {
        name: "Andrew Mwangi",
        title: "Finance & Credit Control Manager",
        linkedin: "",
        email: "amwangi@acentriagroup.com",
        profile: "",
        image:
            "/assets/media/andrew.jpg",
    },
    {
        name: "Kelvin Ombal",
        title: "IT Manager",
        linkedin: "https://www.linkedin.com/in/kelvin-ombal-2475281b2/",
        email: "kombal@acentriagroup.com",
        profile: "Kelvin Ombal is a leading cybersecurity and IT solutions specialist with over six years of experience designing, implementing, and managing secure, high-performance networks across various industries. As a trusted expert in IT security architecture, he has a proven track record of helping organizations safeguard their digital assets, mitigate threats, and enhance their overall cybersecurity posture. Kelvin’s work spans across cloud security, endpoint protection, data loss prevention (DLP), and advanced security monitoring systems. He is known for his hands-on expertise in deploying and managing a broad spectrum of security tools, such as SIEM, IDS/IPS, PAM, and encryption technologies, ensuring companies remain protected from ever-evolving cyber threats. In addition to his technical skills, Kelvin is highly skilled in cybersecurity strategy, threat detection, and vulnerability assessment, making him a go-to resource for businesses seeking to strengthen their security operations.",
        image:
            "/assets/media/kelvin.jpg",
    },
],)

const emits = defineEmits([
    'openProfile'
])



const profileContent = ref(null)

defineExpose({
    profileContent
})

const openPofile = (member) => {
    profileContent.value = member
    emits('openProfile')
    
}
</script>

<template>
    <div class="container px-4 py-10">
        <div class="text-center">
            <h2 id="" class="heading-class text-brand-primary mb-2">
                <span class="text-black">Management</span>
                Team
            </h2>
            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4 font-sans mb-5">
                This team is responsible for executing the company's vision, aligning day-to-day operations with
                long-term goals, and fostering a culture of innovation and growth. By effectively managing resources and
                ensuring the well-being of employees and clients alike, Acentria's Management Leadership continues to
                enhance the company's reputation as a trusted partner in the insurance and financial industries. Their
                commitment to operational excellence and customer satisfaction sets the foundation for Acentria's
                continued success.
            </p>
        </div>
        <div class="container mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-3 lg:grid-cols-5">
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