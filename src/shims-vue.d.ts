declare module '*.vue' {
    import { ComponentOptions } from "vue"
    const componentOptions: ComponentOptions
    export default componentOptions
}//告诉TS如何理解.vue文件