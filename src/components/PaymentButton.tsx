import { FC } from "react";
import { typePayment } from "../utils/interface";

const PaymentButton: FC<typePayment> = (props: typePayment) => {
  const { gambar, value, onSelection, name } = props;

  const handleRadioChange = (): void => {
    onSelection(value);
  };

  return (
    <div>
      <main>
        <div className="flex  justify-between h-[10vh] shadow-md items-center px-10">
          <label htmlFor="bni">
            <img src={gambar} alt={value} className="w-16" />
          </label>
          <input type="radio" id={name} name={name} onChange={handleRadioChange} />
        </div>
      </main>
    </div>
  );
};

export default PaymentButton;
