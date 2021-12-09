import { ElMenuGroupIn } from "../../@types/menu";


export const menus: ElMenuGroupIn[] = [
    {
        title: '主导航',
        menus: [
            {
                title: '导航页',
                'icon': 'odometer',
                path: 'dashboard',
                children: [
                    { title: '默认页', children: [], path: 'default' },
                    { title: '分析页', children: [], path: 'analyze' },
                    { title: '监控页', children: [], path: 'monitor' },
                    { title: '工作台', children: [], path: 'workplace' },
                ]
            },
            {
                title: '快捷菜单',
                'icon': 'position',
                children: [
                    { title: '字体排版', children: [] , path: 'typography' },
                    { title: '基础表单', children: [] , path: 'basic-form' },
                    { title: '查询表格', children: [] , path: 'table-list'},
                    { title: '搜索列表（项目）', children: [] , path: 'projects' },
                ]
            },
            {
                title: '博客管理',
                'icon': 'notebook-2',
                path: 'blog',
                children: [
                    { title: '标签管理', children: [] , path: 'price-tag' },
                    { title: '文章管理', children: [] , path: 'document' }
                ]
            }
        ]
    }
];