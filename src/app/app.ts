import express = require('express');
import bodyParser = require('body-parser');
import { Container } from 'inversify';
import { ApiController, Dino } from 'dinoloop';
import { HomeController } from './controllers/home.controller';
import { AppContainer } from './container/app.container';
import { JsonResponse } from './middlewares/json.response';
import { ApplicationErrorController } from './controllers/application.error.controller';

const app = express();
app.use(bodyParser.json());

let dino = new Dino(app, '/api');

dino.useRouter(() => express.Router());
dino.registerController(HomeController);
dino.registerApplicationError(ApplicationErrorController);
dino.requestEnd(JsonResponse);

dino.dependencyResolver<Container>(AppContainer,
    (injector, type) => {
        return injector.resolve(type);
    });

dino.bind();
app.listen(8088, () => console.log('Server started on port 8088'));
