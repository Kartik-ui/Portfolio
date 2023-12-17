import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  const handleClick = (type) => {
    if (type === "twitter") {
      window.open("https://www.twitter.com", "_blank", "noopener, noreferrer");
    } else if (type === "facebook") {
      window.open("https://www.facebook.com", "_blank", "noopener, noreferrer");
    } else if (type === "instagram") {
      window.open(
        "https://www.instagram.com",
        "_blank",
        "noopener, noreferrer"
      );
    }
  };

  return (
    <div className="app__social">
      <div onClick={() => handleClick("twitter")}>
        <BsTwitter />
      </div>
      <div onClick={() => handleClick("facebook")}>
        <FaFacebookF />
      </div>
      <div onClick={() => handleClick("instagram")}>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
