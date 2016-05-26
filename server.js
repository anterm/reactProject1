import React from 'react'
// для сервер-рендеринга
import { renderToString } from 'react-dom/server'

import path from 'path'
import webpack from 'webpack'
import config from './webpack.config'

// компонент
import App from './src/components/App'

import express from 'express'
const app = express();

// настройки для вебпака и dev-server
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// подключаем ejs шаблоны
app.set("views", path.resolve('views'))
app.set('view engine', 'ejs')

// путь к статическим файлам
app.use('/build', express.static(path.resolve('build')))

app.get('/', (req, res) => {
  res.render('index', { 
    content: renderToString(<App />)
  })
})

app.listen(3000, 'localhost', (err) => {
  if(err) 
    return console.log(err)
  
  console.log('Listening at http://localhost:3000')
})