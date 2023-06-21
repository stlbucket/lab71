/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'

import './index.css'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app.use(pinia)
app.mount('#app')
