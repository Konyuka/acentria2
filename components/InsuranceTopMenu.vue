<script setup>

</script>

<template>

    <div class="flex justify-between ">
        <!-- Manage Your Policy -->


        <div class="paste-button">
            <!-- <button class="button">Manage Your Policy</button> -->
            <button
                class="button group  flex items-center hover:text-gray-600 gap-x-2.5 py-3  font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <!-- <i class="fas fa-user flex-none text-white text-brand-primary" /> -->
                Expertise Services <i class="fas fa-user-tie"></i>
            </button>
            <div class="dropdown-content">
                <NuxtLink to="/financial-wellness" id="financial-wellness">Financial Wellness</NuxtLink>
                <NuxtLink to="/risk-management" id="risk-management">Risk Management</NuxtLink>
                <NuxtLink to="/cyber-risk-management" id="cyber-risk-management">Cyber Risk Management</NuxtLink>
                <NuxtLink to="/claims-management" id="claims-management">Claims Management</NuxtLink>
                <NuxtLink to="/insurance-policy-management" id="insurance-policy-management">Insurance Policy Management
                </NuxtLink>
            </div>

        </div>

        <div class="paste-button">
            <!-- <button class="button">Manage Your Policy</button> -->
            <button
                class="button group  flex items-center hover:text-gray-600 gap-x-2.5 py-3  font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <!-- <i class="fas fa-user flex-none text-white text-brand-primary" /> -->
                Manage Your Policy <i class="fas fa-file-alt"></i>
            </button>
            <div class="dropdown-content">
                <NuxtLink to="/renew-policy">Renew Your Policy</NuxtLink>
                <NuxtLink to="/report-claim" id="report-claim">Report a Claim</NuxtLink>
                <NuxtLink to="/online-portal" id="online-portal">Online Service Portal</NuxtLink>
            </div>
        </div>

        <!-- Buy Insurance -->
        <div class="paste-button">
            <button
                class="button group  flex items-center hover:text-gray-600 gap-x-2.5 py-3  font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <!-- <i class="fas fa-user flex-none text-white text-brand-primary" /> -->
                Buy Insurance <i class="fas fa-shopping-cart"></i>
            </button>
            <div class="dropdown-content">
                <NuxtLink to="/diy" id="diy">Do it Yourself</NuxtLink>
                <NuxtLink to="/agent-assistance" id="agent-assistance">Live Agent Assistance</NuxtLink>
                <NuxtLink to="/full-service" id="full-service">Full Service</NuxtLink>
            </div>
        </div>

        <!-- Insights -->
        <div class="paste-button">
            <button
                class="button group  flex items-center hover:text-gray-600 gap-x-2.5 py-3  font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <!-- <i class="fas fa-user flex-none text-white text-brand-primary" /> -->
                Insights <i class="fas fa-lightbulb"></i>
            </button>
            <div class="dropdown-content">
                <NuxtLink to="/acentria-news-and-blogs" id="blog">Blog</NuxtLink>
                <NuxtLink to="/acentria-news-and-blogs" id="news">News</NuxtLink>
                <NuxtLink to="/acentria-news-and-blogs" id="learn">Learn</NuxtLink>
                <NuxtLink to="/acentria-news-and-blogs" id="guide">Guide</NuxtLink>
            </div>
        </div>
    </div>



</template>

<style scoped>
.paste-button {
    position: relative;
    display: block;
}

.button {
    background-color: #000;
    color: #fff;
    padding: 5px 25px;
    font-size: 12px;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    font-size: 11px;
    position: absolute;
    z-index: 1;
    min-width: 200px;
    background-color: #212121;
    border: 2px solid #ed1c24;
    border-radius: 0px 5px 5px 5px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropdown-content a {
    color: #fff;
    padding: 8px 10px;
    text-decoration: none;
    display: block;
    transition: 0.1s;
}

.dropdown-content a:hover {
    background-color: #ed1c24;
    color: #fff;
}

.dropdown-content a:focus {
    background-color: #212121;
    color: #ed1c24;
}

.dropdown-content #top:hover {
    border-radius: 0px 13px 0px 0px;
}

.dropdown-content #bottom:hover {
    border-radius: 0px 0px 13px 13px;
}

.paste-button:hover button {
    border-radius: 0px 0px 0px 0px;
}

.paste-button:hover .dropdown-content {
    display: block;
}
</style>