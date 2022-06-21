import { ChakraProvider } from "@chakra-ui/react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { BrowserRouter as Router } from "react-router-dom";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import Layout from "lib/layout";
import Routings from "lib/router/Routings";
import { theme } from "lib/styles/customTheme";
import "@rainbow-me/rainbowkit/styles.css";

const App = () => {
  const { chains, provider } = configureChains(
    [chain.mainnet], // you can add more chains here like chain.polygon, chain.goerli
    [
      jsonRpcProvider({
        rpc: () => {
          return {
            http: "https://rpc.ankr.com/eth", // go to https://www.ankr.com/protocol/ to get a free RPC for your network if you're not using Polygon
          };
        },
      }),

      publicProvider(),
    ]
  );
  const { connectors } = getDefaultWallets({
    appName: "Vite-React-Chakra-Wagmi-Rainbow-StarterKit",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Router>
            <Layout>
              <Routings />
            </Layout>
          </Router>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
};

export default App;
