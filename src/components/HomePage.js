import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from '../components/Footer';



const formatDate = (dateString) => {
  if (!dateString) return "Date not available";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
};



// Top Section (Upcoming Matches Card)
const TopSection = () => {
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(" https://7fa6-41-81-196-5.ngrok-free.app/api/fixtures/2/")
      .then((response) => {
        setMatch(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch fixture:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <section id="top-section"><p>Loading upcoming match...</p></section>;
  if (!match) return <section id="top-section"><p>Error: Unable to load match data.</p></section>;

  const matchDate = new Date(match.match_date);
  const day = matchDate.toLocaleString("en-US", { weekday: "long" });
  const date = matchDate.getDate();
  const month = matchDate.toLocaleString("en-US", { month: "long" });

  return (
    <section id="top-section">
      <div className="top-banner">
        <div className="container inner-banner">
          <div className="half-width huge-title">
            <h2>Upcoming Matches</h2>

            <br>
            </br>
            <button
  className="watch-btn"
  style={{
    cursor: 'pointer', // makes the pointer appear
    fontSize: '1.1rem',
    padding: '10px 20px',
    backgroundColor: '#green',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  }}
  onClick={() =>
    document.getElementById('live-match-section')?.scrollIntoView({ behavior: 'smooth' })
  }
>
  Watch Live
</button>


          </div>
          <div className="half-width match-card-container">
            <div className="match-card">
              <div className="match-card-header">
                <h3>{day}</h3>
                <p>{`${month} ${date}, ${matchDate.getFullYear()}`}</p>
              </div>
              <div className="match-card-body">
                <h4>{match.home_team} vs {match.away_team}</h4>
                <p>{match.match_time || "Time not available"}</p>
                <div>
                  <img src={match.home_team_logo} alt={match.home_team} style={{ width: "100px", marginRight: "10px" }} />
                  <img src={match.away_team_logo} alt={match.away_team} style={{ width: "150px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fixtures Section (Upcoming Fixtures List)
const FixturesSection = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(" https://7fa6-41-81-196-5.ngrok-free.app/api/fixtures/")
      .then((response) => {
        setFixtures(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch fixtures:", error);
        setLoading(false);
      });
  }, []);

  const formatMatchDay = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const formatMatchTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };

  if (loading) return <section className="fixtures-section"><p>Loading fixtures...</p></section>;
  if (!fixtures.length) return <section className="fixtures-section"><p>No upcoming fixtures available.</p></section>;

  return (
    <section className="fixtures-section">
      <div className="container">
        <h2 className="section-title">Upcoming Fixtures</h2>
        <div className="fixtures-grid">
          {fixtures.map((fixture) => (
            <div className="fixture-card" key={fixture.id}>
              <div className="fixture-info">

                {/* Day and Date at the top */}
                <p className="fixture-date">{formatMatchDay(fixture.match_date)}</p>

                <div className="fixture-teams">
                  {/* Home Team */}
                  <div className="team">
                    <img src={fixture.home_team_logo} alt={fixture.home_team} className="team-logo" />
                    <p className="team-name">{fixture.home_team}</p>
                  </div>

                  {/* Time in between */}
                  <p className="fixture-time">{formatMatchTime(fixture.match_date)}</p>

                  {/* Away Team */}
                  <div className="team">
                    <img src={fixture.away_team_logo} alt={fixture.away_team} className="team-logo" />
                    <p className="team-name">{fixture.away_team}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Player Component
const Player = ({ name, description, image, goals_scored, matches_played, position }) => (
  <div className="player">
    <div className="player-details">
      <div className="player-image">
        <img src={image} alt={name} />
      </div>
      <div className="player-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="player-stats">
          <p><strong>Goals Scored:</strong> {goals_scored}</p>
          <p><strong>Matches Played:</strong> {matches_played}</p>
          <p><strong>Position:</strong> {position}</p>
        </div>
      </div>
    </div>
  </div>
);

// Players Section
const PlayersSection = ({ players }) => (
  <section id="players">
    <div className="container">
      <h2 className="section-title">Top Players</h2>
      <div className="inner-player">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  </section>
);

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(" https://7fa6-41-81-196-5.ngrok-free.app/api/news/")
      .then(response => {
        setNews(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section id="news-section" className="news-section">
      <div className="news-list">
        {news.map((item, index) => (
          <div
            key={index}
            className="news-item"
            style={{ marginBottom: "20px" }} // space between news items
          >
            <div
              className="news-content"
              style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}
            >
              <div className="news-image">
                {item.news_photo && (
                  <img
                    src={item.news_photo}
                    alt={item.headline}
                    className="styled-news-photo"
                    style={{
                      width: "350px", // 👈 increased width
                      height: "auto",
                      objectFit: "cover"
                    }}
                  />
                )}
              </div>
              <div className="news-text">
                <h3>{item.headline}</h3>
                <p>{item.news}</p>
                <p className="news-date">{formatDate(item.created_at)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




// const ClubNewsSection = () => {
//   const [clubNews, setClubNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/clubs/")
//       .then((response) => setClubNews(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <section id="club-news-section" style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//         <a
//           href="#clubs"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             fontWeight: "600",
//             color: "#007bff",
//             textDecoration: "none",
//             fontSize: "16px",
//           }}
//         >
//           More Clubs &rarr;
//         </a>
//       </div>

//       <div
//         className="news-lister"
//         style={{
//           display: "flex",
//           gap: "20px",
//           overflowX: "auto",
//           paddingBottom: "10px",
//         }}
//       >
//         {clubNews.map((item, index) => (
//           <div
//             key={index}
//             className="news-items"
//             style={{
//               minWidth: "180px",
//               backgroundColor: "#fff",
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               padding: "20px",
//               textAlign: "center",
//               flexShrink: 0,
//             }}
//           >
//             <a href={`/clubs/${item.id}`} className="news-link" style={{ textDecoration: "none", color: "#333" }}>
//               {item.logo && (
//                 <img
//                   src={item.logo}
//                   alt={`Club ${item.name}`}
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     objectFit: "contain",
//                     marginBottom: "10px",
//                   }}
//                 />
//               )}
//               <h3 style={{ fontSize: "16px", fontWeight: "600" }}>{item.name}</h3>
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

const LiveMatchSection = () => {
  const [liveMatch, setLiveMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch live match data from the backend API
    axios.get(" https://7fa6-41-81-196-5.ngrok-free.app/live-match/")
      .then((response) => {
        const matches = response.data;

        if (Array.isArray(matches) && matches.length > 0) {
          setLiveMatch(matches[0]); // Use the first live match
        } else {
          setLiveMatch(null);
        }

        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load live match video.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="live-match-section" className="live-match-section" style={{ padding: "40px 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2 className="section-title">Watch Match Live</h2>
          <p>Loading live match...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="live-match-section" className="live-match-section" style={{ padding: "40px 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2 className="section-title">Watch Match Live</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  if (!liveMatch) {
    return (
      <section id="live-match-section" className="live-match-section" style={{ padding: "40px 0", backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h2 className="section-title">Watch Match Live</h2>
          <p>No live match available at the moment.</p>
        </div>
      </section>
    );
  }

  const liveVideoUrl = liveMatch.stream_url;

  // Extract video ID from the YouTube URL
  const videoId = liveVideoUrl.split('v=')[1]; 

  // Update the embed URL to include autoplay, loop, and playlist for looping the video
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;

  return (
    <section id="live-match-section" className="live-match-section" style={{ padding: "40px 0", backgroundColor: "#f0f0f0" }}>
      <div className="container">
        <h2 className="section-title">{liveMatch.match_title}</h2>
        <div className="video-wrapper" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            src={embedUrl}
            title="Live Match Stream"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};


// HomePage Component
const HomePage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/players/")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.error("Failed to fetch players:", err));
  }, []);

  return (
    <>
      <main>
        <TopSection />
        <LiveMatchSection/>
        <FixturesSection />
        <PlayersSection players={players} />
        <NewsSection />

        {/* <ClubNewsSection /> */}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
