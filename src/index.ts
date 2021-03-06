// This file is auto generated by build/build-entry.js
import { VueConstructor } from 'vue/types';
import Lazyload from './lazyload';
import Locale from './locale';
import MagicCube from './magic-cube';
import SessionTitle from './session-title';
import TestComponent from './test-component';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const version = '0.1.0-beta.1';
const components = [
  MagicCube,
  SessionTitle,
  TestComponent
];

const install = (Vue: VueConstructor) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Lazyload,
  Locale,
  MagicCube,
  SessionTitle,
  TestComponent
};

export default {
  install,
  version
};
