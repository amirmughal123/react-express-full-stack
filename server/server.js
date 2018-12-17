import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import bodyParser from 'body-parser';
import multer from 'multer';

import webpackConfig from '../webpack.config.babel';
import '../config/database';
import { projectPort } from '../config/constants';

const app = express();
const indexPath = path.join(__dirname, '../dist', 'index.html');

const compiler = webpack(webpackConfig);
app.use(express.static('./dist'));

app.use(webpackDevMiddleWare(compiler, {
  noInfo: true,
  writeToDisk: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/images'));

app.use(webpackHotMiddleWare(compiler));

const routing = () => {
  app.use('/api/v1/tests', require('./routes/test_routes'));
};

routing();

app.get('*', (_, res) => { res.sendFile(indexPath); });

app.listen({ port: projectPort || 5000 }, () =>
  console.log(`🚀 Server ready at 9000`)
)
