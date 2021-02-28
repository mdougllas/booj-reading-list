<template>
    <div>
        <b-row class="d-flex justify-content-center mt-4">
            <b-col sm="12" xl="6">
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input
                        v-model="name"
                        placeholder="Enter name"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col sm="12" xl="6">
                <b-form-group
                    class="text-center"
                    label="Email address:"
                    label-for="input-1"
                >
                    <b-form-input
                        v-model="email"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row class="d-flex justify-content-center">
            <b-col sm="12" xl="6">
                <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                    <b-form-input
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col sm="12" xl="6">
                <b-form-group
                    class="text-center"
                    label="Confirm Password:"
                    label-for="input-1"
                >
                    <b-form-input
                        v-model="passwordConfirmation"
                        type="password"
                        placeholder="Confirm password"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-button
            type="submit"
            variant="primary"
            class="mt-4"
            @click="onSubmit"
        >Start Reading</b-button>
    </div>
</template>

<script>
    export default {
        name: 'RegisterForm',

        data() {
            return {
                name: null,
                email: null,
                password: null,
                passwordConfirmation: null,
            }
        },
        methods: {
            onSubmit() {
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    passwordConfirmation: this.passwordConfirmation
                }

                this.$store.dispatch('userRegister', data)
            }
        }
    }
</script>