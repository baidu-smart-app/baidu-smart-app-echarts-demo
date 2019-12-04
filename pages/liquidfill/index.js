/**
 * @file ECharts bar series
 */

// 文档参见 https://github.com/ecomfe/echarts-liquidfill
const option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '90%'
    }]
};

Page({
    data: {
        option: option,
        extensions: ['liquidfill']
    },

    onLoad() {

    }
});
