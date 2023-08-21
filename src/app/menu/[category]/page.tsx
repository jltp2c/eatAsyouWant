import React from "react";
import { pizzas, pastas, burgers } from "../../../../data";

interface pageProps {
  params: {
    category: string;
  };
}

function categoryPage({ params }: pageProps) {
  if (params.category === "pizzas") {
    return (
      <div>
        {pizzas.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}{" "}
      </div>
    );
  }
  if (params.category === "pastas") {
    return (
      <div>
        {pastas.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}{" "}
      </div>
    );
  }
  if (params.category === "burgers") {
    return (
      <div>
        {burgers.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}{" "}
      </div>
    );
  }
}

export default categoryPage;
