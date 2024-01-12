// Loader.jsx
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Loader = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Check if onComplete is a function before calling it
            if (typeof onComplete === 'function') {
                onComplete(); // Callback function to notify the completion of the loader animation
            }
        }, 2000); // Set the duration for the spinner (in milliseconds)

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                visibility: isLoading ? 'visible' : 'hidden',
                backgroundColor: '#1E1E1E', // Set your desired dark background color
            }}
        >
            {isLoading ? (
                // Your spinner image (replace 'loader.png' with your actual image)
                <Image src="/loader.png" alt="Loader" width={100} quality={100} height={50} />
            ) : null}
        </div>
    );
};

export default Loader;
