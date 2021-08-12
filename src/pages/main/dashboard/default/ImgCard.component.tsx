import { ElCard, ElCarousel, ElCarouselItem } from "element-plus";
import { defineComponent } from "vue";
import defaultStyle from './Box.module.scss';

export default defineComponent({
    data: () => {
        return {
            dataInfo: {
                title: '活动简介',
                desc: '活动内容概述',
                context: `Designed by experienced team, and showcase dozens of inspiring projects.
                Provide solutions for usual problems that may be encountered while developing enterprise-like complex UIs.
                Dozens of flexible and practical reusable components that increase your productivity.`,
                url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                images: [
                    'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    'https://os.alipayobjects.com/rmsportal/GhjqstwSgxBXrZS.png',
                ]
            }
        }
    },
    render() {
        return <ElCard class={defaultStyle.imgCard}>
            <ElCarousel>
                {
                    this.dataInfo.images.map((url , index) => {
                        <ElCarouselItem key={index}>
                            <img src={url} class="image" />
                        </ElCarouselItem>
                    })
                }
            </ElCarousel>
            <h3>{this.dataInfo.title}</h3>
            <div class={defaultStyle.desc}>{this.dataInfo.desc}</div>
            <p>
                {this.dataInfo.context}
            </p>
            <a class={defaultStyle.website}>浏览更多</a>
        </ElCard>
    }
});