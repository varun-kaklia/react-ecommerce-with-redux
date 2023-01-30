import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

const HomePage = () => {
  const [data, setData] = useState("");
  const [sorting,setSorting] = useState('asc')
  const [searchProduct,setSearchProduct] = useState('')
  console.log("sorting",sorting)
  const getData = async() => {
    try {
      const response =   await fetch(`https://fakestoreapi.com/products?limit=12&sort=${sorting=== 'asc'? 'asc':'desc'}`)
      const recieveData = await response.json()
      setData(recieveData)
    } catch (error) {
      console.log(error)
    }
  };

  const sampleData = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ];

  useEffect(() => {
    if (data.length > 0) {
      getData();
    }else{
        getData()
    }
  }, [data.length, sorting]);

  return (
    <div className="md:px-[15%]">
    <div className="py-6 justify-between flex">
        <input type="search" placeholder="Enter Name of Medicine" onChange={(e)=>setSearchProduct(e.target.value.toLowerCase())} className="border text-center h-8 w-52 border-gray-800 rounded "/>
        <select onChange={(e)=>setSorting(e.target.value)}>
            <option value="asc">Asc</option>
            <option value="desc">Dcs</option>
        </select>
    </div>
      <div className="grid lg:grid-cols-3 py-4">
        {data && data.length > 1
          ? data?.filter((search)=>search?.title.includes(searchProduct)).map((product) => {
              return <Cards key={product.id} data={product} />;
            })
          : sampleData.map((product) => {
              return <Cards key={product.id} data={product} />;
            })}
      </div>
    </div>
  );
};

export default HomePage;
