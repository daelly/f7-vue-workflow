<template>
    <f7-list>
        <ul>
        <component v-for="col in cols" v-bind:is="col.inputType+'-component'" :col="col"></component>
        </ul>
    </f7-list>
</template>

<script>
    export default {
        name: 'custom-form-output',
        props: {
            subForm: {
                type: Boolean,
                required: false
            },
            workForm: {
                type: Object,
                required: false
            },
            cols: {
                type: Array,
                required: false
            }
        },
        data () {
            return {
                preFormId: this.subForm === true
            }
        }
    }
</script>

<style>

</style>