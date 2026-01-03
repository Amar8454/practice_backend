import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.json(urlencoded({ limit: "16kb" })));
app.use(express.static(publie));
app.use(cookieParser())

app.listen(process.env.PORT , ()=>{
  console.log(`server is running on ${PORT}`)
})
