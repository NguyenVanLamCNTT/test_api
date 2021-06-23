
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const {MONGO_URI} = require('./config');
//Router
const postsRouter = require('./routers/api/posts');
//BodyParser Middleware
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log('MONGODB connected'))
    .catch(err => console.log(err));
app.use('/api/posts',postsRouter);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
const cors = require('cors');


app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
