import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const RankPage = () => {
    const [username, setUsername] = useState('araxyso');
    const [tag, setTag] = useState('ドダ運');
    const [region, setRegion] = useState('ap');
    const [rankData, setRankData] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${username}/${tag}`);
            setRankData(response.data.data);
        } catch (error) {
            console.error('Error fetching rank data:', error);
            setRankData(null);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Valorant Rank Checker</h1>

            <div style={styles.inputContainer}>
                <label htmlFor="username" style={styles.label}>Username: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.inputContainer}>
                <label htmlFor="tag" style={styles.label}>Tag: </label>
                <input
                    type="text"
                    id="tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    style={styles.input}
                />
            </div>

            <div style={styles.inputContainer}>
                <label htmlFor="region" style={styles.label}>Select Region: </label>
                <select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    style={styles.input}
                >
                    <option value="ap">AP</option>
                    <option value="na">NA</option>
                    <option value="eu">EU</option>
                    {/* Add more regions if needed */}
                </select>
            </div>
<div className="button-borders">
    <button onClick={handleSearch} className="primary-button">Search</button>
</div>

            {rankData && (
                <div style={styles.rankContainer}>
                    <h2 style={styles.rankTitle}>Your Rank</h2>
                    <p style={styles.rankInfo}>Rank: {rankData.currenttierpatched}</p>
                    <p style={styles.rankInfo}>MMR: {rankData.elo}</p>
                    <p style={styles.rankInfo}>RR: {rankData.ranking_in_tier}</p>
                    <div style={styles.rankImagesContainer}>
                        <div style={styles.rankImageItem}>
                            <p style={styles.rankImageTitle}>Large Icon</p>
                            <Image src={rankData.images.large} alt="Large Icon" quality={100} width={100} height={100} />
                        </div>
                        {/* Add more images as needed */}
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#1d1d20',
        borderRadius: '4px',
        marginTop: '20px',
    },
    container1: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#171717',
        borderRadius: '4px',
        marginTop: '20px',
    },
    title: {
        color: 'var(--hero-text-color)',
        fontSize: '2em',
        marginBottom: '20px',
    },
    inputContainer: {
        marginBottom: '10px',
    },
    label: {
        color: 'var(--hero-text-color)',
        marginRight: '10px',
    },
    input: {
        padding: '5px',
        borderRadius: '4px',
    },
    button: {
        backgroundColor: '#FF0000',
        color: '#000000',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    rankContainer: {
        marginTop: '20px',
        backgroundColor: '#1d1d20',
        padding: '20px',
        borderRadius: '4px',
    },
    rankTitle: {
        color: 'var(--hero-text-color)',
        fontSize: '1.5em',
        marginBottom: '10px',
    },
    rankInfo: {
        color: 'var(--hero-text-color)',
        marginBottom: '5px',
    },
    rankImagesContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
    },
    rankImageItem: {
        textAlign: 'center',
    },
    rankImageTitle: {
        color: 'var(--hero-text-color)',
        marginBottom: '5px',
    },
};

export default RankPage;
