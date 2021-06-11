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
        confine: true,
        formatter:
            '定制的 formatter：<br>'
            + '{{ for: ${params} as ${param} }}'
                + '{{ if: ${param.value} != null }}'
                    + '<span style="width: 8px; height: 8px; border-radius: 4px; display: inline-block; '
                        + 'margin-right: 5px; background-color: ${param.color}"></span>'
                    + '${param.seriesName}: ${param.value}元<br>'
                + '{{ /if }}'
            + '{{ /for }}'
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
                color: '#666',
                formatter: '${params}{{ if: ${params} >= 400 }}+{{ /if }}'
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
            data: [300, 270, 340, 344, 300, 320, 310]
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

/* eslint-disable */
Page({
/* eslint-enable */
    data: {
        option: option
    },

    onLoad() {

    }
});
