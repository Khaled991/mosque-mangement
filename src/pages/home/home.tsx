// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement, useEffect } from 'react';
import Header from '../../components/header/header';
import TimeCard from '../../components/time-card/time-card';
import useCheckBoxInputs from '../../hooks/use-checkbox-inputs';
import { cardsData } from './cards-data';

import './home.scss';

const Home = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chekboxsValues, setCheckboxsValue] = useCheckBoxInputs();

  //THE AUDIO DATA IS READY TO SEND
  // useEffect(() => {
  //   console.log(formValues);
  // }, [formValues]);

  return (
    <div className="home">
      <Header />
      <div className="home__times">
        {cardsData.map(({ label, time, name }) => (
          <TimeCard
            key={label}
            label={label}
            setCheckboxsValue={setCheckboxsValue}
            time={time}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
