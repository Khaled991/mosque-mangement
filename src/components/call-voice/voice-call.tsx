import { ReactElement } from "react";
import { SetCheckBoxsValue } from "../../hooks/use-checkbox-inputs";
import Typography from "../typography/typography";
import "./voice-call.scss";

export interface IVoiceCallProps {
  onChange: SetCheckBoxsValue;
  name: string;
  checked?: boolean;
}

const VoiceCall = ({
  onChange,
  name,
  checked,
}: IVoiceCallProps): ReactElement => {
  return (
    <div className="call-voice">
      <Typography text="صوت الأذان" />
      <input
        name={name}
        onChange={onChange}
        checked={checked}
        type="checkbox"
        className="checkbox"
      />
    </div>
  );
};

export default VoiceCall;
