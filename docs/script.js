let resetPass = async () => {
  let randomString = document.querySelector("#resetString").value;

  try {
    let response = await fetch("http://localhost:3000/api/user/activate", {
      method: "POST",
      body: JSON.stringify({
        activateString: randomString,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let responseData = await response.json();
    alert(responseData.message);
  } catch (error) {
    console.log(error);
  }
};
