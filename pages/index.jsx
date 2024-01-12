import React from 'react';
import SiteTransitions from "../components/SiteTransitions";

const HomePage = () => {
    const commonStyles = {
        box: {
            background: '#171717',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        },
        section: {
            marginBottom: '40px',
        },
        heroSection: {
            ...commonStyles.box,
            color: 'var(--hero-text-color)',
            padding: '40px',
        },
        aboutSection: {
            ...commonStyles.box,
            color: 'var(--about-text-color)',
            padding: '20px',
        },
        techStackSection: {
            ...commonStyles.box,
            color: 'var(--tech-stack-text-color)',
            padding: '20px',
        },
        purposeSection: {
            ...commonStyles.box,
            color: 'var(--purpose-text-color)',
            padding: '20px',
        },
        joinSection: {
            ...commonStyles.box,
            color: 'var(--join-text-color)',
            padding: '20px',
        },
        sectionContent: {
            maxWidth: '600px',
            margin: '0 auto',
        },
        joinButton: {
            backgroundColor: 'var(--button-background)',
            color: 'var(--button-text-color)',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
        },
    };


    return (
        <main style={styles.container}>
            <section style={{ ...styles.heroSection, ...styles.section }}>
                <div style={styles.sectionContent}>
                    <h1>Welcome to Outlaw</h1>
                </div>
            </section>

            <section style={{ ...styles.aboutSection, ...styles.section }}>
                <div style={styles.sectionContent}>
                    <h2>About Outlaw</h2>
                    <p>
                        Outlaw is a web application dedicated to providing information and updates about online gaming, specifically
                        focused on Riot Games' titles. Our platform aims to keep you informed about the latest news, patches, and
                        service statuses related to popular games like Valorant.
                    </p>
                </div>
            </section>

            <section style={{ ...styles.techStackSection, ...styles.section }}>
                <div style={styles.sectionContent}>
                    <h2>Technology Stack</h2>
                    <p>
                        Outlaw is built using modern web technologies to ensure a seamless and responsive user experience. Our
                        technology stack includes React for the frontend, Next.js for server-side rendering, and Axios for efficient
                        API requests. We also utilize CSS-in-JS for styling to create an appealing and user-friendly interface.
                    </p>
                </div>
            </section>

            <section style={{ ...styles.purposeSection, ...styles.section }}>
                <div style={styles.sectionContent}>
                    <h2>Purpose</h2>
                    <p>
                        The primary purpose of Outlaw is to provide gamers with a centralized platform where they can quickly access
                        real-time information about the status of Riot Games' services. Whether you're a dedicated Valorant player or
                        interested in other Riot Games titles, Outlaw keeps you in the loop with incident reports, patch notes, and
                        service updates.
                    </p>
                </div>
            </section>

            <section style={{ ...styles.joinSection, ...styles.section }}>
                <div style={styles.sectionContent}>
                    <h2>Join Outlaw Today</h2>
                    <p>
                        Ready to stay ahead of the game? Join Outlaw today and never miss important updates and announcements
                        related to your favorite Riot Games titles. Explore the world of online gaming with Outlaw – your go-to
                        source for all things Riot Games.
                    </p>
                </div>
            </section>
            <SiteTransitions />
        </main>
    );
};

export default HomePage;
