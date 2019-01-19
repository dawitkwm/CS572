let express = require('express');
let axios = require('axios');

let appServer = express();

// App Server Settings
appServer.set('port', process.env.PORT || 3000);
appServer.set('env', 'development');
appServer.enable('trust proxy'); // appServer.set('trust proxy', true);
appServer.enable('case sensitive routing'); // appServer.set('case sensitive routing', true);
appServer.enable('strict routing'); // appServer.set('strict routing', true);
appServer.disable('x-powered-by'); // appServer.set('x-powered-by', false);

// appServer.use(express.static(__dirname + '/public'));

// let options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html'],
//     index: false,
//     maxAge: '1y',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.set('x-timestamp', Date.now())
//     }
// }

// appServer.use(express.static('public', options))

let totalNumberOfUsers = 20;
let usersPerPage = 10;
let current = 0;
let next = current + usersPerPage;
let currentPageNumber = 1;

appServer.get('/', (req, res) => {
    res.send("Hello World");
    // res.sendFile(__dirname + '/public/views/users.html');
});

appServer.get('/users', (req, res) => {
    current = 0;
    next = current + usersPerPage;
    currentPageNumber = 1;
    getUsers(res);
});

appServer.get('/prev', (req, res) => {
    console.log("Previous data requested.");
    if(current > 0) {
        current -= usersPerPage;
        next = current + usersPerPage;
        currentPageNumber -= 1;
    }
    getUsers(res);
});

appServer.get('/next', (req, res) => {
    console.log("Next data requested.");
    if(next < totalNumberOfUsers) {
        current += usersPerPage;
        next = current + usersPerPage;
        currentPageNumber += 1;
    }
    getUsers(res);
});

//styles
appServer.get('/app.css', (req, res) => {
    console.log("CSS request made.");
    res.sendFile(__dirname + '/public/styles/app.css');
});

appServer.listen(appServer.get('port'), () => console.log(`App Server Is Listening On Port ${appServer.get('port')}.`));

// Fetch users data by making AJAX request from another server.
// Uses async/await 
async function getUsers(res) {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=' + totalNumberOfUsers);
        console.log(response);
        res.write(renderUsersAsHtml(response.data.results.slice(current, next)));
    } catch (error) {
        console.error(error);
    }
}

function renderUsersAsHtml(data) {
    let tableRowData = data.map(
        user => 
        `<tr>
        <td>${user.name.first} ${user.name.last}</td>
        <td>${user.gender}</td>
        <td>${user.dob.age}</td>
        <td>${user.id.value}</td>
        <td>${user.email}</td>
        <td>${user.cell}</td>
        </tr>`
    );

    //change from array of string to string
    let tableRowDataStr = "";
    tableRowData.forEach((rowData) => tableRowDataStr += rowData); 

    let prevNextLinks = `<tr>
    <td></td>
    <td></td>
    <td><a href="/prev">Prev</a></td>
    <td><a href="/next">Next</a></td>
    <td></td>
    <td></td>
    </tr>`;

    //<td><a href="/users/?p=${currentPageNumber}">Prev</a></td>
    //<td><a href="/users/?p=${currentPageNumber+1}">Next</a></td>


    let htmlOutput =
    `<!DOCTYPE html>
    <html>
        <head>
            <title>Users</title>
            <meta charset="UTF-8">
            <link rel="stylesheet" type="text/css" href="app.css" />
        </head>
        <body>
            <div class="container">
                <h2>USERS DATA</h2>
                <table>
                    <thead> 
                        <tr>
                            <th >Name</th>
                            <th >Gender</th>
                            <th>Age</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Cellphone</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRowDataStr}
                        ${prevNextLinks} 
                    </tbody>
                </table>
            </div>
            
        </body>
    </html>`;
    return htmlOutput;
}



