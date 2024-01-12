// pages/stats.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const StatsPage = ({ versionData }) => {
    const [data, setData] = useState(versionData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://valorant-api.com/v1/version');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching version data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="stats-container">
            <h1>Riot Games & Valorant Versions</h1>
            <div className="version-data">
                <p>
                    <strong>Manifest ID:</strong> {data.manifestId}
                </p>
                <p>
                    <strong>Branch:</strong> {data.branch}
                </p>
                <p>
                    <strong>Version:</strong> {data.version}
                </p>
                <p>
                    <strong>Build Version:</strong> {data.buildVersion}
                </p>
                <p>
                    <strong>Engine Version:</strong> {data.engineVersion}
                </p>
                <p>
                    <strong>Riot Client Version:</strong> {data.riotClientVersion}
                </p>
                <p>
                    <strong>Riot Client Build:</strong> {data.riotClientBuild}
                </p>
                <p>
                    <strong>Build Date:</strong> {data.buildDate}
                </p>
            </div>

            <style jsx>{`
        .stats-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .version-data {
          background-color: #1d1d20;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }

        p {
          margin: 10px 0;
        }

        strong {
          margin-right: 10px;
        }
      `}</style>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await axios.get('https://valorant-api.com/v1/version');
        const versionData = response.data.data;

        return {
            props: {
                versionData,
            },
            revalidate: 60, // Refresh every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching version data:', error.message);
        return {
            props: {
                versionData: {},
            },
        };
    }
}

export default StatsPage;
