import Axios from "axios";
import Image from "next/image";

const CoinList = ({ coinData }) => {
  return (
    <div className="">
      {coinData.coins.map((coin) => {
        console.log(coin.icon);
        return (
          <div className="" key={coin.id}>
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt="" />
            {/* <Image src={coin.icon} alt={coin.name} /> */}
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const data = await Axios.get(
    "httpS://api.coinstats.app/public/v1/coins?skip=0"
  );
  // ssG
  // SSp
  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinList;
