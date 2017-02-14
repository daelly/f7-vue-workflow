<template>
    <li>
        <div class="item-content">
            <div class="item-inner">
                <div class="item-title label" v-text="col.colName">列项</div>
                <div class="item-input"></div>
                <div class="item-after">
                    <a href="javascript:void(0);">
                        <i class="icon-camera icon-large"></i>
                    </a>
                </div>
            </div>
        </div>
    </li>
    <li v-show="fileItems.length>0">
        <div class="item-content">
            <input type="hidden" class="file" :name="col.colCode" v-model="col.value" />
            <div>
                <div style="margin-top: 3px;">
                    <img v-for="img in imgItems" class="image-view" :src="img.url" @click="removeImg(img)" width="100" />
                </div>
                <div>
                    <a v-for="file in notImgItems" href="javascript:void(0)" @click="fileDown(file)" v-text="file.fileName">文件</a>
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
            return {
                fileItems: []
            }
        },
        methods: {
            getFjkByIds () {
                var _ids = this.col.value;
                if(typeof(_ids) == 'undefined' || _ids.length == 0) {
                    this.fileItems = [];
                    return;
                }
                var that = this;
                $.ajax({
                    url: '/RedseaPlatform/PtFjk.mob?method=getFjkByIds',
                    type: 'post',
                    data: {ids: _ids},
                    dataType: 'json',
                    success (rs) {
                        if(rs.state == '1') {
                            var list = rs.jsonList;
                            that.fileItems = list;

                        }
                    }
                });
            }
        },
        mounted () {

        }
    }
</script>

<style>

</style>