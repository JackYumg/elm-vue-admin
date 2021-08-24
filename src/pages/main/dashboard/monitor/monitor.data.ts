export const option1 = {
    title: {
        show: false
    },
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: (params: any) => {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        show: false,
    },
    visualMap: {
        show: true,
        min: 1,
        max: 4,
        calculable: true,
        text: ['高', '低'],
        textStyle: {
            color: '#fff'
        },
        align: 'bottom',
        color: ['rgba(175,238,238)', '#fff']
    },
    geo: [{
        map: '重庆',
        aspectScale: 1,
        zoom: 1.2,
        layoutCenter: ['50%', '50%'],
        layoutSize: '101%',
        roam: true,
        label: {
            show: true,
            color: '#fff', // 区域文本颜色
            emphasis: {
                show: true,
                color: 'rgba(47,79,79, .8)', // 悬浮文本颜色
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#fff', // 每个区域边界颜色
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(175,238,238, .8)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(47,79,79, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowOffsetX: -10,
                shadowOffsetY: 10,
                shadowBlur: 50
            },
            emphasis: {
                borderColor: '#5fa3f3', // hover的边界颜色
                borderWidth: 1,
                areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(47,79,79, .2)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(47,79,79, .2)',
                shadowOffsetX: -10,
                shadowOffsetY: 10,
                shadowBlur: 50
            }
        },
        regions: [{
            name: '重庆边界',
            selected: false,
            itemStyle: {
                areaColor: 'rgba(128, 128, 128, 0)',
                borderWidth: 3,
                borderColor: '#5f9ae2',
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0,1)',
                shadowOffsetX: 0,
                shadowOffsetY: 0
            },
            label: {
                show: false,
                emphasis: {
                    show: false
                }
            },
            emphasis: {
                itemStyle: {
                    areaColor: 'rgba(128, 128, 128, 0)',
                    borderWidth: 3,
                    borderColor: '#5f9ae2',
                    shadowBlur: 15,
                    shadowColor: 'rgba(0,0,0,1)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0
                }
            }
        }, {
            name: '河流',
            selected: true,
            itemStyle: {
                areaColor: '#5fa3f3',
            },
            label: {
                show: false,
                emphasis: {
                    show: false
                }
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#5fa3f3',
                    shadowBlur: '1',
                    shadowColor: '#ffffff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 1
                }
            }
        }, {
            name: '嘉陵江',
            selected: true,
            itemStyle: {
                areaColor: '#5fa3f3',
            },
            label: {
                show: false,
                emphasis: {
                    show: false
                }
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#5fa3f3',
                    shadowBlur: '1',
                    shadowColor: '#ffffff',
                    shadowOffsetX: 0,
                    shadowOffsetY: 1
                }
            }
        }]
    }],
    series: [
    ]
};

export const option2 = {
    series: [{
        type: 'gauge',
        progress: {
            show: true,
            width: 12
        },
        axisLine: {
            lineStyle: {
                width: 10
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {
            distance: 0,
            color: '#999',
            fontSize: 12
        },
        anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
                borderWidth: 10
            }
        },
        title: {
            show: true
        },
        detail: {
            valueAnimation: true,
            fontSize: 20,
            offsetCenter: [0, '70%']
        },
        data: [{
            value: 70,
            name: '变化率'
        }]
    }]
};