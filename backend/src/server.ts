import express from "express";
import cors from "cors";
import noteRouter from "./routes/note.router";
import tagRouter from "./routes/tag.router";
import { API_URL, PORT } from "./config/index";

class Server {
  public PORT = PORT;
  public API_URL = API_URL;
  public expressApp = express();

  public paths: {
    notes: string;
    tags: string;
  };
  constructor() {
    this.paths = {
      notes: `${this.API_URL}/notes`,
      tags: `${this.API_URL}/tags`,
    };
    this.preMiddlewares();
    this.routes();
  }
  public routes(): void {
    this.expressApp.use(this.paths.notes, noteRouter);
    this.expressApp.use(this.paths.tags, tagRouter);
  }

  public listen() {
    return this.expressApp.listen(this.PORT, () =>
      console.log("Server listening on port", this.PORT)
    );
  }
  public preMiddlewares(): void {
    this.expressApp.use(cors());
    this.expressApp.options("*", cors());
    this.expressApp.use((req, res, next) => {
      console.log(`${req.method} ${req.path}`);
      next();
    });
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({extended:true}))
  }
}
export default Server;
