# react-email-share-link

A React component for creating share by email links.

## Installation

`npm install --save react-email-share-link`

## How to use

```jsx
import EmailShare from 'react-email-share-link'

//...

<EmailShare email="mickey@mouse.com" subject="Your subject" body="Your message, including the link to this page">
   {link => (
      <a href={link} data-rel="external">Share this by email</a>
   )}
</EmailShare>
```

_**NOTE:** If you don't pass a `body` prop, it will default to `document.location.href`. If a `body` is provided, don't forget to include a link to the page._

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details