import { ReactElement, useEffect } from "react";
import { SetCheckBoxsValue } from "../../hooks/use-checkbox-inputs";
import VoiceCall from "../call-voice/voice-call";

import "./time-card.scss";
import { acsacxc } from "./time-card.utils";

export interface ITimeCardProps {
  label: string;
  time: string;
  name: string;
  setCheckboxsValue: SetCheckBoxsValue;
  checked?: boolean;
}

const TimeCard = ({
  time,
  label,
  name,
  setCheckboxsValue,
  checked,
}: ITimeCardProps): ReactElement => {
  //TODO : do google sheets

  useEffect(() => {
    acsacxc();
  }, []);

  return (
    <div className="time-card-container">
      <label className="time-card-container__label">{label}</label>
      <div className="time-card-container__time-card">
        <span>{time}</span>
      </div>
      <VoiceCall name={name} onChange={setCheckboxsValue} checked={checked} />
    </div>
  );
};

export default TimeCard;
