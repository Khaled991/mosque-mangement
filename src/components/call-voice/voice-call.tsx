import { ReactElement } from 'react';
import { SetCheckBoxsValue } from '../../hooks/use-checkbox-inputs';
import Typography from '../typography/typography';
import './voice-call.scss';

interface IVoiceCallProps {
  onChange: SetCheckBoxsValue;
  name: string;
}
const VoiceCall = ({ onChange, name }: IVoiceCallProps): ReactElement => {
  return (
    <div className="call-voice">
      <Typography text="صوت الأذان" />
      <input
        name={name}
        onChange={onChange}
        type="checkbox"
        className="checkbox"
      />
    </div>
  );
};

export default VoiceCall;
