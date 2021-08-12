export interface ElMenuGroupIn {
    title: string;
    menus: ElMenuIn[];
    path?: string;
}
export interface ElMenuIn {
    title: string;
    icon?: string;
    path?: string;
    children: ElMenuIn[];
}