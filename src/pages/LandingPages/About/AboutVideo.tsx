import DownloadButton from "../../../components/Props/ButtonProps";
import "./AboutStyle.css";

const AboutVideo = () => {
  return (
    <div className="relative w-[40%] h-[500px] overflow-hidden rounded-[10px] aboutCard">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://media.istockphoto.com/id/1429894347/video/bride-makeup-and-hair-beauty-studio-for-wedding-cosmetic-treatment-preparation-for-ceremony.jpg?s=640x640&k=20&c=vhUFvMPRCekJ92YGFlMHmM60nbtraDJXeS-LyQ8Exkw="
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute inset-0  flex items-center justify-center p-[20px] flex-col">
          <div className="w-[100%] text-center mb-[20px] text-[white] flex items-center justify-center">
            The wrist watch is more than just a way to tell time - it's a symbol
            of individuality, taste, and personal style. A wrist watch can tell
            a story about its owner - their passions, interests, and
            personality. The choices we make in a wrist watch can reveal a lot
            about who we are. For some, a wrist watch is a fashion accessory,
            for others it's a functional tool, and for many, it's a precious
            heirloom or a cherished gift.
          </div>
          <DownloadButton text="Get Yours Now" />
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
