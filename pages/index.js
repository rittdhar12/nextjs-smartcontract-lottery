// imports work with our front end
// require does not
// nodejs != ecmascript/javascript
// backendJS is diff from front end JS

import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font";
import styles from "../styles/Home.module.css";
//import ManualHeader from "../components/ManualHeader";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";

//const inter = Inter({ subsets: ["latin"] });
const supportedChains = ["31337", "11155111"];

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis();
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our smart contract lottery" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <ManualHeader> </ManualHeader>*/}
            <Header />
            {/**header / connect button / nav bar*/}
            {isWeb3Enabled ? (
                <div>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div>
                            <LotteryEntrance className="p-8" />
                        </div>
                    ) : (
                        <div>
                            {`Please swith to a supported chainId. The supported Chain Ids are: ${supportedChains}`}
                        </div>
                    )}
                </div>
            ) : (
                <div>Please Connect to a Wallet</div>
            )}
        </div>
    );
}
