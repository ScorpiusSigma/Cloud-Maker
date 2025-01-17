import Head from "next/head";
import Image from "next/image";
import ConnectWallet from "../components/ConnectWallet";
import Footer from "../components/template/Footer";
import Navbar from "../components/template/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cloud Maker</title>
        <meta name="description" content="Cloud Maker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-[#0F1721] to-[#111C28] overflow-hidden text-white">
        <Navbar />

        <section className="relative overflow-hidden flex flex-col text-center md:text-start pt-20 md:flex-row p-5 xl:p-40 justify-center md:justify-between items-center h-screen w-full">
          <span className="absolute top-0 right-1/4">
            <Image src="/landingPage/bubble.svg" width={154} height={154} />
          </span>

          <div className="absolute w-1/2 h-1/2 top-0 md:top-1/3 md:right-0">
            <Image src="/landingPage/docker.svg" layout="fill" priority />
          </div>

          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-5 z-[1]">
            <h1 className="text-4xl xl:text-8xl">Cloud Maker DAO</h1>
            <br />
            <p className="text-xl xl:text-4xl">
              Decentralised services an API away, Let us do the heavy lifting
              for you!
            </p>
          </div>
        </section>

        <section className="relative flex flex-col items-center h-screen w-full">
          <div className="w-full h-5/6 bottom-0 absolute bg-[#82dde7]" />
          <span className="w-full h-full overflow-hidden">
            <img src="/landingPage/section2bg.svg" className="w-full" />
          </span>
          <span className="absolute w-full h-full top-0">
            <img src="/landingPage/curveDivider.svg" className="w-full" />
          </span>
          <span className="absolute top-5 -left-20 md:top-14 md:left-10">
            <Image src="/landingPage/bubble.svg" width={154} height={154} />
          </span>
          <span className="absolute top-44 left-56 hidden md:flex">
            <Image src="/landingPage/bubble.svg" width={62} height={62} />
          </span>
          <span className="absolute -top-44 -right-64 md:-right-14">
            <Image src="/landingPage/bubbleRing.svg" width={414} height={414} />
          </span>

          <div className="absolute w-full h-full z-10 top-0">
            <span className="absolute text-center top-1/4 w-full">
              <h2 className="uppercase text-4xl xl:text-7xl">
                Love managed services? Who doesn&apos;t!
              </h2>
              <br />
              <p className="text-2xl xl:text-4xl">
                We aim to enable developer to readily tap on open source,
                <br /> without needing to be a cloud expert!
              </p>
            </span>

            <span className="absolute bottom-0 w-full h-2/5 xl:h-3/5">
              <img
                src="/landingPage/servicesBlock.svg"
                className="h-full w-full"
              />
            </span>
          </div>

          <span className="absolute -bottom-44 -left-64">
            <Image src="/landingPage/bubbleRing.svg" width={414} height={414} />
          </span>
          <span className="absolute -bottom-20 -right-5">
            <Image src="/landingPage/bubble.svg" width={62} height={62} />
          </span>
        </section>

        <section className="flex flex-col p-5 xl:p-40 justify-between items-center gap-16 w-full">
          <span className="text-center">
            <p className="text-xl xl:text-5xl leading-snug text-[#82DDE7]">
              No provisioning, No Deployment. Just register your wallet with
              <br /> us and make API calls as you would in good’ol Web2
            </p>
          </span>
          <ConnectWallet>Register your wallet</ConnectWallet>
        </section>

        <section className="relative flex flex-col items-center h-max w-full">
          <img src="/landingPage/section4bg.svg" className="w-full h-full" />
          <div className="absolute px-5 md:px-40 flex flex-row items-center z-10 w-full h-full">
            <h2 className="uppercase text-xl xl:text-8xl text-white w-3/4">
              Expect cost savings of about 30%!
            </h2>

            <img src="landingPage/coins.svg" className="w-1/4" />
          </div>
        </section>

        <section className="flex flex-col items-center md:flex-row gap-5 h-full w-full">
          <div className="relative w-1/2 h-1/2 xl:w-full xl:h-full">
            <img src="landingPage/mobileCommunity.svg" className="invisible" />
            <img
              src="landingPage/mobileCommunity.svg"
              className="absolute top-0 md:-top-1/4"
            />
          </div>

          <div className="flex flex-col gap-10 h-full p-10">
            <h2 className="text-xl xl:text-6xl leading-relaxed">
              Support the open source community
            </h2>
            <p className="text-[#82DDE7] text-xl xl:text-5xl leading-relaxed">
              As you pay to use our APIs, a portion goes to the open source
              software&apos;s treasury
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
