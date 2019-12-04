/**
 * @file ECharts k series
 */

const option = {
    title: {
        text: 'K 线图'
    },
    xAxis: {
        data: ['10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00']
    },
    yAxis: {},
    series: [{
        type: 'k',
        data: [
            [100, 200, 40, 250],
            [80, 90, 66, 100],
            [90, 40, 33, 110],
            [50, 60, 40, 80],
            [200, 180, 160, 200],
            [100, 200, 40, 250],
            [80, 90, 66, 100]
        ],
        itemStyle: {
            normal: {
                color: '#ff0000',
                color0: '#00ff00',
                borderWidth: 1,
                opacity: 1
            }
        }
    }]
};

Page({
    data: {
        option: option
    },

    onLoad() {

    }
});
