import Image from 'react-bootstrap/Image';
import 'animate.css';
import navigationPic from '../assets/images/navigation.png';

const NavigationImage = () => {
  return (
    <Image
      src={navigationPic}
      width={500}
      height={600}
      alt="navigation image"
      className="img-fluid img-style"
    />
  );
};

export default NavigationImage;
