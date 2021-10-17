import { action, observable } from 'mobx';

export enum Screen {
  COMPONENTS = 'components',
  CODE = 'code',
}

export class AppState {
  @observable public screen = Screen.COMPONENTS;
}
