import { action, observable } from 'mobx';
import { ComponentItemProps } from '../components/compendium/component-screen/ComponentItem';

export enum CompendiumScreen {
  COMPONENTS = 'components',
  CODE = 'code',
}

export class CompendiumState {
  @observable public screen = CompendiumScreen.COMPONENTS;
  @observable public componentDialogOpen = false;
  public componentItemProps?: ComponentItemProps;

  @action public toScreen(screen: CompendiumScreen) {
    this.screen = screen;
  }

  @action public openComponentDialog = (itemProps: ComponentItemProps) => {
    this.componentItemProps = itemProps;
    this.componentDialogOpen = true;
  };

  @action public closeComponentDialog = () => {
    this.componentItemProps = undefined;
    this.componentDialogOpen = false;
  };
}
