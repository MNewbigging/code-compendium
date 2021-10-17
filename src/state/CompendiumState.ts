import { action, observable } from 'mobx';

export enum CompendiumScreen {
  COMPONENTS = 'components',
  CODE = 'code',
}

export class CompendiumState {
  @observable public screen = CompendiumScreen.COMPONENTS;
  @observable public componentDialogOpen = false;

  @action public toScreen(screen: CompendiumScreen) {
    this.screen = screen;
  }

  @action public openComponentDialog = () => {
    this.componentDialogOpen = true;
  };

  @action public closeComponentDialog = () => {
    this.componentDialogOpen = false;
  };
}
