import { ReactElement } from 'react';

import './circular-btn.scss';

export interface ICircularBtnProps {
  isPlay: boolean;
  onClick: () => void;
  PlayIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  StopIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  color?: boolean;
}

const CircularBtn = ({
  isPlay,
  PlayIcon,
  StopIcon,
  onClick,
  color,
}: ICircularBtnProps): ReactElement => {
  return (
    <div
      className={`play-video-btn ${isPlay ? (color ? 'color' : '') : ''}`}
      onClick={onClick}
    >
      {isPlay ? (
        <StopIcon className="play-video-btn__icon" />
      ) : (
        <PlayIcon className="play-video-btn__icon" />
      )}
    </div>
  );
};

export default CircularBtn;
