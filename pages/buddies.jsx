// pages/buddies.js
import React, { useState } from 'react';
import Image from 'next/image';

const BuddiesPage = ({ buddies }) => {
    const [selectedLevel, setSelectedLevel] = useState(1);

    const handleLevelChange = (level) => {
        setSelectedLevel(level);
    };

    return (
        <div className="container">
            <h1>Buddies</h1>
            <div className="levelSelector">
                {[1, 2, 3].map((level) => (
                    <button
                        key={level}
                        onClick={() => handleLevelChange(level)}
                        className={level === selectedLevel ? 'selected' : ''}
                    >
                        Level {level}
                    </button>
                ))}
            </div>
            <ul className="buddiesList">
                {buddies.map((buddy) => (
                    <li key={buddy.uuid} className="buddy">
                        <h3>{buddy.displayName}</h3>
                        <div className="imageContainer">
                            <Image
                                src={buddy.displayIcon}
                                alt={buddy.displayName}
                                width={200}
                                height={200}
                                layout="responsive"
                                quality={100}
                            />
                        </div>
                        <p>Charm Level: {buddy.levels[0].charmLevel}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    // Fetch buddies data from the API
    const response = await fetch('https://valorant-api.com/v1/buddies');
    const data = await response.json();

    return {
        props: {
            buddies: data.data,
        },
    };
}

export default BuddiesPage;
