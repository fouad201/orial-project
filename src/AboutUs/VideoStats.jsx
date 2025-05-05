import React, { useState, useEffect, useRef } from "react";
import "./VideoStats.css";

const VideoStats = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  const statsRef = useRef(null);

  // Stats data
  const stats = [
    {
      id: 1,
      icon: "🏆",
      count: "+3",
      label: "Winning Awards",
      arabicLabel: "جوائز فائزة",
    },
    {
      id: 2,
      icon: "⊞",
      count: "+5",
      label: "Ongoing Projects",
      arabicLabel: "مشاريع جارية",
    },
    {
      id: 3,
      icon: "😊",
      count: "+44",
      label: "Happy Clients",
      arabicLabel: "عملاء سعداء",
    },
    {
      id: 4,
      icon: "≡",
      count: "+59",
      label: "Completed Projects",
      arabicLabel: "مشاريع مكتملة",
    },
  ];

  // Function to handle YouTube iframe play/pause
  const toggleVideo = () => {
    if (isPlaying) {
      // If playing, send pause command to iframe
      const iframe = document.querySelector(".youtube-iframe");
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    } else {
      // If paused, send play command to iframe
      const iframe = document.querySelector(".youtube-iframe");
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
    }
    setIsPlaying(!isPlaying);
  };

  // Intersection Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimatedStats(true);
        }
      },
      {
        root: null,
        threshold: 0.3, // When 30% of the element is visible
      }
    );

    // Observe the stats section
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Cleanup
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Handle YouTube API events
  useEffect(() => {
    // Create YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Handle messages from YouTube iframe
    const handleMessage = (event) => {
      if (event.data && typeof event.data === "string") {
        try {
          const data = JSON.parse(event.data);
          if (data.event === "onStateChange") {
            // Update play state based on YouTube player state
            // 1 = playing, 2 = paused, 0 = ended
            if (data.info === 1) {
              setIsPlaying(true);
            } else if (data.info === 2 || data.info === 0) {
              setIsPlaying(false);
            }
          }
        } catch (e) {
          // Not a JSON message, ignore
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="video-stats-section">
      <div className="video-stats-container">
        {/* Video Section */}
        <div className="video-section">
          <h2 className="video-title" dir="rtl">
            شاهد هذا الفيديو لتتعرف أكثر على رحلتنا وإنجازاتنا
          </h2>

          <div
            className="video-wrapper"
            onMouseEnter={() => setIsVideoHovered(true)}
            onMouseLeave={() => setIsVideoHovered(false)}
          >
            <div className={`video-player ${isVideoHovered ? "hovered" : ""}`}>
              {/* Play button overlay - hide when playing */}
              {!isPlaying && (
                <div className="play-button-overlay" onClick={toggleVideo}>
                  <button className="play-button">
                    <span className="play-icon">▶</span>
                  </button>
                </div>
              )}

              {/* YouTube iframe embed */}
              <div className="youtube-container">
                <iframe
                  className="youtube-iframe"
                  src="https://www.youtube.com/embed/UZ3hD1BXmYE?enablejsapi=1&rel=0&modestbranding=1"
                  title="2025 Web Development Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section" ref={statsRef}>
          <div className={`stats-container ${animatedStats ? "animated" : ""}`}>
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`stat-card ${animatedStats ? "animated" : ""}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-count">{stat.count}</div>
                <div className="stat-label" dir="rtl">
                  {stat.arabicLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="decorative-element element-1">+</div>
      <div className="decorative-element element-2">+</div>
      <div className="decorative-element element-3">⌄⌄⌄⌄</div>
    </div>
  );
};

export default VideoStats;
