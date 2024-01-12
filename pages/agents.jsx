// pages/agents.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AgentsPage = () => {
    const [agents, setAgents] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        // Fetch agents data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://valorant-api.com/v1/agents');
                const data = await response.json();
                setAgents(data.data);
            } catch (error) {
                console.error('Error fetching agent data:', error);
            }
        };

        fetchData();
    }, []);

    const uniqueRoles = [...new Set(agents.map((agent) => agent.role?.displayName))];
    const filteredAgents = agents.filter((agent) => agent.role?.displayName === selectedRole);

    const handleRoleChange = (role) => {
        setSelectedRole(role || ''); // Ensure a default value if role is null
    };

    return (
        <div className="container">
            <h1>Agents</h1>
            <div className="roleSelector button-borders">
                {uniqueRoles.map((role, index) => (
                    <button
                        key={index}
                        onClick={() => handleRoleChange(role)}
                        className={role === selectedRole ? 'primary-button' : 'primary-button'}
                    >
                        {role || 'No Role'}
                    </button>
                ))}
            </div>
            <ul className="agentsList">
                {filteredAgents.map((agent) => (
                    <li key={agent.uuid} className="agent">
                        <h3 className="text-white">{agent.displayName}</h3>
                        <div className="imageContainer">
                            {agent.displayIcon && (
                                <Image
                                    src={agent.displayIcon}
                                    alt={agent.displayName}
                                    width={100} // Adjusted width to make the image smaller
                                    height={100} // Adjusted height to make the image smaller
                                    layout="responsive"
                                    objectFit="cover"
                                    quality={100}
                                    style={{ borderRadius: '8px' }}
                                />
                            )}
                        </div>
                        <p>{agent.description}</p>
                        <div className="abilities">
                            {agent.abilities.map((ability, index) => (
                                <div key={index} className="ability">
                                    {ability.displayIcon && (
                                        <Image
                                            src={ability.displayIcon}
                                            alt={ability.displayName}
                                            width={30} // Adjusted width to make the image smaller
                                            height={30} // Adjusted height to make the image smaller
                                            layout="fixed"
                                            quality={100}
                                            objectFit="cover"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    )}
                                    <p>{ability.displayName}</p>
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AgentsPage;
