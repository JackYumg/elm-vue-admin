import { defineComponent } from "vue";
import HelloWorld from './components/HelloWorld.vue';
import { ElButton} from 'element-plus'; 
export default defineComponent({
  render() {
    return <div id="app">
      <ElButton>按钮</ElButton>
      <HelloWorld msg="10086"></HelloWorld>
    </div>
  }
})