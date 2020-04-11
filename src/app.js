const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
	return response.json(repositories);
});

app.post("/repositories", (request, response) => {
	const { title, url, techs } = request.body; 
	const repo = { id: uuid(), title, url, techs, likes:0};
	repositories.push(repo);
	return response.json(repo);
});

app.put("/repositories/:id", (request, response) => {
	const { id } = request.params;
	const { title, url, techs } = request.body;
	const repo = repositories.find(repo => repo.id === id);
	if(repo === undefined){
		return response.status(400).json('Repository not found!')
	}
	repo.title = title;	repo.url = url;	repo.techs = techs;
	return response.json(repo);
});

app.delete("/repositories/:id", (request, response) => {

});

app.post("/repositories/:id/like", (request, response) => {
	// TODO
});

module.exports = app;
