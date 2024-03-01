
# nmm-xas-app-modal

`nmm-xas-app-modal` is a reusable React modal component built on top of React Bootstrap. It provides a flexible and easy-to-use interface for rendering modals in your React applications, with support for custom titles, sizes, and child content. Designed with customization and ease-of-use in mind, `nmm-xas-app-modal` aims to simplify the process of incorporating modals into your project while offering the ability to tailor them to your specific needs.

## Features

- Easy to implement with minimal configuration.
- Customizable size and title.
- Built with React Bootstrap for consistent styling and behavior.

## Installation

To install `nmm-xas-app-modal` and its peer dependencies, you will need `react`, `react-dom`, and `react-bootstrap` in your project. If you haven't already installed these dependencies, you can do so by running the following commands:

```bash
npm install react react-dom react-bootstrap
```

After installing the peer dependencies, you can install `nmm-xas-app-modal` using npm:

```bash
npm install nmm-xas-app-modal
```

## Usage

Here's a quick guide on how to use the `nmm-xas-app-modal` component in your React application.

First, make sure to import the component where you want to use it:

```jsx
import React, { useState } from 'react';
import AppModal from 'nmm-xas-app-modal';
```

Then, you can integrate the `AppModal` component into your application. Here's an example of how to use it with a button to trigger the modal:

```jsx
function MyComponent() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Show Modal
      </Button>

      <AppModal
        title="Modal Title"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <p>This is the content of your modal</p>
      </AppModal>
    </>
  );
}
```

## Props

`AppModal` accepts the following props to customize its behavior:

- `title`: The title of the modal. Required.
- `size`: The size of the modal. Optional, defaults to 'lg'.
- `children`: The content of the modal. Required.
- `onHide`: A callback function that is triggered when the modal is requested to be hidden. Required.

## Contributing

We welcome contributions to `nmm-xas-app-modal`! Please feel free to submit a pull request or open an issue on our [GitHub repository](https://github.com/yourusername/nmm-xas-app-modal).
