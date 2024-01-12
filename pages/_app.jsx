// app.jsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NextNProgress from 'nextjs-progressbar';
import { SessionProvider } from 'next-auth/react';
import { Analytics } from '@vercel/analytics/react';
import RouteTransitions from '../components/RouteTransitions';
import { SkeletonTheme } from 'react-loading-skeleton';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Loader from '../components/Loader'; // Import the Loader component
import Footer from './Footer';
import Header from './Header';
import Script from 'next/script';

import '../styles/globals.css';
import '../components/SiteTransitions';

import { checkAdBlock } from 'adblock-checker';
import { toast, Toaster } from 'sonner';

function MyApp({ Component, pageProps, session }) {
    const [loading, setLoading] = useState(true);

    // Simulate a loading delay for demonstration purposes
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Set the duration for the loader (in milliseconds)

        return () => clearTimeout(timer);
    }, []);

    const displayToastMessage = () => {
        toast.message(
            `🚧Please be informed that our website is currently undergoing daily updates to enhance your experience. During this period, you may encounter occasional bugs or temporary disruptions. We appreciate your patience and understanding as we work to bring you an improved platform.🚧`,
            {
                position: 'bottom-right',
                important: true,
                duration: 100000,
                className: 'flex-center font-karla text-white',
            }
        );
    };

    // Set an interval to display the toast message every, for example, 10 minutes
    useEffect(() => {
        const intervalId = setInterval(displayToastMessage, 60 * 60 * 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="">
            {loading && <Loader />} {/* Include Loader component when loading is true */}

            <NextNProgress
                options={{
                    showSpinner: true,
                }}
                color="#e60e3b"
                startPosition={0.1}
                stopDelayMs={100}
                height={3}
                showOnShallow={false}
            />

            {!loading && (
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                        duration: 0.5,
                    }}
                >
                    <Header />
                    <RouteTransitions>
                        <main className="pt-20 px-[15px] xs:px-[25px] mx-auto max-w-4xl">
                            <SessionProvider session={session}>
                                <SkeletonTheme baseColor="#232329" highlightColor="#2a2a32">
                                    <Script src="https://out-law.vercel.app/theme.js" strategy="beforeInteractive" />
                                    <Component {...pageProps} />
                                    <Analytics />
                                    <Toaster richColors theme="dark" closeButton />
                                </SkeletonTheme>
                            </SessionProvider>
                            <Footer />
                        </main>
                    </RouteTransitions>
                </motion.div>
            )}
        </main>
    );
}

export default MyApp;
