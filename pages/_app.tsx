import '../styles/globals.css'
// pages/_app.tsx
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

// The handler to smoothly scroll the element into view
const handExitComplete = (): void => {
    if (typeof window !== 'undefined') {
        // Get the hash from the url
        const hashId = window.location.hash;

        if (hashId) {
            // Use the hash to find the first element with that id
            const element = document.querySelector(hashId);

            if (element) {
                // Smooth scroll to that elment
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }
    }
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const router = useRouter();
    return (
        <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    );
};

export default MyApp;
