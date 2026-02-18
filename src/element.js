import Vue from 'vue'
import {
    Button,
    Table,
    TableColumn,
    Loading,
    Message,
    Input,
    Tag,
    Link,
    Popconfirm,
    Dialog,
    DatePicker,
    Form,
    FormItem,
    Empty,
    Popover
} from 'element-ui';



/**按需引入ElementUI*/
//Vue.use(Button), 使用Button的install
Vue.use(Button)
   .use(Table)
   .use(TableColumn)
    .use(Input)
    .use(Tag)
    .use(Link)
    .use(Popconfirm)
    .use(Dialog)
    .use(DatePicker)
    .use(Form)
    .use(FormItem)
    .use(Empty)
    .use(Popover)

//注册 v-loading自定义指令。
Vue.use(Loading.directive);

//向Vue原型上挂载方法
Vue.prototype.$message = Message;