

import * as express from 'express';
import {Application} from "express";
import {getAllCourses, getCourseByUrl} from "./get-courses.route";
import {saveCourse} from "./save-course.route";
import {deleteCourse} from './delete-course.route';

const bodyParser = require('body-parser');



const app: Application = express();


app.use(bodyParser.json());



app.route('/api/courses').get(getAllCourses);

app.route('/api/course/:id').put(saveCourse);

app.route('/api/course/:id').delete(deleteCourse);

app.route('/api/courses/:courseUrl').get(getCourseByUrl);





const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});




