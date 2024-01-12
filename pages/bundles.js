// pages/bundles.js

import React from 'react';
import axios from 'axios';
import Image from 'next/image';

const BundlesPage = ({ bundles }) => {
    return (
        <div className="container">
            <h1>Valorant Bundles</h1>
            <div className="bundles-container">
                {bundles.map((bundle) => (
                    <div key={bundle.uuid} className="bundle-card">
                        <div className="bundle-image">
                            <Image
                                src={bundle.displayIcon}
                                alt={bundle.displayName}
                                width={500}
                                height={500}
                                quality={100}
                                className="h-auto w-auto"
                            />
                        </div>
                        <h2>Name: {bundle.displayName}</h2>
                        <break />
                        <p>Description: {bundle.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const apiUrl = 'https://valorant-api.com/v1/bundles';
        const response = await axios.get(apiUrl);
        const bundles = response.data.data;

        return {
            props: { bundles },
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: { bundles: [] },
        };
    }
}

export default BundlesPage;
