// components/Incident.js
import React from 'react';

const Incident = ({ title, description, createdAt, details }) => {
    return (
        <div style={{ marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
            <h3>{title}</h3>
            <p>Issue Date: {createdAt}</p>
            <p>{description}</p>
            {details && (
                <div>
                    {details.publish_locations && (
                        <p>Publish Locations: {details.publish_locations.join(', ')}</p>
                    )}
                    {details.platforms && (
                        <p>Platforms: {details.platforms.join(', ')}</p>
                    )}
                    {details.incident_severity && (
                        <p>Incident Severity: {details.incident_severity}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Incident;
