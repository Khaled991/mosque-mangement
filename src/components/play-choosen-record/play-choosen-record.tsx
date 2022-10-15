import { ReactElement } from 'react';
import CircularBtn, {
  ICircularBtnProps,
} from '../buttons/circular-btn/circular-btn';
import CustomInput from '../custom-input/custom-input';

interface IPlayChoosenRecordProps extends ICircularBtnProps {
  setOnChangeInputFile: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}

const PlayChoosenRecord = ({
  setOnChangeInputFile,
  ...props
}: IPlayChoosenRecordProps): ReactElement => {
  const onChangeFile = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setOnChangeInputFile({ [name]: value } as any);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <CustomInput onChange={onChangeFile} name="sound-file" type="file" />
      <CircularBtn {...props} />
    </div>
  );
};

export default PlayChoosenRecord;
