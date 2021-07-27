import { ElIcon, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from "element-plus";
import { defineComponent } from "vue";
import { ElMenuGroupIn } from "../../@types/menu";
import { menus } from "./Menu.data";
import mainStyles from './main.module.scss';
export default defineComponent({
    render() {
        console.log(mainStyles);
        return <ElMenu class={mainStyles.menu}>
            {
                this.buildMenus(menus)
            }
        </ElMenu>
    },
    methods: {
        buildMenus(menus: ElMenuGroupIn[] = []) {
            return menus.map((gropu) => {
                return <ElMenuItemGroup title={gropu.title}>
                    {
                        gropu.menus.map((menu) => {
                            return <ElSubmenu>
                                {menu.icon ? <ElIcon name={menu.icon} /> : ''}
                                <span>{menu.title}</span>
                                {
                                    menu.children.map(subMenu => {
                                        return <ElMenuItem>
                                            {subMenu.title}
                                        </ElMenuItem>
                                    })
                                }
                            </ElSubmenu>
                        })
                    }
                </ElMenuItemGroup>
            });
        }
    }
})