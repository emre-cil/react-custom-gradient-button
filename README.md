# react-custom-gradient-button

## Introduction

react-custom-gradient-button is a very light custom gradient button component for the react.

The main purpose of this library implement custom gradient buttons easily.

## Examples

with props

```jsx
<GradientButton
  color="white"
  start="#aa076b"
  middle="#61045f"
  end="#aa076b"
  borderRadius="0.5rem"
  width="5rem"
  height="2rem"
  onClick={() => {
    console.log('!Clicked');
  }}
>
  Click Me
</GradientButton>
```

without style props

```jsx
<GradientButton
  onClick={() => {
    console.log('!Clicked');
  }}
>
  Click Me
</GradientButton>
```

## Installation

### npm

```sh
npm install react-custom-gradient-button
```

### yarn

```sh
yarn add react-custom-gradient-button
```

### API

| Prop           | Type     | Description                                               |
| -------------- | -------- | --------------------------------------------------------- |
| `className`    | `string` | custom classes can be added.                              |
| `color`        | `string` | button text color.                                        |
| `start`        | `string` | left background color of button.                          |
| `middle`       | `string` | middle background color of button may initilize with "" . |
| `end`          | `string` | end background color of button.                           |
| `borderRadius` | `string` | end background color of button.                           |
| `width`        | `string` | width of button.                                          |
| `height`       | `string` | height of button.                                         |
| `...props`     | `func`   | you can add also custom props like onClick                |

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2022 Emre Çil.
