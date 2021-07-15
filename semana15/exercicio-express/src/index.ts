import { Request, Response } from "express"
import { countries } from "./data"
import { app } from "./app"
import { getAllCountries } from "./endpoints/getAllCountries"
import { getCountryById } from "./endpoints/getCountryById"
import { getSearchCountry } from "./endpoints/getSearchCountry"

app.get("/countries", getAllCountries)
app.get("/countries/:id", getCountryById)
app.get("/countries/search", getSearchCountry)
app.post("/countries/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const countryIndex: number = countries.findIndex(
      (country) => country.id === Number(req.params.id)
    );

    if (countryIndex === -1) {
      errorCode = 404;
      throw new Error();
    }

    if (!req.body.name && !req.body.capital) {
      throw new Error("Invalid Parameters");
    }

    if (req.body.name) {
      countries[countryIndex].name = req.body.name;
    }
    if (req.query.capital) {
      countries[countryIndex].capital = req.body.capital;
    }
    res.status(200).send("Country successfully updated");
  } catch (error) {
    console.log(error);
    res.status(errorCode).send(error.message);
  }
});
