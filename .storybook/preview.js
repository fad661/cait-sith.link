import { addParameters } from '@storybook/react';
import * as nextImage from 'next/image';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Global, ThemeProvider } from '@emotion/react';
import style from '../src/styles/index.styles';
import { cream } from '../src/styles/themes.styles';

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
});

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const decorators = [
  (Story) => (
    <>
      <script dangerouslySetInnerHTML={{__html:`
        (function(d) {
          var config = {
            kitId: 'ifn5nsr',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
      `}} />
      <ThemeProvider theme={cream}>
        <Global styles={style} />
        <Story />
      </ThemeProvider>
    </>
  ),
];