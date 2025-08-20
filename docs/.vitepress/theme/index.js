import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { Notice } from '@theojs/lumen'
import '@theojs/lumen/style'
import Confetti from "./components/Confetti.vue";
import GoogleArtFont from "./components/GoogleArtFont.vue";
import FriendLinks from "./components/FriendLinks.vue";
import { NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import './style.css'
import './blur.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Notice),
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Confetti", Confetti);
    app.component("GoogleArtFont", GoogleArtFont);
    app.component("FriendLinks", FriendLinks);
  }
}
