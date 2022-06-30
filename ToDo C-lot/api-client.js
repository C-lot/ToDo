const baseUrl = "http://localhost:3000/";

const getDataApi = async () => {
  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const postDataApi = async (value) => {
  try {
    const postData = { description: value, done: false };

    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const deleteDataApi = async (id) => {
  const response = await fetch(`${baseUrl}${id}`, { method: "DELETE" });
  return response;
};

// const putDataApi = async (id, description, done) => {
//   try {
//     const todoData = { description: description, done: done };
//     const response = await fetch(`${baseUrl}${id}`, {
//       method: "PUT",
//       body: JSON.stringify(todoData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(response);
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// };
