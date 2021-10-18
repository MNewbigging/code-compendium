import React from 'react';
import { ComponentItemProps } from '../../compendium/component-screen/ComponentItem';
import { ScifiButtonsPreview } from './ScifiButtonsPreview';

const scifiButtonsHtml = '<button className={"scifi-button white"}>WHITE</button>';

const scifiButtonsSass = `$color-btn-white-shadow: rgba(255, 255, 255, 0.3);
$color-btn-white-border: #fff;

$color-btn-blue-shadow: rgba(0, 170, 170, 0.5);
$color-btn-blue-border: #0dd;

$color-btn-red-shadow: rgba(251, 81, 81, 0.4);
$color-btn-red-border: #fb5454;

  .scifi-button {
    color: white;
    cursor: pointer;

    background-color: transparent;
    letter-spacing: 5px;
    padding: 10px 5px 10px 10px; // Subtract letter-spacing value from padding-right
    font-size: 1em;
    transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    &.white {
      box-shadow: inset 0 0 0.8em $color-btn-white-shadow, 0 0 0.8em $color-btn-white-shadow;
      border: $color-btn-white-border solid 2px;

      &:hover {
        color: rgba(0, 0, 0, 0.8);
        background-color: $color-btn-white-border;
        box-shadow: inset 0 0 0 $color-btn-white-shadow, 0 0 1.2em rgba(255, 255, 255, 0.5);
      }
    }

    &.blue {
      box-shadow: inset 0 0 1em $color-btn-blue-shadow, 0 0 1em $color-btn-blue-shadow;
      border: $color-btn-blue-border solid 2px;

      &:hover {
        background-color: $color-btn-blue-border;
        box-shadow: inset 0 0 0 $color-btn-blue-shadow, 0 0 1.5em rgba(0, 170, 170, 0.7);
      }
    }

    &.red {
      box-shadow: inset 0 0 1em $color-btn-red-shadow, 0 0 1em $color-btn-red-shadow;
      border: $color-btn-red-border solid 2px;

      &:hover {
        background-color: $color-btn-red-border;
        box-shadow: inset 0 0 0 $color-btn-red-shadow, 0 0 1.5em rgba(251, 81, 81, 0.6);
      }
    }
  }
`;

export const scifiButtonItemProps: ComponentItemProps = {
  title: 'Sci-fi buttons',
  preview: <ScifiButtonsPreview />,
  html: scifiButtonsHtml,
  scss: scifiButtonsSass,
};
