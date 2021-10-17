import { action, observable } from 'mobx';

export enum CompendiumScreen {
  COMPONENTS = 'components',
  CODE = 'code',
}

export class CompendiumState {
  @observable public screen = CompendiumScreen.COMPONENTS;

  @action public toScreen(screen: CompendiumScreen) {
    this.screen = screen;
  }
}
