const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default async function post() {
  try {
    const returned = await fetch(`${BASE_URL}/posts`);
    const data = await returned.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  post();
}
