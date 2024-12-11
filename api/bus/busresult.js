const axios = require("axios");
const { searchBusQuery } = require("../../queries/busquery");
require("dotenv").config();

const GRAPHQL_URL = process.env.BACKEND_GQL_URL;

async function fetchData() {
  try {
    const response = await axios.post(
      GRAPHQL_URL,
      {
        query: searchBusQuery,
        variables: {
          input: {
            from: "yangon",
            to: "mandalay",
            travel_date: process.env.TRAVEL_DATE,
            no_of_passengers: 1,
            foreigner: false,
            class_type_id: 3,
          },
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

module.exports = fetchData;
