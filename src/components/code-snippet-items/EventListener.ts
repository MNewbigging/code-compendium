import { CodeSnippetItemProps } from '../compendium/code-snippet-screen/CodeSnippetItem';

const eventListenerCode = `export enum GameEventType {
  EVENT_ONE = 'event-one',
  EVENT_TWO = 'event-two',
  EVENT_THREE = 'event-three'
}

export type GameEvent =
  | { type: GameEventType.EVENT_ONE; parameter: string }
  | { type: GameEventType.EVENT_TWO; anotherParam: SomeType }
  | { type: GameEventType.EVENT_THREE; };

type GameEventListener = (event: GameEvent) => void;

class GameObserver {
  private listenerMap = new Map<GameEventType, GameEventListener[]>();

  public addGameEventListener(listener: GameEventListener, eventType = GameEventType.ANY) {
    const existing = this.listenerMap.get(eventType) ?? [];
    existing.push(listener);
    this.listenerMap.set(eventType, existing);
  }

  public removeGameEventListener(listener: GameEventListener, eventType = GameEventType.ANY) {
    let existing = this.listenerMap.get(eventType) ?? [];
    if (existing.length) {
      existing = existing.filter((l) => l !== listener);
      this.listenerMap.set(eventType, existing);
    }
  }

  public fireEvent(event: GameEvent) {
    const listeners = this.listenerMap.get(event.type) ?? [];
    listeners.forEach((l) => l(event));
  }
}

export const gameObserver = new GameObserver();`;

export const eventListenerProps: CodeSnippetItemProps = {
  title: 'Event listener',
  description: 'Opinionated listener callbacks, specific parameters per event type',
  code: eventListenerCode,
};
