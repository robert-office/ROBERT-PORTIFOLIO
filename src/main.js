import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faVuejs, faLaravel, faCss3Alt, faJs, faPhp, faMdb } from '@fortawesome/free-brands-svg-icons'
import { faCode, faPalette, faDatabase, faRocket } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowAltCircleDown, faWhatsapp, faVuejs, faLaravel, faCss3Alt, faJs, faPhp, faMdb, faCode, faPalette, faDatabase, faRocket)

const app = createApp(App)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
