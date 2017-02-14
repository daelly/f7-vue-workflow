<template>
    <f7-list-item>
        <f7-label v-text="col.colName">列项</f7-label>
        <f7-input type="text" :id="col.formId+'.'+col.colCode" :name="col.colCode" :placeholder="col.style" v-model="col.value"></f7-input>
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
            datePicker (id) {
                var val = $("[id='"+id+"']").val();
                var today = val ? new Date(val) : new Date();
                var pickerInline = f7.picker({
                    input: "[id='"+id+"']",
                    toolbarCloseText:'确定',
                    value: [today.getFullYear(),today.getMonth(), today.getDate()],  //默认系统当前时间
                    onChange (picker, values) {
                        var daysInMonth = new Date(picker.value[0], picker.value[1]*1+ 1, 0).getDate();
                        if (values[2] > daysInMonth) {
                            picker.cols[2].setValue(daysInMonth);
                        }
                    },

                    formatValue (p, values, displayValues) {
                        return values[0] + '-' + displayValues[1] + '-' + displayValues[2];
                    },

                    cols: [
                        // Years
                        {
                            values:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045],
                            textAlign: 'left'
                        },
                        // Space divider
                        {
                            divider: true,
                            content: '  '
                        },
                        // Months
                        {
                            values: [0,1,2,3,4,5,6,7,8,9,10,11],
                            displayValues: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' '),

                        },
                        // Space divider
                        {
                            divider: true,
                            content: '  '
                        },
                        // Days
                        {
                            values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                            displayValues:(function () {
                                var arr = [];
                                for (var i = 1; i <= 31; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        }
                    ]
                });
            },
            pickeryyMMddhhmm (id) {
                var val = $("[id='"+id+"']").val();
                var today = val ? new Date(val) : new Date();

                var pickerInline = f7.picker({
                    input: "[id='"+id+"']",
                    toolbarCloseText:'确定',
                    value: [today.getFullYear(),today.getMonth(), today.getDate(),  (today.getHours() < 10 ? '0' + today.getHours() : today.getHours()), '00'],//默认系统当前时间
                    onChange: function (picker, values) {
                        var daysInMonth = new Date(picker.value[0], picker.value[1]*1+ 1, 0).getDate();
                        if (values[2] > daysInMonth) {
                            picker.cols[2].setValue(daysInMonth);
                        }

                    },

                    onClose () {
                        //alert(56789)
                    },

                    formatValue (p, values, displayValues) {
                        return values[0] + '-' + displayValues[1] + '-' + displayValues[2] + ' ' + values[3] + ':' + values[4];
                    },

                    cols: [
                        // Years
                        {
                            values:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045],
                            textAlign: 'left'
                        },
                        // Months
                        {
                            values: [0,1,2,3,4,5,6,7,8,9,10,11],
                            displayValues: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' '),

                        },
                        // Days
                        {
                            values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                            displayValues:(function () {
                                var arr = [];
                                for (var i = 1; i <= 31; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },

                        // Space divider
                        {
                            divider: true,
                            content: '   '
                        },
                        // Hours
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 23; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },
                        // Divider
                        {
                            divider: true,
                            content: ':'
                        },
                        // Minutes
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        }
                    ]
                });
            },
            dateTimePicker (id) {
                var val = $("[id='"+id+"']").val();
                var today = val ? new Date(val) : new Date();
                var pickerInline = f7.picker({
                    input: "[id='"+id+"']",
                    toolbarCloseText:'确定',
                    value: [today.getFullYear(),today.getMonth(), today.getDate(),  (today.getHours() < 10 ? '0' + today.getHours() : today.getHours()), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()),(today.getSeconds() < 10 ? '0' + today.getSeconds()  : today.getSeconds())],//默认系统当前时间
                    onChange: function (picker, values) {
                        var daysInMonth = new Date(picker.value[0], picker.value[1]*1+ 1, 0).getDate();
                        if (values[2] > daysInMonth) {
                            picker.cols[2].setValue(daysInMonth);
                        }
                    },

                    formatValue: function (p, values, displayValues) {
                        return values[0] + '-' + displayValues[1] + '-' + displayValues[2] + ' ' + values[3] + ':' + values[4] + ':' + values[5];
                    },

                    cols: [
                        // Years
                        {
                            values:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045],
                            textAlign: 'left'
                        },
                        // Months
                        {
                            values: [0,1,2,3,4,5,6,7,8,9,10,11],
                            displayValues: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' '),

                        },
                        // Days
                        {
                            values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                            displayValues:(function () {
                                var arr = [];
                                for (var i = 1; i <= 31; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },

                        // Space divider
                        {
                            divider: true,
                            content: '   '
                        },
                        // Hours
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 23; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },
                        // Divider
                        {
                            divider: true,
                            content: ':'
                        },
                        // Minutes
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },
                        // Divider
                        {
                            divider: true,
                            content: ':'
                        },
                        // Seconds
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        }

                    ]
                });
            },
            timePicker (id) {
                var today = new Date();
                var pickerInline = f7.picker({
                    input: "[id='"+id+"']",
                    toolbarCloseText:'确定',
                    value: [(today.getHours() < 10 ? '0' + today.getHours() : today.getHours()), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()),(today.getSeconds() < 10 ? '0' + today.getSeconds()  : today.getSeconds())],//默认系统当前时间
                    formatValue: function (p, values, displayValues) {
                        return values[0] + ':' + values[1] + ':' + values[2];
                    },

                    cols: [
                        // Hours
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 23; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },
                        // Divider
                        {
                            divider: true,
                            content: ':'
                        },
                        // Minutes
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        },
                        // Divider
                        {
                            divider: true,
                            content: ':'
                        },
                        // Seconds
                        {
                            values: (function () {
                                var arr = [];
                                for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                                return arr;
                            })(),
                        }

                    ]
                });
            },
            yearMonPicker (id) {
                var today = new Date();
                var pickerInline = f7.picker({
                    input: "[id='"+id+"']",
                    toolbarCloseText:'确定',
                    value: [today.getFullYear(),today.getMonth()],  //默认系统当前时间
                    formatValue: function (p, values, displayValues) {
                        return values[0] + '年' + displayValues[1] + '月';
                    },

                    cols: [
                        // Years
                        {
                            values:[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045],
                            textAlign: 'left'
                        },
                        // Space divider
                        {
                            divider: true,
                            content: '年'
                        },
                        // Months
                        {
                            values: [0,1,2,3,4,5,6,7,8,9,10,11],
                            displayValues: ('01 02 03 04 05 06 07 08 09 10 11 12').split(' '),

                        },
                        // Space divider
                        {
                            divider: true,
                            content: '月'
                        }
                    ]
                });
            }
        },
        mounted () {
            var dateFmt = this.col.dateFmt;
            var id = this.col.formId + '.' + this.col.colCode;
            switch (dateFmt) {
                case 'yyyy-MM-dd':
                    this.datePicker(id);
                    break;
                case 'yyyy-MM-dd HH:mm':
                    this.pickeryyMMddhhmm(id);
                    break;
                case 'yyyy-MM-dd HH:mm:ss':
                    this.dateTimePicker(id);
                    break;
                case 'HH:mm:ss':
                    this.timePicker(id);
                    break;
                case 'yyyy-MM':
                    this.yearMonPicker(id);
                    break;
                default:
                    console.log('no datefmt specified!');
                    break;
            }
        }
    }
</script>

<style>

</style>