import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis();

    useEffect(() => {
        if (isWeb3Enabled) return;
        if (typeof window != "undefined") {
            if (window.localStorage.getItem("connceted")) {
                enableWeb3();
            }
        }
    }, [isWeb3Enabled]);
    // Automatically run on load
    // then, it'll run on the effect and check isWebEnabled value

    // No dependency array; run anytime something re-renders
    // careful this can cause circular rendering,
    // Blank dependency array, it will just run on load
    // Dependencies in the array, useEffect will run anytime something in the array changes

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account change to ${account}`);
            if (account == null) {
                window.localStorage.removeItem("connected");
                deactivateWeb3();
                console.log("Null Account Found ");
            }
        });
    }, []);

    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 2)}...
                    {account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async function () {
                        await enableWeb3();
                        if (typeof window != "undefined") {
                            window.localStorage.setItem(
                                "connected",
                                "injected",
                            );
                        }
                    }}
                    disabled={isWeb3EnabledLoading}
                >
                    Connect
                </button>
            )}
        </div>
    );
}

// I'm going to show you the hard way first
// Then the easy way

// Learning how to calc a derivative
// Work on an easy solution
