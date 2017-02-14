<template>
    <div>
        <f7-list-item>
            <f7-label v-text="col.colName">列项</f7-label>
        </f7-list-item>
        <f7-list>
            <f7-list-item v-for="item in enums" checkbox :name="col.colCode" :value="item.code" :title="item.name"></f7-list-item>
        </f7-list>
    </div>
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
        methods: {

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