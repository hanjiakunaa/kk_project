import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  BiEmojiSunglasses,
  BiEmojiSunglassesFill,
  PiSandslashAlolaShiny,
  PiGastly,
  RiLockFill,
} from 'oh-vue-icons/icons';
addIcons(BiEmojiSunglasses, BiEmojiSunglassesFill, PiSandslashAlolaShiny, PiGastly, RiLockFill);
export const conponentIconPlugins = {
  install: (app: any) => {
    app.component('h-icon', OhVueIcon);
  },
};
