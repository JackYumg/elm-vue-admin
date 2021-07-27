export interface ElMenuGroupIn {
    title: string;
    menus: ElMenuIn[];
}
export interface ElMenuIn {
    title: string;
    icon?: string;
    children: ElMenuIn[];
}