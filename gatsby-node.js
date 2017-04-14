var CopyWebpackPlugin = require('copy-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin")

exports.modifyWebpackConfig = function(config, stage) {
  if(stage === 'build-html') {
    return cfg
    config.plugin( new CopyWebpackPlugin([
          
            // {output}/file/without/extension
            {
                from: './_redirects.re',
                to: 'public/',
                toType: '_redirects'
            },
            
          
        ], {
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    )
  }
  return config
}
