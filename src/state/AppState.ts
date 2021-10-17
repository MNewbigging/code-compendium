import { action, observable } from 'mobx';

export enum AppScreen {
  COMPONENTS = 'components',
  CODE = 'code',
}

export class AppState {
  @observable public screen = AppScreen.COMPONENTS;

  @action public toScreen(screen: AppScreen) {
    this.screen = screen;
  }
}
