import { ReactElement, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { formatAMPM } from "../../utils/fromat-am-pm";

import "./header.scss";

const Header = (): ReactElement => {
  const [presentDate, setPresentDate] = useState<Date>(new Date());

  useEffect(() => {
    setTimeout(() => {
      setPresentDate(new Date());

      setInterval(() => {
        setPresentDate(new Date());
      }, 60 * 1000);
    }, (60 - new Date().getSeconds()) * 1000);
  }, []);

  return (
    <div className="header">
      <Logo width="13rem" className="logo" />
      <h1 className="home__presint-time">{formatAMPM(presentDate)}</h1>
      <div></div>
    </div>
  );
};

export default Header;
