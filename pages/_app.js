import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const connectWallet = async () => {
    const { solana } = window;

    if (solana.isPhantom) {
      // Checks for authorised wallets
      try {
        const authorisedWallet = await solana.connect({ onlyIfTrusted: true });
        console.log(authorisedWallet.publicKey.toString());
      } catch (err) {
        console.log(err);
      }

      const response = await solana.connect();
      console.log(response.publicKey.toString());
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
