import axios from 'axios';
import { StoreOptions } from 'vuex';
interface ImageDataInfo {
    title: string;
    desc: string;
    context: string;
    url: string;
    images: string[]
}
interface DefaultState {
    imageState: ImageDataInfo
}
const initState: DefaultState = {
    imageState: {
        title: '活动简介',
        desc: '活动内容概述',
        context: `Designed by experienced team, and showcase dozens of inspiring projects.
            Provide solutions for usual problems that may be encountered while developing enterprise-like complex UIs.
            Dozens of flexible and practical reusable components that increase your productivity.`,
        url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        images: [

        ]
    }
}

const actions = {
    getImageList({ commit, state }: { state: DefaultState, commit: any }, payload: any) {
        axios.get('http://localhost:3000/image').then((res) => {
            commit('setImageData', [res]);
        });
    }
}

const mutations = {
    setImageData(state: DefaultState, payload: any) {
        const images = payload;
        state.imageState.images.push(images[0]);
        return state;
    }
}

export const defaultOption: StoreOptions<DefaultState> = {
    state: initState,
    actions,
    mutations
}