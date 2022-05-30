import { storyblokInit, apiPlugin } from "@storyblok/react";
import Teaser from "../components/teaser";
import Page from "../components/page";
import Feature from "../components/feature";

storyblokInit({
  accessToken: 'TOKEN',
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    feature: Feature,
    page: Page,
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
