// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = `http://localhost:5000/api`;

export const fetchSinToken = async (
  endpoint: string,
  data: any,
  method = "GET"
) => {
  const url = `${baseUrl}/${endpoint}`;
  // const url = `${baseUrl}/${endpoint}`;

  if (method === "GET") {
    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data);
    return data;
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataResp = await resp.json();
    // console.log(dataResp);
    return dataResp;
  }
};

export const fetchConToken = async (
  endpoint: string,
  data?: { name?: string; email: string; password: string },
  method = "GET"
) => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    const resp = await fetch(url, {
      headers: {
        "x-token": token,
      },
    });
    return await resp.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};
