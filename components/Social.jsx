import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaFacebook, FaTwitter} from 'react-icons/fa';

const socials = [
  {icon: <FaGithub />, path: 'https://github.com/QuzeemCodecamp'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/quzeem-odusanwo-9031751b0/'},
  {icon: <FaFacebook />, path: 'https://www.facebook.com/QuzeemOdusanwo/'},
  {icon: <FaTwitter />, path: 'https://x.com/Quzeem_Odusanwo'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index) => {
      return ( 
      <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
      </Link>
      );
    })}
    </div>
  );
  
};

export default Social;