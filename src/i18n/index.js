import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as ptBR from './pt-br.json'

Vue.use(VueI18n)

const messages = {
   'en-us': {
     hello: 'Hello',
     world: 'world',
   },
   'pt-br': {
     ...ptBR
   }
}

export default new VueI18n({
    locale: 'pt-br',
    messages,
})
