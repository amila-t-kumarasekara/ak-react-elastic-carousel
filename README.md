
# elastic-carousel

> A flexible and responsive carousel component for react

## Why do we need yet another carousel component

- **Element resize support (true responsiveness)**  
  Most of the carousel components are responsive to the viewport size, but this is not a real responsive support as we can have an element with a `width:500px` on a `1200px` screen, most carousel component will "think" we are on a `1200px` mode because they "watch" the view-port's size and not the wrapping element's size.
  This is the reason why `elastic-carousel` is using the [resize-observer](https://developers.google.com/web/updates/2016/10/resizeobserver) which gives us a true responsive support, not matter on what screen size we are.
  
- **RTL (right-to-left) support**  
  Supporting right-to-left languages requires a full support for right-to-left rendering and animations which is not supported in most of the carousel components out there. also, right-to-left support is [important and should be a standard for most applications](https://www.youtube.com/watch?v=A_3BfONFRUc).

## [Live Demos & Docs](https://sag1v.github.io/react-elastic-carousel/)

## Install

```bash
npm install --save elastic-carousel
```

or

```bash
yarn add elastic-carousel
```

### Note

`elastic-carousel` is using [styled-components](https://github.com/styled-components/styled-components) for styling, this means that you should install it as well:

```bash
npm install --save styled-components@5.3.11
```

## Usage

```jsx
import React, { Component } from 'react';
import Carousel from 'elastic-carousel';

class App extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}
```

<!-- ## Playground

[![Edit react-elastic-carousel](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/21o46mkwnr) -->

## Development

```console
git clone https://github.com/amila-t-kumarasekara/ak-react-elastic-carousel.git
cd ak-react-elastic-carousel
yarn
```

### To run the docs site run

```console
yarn start
```

### to run a demo Application run

```console
yarn demo
```

The application is running at http://localhost:8888

## License

MIT © [amila-t-kumarasekara](https://github.com/amila-t-kumarasekara)


## Looking for Maintainers ##

