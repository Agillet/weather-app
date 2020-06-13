import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/onecall?';

const apiKey = '526c8f60dd4b11d0fa6110bc71c345b6';

export const fetchWeather = async (action) => {
  const {latitude, longitude} = action.payload;

  try {
    const response = await axios.get(
      `${url}lat=${latitude}&lon=${longitude}&APPID=${apiKey}&lang=fr&units=metric`,
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
