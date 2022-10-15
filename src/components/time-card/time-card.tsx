import { ReactElement } from 'react';
import { SetCheckBoxsValue } from '../../hooks/use-checkbox-inputs';
import VoiceCall from '../call-voice/voice-call';

import './time-card.scss';

export interface ITimeCardProps {
  label: string;
  time: string;
  name: string;
  setCheckboxsValue: SetCheckBoxsValue;
}

const TimeCard = ({
  time,
  label,
  name,
  setCheckboxsValue,
}: ITimeCardProps): ReactElement => {
  //TODO : do google sheets
  // const sheetID = '1CcFiw8mR9NAYHRSDA0hmpuIv8BARx4WpcMw9uue7wI4';
  // const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  // const sheetName = 'المؤذن';
  // const qu = 'Select A,B,C';
  // const query = encodeURIComponent(qu);
  // const url = `${base}&sheet=${sheetName}&tq=${query}`;

  // const featch = () => {
  //   const data: any = [];
  //   fetch(url)
  //     .then(res => res.text())
  //     .then(rep => {
  //       const jsData = JSON.parse(rep.substring(47).slice(0, -2));
  //       // console.log(jsData);
  //       const colz: any = [];

  //       jsData.table.cols.forEach((heading: any) => {
  //         // console.log(heading);

  //         if (heading.label) {
  //           return colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
  //         }
  //       });

  //       console.log(colz);
  //       jsData.table.rows.forEach((main: any) => {
  //         const row: any = {};

  //         colz.forEach(({ ele, ind }: any) => {
  //           row[ele] = main.c[ind] != null ? main.c[ind].v : '';
  //         });

  //         // console.log(row);
  //         // data.push(row);
  //       });
  //     });
  //   return console.log(data);
  // };

  // useEffect(() => {
  //   featch();
  // }, []);

  return (
    <div className="time-card-container">
      <label className="time-card-container__label">{label}</label>
      <div className="time-card-container__time-card">
        <span>{time}</span>
      </div>
      <VoiceCall name={name} onChange={setCheckboxsValue} />
    </div>
  );
};

export default TimeCard;
