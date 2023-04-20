import express from 'express';

const app = express();

const studentsFunction = (request, response) => {
    response.send("<h1>  Students  </h1>" +
        "<ul> <li> <h2> karim mohamed mahmoud </h2> </li> </ul>" +
        "<ul> <li> <h2> aboda Mohammed mahmoud </h2> </li> </ul>" +
        "<ul> <li> <h2> jo Mohammed Ahmed </h2> </li> </ul>" +
        "<ul> <li> <h2> hoksha ahmed mahmoud </h2> </li> </ul>" +
        "<ul> <li> <h2> Mohmmed morsy Ahmed </h2> </li> </ul>")
};

app.get('/students', studentsFunction);
app.listen(4000);