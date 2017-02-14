<template>
    <f7-list-item>
        <f7-label v-text="col.colName">列项</f7-label>
        <div class="item-input" v-text="col.value"></div>
        <input type="hidden" :name="col.colCode" v-model="col.value" />
    </f7-list-item>
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