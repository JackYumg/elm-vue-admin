import { Fragment, isVNode } from "vue";

const getSlots = (ele: any) => {
    let componentOptions = ele.componentOptions || {};
    if (ele.$vnode) {
        componentOptions = ele.$vnode.componentOptions || {};
    }
    const children = ele.children || componentOptions.children || [];
    const slots: { [key: string]: any } = {};
    children.forEach((child: any) => {
        if (!isEmptyElement(child)) {
            const name = (child.data && child.data.slot) || 'default';
            slots[name] = slots[name] || [];
            slots[name].push(child);
        }
    });
    return { ...slots, ...getScopedSlots(ele) };
};

const getComponent = (instance: any, prop = 'default', options = instance, execute = true) => {
    let com = undefined;
    if (instance.$) {
        const temp = instance[prop];
        if (temp !== undefined) {
            return typeof temp === 'function' && execute ? temp(options) : temp;
        } else {
            com = instance.$slots[prop];
            com = execute && com ? com(options) : com;
        }
    } else if (isVNode(instance)) {
        const temp = instance.props && instance.props[prop];
        if (temp !== undefined && instance.props !== null) {
            return typeof temp === 'function' && execute ? temp(options) : temp;
        } else if (instance.type === Fragment) {
            com = instance.children;
        } else if (instance.children && (instance.children as any)[prop]) {
            com = (instance.children as any)[prop];
            com = execute && com ? com(options) : com;
        }
    }
    if (Array.isArray(com)) {
        com = flattenChildren((com as any));
        com = com.length === 1 ? com[0] : com;
        com = com.length === 0 ? undefined : com;
    }
    return com;
};

const getScopedSlots = (ele: any) => {
    return (ele.data && ele.data.scopedSlots) || {};
};

const flattenChildren = (children = [], filterEmpty = true) => {
    const temp = Array.isArray(children) ? children : [children];
    const res: any[] = [];
    temp.forEach((child: any) => {
        if (Array.isArray(child)) {
            res.push(...flattenChildren((child as any), filterEmpty));
        } else if (child && child.type === Fragment) {
            res.push(...flattenChildren(child.children, filterEmpty));
        } else if (child && isVNode(child)) {
            if (filterEmpty && !isEmptyElement(child)) {
                res.push(child);
            } else if (!filterEmpty) {
                res.push(child);
            }
        } else if (isValid(child)) {
            res.push(child);
        }
    });
    return res;
};

function isEmptyElement(c: any) {
    return (
        c &&
        (c.type === Comment ||
            (c.type === Fragment && c.children.length === 0) ||
            (c.type === Text && c.children.trim() === ''))
    );
}

const isValid = (value: any): boolean => {
    return value !== undefined && value !== null && value !== '';
};

function isFragment(c: any) {
    return c.length === 1 && c[0].type === Fragment;
}

export default {
    getSlots,
    getComponent,
    isEmptyElement,
    isFragment
}