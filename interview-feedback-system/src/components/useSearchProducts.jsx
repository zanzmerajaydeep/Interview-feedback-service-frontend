import React from "react";

export const useSearchProducts = (products) => {
  const [searchedProducts, setSearchedProducts] = useState(products);

  useEffect(() => {
    setSearchedProducts(() =>
      products.filter((product) => product.name.includes(inputValue))
    );
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};


