import { ReactElement, useState } from 'react';
// import AudioRecorder from 'react-audio-recorder';
import CircularBtn from '../buttons/circular-btn/circular-btn';
import { ReactComponent as Send } from '../../assets/icons/send.svg';
import { ReactComponent as Mic } from '../../assets/icons/mic.svg';

import './record-voice.scss';
import Typography from '../typography/typography';

interface IRecordVoiceProps {}
const RecordVoice = ({}: IRecordVoiceProps): ReactElement => {
  const [isRecording, setIsRecording] = useState(false);

  const onClickRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="record-voice">
      <div className="record-voice__header">
        <Typography text="التسجيل الفوري" />
        {isRecording && (
          <div className="close-btn" onClick={() => setIsRecording(false)}>
            <Typography text="الغاء" color="red" />
          </div>
        )}
      </div>
      <div className="record-content">
        <CircularBtn
          PlayIcon={Mic}
          StopIcon={Send}
          isPlay={isRecording}
          onClick={onClickRecording}
          color={true}
        />
        {isRecording && (
          <Typography style={{ marginTop: '2rem' }} text="جاري التسجيل الآن" />
        )}
      </div>
      {/* <AudioRecorder
        onPlay={
          console.log
          //   ()=>{
          //   if(isRecording===true){

          //   }
          // }
        }
        className="record-button"
        recordLabel="ssssssssssssssss"
        filename="voice.wav"
      /> */}
    </div>
  );
};

export default RecordVoice;
