/**
 * @file ECharts gauge series
 */

const option = {
    backgroundColor: '#ffffff',
    color: ['#37A2DA', '#32C5E9', '#67E0E3'],
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: [{
            value: 40,
            name: '完成率'
        }]

    }]
};

Page({
    data: {
        option: option
    },

    onLoad() {

    }
});
