import Image from "react-bootstrap/Image";
import "animate.css";
import genesis from "../assets/images/genesis.png";

const GenesisImage = () => {
  return (
    <Image
      src={genesis}
      width={400}
      height={600}
      alt="genesis image"
      className="img-fluid img-style"
    />
  );
};

export default GenesisImage;
