import { Layout } from '@/components'
import '@/styles/globals.scss'
import React from 'react'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
