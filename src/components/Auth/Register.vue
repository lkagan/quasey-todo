<template>
    <q-form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary"/>
                </template>
                Register to access your Tasks anywhere
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input
                class="col"
                outlined
                v-model="formData.email"
                label="Email"
                stack-label
                lazy-rules
                :rules="[val => isValidEmailAddress(val) || 'Please enter a valid email address']"
                ref="email"
            />
        </div>
        <div class="row q-mb-md">
            <q-input
                class="col"
                type="password"
                outlined
                v-model="formData.password"
                label="Password"
                stack-label
                :rules="[val => val.length >= 6 || 'Password must be at least 6 characters']"
                lazy-rules
                ref="password"
            />
        </div>
        <div class="row q-mb-md">
            <q-space></q-space>
            <q-btn
                color="primary"
                label="Register"
                type="submit"
            ></q-btn>
        </div>

    </q-form>
</template>

<script>
    export default {
        name: "Register",

        data() {
            return {
                formData: {
                    email: '',
                    password: '',
                }
            }
        },

        methods: {
            submitForm() {
                this.$refs.email.validate();
                this.$refs.password.validate();

                if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                    console.log('register user');
                }
            },

            isValidEmailAddress(email) {
                return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            }
        }
    }
</script>

<style scoped>

</style>
