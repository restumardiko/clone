import Sheet from "./sheet";

export default function Content({ data }) {
  return (
    <>
      <Sheet sheetName="New Release" datas={data} />
      <Sheet sheetName="Best Seller" datas={data} />
      <Sheet sheetName="Most Wished" datas={data} />
    </>
  );
}
