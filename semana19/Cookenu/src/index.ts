import { app } from "./app";
import { getAllCharacters } from "./endpoints/getAllCharacters";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

app.get("/user", getAllCharacters);
app.post("/user", signup);
app.post("/user/login", login);
