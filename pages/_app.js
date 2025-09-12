import "@/styles/globals.css";
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppFAB />
    </>
  );
}