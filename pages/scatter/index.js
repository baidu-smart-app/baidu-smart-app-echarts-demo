/**
 * @file ECharts scatter series
 */

const data = [];
const data2 = [];

for (let i = 0; i < 10; i++) {
    data.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 40)
        ]
    );
    data2.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ]
    );
}

const axisCommon = {
    axisLabel: {
        textStyle: {
            color: '#C8C8C8'
        }
    },
    axisTick: {
        lineStyle: {
            color: '#fff'
        }
    },
    axisLine: {
        lineStyle: {
            color: '#C8C8C8'
        }
    },
    splitLine: {
        lineStyle: {
            color: '#C8C8C8',
            type: 'solid'
        }
    }
};

const option = {
    tooltip: {
        show: true,
        renderMode: 'richText'
    },
    color: ['#FF7070', '#60B6E3'],
    backgroundColor: '#eee',
    xAxis: axisCommon,
    yAxis: axisCommon,
    legend: {
        data: ['aaaa', 'bbbb']
    },
    visualMap: {
        show: false,
        max: 100,
        inRange: {
            symbolSize: [20, 70]
        }
    },
    series: [{
        type: 'scatter',
        name: 'aaaa',
        data: data
    },
    {
        name: 'bbbb',
        type: 'scatter',
        data: data2
    }
    ],
    animationDelay: function (idx) {
        return idx * 50;
    },
    animationEasing: 'elasticOut'
};

Page({
    data: {
        option: option
    },

    onLoad() {

    }
});
