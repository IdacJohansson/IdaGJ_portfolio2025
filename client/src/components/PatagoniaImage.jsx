import Image from 'react-bootstrap/Image';
import 'animate.css';
import patagoniaPic from '../assets/images/patagonia.png';

const PatagoniaImage = () => {
  return (
    <Image
      src={patagoniaPic}
      width={400}
      height={600}
      alt="patagonia image"
      className="img-fluid img-style"
    />
  );
};

export default PatagoniaImage;