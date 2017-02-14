<template>
    <f7-list>
        <component v-for="col in cols" v-bind:is="col.inputType+'-component'" :col="col"></component>
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
                required: true
            },
            cols: {
                type: Array,
                required: true
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