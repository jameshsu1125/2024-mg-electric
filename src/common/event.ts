import EnterFrame from 'lesca-enterframe';
import ReactDOM from 'react-dom/client';

type TLocation = Readonly<string>;

type TState = 'unset' | 'mounted' | 'unmounted';

export default class View3DEvents {
  public onMounted: () => void;
  public unmounted: () => void;

  public render: () => void;
  private app: ReactDOM.Root | null = null;

  private location: TLocation = window.location.href.split('?')[0];
  private state: TState = 'unset';

  constructor() {
    this.onMounted = () => {};
    this.unmounted = () => {
      requestAnimationFrame(() => {
        this.app?.unmount();
      });
    };

    this.render = () => {};

    EnterFrame.add(() => {
      if (this.location !== window.location.href.split('?')[0]) {
        if (this.state === 'mounted') {
          this.app?.unmount();
          console.log('%creact dom unmount', 'background:red; color:white; font-size: 20px;');
          this.state = 'unmounted';
        }
      } else {
        if (this.state === 'unmounted') {
          this.render();
          console.log('%creact dom mounted', 'background:red; color:white; font-size: 20px;');
          this.state = 'mounted';
        }
      }
    });
    EnterFrame.play();
  }

  public setReactDom(app: ReactDOM.Root) {
    this.app = app;
    this.state = 'mounted';
  }
}
