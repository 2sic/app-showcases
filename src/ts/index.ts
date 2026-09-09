import { initFancybox } from './lib-2sxc-fancybox';
import { FancyboxOptions } from './lib-2sxc-fancybox-options';

const winAny = (window as any);
winAny.appReferences ??= {};
winAny.appReferences.initFancybox ??= initFancyboxCustom;

function initFancyboxCustom({ attribute, options } : { attribute: string, options: FancyboxOptions }) {
  let customOptions = {
    ...options    
  }
  initFancybox({ attribute, options: customOptions })
}