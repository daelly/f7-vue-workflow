<template>
    <input type="hidden" :name="col.colCode" v-model="col.value" />
</template>

<script>
    var $ = Dom7;
    export default {
        name: 'text-compontent',
        props: {
            col: {
                type: Object,
                required: true
            }
        },
        data () {
            return {}
        },
        methods: {

        },
        mounted () {

        }
    }
</script>

<style>

</style>