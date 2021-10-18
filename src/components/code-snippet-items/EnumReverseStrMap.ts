import { CodeSnippetItemProps } from '../compendium/code-snippet-screen/CodeSnippetItem';

const enumReverseStrMapCode = `public static getEnumKey<T>(tEnum: T, enumValue: string) {
  const entry = Object.entries(tEnum).find(([_key, value]) => value === enumValue);
  
  if (entry) {
    return entry[1];
  }

  return undefined;
}`;

export const enumReverseStrMapProps: CodeSnippetItemProps = {
  title: 'Enum reverse string mapping',
  description: 'Maps a string to an enum value, which typescript currently cannot do itself',
  code: enumReverseStrMapCode,
};
