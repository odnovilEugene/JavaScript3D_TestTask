var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(cors())

app.use('/', indexRouter);
app.get('/triangulation/:height/:radius/:n', (req, res, next) => {
    const height = +req.params.height
    const radius = +req.params.radius
    const n = Math.round(req.params.n)
    const triangles = []
    const topNode = [ 0, 0, +height ]
    for (let i = 0; i < n; i++) {
        const P_i = [ radius * Math.cos(2 * Math.PI * i / n),
                            radius * Math.sin(2 * Math.PI * i / n),
                            0 ]
        const P_iNext = [ radius * Math.cos(2 * Math.PI * (i + 1) / n),
                               radius * Math.sin(2 * Math.PI * (i + 1) / n),
                               0 ]
        triangles.push(...P_i, ...P_iNext, ...topNode)
    }
    triangles.push(...[ radius * Math.cos(2 * Math.PI),
                        radius * Math.sin(2 * Math.PI),
                        0 ],
                   ...[ radius * Math.cos(0),
                        radius * Math.sin(0),
                        0 ],
                   ...topNode)
    res.json({ triangles })
})


module.exports = app;
