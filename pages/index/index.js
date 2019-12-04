/**
 * @file ECharts demos
 */

Page({
    data: {
        charts: [{
            id: 'bar',
            name: '柱状图'
        }, {
            id: 'scatter',
            name: '散点图'
        }, {
            id: 'pie',
            name: '饼图'
        }, {
            id: 'line',
            name: '折线图'
        }, {
            id: 'funnel',
            name: '漏斗图'
        }, {
            id: 'gauge',
            name: '仪表盘'
        }, {
            id: 'k',
            name: 'K 线图'
        }, {
            id: 'radar',
            name: '雷达图'
        }, {
            id: 'heatmap',
            name: '热力图'
        }, {
            id: 'tree',
            name: '树图'
        }, {
            id: 'treemap',
            name: '矩形树图'
        }, {
            id: 'sunburst',
            name: '旭日图'
        }, {
            id: 'map',
            name: '地图'
        }, {
            id: 'graph',
            name: '关系图'
        }, {
            id: 'boxplot',
            name: '箱型图'
        }, {
            id: 'parallel',
            name: '平行坐标图'
        }, {
            id: 'sankey',
            name: '桑基图'
        }, {
            id: 'themeRiver',
            name: '主题河流图'
        }, {
            id: 'wordcloud',
            name: '字符云扩展'
        }, {
            id: 'liquidfill',
            name: '水球图扩展'
        }],
        chartsWithoutImg: [{
            id: 'event',
            name: '事件触发与监听'
        }, {
            id: 'lazyLoad',
            name: '延迟加载图表'
        }, {
            id: 'multiCharts',
            name: '一个页面中多个图表'
        }, {
            id: 'resize',
            name: '改变图表容器大小'
        }, {
            id: 'clear',
            name: '清除图表内容'
        }]
    },

    onLoad() {
    },

    showChart(e) {
        const id = e.currentTarget.dataset.id;
        swan.navigateTo({
            url: '/pages/' + id + '/index'
        });
    }
});
