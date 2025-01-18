import Sheet from "./sheet";

export default function Content({ data, handleBuyNow, handleCart, hadleWish }) {
  return (
    <>
      <Sheet sheetName="New Release" datas={data} handleBuyNow={handleBuyNow} />
      <Sheet sheetName="Best Seller" datas={data} />
      <Sheet sheetName="Most Wished" datas={data} />
    </>
  );
}
