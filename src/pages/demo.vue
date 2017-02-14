<template>
    <f7-page>
        <f7-navbar title="Demo Form" back-link="Back" sliding>
            <f7-nav-right>
                <f7-link icon="icon-ok" @click="submitDemo">保存</f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-block-title>Demo Form</f7-block-title>
        <f7-list>
            <form id="demo-form">
                <f7-list-item>
                    <f7-label v-text="label">Id</f7-label>
                    <f7-input type="text" :name="name" :placeholder="placeholder"></f7-input>
                </f7-list-item>
            </form>
        </f7-list>
    </f7-page>
</template>

<script>
    var $ = Framework7.$;
    var postData = function () {
        var formData = f7.formToData('#demo-form');
        console.log(formData);
        $.ajax({
            url: '/Backend/data1',
            type: 'post',
            data: formData,
            success (rs) {
                alert(rs);
            }
        });
    }
    export default {
        name: 'demo',
        data () {
            return {
                label: 'Item1',
                name: 'id',
                placeholder: 'id input'
            }
        },
        methods: {
            submitDemo () {
                postData();
            }
        }
    }
</script>