const baseUrl = process.env.API || "https://capstone-health.herokuapp.com";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
