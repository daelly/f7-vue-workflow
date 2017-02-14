<template>
    <f7-list-item>
        <f7-label v-text="col.colName">列项</f7-label>
        <f7-input type="number" :name="col.colCode" :placeholder="col.style" v-model="col.value"></f7-input>
        <div class="item-after" v-text="col.name">元</div>
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