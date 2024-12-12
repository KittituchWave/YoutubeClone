import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface VideoCardProps {
  title: string;
  imageUrl: string;
  duration: string;
  views: string;
  timeAgo: string;
  channelTitle: string;
  channelAvatarUrl?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  imageUrl,
  duration,
  views,
  timeAgo,
  channelTitle,
  channelAvatarUrl = "https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
}) => {
  return (
    <div className="flex flex-col w-full max-w-[320px] text-white">
      {/* Thumbnail Section */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
        <div
          className="
            absolute 
            bottom-2 
            right-2 
            bg-black/80 
            text-white 
            text-xs 
            px-1.5 
            py-0.5 
            rounded
          "
        >
          {duration}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex mt-3 space-x-3">
        {/* Channel Avatar */}
        <img
          src={channelAvatarUrl}
          alt={channelTitle}
          className="w-9 h-9 rounded-full"
        />

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium line-clamp-2">
            {title}
          </h3>
          <div className="text-xs text-gray-400 mt-1">
            <div className="hover:text-gray-300 cursor-pointer">
              {channelTitle}
            </div>
            <div>
              {views} views • {timeAgo}
            </div>
          </div>
        </div>

        {/* Menu Icon */}
        <button 
          className="text-white hover:text-gray-300 p-2 rounded-full"
          aria-label="More actions"
        >
          <HiOutlineDotsVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
