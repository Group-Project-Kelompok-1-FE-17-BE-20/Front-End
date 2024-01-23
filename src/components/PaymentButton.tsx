import { FC } from "react";

interface typePayment {
  gambar: string;
  value: string;
}

const PaymentButton: FC<typePayment> = (props) => {
  const { gambar, value } = props;
  console.log(gambar);
  return (
    <div>
      <main>
        <div className="flex  justify-between h-[10vh] shadow-md items-center px-10">
          <label htmlFor="bni">
            <img src={gambar} alt={value} className="w-16" />
          </label>
          <input type="radio" id={value} />
        </div>
      </main>
    </div>
  );
};

export default PaymentButton;
