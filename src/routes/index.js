"use strict"

import express from "express";
import LivroRoute from "./LivroRoute.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Curso de Node');
    });

    app.use(
        express.json(),
        LivroRoute
    )
};

export default routes;