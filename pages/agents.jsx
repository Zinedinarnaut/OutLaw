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
        setSelectedRole(role);
    };

    return (
        <div className="container">
            <h1>Agents</h1>
            <div className="roleSelector">
                {uniqueRoles.map((role, index) => (
                    <button
                        key={index}
                        onClick={() => handleRoleChange(role)}
                        className={role === selectedRole ? 'selected' : ''}
                    >
                        {role || 'No Role'}
                    </button>
                ))}
            </div>
            <ul className="agentsList">
                {filteredAgents.map((agent) => (
                    <li key={agent.uuid} className="agent">
                        <h3>{agent.displayName}</h3>
                        <div className="imageContainer">
                            <Image
                                src={agent.displayIcon}
                                alt={agent.displayName}
                                width={200}
                                height={200}
                                layout="responsive"
                            />
                        </div>
                        <p>{agent.description}</p>
                        <div className="abilities">
                            {agent.abilities.map((ability, index) => (
                                <div key={index} className="ability">
                                    <Image
                                        src={ability.displayIcon}
                                        alt={ability.displayName}
                                        width={50}
                                        height={50}
                                        layout="fixed"
                                    />
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
