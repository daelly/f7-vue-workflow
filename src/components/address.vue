<template>
    <li class="address-component">
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label" v-text="col.colCode">地址</div>
                <div class="item-input">
                    <input type="text" class="address" :name="col.colCode" :placeholder="col.style" v-model="col.value" />
                    <input type="hidden" :name="col.longitude" />
                    <input type="hidden" :name="col.latitude" />
                </div>
                <div class="item-after">
                    <i class="icon-map-marker icon-large map-show"></i>
                </div>
            </div>
        </div>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">省份</div>
                <div class="item-input">
                    <select class="province" :name="col.province"></select>
                </div>
            </div>
        </div>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">城市</div>
                <div class="item-input">
                    <select class="city" :name="col.city"></select>
                </div>
            </div>
        </div>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">区</div>
                <div class="item-input">
                    <select class="country" :name="col.country"></select>
                </div>
            </div>
        </div>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label">街道</div>
                <div class="item-input">
                    <input type="text" class="street" :name="col.street" />
                </div>
            </div>
        </div>
    </li>
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