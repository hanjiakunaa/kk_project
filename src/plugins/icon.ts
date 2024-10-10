import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  BiEmojiSunglasses,
  BiEmojiSunglassesFill,
  PiSandslashAlolaShiny,
  PiGastly
} from 'oh-vue-icons/icons';
addIcons(BiEmojiSunglasses, BiEmojiSunglassesFill, PiSandslashAlolaShiny, PiGastly);
export const conponentIconPlugins = {
  install: (app: any) => {
    app.component('h-icon', OhVueIcon);
  },
};
