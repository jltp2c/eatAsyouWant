import Image from "next/image";
import React from "react";

function Items() {
  const itemsMenu = [
    {
      id: 1,
      title: "PEPPERONI",
      img: "/temporary/p10.png",
      description:
        "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      price: 14,
    },
    {
      id: 2,
      title: "BACON DELUXE",
      img: "/temporary/p5.png",
      description:
        "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      price: 15,
    },
    {
      id: 3,
      title: "BELLA NAPOLI",
      img: "/temporary/p6.png",
      description:
        "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      price: 12,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row">
      {itemsMenu.map((item) => (
        <div
          key={item.id}
          className="flex text-center p-10 align items-center flex-col text-red-500 hover:bg-red-100 ">
          <Image
            src={item.img}
            alt={item.title}
            width={250}
            height={250}
            className="hover:rotate-90 transition-all duration-300"
          />
          <h1 className="m-2 font-bold text-lg md:text-xl lg:text-2xl">
            {item.title}
          </h1>
          <p className="m-2">{item.description}</p>
          <p className="m-2 font-bold text-lg">{item.price}€</p>
          <button className="border-1 border-black text-white rounded-md bg-red-500 p-2 bottom-20">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Items;
