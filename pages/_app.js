import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UseWalletProvider } from "use-wallet";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/space-grotesk";

const theme = extendTheme({
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <UseWalletProvider
          chainId={5777}
          connectors={{
            walletconnect: {
              rpcUrl: "HTTP://127.0.0.1:7545",
            },
          }}
        >
          <NavBar />
          <br />
          <br />
          <br />
          <Component {...pageProps} />
          <br />
          <br />
          <br />
          <Footer />
        </UseWalletProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
