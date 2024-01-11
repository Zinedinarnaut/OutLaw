import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import Incident from '../components/Incident';

const IncidentsPage = ({}) => {
    const [regions, setRegions] = useState(['ap', 'na', 'eu', 'kr', 'latam', 'br']);
    const [selectedRegion, setSelectedRegion] = useState('ap');
    const [incidents, setIncidents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const incidentResponse = await axios.get(`https://api.henrikdev.xyz/valorant/v1/status/${selectedRegion}`);
                setIncidents(incidentResponse.data.data.incidents);
            } catch (error) {
                console.error('Error fetching incidents data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedRegion]);

    return (
        <div>
            <label htmlFor="region">Select Region: </label>
            <select
                id="region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
            >
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region.toUpperCase()}
                    </option>
                ))}
            </select>

            <div style={{ width: '600px', padding: '20px', borderRadius: '4px', backgroundColor: '#1d1d20', marginTop: '20px' }}>
                {loading ? (
                    <BarLoader color="#e60e3b" />
                ) : (
                    <div>
                        {incidents.length === 0 ? (
                            <p>No incidents reported.</p>
                        ) : (
                            incidents.map((incident) => (
                                <Incident
                                    key={incident.id}
                                    title={incident.titles[0].content}
                                    description={incident.updates[0].translations[0].content}
                                    createdAt={incident.created_at}
                                    details={incident}
                                />
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IncidentsPage;
