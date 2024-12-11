const axios = require("axios");
const { seatPlanQuery } = require("../../queries/busquery");
require("dotenv").config();

const GRAPHQL_URL = process.env.BACKEND_GQL_URL;

async function fetchData() {
  try {
    const response = await axios.post(
      GRAPHQL_URL,
      {
        query: seatPlanQuery,
        variables: {
          input: {
            uuid: process.env.SEAT_UUID,
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
