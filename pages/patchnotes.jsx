// pages/patch-notes.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { BarLoader } from 'react-spinners';

const PatchNotesPage = () => {
    const [patchNotes, setPatchNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const patchNotesResponse = await axios.get(
                    'https://api.henrikdev.xyz/valorant/v1/website/en-us?filter=game_updates'
                );
                setPatchNotes(patchNotesResponse.data.data);
            } catch (error) {
                console.error('Error fetching patch notes data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div style={{ width: '100%', marginTop: '20px', background: '#1d1d20', padding: '20px', borderRadius: '4px' }}>
            <h2 style={{ fontSize: '2em', fontWeight: 'bold' }}>Patch Notes</h2>
            {loading ? (
                <BarLoader color="#e60e3b" />
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
                    {patchNotes.slice(0, showMore ? patchNotes.length : 4).map((note) => (
                        <div key={note.date} style={{ flex: '0 0 48%', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                            <h3>{note.title}</h3>
                            <p>{note.date}</p>
                            <a href={note.url} target="_blank" rel="noopener noreferrer">
                                <Image src={note.banner_url} alt={note.title} width={600} height={337.5} quality={100} style={{ borderRadius: '4px' }} />
                            </a>
                        </div>
                    ))}
                </div>
            )}
            {patchNotes.length > 4 && (
                <button onClick={toggleShowMore} style={{ backgroundColor: '#FF0000', color: '#000000', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
};

export default PatchNotesPage;
