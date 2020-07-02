<template>
    <q-form>
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
            />
        </div>
        <div class="row q-mb-md">
            <q-space></q-space>
            <q-btn color="primary" label="Register"></q-btn>
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
        }
    }
</script>

<style scoped>

</style>
