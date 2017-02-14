<template>
    <f7-page>
        <f7-navbar title="自定义表单" back-link="Back" sliding>
        </f7-navbar>
        <f7-block-title v-text="workForm.tableName">Demo Form</f7-block-title>
        <f7-list form>
            <ul>
                <component v-for="col in cols" v-bind:is="col.inputType+'-component'" :col="col"></component>
            </ul>

        </f7-list>
    </f7-page>
</template>

<script>
    var $ = Dom7;
    export default {
        name: 'custom-form',
        data () {
            var formId = this.$route.params.formId;
            return {
                workForm: {},
                cols: [],
                formId: formId,
                subOneForms: [],
                subManyForms: []
            };
        },
        methods: {
            loadForm (formId) {

            }
        },
        mounted () {
            var that = this;
            $.ajax({
                url: '/RedseaPlatform/WfWorkform.mob?method=getWfWorkformMobile',
                data: {formId: that.formId},
                type: 'post',
                dataType: 'json',
                success (rs) {
                    if(rs.state == '1') {
                        var wf = rs.result;
                        if(wf.formId == that.formId) {
                            that.workForm = wf;
                            var _cols = rs.jsonList;
                            for(var i in _cols) {
                                var other = _cols[i].other || '{}';
                                other = JSON.parse(other);
                                for(var k in other) {
                                    _cols[i][k] = other[k];
                                }
                            }
                            that.cols = _cols;
                        } else {//子表

                        }
                    }
                },
                error () {

                }
            });
        }
    }
</script>

<style>

</style>