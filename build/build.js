process.env.NODE_ENV = 'prod';
const webpack = require('webpack')
const config = require('./webpack.prod')

const ora = require("ora");
const chalk = require("chalk")

const spinner = ora("Building for production").start()

webpack(config, function(err,stats){
  spinner.stop()
  
  if(err){
    throw err
  }
  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chuncks: false,
    chunckModules: false
  }))
  console.log(chalk.green('Building Complete'))
})