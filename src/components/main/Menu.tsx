import { ElIcon, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from "element-plus";
import { defineComponent } from "vue";
import { ElMenuGroupIn } from "../../@types/menu";
import { menus } from "./Menu.data";
import mainStyles from './main.module.scss';
import { useStore } from "vuex";
import { appkey } from "@store/index";
export default defineComponent({
    render() {
        const store = useStore(appkey);
        return <ElMenu router={true} collapse={store.state.main.menuToggle} class={[mainStyles.menu]}>
            {
                this.buildMenus(menus)
            }
        </ElMenu>
    },
    methods: {
        buildMenus(menus: ElMenuGroupIn[] = []) {
            const store = useStore(appkey);
            const mainState = store.state.main;
            return menus.map((group) => {
                return <ElMenuItemGroup title={!mainState.menuToggle ? group.title: ''} key={group.title}>
                    {
                        group.menus.map((menu, index) => {
                            return <ElSubmenu
                                index={index + ''}
                                v-slots={{
                                    title: () => <span>
                                        <ElIcon name={menu.icon} />
                                        {!mainState.menuToggle ? menu.title : ''}
                                    </span>,
                                }}>
                                {
                                    menu.children.map((subMenu, itemIndex) => {
                                        return <ElMenuItem key={index + '-' + itemIndex} index={subMenu.path}>
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