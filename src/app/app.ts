// tslint:disable-next-line: no-require-imports no-var-requires
require('source-map-support').install();
import express = require('express');
import bodyParser = require('body-parser');
import { Container } from 'inversify';
import { Dino } from 'dinoloop';
import { HomeController } from './controllers/home.controller';
import { AppContainer } from './container/app.container';
import { JsonResponse } from './middlewares/json.response';
import { ApplicationErrorController } from './controllers/application.error.controller';

const app = express();
const port = process.env.PORT || 8088;

app.use(bodyParser.json());

const dino = new Dino(app, '/api');

dino.useRouter(() => express.Router());
dino.registerController(HomeController);
dino.registerApplicationError(ApplicationErrorController);
dino.requestEnd(JsonResponse);

dino.dependencyResolver<Container>(AppContainer,
    (injector, type) => {
        return injector.resolve(type);
    });

dino.bind();

app.listen(port, () => console.log(`Server started on port ${port}`));
