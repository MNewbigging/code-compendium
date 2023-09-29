import { CodeSnippetItemProps } from '../compendium/code-snippet-screen/CodeSnippetItem';

const eventListenerCode = `;
export interface EventMap {
  "my-custom-event-name": null;
  "another-event": number;
}

type EventCallback = (event: any) => void;

export class EventListener {
  private readonly events = new Map<keyof EventMap, EventCallback[]>();

  on<E extends keyof EventMap>(
    type: E,
    listener: (event: EventMap[E]) => void
  ) {
    const callbacks = this.events.get(type) ?? [];
    callbacks.push(listener);
    this.events.set(type, callbacks);
  }

  off<E extends keyof EventMap>(
    type: E,
    listener: (event: EventMap[E]) => void
  ) {
    const callbacks =
      this.events.get(type)?.filter((cb) => cb !== listener) ?? [];
    this.events.set(type, callbacks);
  }

  fire<E extends keyof EventMap>(type: E, event: EventMap[E]) {
    //console.log("Firing event: ", type);
    const callbacks = this.events.get(type) ?? [];
    callbacks.forEach((cb) => cb(event));
  }

  clear() {
    this.events.clear();
  }
}

`;

export const eventListenerProps: CodeSnippetItemProps = {
  title: 'Event listener',
  description:
    'A simple event listener, auto completes per event type and associated object parameter',
  code: eventListenerCode,
};
