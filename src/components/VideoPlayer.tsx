import YouTube from "react-youtube";

interface VideoPlayerProps {
  videoId: string;
  onReady: (event: any) => void;
}

export default function VideoPlayer({ videoId, onReady }: VideoPlayerProps) {
  return (
    <div className="videoBox">
      <YouTube
        key={videoId}
        videoId={videoId}
        onReady={onReady}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0,
          },
        }}
      />
    </div>
  );
}
