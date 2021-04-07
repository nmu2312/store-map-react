const ShopItem = ({ shop, map }) => {
  const generateLatLngLiteralFromShop = (shopData) => {
    const positions = shopData?.custom_fields?.location[0]
      .split(',')
      .map((val) => parseFloat(val));

    return {
      lat: positions[0],
      lng: positions[1],
    };
  };

  const showShopInMap = (shopData) => {
    map?.panTo(generateLatLngLiteralFromShop(shopData));
    map?.setZoom(16);
  };

  return (
    <div>
      {shop.id}
      {shop.title.rendered}
      <button type='button' onClick={() => showShopInMap(shop)}>
        MAP
      </button>
    </div>
  );
};
export default ShopItem;
