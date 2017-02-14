<template>
    <div :id="'content-'+workForm.formId">
        <div class="sub-form" :id="workForm.formId">
            <div>
                <div class="sub-many-title" v-text="workForm.tableName">子表单</div>
                <div class="sub-form-add" :data-formid="workForm.formId">
                    <i class="icon-plus"></i>
                </div>
                <div style="clear: both;"></div>
            </div>
            <div class="sub-form-table-wrap">
                <table class="sub-form-table">
                    <thead>
                    <tr>
                        <th v-for="col in cols" v-text="col.colName">标题</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'custom-sub-many-form',
        data () {

        },
        methods: {

        },
        mounted () {

        }
    }
</script>

<style>

</style>