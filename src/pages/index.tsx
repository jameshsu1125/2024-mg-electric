import '@/settings/global.less';
import ReactDOM from 'react-dom/client';
import App from './app';
import View3DEvents from '@/common/event';

const view3DEvents = new View3DEvents();

declare global {
  interface Window {
    appFromReact: View3DEvents;
  }
}

view3DEvents.render = () => {
  const app = ReactDOM.createRoot(document.getElementById('not_aem_app')!);
  app.render(<App key={new Date().getTime()} />);
  view3DEvents.setReactDom(app);
  console.log('%creact dom rendered', 'background:red; color:white; font-size: 20px;');
};

window.appFromReact = view3DEvents;
view3DEvents.render();
