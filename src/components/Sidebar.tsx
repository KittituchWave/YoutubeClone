import React from "react";
import { 
  MdHome, 
  MdOutlineSlowMotionVideo, // Approx for Shorts icon
  MdSubscriptions, 
  MdHistory, 
  MdVideoLibrary, 
  MdOutlineWatchLater, 
  MdThumbUpOffAlt 
} from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div 
      className="
        hidden md:flex 
        flex-col 
        bg-[#181818] 
        text-white 
        w-60 
        h-screen 
        sticky top-0 
        overflow-y-auto 
        scrollbar-hide
      "
    >
      {/* Top Section */}
      <div className="pt-4">
        <MenuItem icon={<MdHome size={20} />} label="Home" active />
        <MenuItem icon={<MdOutlineSlowMotionVideo size={20} />} label="Shorts" />
        <MenuItem icon={<MdSubscriptions size={20} />} label="Subscriptions" />
      </div>

      <hr className="border-gray-700 my-3" />

      {/* "You" Section */}
      <div>
        <SectionHeading title="You" />
        <MenuItem icon={<MdHistory size={20} />} label="History" />
        <MenuItem icon={<MdVideoLibrary size={20} />} label="Playlists" />
        <MenuItem icon={<FaRegPlayCircle size={20} />} label="Your videos" />
        <MenuItem icon={<MdOutlineWatchLater size={20} />} label="Watch later" />
        <MenuItem icon={<MdThumbUpOffAlt size={20} />} label="Liked videos" />
      </div>

      <hr className="border-gray-700 my-3" />

      {/* Subscriptions Section */}
      <div>
        <SectionHeading title="Subscriptions" />
        <SubscriptionItem name="KEN RBLX" live />
        <SubscriptionItem name="Mr. Friend" />
        <SubscriptionItem name="MrJoe" newContent />
        <SubscriptionItem name="FinePointCGI" />
        <SubscriptionItem name="The Duper Trooper" />
        <MenuItem icon={<MdSubscriptions size={20} />} label="All subscriptions" />
      </div>
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, active }) => (
  <div
    className={`
      flex items-center 
      p-2 px-4 
      text-sm 
      cursor-pointer
      rounded-lg
      mb-1
      hover:bg-[#333]
      ${active ? "bg-[#333]" : ""}
    `}
  >
    <span className="mr-4 text-lg">{icon}</span>
    <span className="truncate">{label}</span>
  </div>
);

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => (
  <div className="text-gray-400 text-xs uppercase font-medium py-2 px-4">
    {title}
  </div>
);

interface SubscriptionItemProps {
  name: string;
  live?: boolean;
  newContent?: boolean;
}

const SubscriptionItem: React.FC<SubscriptionItemProps> = ({ name, live, newContent }) => (
  <div
    className="
      flex items-center 
      p-2 px-4 
      text-sm 
      cursor-pointer
      rounded-lg
      mb-1
      hover:bg-[#333]
    "
  >
    {/* Channel avatar (placeholder) */}
    <div className="mr-4 relative">
      <div className="bg-gray-600 w-6 h-6 rounded-full" />
      {live && (
        <span className="absolute -bottom-1 -right-1 bg-red-600 text-xs text-white rounded-full px-1">
          •
        </span>
      )}
      {newContent && (
        <span className="absolute bottom-0 right-0 bg-blue-500 w-2 h-2 rounded-full" />
      )}
    </div>
    <span className="truncate">{name}</span>
  </div>
);

export default Sidebar;
