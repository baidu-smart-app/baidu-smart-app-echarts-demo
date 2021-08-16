module.exports = {
    preprocessOption(myOption) {
        // 给 xAxis 加上回调函数的方式，类似地，也可以给任意配置项设置回调函数
        if (myOption.xAxis && myOption.xAxis.length > 0
            && myOption.xAxis[0].axisLabel
        ) {
            myOption.xAxis[0].axisLabel.formatter = value => {
                return value + '%';
            }
        }
        return myOption;
    },
};
