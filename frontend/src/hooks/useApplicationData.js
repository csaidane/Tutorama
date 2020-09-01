import { useState, useEffect, useReducer } from "react";
import axios from "axios";

export default function useApplicationData() {
  useEffect(() => {
    fetchItems();
  }, []);

  // Requesting to /api/users/:id,
  const fetchItems = async () => {
    const data = await fetch(`api/users/${id}`);

    const user = await data.json();
    console.log(user);
  };
}
