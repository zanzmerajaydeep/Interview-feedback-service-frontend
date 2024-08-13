import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

const products = [
  {
    id: 1,
    name: "mobile",
  },
  {
    id: 2,
    name: "toy",
  },
  {
    id: 3,
    name: "glass",
  },

  {
    id: 3,
    name: "glasses",
  },
  ,
  {
    id: 4,
    name: "headphone",
  },
  {
    id: 5,
    name: "telephone",
  },
  {
    id: 5,
    name: "computer",
  },
  {
    id: 5,
    name: "bottle",
  },
  {
    id: 5,
    name: "switch",
  },
  {
    id: 5,
    name: "plug",
  },
];

const AddOrder = () => {
  const [order, setOrder] = useState({});

  const [inputValue, setInputValue] = useState("");
 
  const [currentProducts,setCurrentProducts]=useState(()=>products.map(product=>product.name));
  const [searchedProducts, setSearchedProducts] = useState(products);
  const [product, setProduct] = useState("");
  const [addedProdut, setaddedProduts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
  };

//   console.log("products ",currentProducts)
  useEffect(() => {
    setSearchedProducts(() =>
      {
        return currentProducts.filter((product) => product.includes(inputValue))
      }
    );
  }, [inputValue]);

  console.log("searched products ",searchedProducts)
  useEffect(() => {
    if (addedProdut.length > 0)
      setCurrentProducts(currentProducts=>{
        return  currentProducts.reduce((acc,curr)=>{
            if(!addedProdut.includes(curr))
             acc.push(curr)
            return acc;
        },[])
      })
  }, [addedProdut.length]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Order id
        <input type="text" name="" id="" /> <br />
        Products : <br />
        <input
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />{" "}
        <Button onClick={() => setInputValue("")}>Add</Button>
        <ul style={{ listStyle: "none" }}>
          {inputValue.length < 2
            ? ""
            : Array.from(searchedProducts)?.map((product) => (
                <>
                  <li onClick={(product) => setProduct(product.name)}>
                    {product}

                    <button
                      onClick={() =>{
                          setaddedProduts([...addedProdut, product])
                          setInputValue("")
                      }}
                    >
                      +
                    </button>
                  </li>
                </>
              ))}
        </ul>
        {JSON.stringify(addedProdut, 2, null)}
        <br /> <br />
        <br />
        <br />
        <input type="submit" value="Submit" /> <br />
      </form>
    </div>
  );
};

export default AddOrder;
