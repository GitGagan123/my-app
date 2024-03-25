import React, { useState, useEffect } from "react";
import { Button } from "antd";
import axios from "axios";

export default function Integration() {
  const [data, setData] = useState([]);
  const getListingsAndReviews = async () => {
    try {
      const listingsAndReviews = await axios.get(
        "http://localhost:8080/listingsAndReviews"
      );
      setData(listingsAndReviews.data);
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
      console.log(data);
    }, [data]);
  return (
    <>
      <Button onClick={() => getListingsAndReviews()}>
        Get Listings And Reviews
      </Button>
      {data.map((listing) => {
        return <div key={listing.id}>{listing.name}</div>;
      })}
    </>
  );
}
