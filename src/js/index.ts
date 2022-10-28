import forEachPolyfill from './components/forEachPolyfill';
import Simulator from './components/simulator';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    forEachPolyfill()
    Simulator()
  },
  false
)
