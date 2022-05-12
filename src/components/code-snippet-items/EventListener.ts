import { CodeSnippetItemProps } from '../compendium/code-snippet-screen/CodeSnippetItem';

const eventListenerCode = `export enum GameEventType {
  EVENT_ONE = 'event-one',
  EVENT_TWO = 'event-two',
  EVENT_THREE = 'event-three'
}

export type GameEvent<T extends GameEventType> = Extract<
  | { type: GameEventType.EVENT_ONE; someString: string }
  | { type: GameEventType.EVENT_TWO; someNumber: number, someBools: boolean[] }
  | { type: GameEventType.EVENT_THREE; },
  { type: T }
>;

export type GameEventCallback<T extends GameEventType> = (event: GameEvent<T>) => void;

export class GameEventListener {
  private callbacks = new Map<GameEventType, GameEventCallback<any>[]>();

  public on<T extends GameEventType>(eventType: GameEventType, callback: GameEventCallback<T>) {
    const existing = this.callbacks.get(eventType) ?? [];
    existing.push(callback);
    this.callbacks.set(eventType, existing);
  }

  public off<T extends GameEventType>(eventType: GameEventType, callback: GameEventCallback<T>) {
    let existing = this.callbacks.get(eventType) ?? [];
    if (existing.length) {
      existing = existing.filter((cb) => cb !== callback);
      this.callbacks.set(eventType, existing);
    }
  }

  public fireEvent<T extends GameEventType>(event: GameEvent<T>) {
    const listeners = this.callbacks.get(event.type) ?? [];
    listeners.forEach((cb) => cb(event));
  }
}

// Usage
const eventListener = new GameEventListener();
eventListener.on(GameEventType.EVENT_ONE, (event: GameEvent<GameEventType.EVENT_ONE>) => console.log(event.someString));

const callback = (event: GameEvent<GameEventType.EVENT_TWO>) => {
  // Direct access to event props of given type
  console.log(event.someNumber);
  console.log(event.someBools);
};
eventListener.on(GameEventType.EVENT_TWO, callback);
`;

export const eventListenerProps: CodeSnippetItemProps = {
  title: 'Event listener',
  description: 'Opinionated listener callbacks, specific parameters per event type',
  code: eventListenerCode,
};
