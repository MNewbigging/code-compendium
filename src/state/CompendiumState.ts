import { action, observable } from 'mobx';
import { ComponentItemProps } from '../components/compendium/component-screen/ComponentItem';
import { toastManager } from '../utils/ToastManager';

export enum CompendiumScreen {
  COMPONENTS = 'components',
  CODE = 'code',
}

export class CompendiumState {
  @observable public screen = CompendiumScreen.CODE;
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

  public async copyToClipboard(content: string) {
    try {
      await navigator.clipboard.writeText(content);
      toastManager.successToast('Copied to clipboard!');
    } catch (e) {
      toastManager.failToast('Could not copy to clipboard');
    }
  }
}
