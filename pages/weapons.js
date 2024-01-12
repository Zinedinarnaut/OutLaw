// pages/weapons.js

import React from 'react';
import axios from 'axios';
import Image from 'next/image';

const WeaponsPage = ({ weapons }) => {
    return (
        <div className="container">
            <h1>Valorant Weapons</h1>
            <div className="weapon-cards-container">
                {weapons.map((weapon) => (
                    <div key={weapon.uuid} className="weapon-card">
                        <h2>{weapon.displayName}</h2>
                        <p>Category: {weapon.category}</p>
                        <hr />
                        {weapon.weaponStats && (
                            <div className="weapon-details">
                                <p>Fire Rate: {weapon.weaponStats.fireRate}</p>
                                <p>Magazine Size: {weapon.weaponStats.magazineSize}</p>
                                <p>Run Speed Multiplier: {weapon.weaponStats.runSpeedMultiplier}</p>
                                <p>Equip Time (Seconds): {weapon.weaponStats.equipTimeSeconds}</p>
                                <p>Reload Time (Seconds): {weapon.weaponStats.reloadTimeSeconds}</p>
                                <p>First Bullet Accuracy: {weapon.weaponStats.firstBulletAccuracy}</p>
                                <p>Shotgun Pellet Count: {weapon.weaponStats.shotgunPelletCount}</p>
                                <p>Alt Fire Type: {weapon.weaponStats.altFireType}</p>

                                {/* More stats can be added here */}
                            </div>
                        )}
                        <hr />
                        <div className="weapon-image">
                            <Image
                                src={weapon.displayIcon}
                                alt={weapon.displayName}
                                width={300}
                                height={200}
                                quality={100}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const apiUrl = 'https://valorant-api.com/v1/weapons';
        const response = await axios.get(apiUrl);
        const weapons = response.data.data;

        return {
            props: { weapons },
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: { weapons: [] },
        };
    }
}

export default WeaponsPage;
