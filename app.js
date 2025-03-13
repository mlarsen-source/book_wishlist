import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const PORT = 3000;

const bookList = [];

app.get('/', (req, res) => {
  res.render('home');
});


app.post('/summary', (req, res) => {

  const book = {
    title: req.body.title,
    comments: req.body.comments,
    rating: req.body.rating,
    
  };

  bookList.push(book)

  res.render('summary', { bookList });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});