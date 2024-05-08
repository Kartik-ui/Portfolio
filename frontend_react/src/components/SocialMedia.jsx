import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  const handleClick = (type) => {
    if (type === "github") {
      window.open(
        "https://github.com/Kartik-ui",
        "_blank",
        "noopener, noreferrer"
      );
    } else if (type === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/kartik-vishwakarma",
        "_blank",
        "noopener, noreferrer"
      );
    } else if (type === "twitter") {
      window.open(
        "https://twitter.com/KARTIKV78299182",
        "_blank",
        "noopener, noreferrer"
      );
    }
    //  else if (type === "facebook") {
    //   window.open("https://www.facebook.com", "_blank", "noopener, noreferrer");
    // } else if (type === "instagram") {
    //   window.open(
    //     "https://www.instagram.com",
    //     "_blank",
    //     "noopener, noreferrer"
    //   );
    // }
  };

  return (
    <div className="app__social">
      <div onClick={() => handleClick("github")}>
        <FaGithub />
      </div>
      <div onClick={() => handleClick("linkedin")}>
        <FaLinkedin />
      </div>
      <div onClick={() => handleClick("twitter")}>
        <BsTwitter />
      </div>
      {/* <div onClick={() => handleClick("facebook")}>
        <FaFacebookF />
      </div>
      <div onClick={() => handleClick("instagram")}>
        <BsInstagram />
      </div> */}
    </div>
  );
};

export default SocialMedia;
