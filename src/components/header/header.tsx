import { ReactElement, useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { formatAMPM } from '../../utils/fromat-am-pm';

import './header.scss';

const Header = (): ReactElement => {
  const [presintDate, seTpresintDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      seTpresintDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="header">
      <Logo width="13rem" className="logo" />
      <h1 className="home__presint-time">{formatAMPM(presintDate)}</h1>
      <div></div>
    </div>
  );
};

export default Header;
