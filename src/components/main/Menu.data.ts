import { ElMenuGroupIn, ElMenuIn } from "../../@types/menu";


export const menus: ElMenuGroupIn[] = [
    {
        title: '主导航',
        menus: [
            {
                title: '导航页',
                'icon': 'odometer',
                children: [
                    { title: '默认页', children: [] , path: 'default' },
                    { title: '分析页' , children: [] , path: 'analyze'},
                    { title: '监控页' , children: []},
                    { title: '工作台' , children: []},
                ]
            },
            {
                title: '快捷菜单',
                'icon': 'position',
                children: [
                    { title: '字体排版', children: [] },
                    { title: '分析页' , children: []},
                    { title: '监控页' , children: []},
                    { title: '工作台' , children: []},
                ]
            }
        ]
    }
];