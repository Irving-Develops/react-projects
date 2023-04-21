import { Tour } from "types/api";

const url = "https://course-api.com/react-tours-project";

async function fetchTours(): Promise<Tour[]> {
  try {
    const res = await fetch(url);
    const tours = await res.json();
    return tours
  } catch (error) {
    console.log(error);
    return error
  }
};

export default fetchTours