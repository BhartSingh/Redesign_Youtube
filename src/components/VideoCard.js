import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from "../shared/VideoLength";

const VideoCard = ({ video }) => {
  const truncatedTitle = video?.title?.length > 33 ? `${video?.title?.slice(0, 13)}...` : video?.title;
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="flex flex-col mb-8 mx-3 bg-[#222222]  rounded-lg border-[2px] border-black ">
        <div className="relative h-40 md:first-line:h-40  overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url}
          />

          {video.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex  mt-3 ml-2">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt="img"
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm text-white font-bold line-clamp-2">
              {truncatedTitle}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.6] flex items-center">
            {!video?.author?.title && (
    'Zinc'
)}
              {video?.author?.title}
   
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
              )}
            </span>

            <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)}`} views</span>
              <span
                className="flex text-[24px] leading-none font-bold text-white/[0.7] relative
   top-[-10px] mx-1"
              >
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;