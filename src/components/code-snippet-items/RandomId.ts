import { CodeSnippetItemProps } from '../compendium/code-snippet-screen/CodeSnippetItem';

const randomIdCode = `public static createId(length: number = 4) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV0123456789';

  let id = '';
  for (let i = 0; i < length; i++) {
    const rnd = Math.floor(Math.random() * characters.length);
    id += characters.charAt(rnd);
  }

  return id;
}`;

export const randomIdProps: CodeSnippetItemProps = {
  title: 'Random id',
  description: 'Creates a random string id, optional length',
  code: randomIdCode,
};
