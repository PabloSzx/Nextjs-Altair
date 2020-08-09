import { getDistDirectory, renderAltair } from "altair-static";
import express from "express";
import { PageConfig } from "next";

const server = express();

server.get("/api/altair", (_req, res) => {
  res.send(
    renderAltair({
      baseURL: "/api/altair/",
      // Change this endpoint to your API
      // If it's in this Next.js instance, it could like be "/api/graphql"
      endpointURL: "https://localhost:4000/graphql",
      //Put your own Altair configuration here
    })
  );
});

server.use("/api/altair/", express.static(getDistDirectory()));

server.use((_req, res) => {
  res.sendStatus(404);
});

export const config: PageConfig = {
  api: {
    externalResolver: true,
  },
};

export default server;
