export const acsacxc = async () => {
  const sheetID = "1CcFiw8mR9NAYHRSDA0hmpuIv8BARx4WpcMw9uue7wI4";
  const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
  const sheetName = "المؤذن";
  const qu = "Select A,B,C,D,E,F,G,H";
  const query = encodeURIComponent(qu);
  const url = `${base}&sheet=${sheetName}&tq=${query}`;

  // await fetchSheet();

  // const fetchSheet = async () => {
  const data: any = [];
  const res = await fetch(url);
  const rep = await res.text();
  const jsData = JSON.parse(rep.substring(47).slice(0, -2));
  const cols: any = [];
  // jsData.table.cols.forEach((heading: any) => {
  //   // console.log(heading);
  //   if (heading.label) {
  //     return cols.push(heading.label.toLowerCase().replace(/\s/g, ""));
  //   }
  // });
  console.log(jsData.table);
  // console.log(jsData.table.rows[0].c);
  // console.log(jsData.table.rows[1].c);
  // .then(res => res.text())
  // .then(rep => {
  //   const jsData = JSON.parse(rep.substring(47).slice(0, -2));
  //   // console.log(jsData);
  //   const colz: any = [];
  //   jsData.table.cols.forEach((heading: any) => {
  //     // console.log(heading);
  //     if (heading.label) {
  //       return colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
  //     }
  //   });
  //   console.log(colz);
  //   jsData.table.rows.forEach((main: any) => {
  //     const row: any = {};
  //     colz.forEach(({ ele, ind }: any) => {
  //       row[ele] = main.c[ind] != null ? main.c[ind].v : '';
  //     });
  //     // console.log(row);
  //     // data.push(row);
  //   });
  // });
  // console.log(res);
  // };
};
