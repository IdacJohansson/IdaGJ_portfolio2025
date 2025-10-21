import NavBar from "../components/NavBar";
import Icon from "/icon.png";

const TopHeader = () => {
  return (
    <div className="top-header d-flex flex-row justify-content-between align-items-center">
        <img
          src={Icon}
          alt="ida-icon"
          width={150}
          height={100}
          className="ida-icon"
        />
      <NavBar />
    </div>
  );
};

export default TopHeader;
