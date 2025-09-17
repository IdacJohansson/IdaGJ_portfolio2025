import Image from 'react-bootstrap/Image';
import 'animate.css';
import candyStore from '../assets/images/SweCandyStore.png';

const SweCandyStoreImage = () => {
  return (
    <Image
      src={candyStore}
      width={500}
      height={600}
      alt="sweCandyStore image"
      className="img-fluid img-style"
    />
  );
};

export default SweCandyStoreImage;