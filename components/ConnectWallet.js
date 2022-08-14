import { useEffect } from "react";

const ConnectWallet = ({ children }) => {
  const connectWalletSol = async () => {
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
    }
  };

  return (
    <button
      onClick={connectWalletSol}
      className="uppercase bg-[#E9AE0B] rounded-full px-10 py-8 text-6xl active:bg-[#a47c0f]"
    >
      {children}
    </button>
  );
};

export default ConnectWallet;
