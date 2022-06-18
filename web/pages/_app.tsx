import type { AppProps } from 'next/app'
import type { FunctionComponent } from 'react'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
