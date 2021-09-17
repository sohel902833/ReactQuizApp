import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll
          loader="Loading.."
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
        >
          <div className={classes.videos}>
            {videos.map((video) =>
              video.noq > 0 ? (
                <Link
                  to={{
                    pathname: `/quiz/${video.youtubeID}`,
                    state: {
                      videoTitle: video.title,
                    },
                  }}
                  key={video.youtubeID}
                >
                  <Video
                    title={video.title}
                    id={video.youtubeID}
                    noq={video.noq}
                  />
                </Link>
              ) : (
                <Videos
                  key={video.youtubeID}
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              )
            )}
          </div>
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found!</div>}
      {error && <div>There was an error !</div>}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Videos;
