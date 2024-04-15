export const getRequest = async (url: string) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
