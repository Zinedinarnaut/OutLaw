// pages/match-history/index.js
import { useState } from 'react';
import axios from 'axios';

const Matchhistory = () => {
    const [username, setUsername] = useState('araxyso');
    const [tag, setTag] = useState('ドダ運');
    const [matchHistory, setMatchHistory] = useState(null);
    const [displayedMatches, setDisplayedMatches] = useState(4);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `https://api.henrikdev.xyz/valorant/v3/matches/ap/${username}/${tag}`
            );

            setMatchHistory(response.data);
        } catch (error) {
            console.error('Error fetching match history:', error);
        }
    };

    const handleShowMore = () => {
        setDisplayedMatches(displayedMatches + 4);
    };

    return (
        <div className="container">
            <h1>Valorant Match History</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Tag:
                    <input
                        type="text"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        required
                    />
                </label>
            </form>
            <div className="button-borders">
                <button type="submit" className="primary-button">Search</button>
            </div>
            {matchHistory && (
                <div className="match-history">
                    {matchHistory.data.slice(0, displayedMatches).map((match, index) => (
                        <div key={index} className="match-card">
                            <div className="box">
                                <p>
                                    <strong>Map:</strong> {match.metadata.map}
                                </p>
                                <p>
                                    <strong>Game Version:</strong> {match.metadata.game_version}
                                </p>
                                <p>
                                    <strong>Game Length:</strong> {match.metadata.game_length}
                                </p>
                                <p>
                                    <strong>Match Date:</strong> {new Date(match.metadata.timestamp).toLocaleString()}
                                </p>
                                <p>
                                    <strong>Round Result:</strong> {match.metadata.round_result}
                                </p>
                                <p>
                                    <strong>Agent Played:</strong> {match.metadata.agent_used}
                                </p>
                                <p>
                                    <strong>Result:</strong> {match.metadata.match_result}
                                </p>
                                <p>
                                    <strong>Final Score:</strong> {match.metadata.final_score}
                                </p>
                                <p>
                                    <strong>Rank:</strong> {match.metadata.rank}
                                </p>
                                <p>
                                    <strong>Player of the Match:</strong> {match.metadata.player_of_the_match}
                                </p>
                                <p>
                                    <strong>Game Mode:</strong> {match.metadata.game_mode}
                                </p>
                                <p>
                                    <strong>Match ID:</strong> {match.metadata.match_id}
                                </p>
                                {/* Add more metadata details as needed */}
                                <div className="players">
                                    {match.players && match.players.all_players.map((player, playerIndex) => (
                                        <div key={playerIndex} className="player-info">
                                            <p>
                                                <strong>Name:</strong> {player.name}
                                            </p>
                                            <p>
                                                <strong>Tag:</strong> {player.tag}
                                            </p>
                                            <p>
                                                <strong>Team:</strong> {player.team}
                                            </p>
                                            <p>
                                                <strong>Kills:</strong> {player.stats.kills}
                                            </p>
                                            <p>
                                                <strong>Deaths:</strong> {player.stats.deaths}
                                            </p>
                                            <p>
                                                <strong>Assists:</strong> {player.stats.assists}
                                            </p>
                                            <p>
                                                <strong>Score:</strong> {player.stats.score}
                                            </p>
                                            <p>
                                                <strong>Headshots:</strong> {player.stats.headshots}
                                            </p>
                                            <p>
                                                <strong>Damage:</strong> {player.stats.damage}
                                            </p>
                                            <p>
                                                <strong>Headshot Percentage:</strong> {player.stats.headshot_percentage}%
                                            </p>
                                            <p>
                                                <strong>ADR (Average Damage per Round):</strong> {player.stats.adr}
                                            </p>
                                            <p>
                                                <strong>First Bloods:</strong> {player.stats.first_bloods}
                                            </p>
                                            <p>
                                                <strong>Clutch Rate:</strong> {player.stats.clutch_rate}%
                                            </p>
                                            <p>
                                                <strong>Plant Rate:</strong> {player.stats.plant_rate}%
                                            </p>
                                            <p>
                                                <strong>Defuse Rate:</strong> {player.stats.defuse_rate}%
                                            </p>
                                            {/* Add more player details as needed */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {matchHistory && (
                <div className="additional-stats">
                    <h2>Additional Stats</h2>
                    <p>
                        <strong>Platform:</strong> {matchHistory.data[0].metadata.platform}
                    </p>
                    <p>
                        <strong>Queue Stats:</strong> {matchHistory.data[0].metadata.queue_stats}
                    </p>
                    {/* Add more additional stats as needed */}
                </div>
            )}

            {displayedMatches < matchHistory?.data.length && (
                <button className="show-more" onClick={handleShowMore}>
                    Show More
                </button>
            )}

            <style jsx>{`
              .container {
                display: flex;
                border-radius: 4px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #171717;
                min-height: 100vh;
                margin: 0 auto;
                padding: 20px;
              }

              h1 {
                color: var(--hero-text-color);
                font-size: 1.5em;
                margin-bottom: 20px;
              }

              form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 20px;
              }

              .input-group {
                display: flex;
                flex-direction: column;
              }

              label {
                color: var(--hero-text-color);
                margin-bottom: 5px;
              }

              input {
                padding: 8px;
                border: 1px solid #333;
                border-radius: 4px;
              }
              
              .match-history {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
              }

              .match-card {
                background-color: var(--card-background);
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                /* Ensure box content doesn't overflow */
              }

              .box {
                padding: 10px;
              }

              .players {
                margin-top: 10px;
              }

              .player-info {
                background-color: var(--card-background-light);
                padding: 8px;
                border-radius: 8px;
                margin-top: 8px;
              }

              .additional-stats {
                margin-top: 20px;
                background-color: var(--card-background-light);
                padding: 20px;
                border-radius: 4px;
              }

              .show-more {
                background-color: var(--card-background-light);
                padding: 10px;
                border: 1px solid var(--primary-color);
                border-radius: 8px;
                cursor: pointer;
                margin-top: 10px;
              }

              p {
                margin: 0;
                color: var(--hero-text-color);
              }
            `}</style>
        </div>
    );
};

export default Matchhistory;
