module.exports = {
  entry: './client/client.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
	publicPath:'/'
  },
  devtool: 'source-map',

  module: {
    loaders: [
      {
		test: /\.js$/,  //Rejex match between '/../'. it is match the file of postfix .js and perdorm below loader on it
		loader : 'babel-loader', //{babel is compiler tool, compiler plugin. it is compiler jsx, ES6 in javascript}
		exclude : /node_module/, //exculude node modules folder(it is the rejex)
		//query tells the babel what to do for every  the .js file
		query : {
			presets : ['react', 'es2015','stage-2'],
		    }	
      }

    ]
  }

};

