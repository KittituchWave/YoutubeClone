import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import CategoryButtons from "../components/CategoryButtons";

const HomePage: React.FC = () => {
  const thumbnailUrl =
    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163993931/original/bea1055dbfd13392ad4d291eae22fb9cd3a84484/design-amazing-youtube-thumbnail-in-3-hours.jpg";

  const videos = [
    {
      title: "Storm Warning Update Trailer Rundown, Su-33, Rafale, Eurofighter",
      duration: "8:37",
      views: "30K",
      timeAgo: "9 hours ago",
      channelTitle: "studlee",
    },
    {
      title: "Stray Cat Decides To Move Into Guy's House",
      duration: "3:29",
      views: "7.7M",
      timeAgo: "3 years ago",
      channelTitle: "The Dodo",
    },
    {
      title: "XQc Reacts to Minecraft Speedrun World Record",
      duration: "10:10",
      views: "107K",
      timeAgo: "11 months ago",
      channelTitle: "XQc Clips",
    },
    {
      title: "A GOOD RUSSIAN AA?? Osa-AKM",
      duration: "4:39",
      views: "769",
      timeAgo: "1 day ago",
      channelTitle: "DefenseSpot",
    },
    {
      title: "Amazing Technology Advancements",
      duration: "5:50",
      views: "200K",
      timeAgo: "2 days ago",
      channelTitle: "Tech Insider",
    },
    {
      title: "Top 10 Tips for Productivity",
      duration: "6:15",
      views: "1.2M",
      timeAgo: "4 months ago",
      channelTitle: "Productivity Guru",
    },
    {
      title: "How to clone Youtube and not get arrested",
      duration: "6:15",
      views: "10M",
      timeAgo: "1 months ago",
      channelTitle: "Khun Wave",
    },
    {
      title: "Top 10 Coding Hack 2024 working",
      duration: "6:15",
      views: "100M",
      timeAgo: "8 months ago",
      channelTitle: "Mrbeast",
    },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#121212]">
      {/* Fixed Header */}
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex flex-col w-full">
          {/* Category Buttons */}
          <div className="sticky top-[64px] z-10 bg-transparent">
            <CategoryButtons />
          </div>
          {/* Main Content */}
          <div
            className="
              grid 
              gap-4 
              p-4 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              w-full
            "
          >
            {videos.map((video, idx) => (
              <div key={idx} className="w-full">
                <VideoCard
                  title={video.title}
                  imageUrl={thumbnailUrl}
                  duration={video.duration}
                  views={video.views}
                  timeAgo={video.timeAgo}
                  channelTitle={video.channelTitle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
