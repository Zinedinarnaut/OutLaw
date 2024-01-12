// pages/leaderboardcomp.js

import { useEffect, useState } from 'react';
import axios from 'axios';

const LeaderboardComp = ({ seasons }) => {
    return (
        <div className="leaderboard-container">
            <h1>Competitive Seasons Leaderboard</h1>
            <div className="leaderboard">
                {seasons.map((season) => (
                    <div key={season.uuid} className="season">
                        <h2>{season.startTime}</h2>
                        {season.borders && season.borders.length > 0 && (
                            <img src={season.borders[0].displayIcon} alt={`Season ${season.startTime}`} />
                        )}
                        {season.stats && (
                            <div className="stats">
                                <p>Wins: {season.stats.wins}</p>
                                <p>Losses: {season.stats.losses}</p>
                                <p>Rank: {season.stats.rank}</p>
                                {/* Add more stats as needed */}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .leaderboard-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .leaderboard {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .season {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          text-align: center;
        }

        img {
          max-width: 100px;
          max-height: 100px;
        }

        .stats {
          margin-top: 10px;
        }
      `}</style>
        </div>
    );
};

export async function getStaticProps() {
    try {
        const response = await axios.get('https://valorant-api.com/v1/seasons/competitive');
        const seasons = response.data.data;

        return {
            props: {
                seasons,
            },
            revalidate: 60, // Refresh every 60 seconds
        };
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return {
            props: {
                seasons: [],
            },
        };
    }
}

export default LeaderboardComp;
