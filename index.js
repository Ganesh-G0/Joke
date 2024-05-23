$(document).ready(() => {
  getJoke();
  
  $("#btn").click(() => { getJoke(); });

  async function getJoke() {
    try {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      console.log(response.data);
      const jokeType = response.data.type;
      const jokeCategory = $("#jokeCategory");
      const singleJoke = $(".SingleJoke");
      const twoPartJoke = $(".TwoPartJoke");
      
      if (jokeType === "single") {
        jokeCategory.text(response.data.category);
        singleJoke.show();
        twoPartJoke.hide();
        $("#joke").text(response.data.joke);
      } else {
        jokeCategory.text(response.data.category);
        singleJoke.hide();
        twoPartJoke.show();
        $("#setup").text(response.data.setup);
        $("#delivery").text(response.data.delivery);
      }
    } catch (error) {
      console.error(error);
    }
  };  
});