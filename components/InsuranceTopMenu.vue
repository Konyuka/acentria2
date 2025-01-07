<script setup>

</script>

<template>

    <div class="flex justify-between ">
        <!-- Manage Your Policy -->


        <div class="paste-button">
            <!-- <button class="button">Manage Your Policy</button> -->
            <button
                class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-[15px] font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <i class="fas fa-user flex-none group-hover:text-black text-brand-primary" />
                Expertise Services <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
                <a id="renew-policy" href="#">Financial Wellness</a>
                <a id="report-claim" href="#">Risk Management</a>
                <a id="online-portal" href="#">Cyber Risk Management</a>
                <a id="online-portal" href="#">Cyber Risk Management</a>
                <a id="online-portal" href="#">Claims Management</a>
                <a id="online-portal" href="#">Insurance Policy Management</a>
            </div>

        </div>

        <div class="paste-button">
            <!-- <button class="button">Manage Your Policy</button> -->
            <button
                class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-[15px] font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <i class="fas fa-user flex-none group-hover:text-black text-brand-primary" />
                Manage Your Policy <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
                <a id="renew-policy" href="#">Renew Your Policy</a>
                <a id="report-claim" href="#">Report a Claim</a>
                <a id="online-portal" href="#">Online Service Portal</a>
            </div>
        </div>

        <!-- Buy Insurance -->
        <div class="paste-button">
            <button
                class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-[15px] font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <i class="fas fa-user flex-none group-hover:text-black text-brand-primary" />
                Buy Insurance <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
                <a id="diy" href="#">Do it Yourself</a>
                <a id="agent-assistance" href="#">Live Agent Assistance</a>
                <a id="full-service" href="#">Full Service</a>
            </div>
        </div>

        <!-- Insights -->
        <div class="paste-button">
            <button
                class=" group button-animation flex items-center hover:text-gray-600 gap-x-2.5 py-3 text-[15px] font-semibold leading-normal text-black sm:justify-center sm:px-0">
                <i class="fas fa-user flex-none group-hover:text-black text-brand-primary" />
                Insights <i class="fas fa-angle-down"></i>
            </button>
            <div class="dropdown-content">
                <a id="blog" href="#">Blog</a>
                <a id="news" href="#">News</a>
                <a id="learn" href="#">Learn</a>
                <a id="guide" href="#">Guide</a>
            </div>
        </div>
    </div>



</template>

<style scoped>
.paste-button {
    position: relative;
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button {
    background-color: #ed1c24;
    color: #212121;
    padding: 10px 15px;
    font-size: 15px;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 15px;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    font-size: 13px;
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
    border-radius: 15px 15px 0px 0px;
}

.paste-button:hover .dropdown-content {
    display: block;
}
</style>