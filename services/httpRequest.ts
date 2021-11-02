export const getList = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOne = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
