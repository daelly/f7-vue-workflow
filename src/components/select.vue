<template>
    <f7-list-item>
        <f7-label v-text="col.colName">列项</f7-label>
        <f7-input type="select" :name="col.colCode" v-model="col.value">
            <option v-for="item in enums" :value="item.code" v-text="item.name"></option>
        </f7-input>
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
            return {
                enums: []
            }
        },
        method: {

        },
        mounted () {
            var that = this;
            //加载数据字典
            $.ajax({
                url: '/RedseaPlatform/PtCodeTypeValue.mob?method=getCodeValueByCode',
                data: {codeType: that.col.enumValue},
                type: 'post',
                dataType: 'json',
                cache: true,
                success (rs) {
                    that.enums = rs;
                }
            });
        }
    }
</script>

<style>

</style>