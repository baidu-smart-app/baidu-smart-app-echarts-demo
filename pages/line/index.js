/**
 * @file ECharts line series
 */

const option = {
    color: ['#37A2DA', '#67E0E3', '#9FE6B8'],
    legend: {
        data: ['A', 'B', 'C'],
        top: 10,
        left: 'center',
        z: 100
    },
    grid: {
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
        // show: false
    },
    series: [{
        name: 'A',
        type: 'line',
        smooth: true,
        data: [18, 36, 65, 30, 78, 40, 33]
    }, {
        name: 'B',
        type: 'line',
        smooth: true,
        data: [12, 50, 51, 35, 70, 30, 20]
    }, {
        name: 'C',
        type: 'line',
        smooth: true,
        data: [10, 30, 31, 50, 40, 20, 10]
    }]
};

Page({
    data: {
        option: option
    },

    onLoad() {

    }
});
