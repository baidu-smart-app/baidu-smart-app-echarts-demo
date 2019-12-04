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
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data: [300, 270, 340, 344, 300, 320, 310],
            itemStyle: {
                // emphasis: {
                //   color: '#37a2da'
                // }
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
            data: [120, 102, 141, 174, 190, 250, 220],
            itemStyle: {
                // emphasis: {
                //   color: '#32c5e9'
                // }
            }
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
            data: [-20, -32, -21, -34, -90, -130, -110],
            itemStyle: {
                // emphasis: {
                //   color: '#67e0e3'
                // }
            }
        }
    ]
};

Page({
    data: {
        option: null,
        isShow: false
    },

    onLoad() {
    },

    showChart() {
        this.setData('isShow', true);
        this.setData('option', option);
    }
});
