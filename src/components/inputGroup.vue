<template>
    <f7-list-item>
        <f7-label v-text="col.colName">列项</f7-label>
        <div class="item-after" v-if="col.textPreddon" v-text="col.textPreddon">前缀</div>
        <f7-input type="text" :name="col.colCode" :placeholder="col.style" v-model="col.value"></f7-input>
        <div class="item-after" v-if="col.textAddon" v-text="col.textAddon">后缀</div>
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