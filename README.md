# react-i18n

> i18n utilities for React handling translations.

[![NPM](https://img.shields.io/npm/v/react-i18n.svg)](https://www.npmjs.com/package/react-i18n) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-i18n
```

## Example
```jsx
import { IntlProvider, useIntl } from 'react-i18n'

const translations = {
    EN: {
      sample: {
        hello: 'Hello World!'
      },
    },
    FR: {
      sample: {
        hello: 'Bonjour Monde!'
      },
    },
};

const Example = () => (
  <IntlProvider locale='en' translations={translations}>
    <MyComponent />
  </IntlProvider>
)

const MyComponent = () => {
  const { t, setLocale } = useIntl()

  return (
    <>
      <p>{t('sample.hello')}</p>
      <button onClick={() => setLocale('fr')}>Switch to `FR`</button>
    </>
  )
}
```
## Usage
### IntlProvider
Component used to provide i18n context to child components.

-   `locale` - The locale language, it will be converted to uppercase in order to matches the keys in translations.
-   `translations` - This should be an object
    where keys are locales, and values are maps of message keys to translated
    strings.

### useIntl
Provides a React hook which lets you
call into the translate function directly.

-   `t` - The locale to translate things into.
-   `setLocale` - Set current locale to another.

```jsx
import { Intl } from 'react-i18n'

const Component = () => {
  const { t, setLocale } = useIntl()
  return (
    <>
      <p>{t('sample.hello')}</p>
      <button onClick={() => setLocale('fr')}>Switch to `FR`</button>
    </>
  );
}
```
### Intal
Get the translate function in render props way.

-   `t` - The locale to translate things into.
-   `setLocale` - Set current locale to another.

```jsx
import { useIntl } from 'react-i18n'

const Component = () => (
  <Intl>
    {({ t, setLocale }) => {
      return (
        <p>{t('sample.hello')}</p>
        <button onClick={() => setLocale('fr')}>Switch to `FR`</button>
      )
    }}
  <Intl />
)
```
## License

MIT © [@houhoucoop](https://github.com/@houhoucoop)
