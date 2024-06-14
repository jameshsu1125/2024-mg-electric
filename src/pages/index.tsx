import View3DEvents from '@/common/event';
import '@/settings/global.less';
import Gtag from 'lesca-gtag';
import ReactDOM from 'react-dom/client';
import App from './app';

const view3DEvents = new View3DEvents();

declare global {
  interface Window {
    appFromReact: View3DEvents;
  }
}

Gtag.insert('G-8KV646EZ1N');

view3DEvents.render = () => {
  const app = ReactDOM.createRoot(document.getElementById('not_aem_app')!);
  app.render(<App key={new Date().getTime()} />);
  view3DEvents.setReactDom(app);
  console.log('%creact dom rendered', 'background:red; color:white; font-size: 20px;');
};

window.appFromReact = view3DEvents;
view3DEvents.render();
