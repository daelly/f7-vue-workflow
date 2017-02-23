<template>
    <div>
        <div class="sub-form-title" v-text="workForm.tableName">一一子表单</div>
        <input type="hidden" :name="workForm.formId+'.PK'" value="" />
        <input type="hidden" :name="workForm.formId+'.row'" value="" />
        <form-output :subForm="true" :workForm="workForm" :cols="cols"></form-output>
    </div>
</template>

<script>
    import FormOutput from './custom-form-output.vue';
    export default {
        name: 'custom-sub-one-form',
        props: {
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
            return {};
        },
        components: {
            'form-output': FormOutput
        }
    }
</script>

<style>

</style>