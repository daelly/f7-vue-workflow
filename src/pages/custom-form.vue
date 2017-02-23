<template>
    <f7-page>
        <f7-navbar title="自定义表单" back-link="Back" sliding>
        </f7-navbar>
        <f7-block-title v-text="workForm.tableName">Demo Form</f7-block-title>
        <form-output v-if="cols.length > 0" :workForm="workForm" :cols="cols"></form-output>
        <sub-one-form v-for="f in subOneForms" :workForm="f.workForm" :cols="f.cols"></sub-one-form>
        <sub-many-form v-for="f in subManyForms" :workForm="f.workForm" :cols="f.cols"></sub-many-form>
    </f7-page>
</template>

<script>
    var $ = Dom7;
    import OneForm from './../forms/custom-sub-one-form.vue';
    import ManyForm from './../forms/custom-sub-many-form.vue';
    import FormOutput from './../forms/custom-form-output.vue';

    export default {
        name: 'custom-form',
        data () {
            var fid = this.$route.params.formId;
            return {
                workForm: {},
                cols: [],
                formId: fid,
                subOneForms: [],
                subManyForms: []
            };
        },
        methods: {
            loadForm (formId) {
                var that = this;
                $.ajax({
                    url: '/RedseaPlatform/WfWorkform.mob?method=getWfWorkformMobile',
                    data: {formId: formId},
                    type: 'post',
                    dataType: 'json',
                    success (rs) {
                        if(rs.state == '1') {
                            var wf = rs.result;
                            var _cols = rs.jsonList;
                            for(var i in _cols) {
                                var other = _cols[i].other || '{}';
                                other = JSON.parse(other);
                                for(var k in other) {
                                    _cols[i][k] = other[k];
                                }
                            }
                            if(wf.formId == that.formId) {
                                that.workForm = wf;
                                that.cols = _cols;
                                if(typeof(wf.note2) != 'undefined' && wf.note2.length > 0) {//处理字表
                                    var subFormIds = wf.note2.split(',');
                                    for (var i in subFormIds) {
                                        that.loadForm(subFormIds[i]);
                                    }
                                }
                            } else {//子表
                                var f = new Object();
                                f.workForm = wf;
                                f.cols = _cols;
                                if(wf.formType == 'SUB_ONE') {
                                    that.subOneForms.push(f);
                                } else {
                                    that.subManyForms.push(f);
                                }
                            }
                        }
                    },
                    error () {

                    }
                });
            }
        },
        mounted () {
            this.loadForm(this.formId);
        },
        components: {
            'form-output': FormOutput,
            'sub-one-form': OneForm,
            'sub-many-form': ManyForm
        }
    }
</script>

<style>

</style>