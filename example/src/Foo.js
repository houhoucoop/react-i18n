import React from 'react'
import { useIntl } from 'react-i18n'

const LOCALE = {
  EN: 'en-US',
  TW: 'zh-TW'
}

const Foo = () => {
  const { t, setLocale } = useIntl()
  const handleClick = (key) => () => setLocale(key)

  return (
    <div className='sample'>
      <div className='text-group'>
        <h2>{t('title')}</h2>
        <p>{t('sample.paragraph')}</p>
      </div>
      <div className='button-group'>
        <button onClick={handleClick(LOCALE.EN)}>English</button>
        <button onClick={handleClick(LOCALE.TW)}>繁體中文</button>
      </div>
    </div>
  )
}

export default Foo
