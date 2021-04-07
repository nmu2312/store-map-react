import ShopItem from 'components/ShopItem';

const ShopList = ({ shops, page, shopsPerPage, map }) => {
  const shopsToDisplay = shops.slice(
    page * shopsPerPage,
    (page + 1) * shopsPerPage
  );

  return (
    <>
      {shopsToDisplay.map((shop) => (
        <ShopItem shop={shop} key={shop.id} map={map} />
      ))}
    </>
  );
};

export default ShopList;
