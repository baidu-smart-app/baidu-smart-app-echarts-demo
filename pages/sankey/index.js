/**
 * @file ECharts sankey series
 */

const option = {
    color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#92CEFF', '#6084E0'],
    series: {
        type: 'sankey',
        layout: 'none',
        data: [{
            name: 'a'
        }, {
            name: 'b'
        }, {
            name: 'a1'
        }, {
            name: 'a2'
        }, {
            name: 'b1'
        }, {
            name: 'c'
        }, {
            name: 'd'
        }, {
            name: 'd1'
        }, {
            name: 'd2'
        }, {
            name: 'd3'
        }],
        links: [{
            source: 'a',
            target: 'a1',
            value: 5
        }, {
            source: 'a',
            target: 'a2',
            value: 3
        }, {
            source: 'b',
            target: 'b1',
            value: 8
        }, {
            source: 'a',
            target: 'b1',
            value: 3
        }, {
            source: 'b1',
            target: 'a1',
            value: 1
        }, {
            source: 'd',
            target: 'a2',
            value: 1
        }, {
            source: 'd',
            target: 'c',
            value: 1
        }, {
            source: 'd1',
            target: 'c',
            value: 2
        }, {
            source: 'd2',
            target: 'c',
            value: 2
        }, {
            source: 'd',
            target: 'd3',
            value: 4
        }, {
            source: 'd2',
            target: 'd3',
            value: 1
        }]
    }
};

Page({
    data: {
        option: option
    },

    onLoad() {

    }
});
