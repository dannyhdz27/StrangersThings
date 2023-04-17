const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default async function fetchData() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = response.json();

    console.log("data", data);
    return data;
    console.log("data", data);
  } catch (error) {
    console.error(error);
  }
}
