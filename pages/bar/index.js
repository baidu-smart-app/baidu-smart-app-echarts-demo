/**
 * @file ECharts bar series
 */

const option = {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        confine: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['热度', '正面', '负面']
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 40,
        containLabel: true
    },
    xAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#666'
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#666'
            }
        }
    ],
    series: [
        {
            name: '热度',
            type: 'bar',
            label: {
                show: true,
                position: 'inside',
                color: '#fff'
            },
            data: [300, 270, 340, 344, 300, 320, 310],
            itemStyle: {
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 0,
                        color: 'red'
                    }, {
                        offset: 0.5,
                        color: 'orange'
                    }, {
                        offset: 1,
                        color: 'yellow'
                    }]
                }
            }
        },
        {
            name: '正面',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [120, 102, 141, 174, 190, 250, 220]
        },
        {
            name: '负面',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [-20, -32, -21, -34, -90, -130, -110]
        }
    ]
};

Page({
    data: {
        option: option
    },

    onLoad() {

    }
});
