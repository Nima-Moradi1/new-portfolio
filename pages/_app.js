import "../styles/globals.css";
// components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
//router
import { useRouter } from "next/router";
//framer motion
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // not to show user anything until the loading is complete
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const removeLoader = () => {
      setLoading(false);
    };
    window.addEventListener("load", removeLoader);
    return removeLoader;
  }, []);
  if (!loading) {
    return (
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    );
  } else {
    return <Loading />;
  }
}

export default MyApp;
