// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactElement, useEffect } from "react";
import Header from "../../components/header/header";
import Loading from "../../components/loading/loading";
import TimeCard from "../../components/time-card/time-card";
import useCheckBoxInputs from "../../hooks/use-checkbox-inputs";
import { cardsData } from "./cards-data";
import { CheckboxValues } from "./checkbox-values.interface";

import "./home.scss";

const Home = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkboxsValues, onChangeCheckboxValue, setCheckboxsValue] =
    useCheckBoxInputs<CheckboxValues>();

  //THE AUDIO DATA IS READY TO SEND
  useEffect(() => {
    //SEND API REQUEST
    // console.log(checkboxsValues);
  }, [checkboxsValues]);

  useEffect(() => {
    setTimeout(() => {
      const apiResponse = {
        dohrVoice: true,
        maghrbVoice: true,
        fagrVoice: false,
        ashaVoice: true,
        alkranBeforeAlmaghrbInRamadanVoice: false,
        asrVoice: true,
        azkarBeforeFridayPrayVoice: true,
        tsabihAlfagrVoice: false,
      };
      setCheckboxsValue(apiResponse);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="home__times">
        {checkboxsValues === undefined ? (
          <Loading />
        ) : (
          cardsData.map(({ label, time, name }) => {
            const checked =
              checkboxsValues![name as keyof typeof checkboxsValues];

            return (
              <TimeCard
                key={label}
                label={label}
                setCheckboxsValue={onChangeCheckboxValue}
                checked={checked}
                time={time}
                name={name}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
