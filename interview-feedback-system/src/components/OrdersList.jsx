import React from "react";
import { orders, myFun } from "../Orders";



const OrdersList = () => {
  return (
    <>
        <ul>
          {Array.from(orders).map(order=><>
           <li>
               <b>Id</b>:  <span>{order.id}</span> <br />
               <b>Status</b>:  <span>{order.status}</span> <br />
               <b>Products</b>: <ul>
                    {
                        order.products.map(product=><>
                         <li>
                            <b>Id:</b><span>{product.id}</span><br />
                            <b>name:</b><span>{product.name}</span><br />

                         </li>
                        </>)
                    }
                
                </ul> 
                
                
           </li>
           <hr />
          </>)}
        </ul>
    </>
  );
};

export default OrdersList;
