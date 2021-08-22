import { ElBadge, ElButton, ElButtonGroup, ElCard, ElCol, ElDivider, ElIcon, ElPagination, ElRow, ElTable, ElTableColumn } from "element-plus";
import { defineComponent } from "vue";
import AnaylzeStyles from './anaylze.module.scss';
import * as echarts from 'echarts';
import { windowEvent } from "@utils/event";
const option = {
    grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%'],
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            data: [
                ['2019-10-10', 200],
                ['2019-10-11', 560],
                ['2019-10-12', 750],
                ['2019-10-13', 580],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
            ]
        }
    ]
};

const colors = {
    0: "#5470c6",
    1: "#91cc75",
    2: "#fac858",
    3: "#ee6666",
    4: "#73c0de",
    5: "#3ba272",
    6: "#fc8452",
    7: "#9a60b4"
}

const option2: any = {
    color: Object.values(colors),
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '交通方式',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            lineHeight: -10,
            color: '#00000073',
            fontSize: 22,
            fontWeight: '400'
        },
        subtext: '19098',
        subtextStyle: {
            fontSize: 18
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            data: [
            ],
            label: {
                show: false,
                position: 'top'
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
export default defineComponent({
    mounted() {
        const { chart1, chart2, chart3 } = this.$refs;
        const instance1 = echarts.init(chart1 as HTMLDivElement);
        instance1.setOption(option as any);
        const instance2 = echarts.init(chart2 as HTMLDivElement);
        instance2.setOption(option as any);
        const instance3 = echarts.init(chart3 as HTMLDivElement);
        instance3.setOption(option2 as any);
        windowEvent.event.subscribe((res) => {
            instance1.resize();
            instance2.resize();
            instance3.resize();
        });
    },
    render() {
        const title1 = () => {
            return <div>线上热门搜索
                <ElIcon class={AnaylzeStyles.extra} name={'more'}></ElIcon>
            </div>
        }

        const title2 = () => {
            return <div>线上热门搜索
                <ElIcon class={AnaylzeStyles.extra} name={'more'}></ElIcon>
                <ElButtonGroup class={[AnaylzeStyles.extra, AnaylzeStyles.extraBtn]}>
                    <ElButton size={'small'}>全部活动</ElButton>
                    <ElButton size={'small'}>线上</ElButton>
                    <ElButton size={'small'}>线下</ElButton>
                </ElButtonGroup>
            </div>
        }

        const slots1 = {
            header: title1
        }

        const slots2 = {
            header: title2
        }

        const itemList = [
            { name: '家用电器', rate: '28.79%', valuek: '¥1233.00', value: 2323, color: '#5470c6' },
            { name: '食用酒水', rate: '21.09%', valuek: '¥3243.00', value: 1877, color: '#fac858' },
            { name: '个护健康', rate: '19.73%', valuek: '¥2293.00', value: 987, color: '#ee6666' },
            { name: '服饰箱包', rate: '14.83%', valuek: '¥1993.00', value: 32, color: '#73c0de' },
            { name: '母婴产品', rate: '7.79%', valuek: '¥9114.00', value: 199, color: '#3ba272' },
            { name: '其他', rate: '8.09%', valuek: '¥8921.00', value: 1009, color: '#fc8452' }
        ]

        const dataList = [346, 564, 136, 633, 131].map((item, index) => {
            return {
                rank: index,
                key: '关键活动-' + index,
                userCount: item,
                change: Math.floor(Math.random() * 100),
                type: Math.floor(Math.random() * 100) % 2 === 0 ? true : false
            }
        });

        option2.series[0].data = itemList;


        return <ElRow gutter={20} class={AnaylzeStyles.nav3}>
            <ElCol span={12} md={12} xs={24} class={AnaylzeStyles.box}>
                <ElCard v-slots={slots1}>
                    <ElRow>
                        <ElCol span={12} class={AnaylzeStyles.numberInfo}>
                            <span class={AnaylzeStyles.numberInfoTitle}>搜索用户数</span>
                            <div class={AnaylzeStyles.numberInfoValue}>
                                <span class={AnaylzeStyles.numberInfoValueMain}>12,323</span>
                                <span class={[AnaylzeStyles.numberInfoValueSub, 'arrow-up']}>34.2</span>
                            </div>
                            <div class={AnaylzeStyles.numberInfoChart} ref={'chart1'}>

                            </div>
                        </ElCol>
                        <ElCol span={12} class={AnaylzeStyles.numberInfo}>
                            <span class={AnaylzeStyles.numberInfoTitle}>人均搜索次数</span>
                            <div class={AnaylzeStyles.numberInfoValue}>
                                <span class={AnaylzeStyles.numberInfoValueMain}>12,323</span>
                                <span class={[AnaylzeStyles.numberInfoValueSub, 'arrow-down']}>34.2</span>
                            </div>
                            <div class={AnaylzeStyles.numberInfoChart} ref={'chart2'}>

                            </div>
                        </ElCol>
                    </ElRow>
                    <ElRow>
                        <ElCol span={24}>
                            <ElTable size={'small'} data={dataList}>
                                <ElTableColumn prop={'rank'} label={'排名'} >
                                </ElTableColumn>
                                <ElTableColumn prop={'key'} label={'搜索关键词'}>
                                </ElTableColumn>
                                <ElTableColumn prop={'userCount'} label={'用户数'}>
                                </ElTableColumn>
                                <ElTableColumn prop={'change'} label={'周涨幅'}>
                                </ElTableColumn>
                            </ElTable>
                        </ElCol>
                    </ElRow>
                    <ElRow class={AnaylzeStyles.pagination}>
                        <ElCol span={24}>
                            <ElPagination small={true} background layout="prev, pager, next" total={100}></ElPagination>
                        </ElCol>
                    </ElRow>
                </ElCard>
            </ElCol>
            <ElCol span={12} md={12} xs={24} class={AnaylzeStyles.box}>
                <ElCard v-slots={slots2}>
                    <ElRow>
                        <ElCol span={12} md={12} xs={24}>
                            <div class={AnaylzeStyles.chart1} ref={'chart3'}>
                            </div>
                        </ElCol>
                        <ElCol span={12} md={12} xs={24}>
                            <div class={AnaylzeStyles.legends}>
                                <ul>
                                    {
                                        itemList.map((item) => {
                                            return <li>
                                                <span class={AnaylzeStyles.name} >
                                                    <span style={{ color: item.color }} class={AnaylzeStyles.before}></span>
                                                    <span>{item.name}</span>
                                                    <ElDivider direction={'vertical'}></ElDivider>
                                                </span>
                                                <span class={AnaylzeStyles.rate}>{item.rate}</span>
                                                <span class={AnaylzeStyles.value}>¥{item.value}</span>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </ElCol>
                    </ElRow>
                </ElCard>
            </ElCol>
        </ElRow>
    }
})