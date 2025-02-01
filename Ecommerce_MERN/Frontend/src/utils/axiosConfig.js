export const base_url = "http://localhost:5000/api/";

// Function to retrieve the token from localStorage when needed
const getTokenFromLocalStorage = () => {
  const customerData = localStorage.getItem("customer");
  return customerData ? JSON.parse(customerData).token : "";
};

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
    Accept: "application/json",
  },
};
