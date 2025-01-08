<template>
    <div class="container mx-6 !font-sans px-4 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-semibold text-gray-800 mb-3">File A <span class="text-brand-primary">Claim Here</span>
        </h1>
        <p class="text-gray-600 mb-6">Please complete the form to file your claim</p>

        <!-- Selection Section -->
        <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-6">Select if you are an Employer or a Member</label>
            <div class="flex gap-4">
                <button class="px-10 py-2 bg-black text-white rounded hover:bg-brand-primary"
                    :class="{ 'bg-brand-primary': role === 'member' }" @click="role = 'member'">
                    Member
                </button>
                <button class="px-10 py-2 bg-black text-white rounded hover:bg-brand-primary"
                    :class="{ 'bg-brand-primary': role === 'employer' }" @click="role = 'employer'">
                    Employer
                </button>
            </div>
        </div>

        <!-- Member Form -->
        <form v-if="role === 'member'" class="space-y-6">
            <div class="grid grid-cols-3 gap-4">
                <input type="text" placeholder="First Name" class="input" />
                <input type="text" placeholder="Middle Name" class="input" />
                <input type="text" placeholder="Surname" class="input" />
            </div>
            <div class="grid grid-cols-3 gap-4">
                <input type="text" placeholder="National ID Number" class="input" />
                <input type="email" placeholder="Email" class="input" />
                <input type="tel" placeholder="Mobile Number" class="input" />
            </div>
            <div>
                <input type="checkbox" id="terms" class="mr-2" />
                <label for="terms">I accept Terms and Conditions</label>
            </div>
            <div>
                <label>Select to receive token either on phone or email:</label>
                <select class="input mt-2">
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                </select>
            </div>
            <input type="text" placeholder="Enter Token" class="input" />
            <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name of Scheme" class="input" />
                <input type="text" placeholder="Staff Number" class="input" />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nature of Claim" class="input" />
                <input type="date" placeholder="Date of Event" class="input" />
            </div>
            <div>
                <button class="text-brand-primary underline">View Claim Documentations Required</button>
            </div>
            <textarea placeholder="Further Details" class="input h-20"></textarea>
            <div class="flex items-center gap-4">
                <label>Name of Document:</label>
                <input type="file" class="input" />
            </div>
            <button class="w-full py-2 bg-brand-primary text-white rounded hover:bg-black">Submit</button>
        </form>

        <!-- Employer Form -->
        <form v-if="role === 'employer'" class="space-y-6">
            <div class="grid grid-cols-3 gap-4">
                <input type="text" placeholder="First Name" class="input" />
                <input type="text" placeholder="Middle Name" class="input" />
                <input type="text" placeholder="Surname" class="input" />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <input type="email" placeholder="Email" class="input" />
                <input type="tel" placeholder="Mobile Number" class="input" />
            </div>
            <div>
                <input type="checkbox" id="terms-employer" class="mr-2" />
                <label for="terms-employer">I accept <a href="#" class="underline text-brand-primary">Terms and Conditions</a></label>
            </div>
            <div>
                <label>Select to receive token either on phone or email:</label>
                <select class="input mt-2">
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                </select>
            </div>
            <input type="text" placeholder="Enter Token" class="input" />
            <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name of Scheme" class="input" />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nature of Claim" class="input" />
                <input type="date" placeholder="Date of Event" class="input" />
            </div>
            <div>
                <button class="text-brand-primary underline">View Claim Documentations Required</button>
            </div>
            <textarea placeholder="Further Details" class="input h-20"></textarea>
            <div class="flex items-center gap-4">
                <label>Name of Document:</label>
                <input type="file" class="input" />
            </div>
            <button class="w-full py-2 !bg-brand-primary text-white rounded hover:bg-black">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            role: 'member', // Default to member form
        };
    },
};
</script>

<style>
.input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

.input:focus {
    border-color: #ed1c24;
    border-width: 2px;
}
</style>
