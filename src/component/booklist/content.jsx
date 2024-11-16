import Sheet from "./sheet";

export default function Content({ data }) {
  return (
    <>
      <Sheet sheetName="new release" data={data.books} />
      <Sheet sheetName="best seller " data={data.books} />
      <Sheet sheetName="most wished" data={data.books} />
    </>
  );
}
