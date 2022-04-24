import { useState, useEffect, Fragment } from "react";
import IconSearch from "../../assets/icons/icon-search.svg";
import Loading from "../../components/Loading/";
import {Body, Form, CityTemp, DetailsContainer, Details, ModalError} from './style'

const index = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("Sao paulo");
  const statusError = {
    error: false
  }

  const API_KEY = "4cc6b6ea21ff8293eadc70948a4b281b";
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&lang=pt_br&appid=${API_KEY}&units=metric`;


  useEffect(() => {
    async function fetchWeather() {
      let response;
      let data;

      try {
        setError(false)
        setLoading(true);
        response = await fetch(BASE_URL);
        data = await response.json();
      } catch (error) {
        data = null;
      } finally {
        if(response.status === 400 || response.status === 404){
          setError(true)
        }
        const { main, name, weather } = data;
        const dataCity = {
          main,
          cityName: name,
          weather,
        };
        setData(dataCity);
        setLoading(false);
      }
    }
    fetchWeather();
  }, [BASE_URL]);

  function handleButton(event) {
    event.preventDefault();
    const inputValue = document.querySelector(".form input").value;
    setInput(inputValue);
  }

  if(error) return (
    <ModalError>
      <p>Cidade não encontrada. Informe uma cidade válida.</p>
      <a href="/">Tentar Novamente</a>
    </ModalError>
  )

  if (loading) return <Loading />;
  return (
    <Fragment>
      {data && (
        <Body>
          <Form className="form">
            <input
              type="text"
              required
              placeholder="Busque por uma cidade..."
            />
            <button onClick={handleButton}>
              <img src={IconSearch} alt="icon search input" />
            </button>
          </Form>

          <CityTemp>
            <div>
              <p>{data.cityName}</p>
              <span>
                {data.main.temp.toFixed()} <sup>°C</sup>
              </span>
            </div>
            <p className="condition">{data.weather[0].description}</p>
          </CityTemp>

          <DetailsContainer>
            <Details >
              <div className="details_item">
                <span>
                  {" "}
                  {data.main.temp_min.toFixed()}
                  <sup>°C</sup>
                </span>
                <p>Miníma</p>
              </div>

              <div className="details_item">
                <span>
                  {" "}
                  {data.main.feels_like.toFixed()}
                  <sup>°C</sup>
                </span>
                <p>Sensação</p>
              </div>

              <div className="details_item">
                <span>{data.main.temp_max.toFixed()}</span>
                <p>Máxima</p>
              </div>
            </Details>
          </DetailsContainer>
        </Body>
      )}
    </Fragment>
  );
};

export default index;
