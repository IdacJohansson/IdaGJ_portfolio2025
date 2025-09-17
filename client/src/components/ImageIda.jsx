import Image from 'react-bootstrap/Image';
import "animate.css";
import Ida from '../assets/images/ida.jpg'

const ImageIda = () => {
  return (
    <Image
      src={Ida}
      width={400}
      height={600}
      alt="Picture of Ida"
      className="img-fluid img-style"
    />
  );
};

export default ImageIda;
