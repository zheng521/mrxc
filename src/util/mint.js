import Vue from 'vue'

import { Button, Loadmore, Spinner, MessageBox, Toast, Field, Lazyload, InfiniteScroll, Indicator, Progress } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Field.name, Field)
Vue.component(Progress.name, Progress)

Vue.use(Lazyload)
Vue.use(InfiniteScroll)
Vue.use(Indicator)

Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator
Vue.prototype.$messagebox = MessageBox
