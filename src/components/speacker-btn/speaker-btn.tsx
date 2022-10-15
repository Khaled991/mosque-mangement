import { ReactElement } from 'react';
import { ReactComponent as SpeakerOn } from '../../assets/icons/speaker-on.svg';
import { ReactComponent as SpeakerOFF } from '../../assets/icons/speaker-off.svg';
import './speaker-btn.scss';
import { Row, Col } from 'react-bootstrap';

interface ISpeackerBtnProps {
  isSpeakerOpen: boolean;
  onClickSpeakerOn: () => void;
}
const SpeakerBtn = ({
  isSpeakerOpen,
  onClickSpeakerOn,
}: ISpeackerBtnProps): ReactElement => {
  return (
    <Row className="speaker-btn" onClick={onClickSpeakerOn}>
      <Col md={6} className="d-flex align-items-center">
        <span>مكبر الصوت</span>
      </Col>
      <Col md={6} className="d-flex justify-content-end">
        <div className={`speaker ${isSpeakerOpen ? 'color' : ''}`}>
          {isSpeakerOpen ? (
            <SpeakerOn className="icon" />
          ) : (
            <SpeakerOFF className="icon" />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default SpeakerBtn;
