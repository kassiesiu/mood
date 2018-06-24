const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);

// GETS
app.get('/api/boards', (req, res) => {
    res.send("/api/boards");
});

app.listen(app.get('port'), () => {
    console.log("Server started on port " + app.get('port'));
});