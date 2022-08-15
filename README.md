# Material Design


## Packages
- [x] [Material Design](https://mui.com/)
- [x] [Material Icons](https://mui.com/material-ui/icons/#font-icons)
- [x] [Google Fonts](https://fonts.google.com/)


## Material Icon Import

```jsx
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
```

## Material Components Import and Usage

```jsx
import * as React from 'react';
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}
```

## Introduction


### Installation

- [x] Material UI
```jsx
npm install @mui/material @emotion/react @emotion/styled
```
- [x] Material Icons
```jsx
npm install @mui/icons-material
```
- [x] React Router Dom
```jsx
npm install react-router-dom
```
- [x] Tailwind CSS
```jsx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- [x] Tailwind CSS Config
```jsx
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- [x] index.css
```jsx
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- [x] Navbar.jsx
```jsx
npm install @heroicons/react
npm install @headlessui/react
```

### Tailwind CSS Documentation
```jsx
https://tailwindcss.com/docs/background-color
```
## Usage

`npm start`

## Examples

