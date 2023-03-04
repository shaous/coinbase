import '@/styles/globals.css'
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps)
{

  const desiredChainId = ChainId.Goerli

  return (
    <ThirdwebProvider activeChain="goerli">
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}
