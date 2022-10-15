import { ReactElement, useState } from 'react';
import './menu.scss';
import SpeakerBtn from '../speacker-btn/speaker-btn';
import Divider from '../divider/divider';
import MenuBtn from '../buttons/menu-btn/menu-btn';
import PlayChoosenRecord from '../play-choosen-record/play-choosen-record';
import RecordVoice from '../record-voice/record-voice';
import { ReactComponent as PlaySound } from '../../assets/icons/play-sound.svg';
import { ReactComponent as StopSound } from '../../assets/icons/stop-sound.svg';

const Menu = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSpeakerOpen, setIsSpeakerOpen] = useState<boolean>(false);
  const [isSoundPlay, setIsSoundPlay] = useState<boolean>(false);
  const [onChangeInputFile, setOnChangeInputFile] = useState<
    string | undefined
  >();

  const onClickSpeaker = () => {
    setIsSpeakerOpen(!isSpeakerOpen);
  };

  const onClickPlaySound = () => {
    if (onChangeInputFile === undefined) {
      //TODO:add Toast
      return alert('يجب اختيار ملف صوتي');
    } else {
      //DATA IS READY TO SEND
      setIsSoundPlay(!isSoundPlay);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const preparedData = { onChangeInputFile, isSoundPlay: isSoundPlay };
      // console.log(preparedData);
    }
  };

  return (
    <div className="menu-container">
      <MenuBtn isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <>
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          <div className="menu__content">
            <SpeakerBtn
              isSpeakerOpen={isSpeakerOpen}
              onClickSpeakerOn={onClickSpeaker}
            />
            <Divider />
            <PlayChoosenRecord
              PlayIcon={PlaySound}
              StopIcon={StopSound}
              isPlay={isSoundPlay}
              setOnChangeInputFile={setOnChangeInputFile}
              onClick={onClickPlaySound}
            />
            <Divider />
            <RecordVoice />
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
