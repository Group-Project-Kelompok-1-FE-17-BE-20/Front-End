// NumberFormatter.tsx
import React from "react";

interface NumberFormatterProps {
  value: number;
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({ value }) => {
  const formattedNumber = new Intl.NumberFormat().format(value);

  return <span className="font-extrabold text-red-500 font-sans">Rp. {formattedNumber}</span>;
};

export default NumberFormatter;
