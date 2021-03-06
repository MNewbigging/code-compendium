import React from 'react';
import { ComponentItemProps } from '../../compendium/component-screen/ComponentItem';
import { ParallaxStarsPreview } from './ParallaxStarsPreview';

const parallaxStarsHtml = `<div className={'background'}>
  <div className={'stars-small'}></div>
  <div className={'stars-small red'}></div>
  <div className={'stars-small blue'}></div>
  <div className={'stars-med'}></div>
  <div className={'stars-med red'}></div>
  <div className={'stars-med blue'}></div>
  <div className={'stars-large'}></div>
  <div className={'stars-large red'}></div>
  <div className={'stars-large blue'}></div>
</div>`;

const parallaxStarsScss = `@function multiple-box-shadow($n, $col) {
  $value: '#{random(2000)}px #{random(2000)}px #{$col}';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #{$col}';
  }
  @return unquote($value);
}

// White
$shadows-small: multiple-box-shadow(700, '#FFF');
$shadows-medium: multiple-box-shadow(100, '#FFF');
$shadows-large: multiple-box-shadow(50, '#FFF');

// Blue
$shadows-small-blue: multiple-box-shadow(100, '#1cd8ed');
$shadows-medium-blue: multiple-box-shadow(25, '#1cd8ed');
$shadows-large-blue: multiple-box-shadow(25, '#1cd8ed');

// Red
$shadows-small-red: multiple-box-shadow(100, '#f04a4a');
$shadows-medium-red: multiple-box-shadow(25, '#f04a4a');
$shadows-large-red: multiple-box-shadow(25, '#f04a4a');

@keyframes animateStar {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-2000px);
  }
}

.background {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  color: white;
  overflow: hidden;

  .stars-small {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
    animation: animateStar 150s linear infinite;

    &::after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: $shadows-small;
    }

    &.red {
      box-shadow: $shadows-small-red;
      &::after {
        box-shadow: $shadows-small-red;
      }
    }

    &.blue {
      box-shadow: $shadows-small-blue;
      &::after {
        box-shadow: $shadows-small-blue;
      }
    }
  }

  .stars-med {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
    animation: animateStar 200s linear infinite;

    &::after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: $shadows-medium;
    }

    &.red {
      box-shadow: $shadows-medium-red;
      &::after {
        box-shadow: $shadows-medium-red;
      }
    }

    &.blue {
      box-shadow: $shadows-medium-blue;
      &::after {
        box-shadow: $shadows-medium-blue;
      }
    }
  }

  .stars-large {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-large;
    animation: animateStar 250s linear infinite;

    &::after {
      content: ' ';
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: $shadows-large;
    }

    &.red {
      box-shadow: $shadows-large-red;
      &::after {
        box-shadow: $shadows-large-red;
      }
    }

    &.blue {
      box-shadow: $shadows-large-blue;
      &::after {
        box-shadow: $shadows-large-blue;
      }
    }
  }
}
`;

export const parallaxStarsItemProps: ComponentItemProps = {
  title: 'Parallax stars',
  preview: <ParallaxStarsPreview />,
  html: parallaxStarsHtml,
  scss: parallaxStarsScss,
};
