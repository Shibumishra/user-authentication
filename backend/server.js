const express = require('express');
const data = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("API is running");
// })

// app.get('/api', (req, res) => {
//     res.json(data);
// })


app.use('/auth', require('./routes/authRoutes'));

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000; 

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));