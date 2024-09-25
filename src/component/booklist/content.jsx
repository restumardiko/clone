import Sheet from "./sheet";

export default function Content({ data }) {
  return (
    <>
      <Sheet sheetName="new release" data={data} />
      <Sheet sheetName="best seller " data={data} />
      <Sheet sheetName="most wished" data={data} />
    </>
  );
}
