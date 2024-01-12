// pages/maps.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MapsPage = () => {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        const fetchMaps = async () => {
            try {
                const apiUrl = 'https://valorant-api.com/v1/maps';
                const response = await axios.get(apiUrl);
                setMaps(response.data.data);
            } catch (error) {
                console.error('Error fetching maps:', error.message);
            }
        };

        fetchMaps();
    }, []);

    return (
        <div className="container">
            <h1>Valorant Maps</h1>
            <div className="maps-container">
                {maps.map((map) => (
                    <div key={map.uuid} className="map-card">
                        <h2>{map.displayName}</h2>
                        <p>{map.narrativeDescription}</p>
                        <img src={map.displayIcon} alt={map.displayName} />
                        {/* Add more map details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapsPage;
