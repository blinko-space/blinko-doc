import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/vars.css'
import { h } from 'vue'

const theme: Theme = {
  ...DefaultTheme,
}

export default theme
