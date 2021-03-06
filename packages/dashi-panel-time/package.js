Package.describe({
  summary: "Displays a clock with the current time",
  version: "1.0.0"
});

Package.on_use(function (api, where) {
  api.use(
    [
      'dashi-panel',
      'jquery',
      'stylus',
      'templating',
      'minimongo',
      'mongo-livedata'
    ], 
    'client'
  );

  api.use(
    [
      'coffeescript',
      'mrt:moment'
    ], 
    [
      'client',
      'server'
    ]
  );

  api.add_files(
    [
      'client/time-panel.styl',
      'client/time-panel.coffee',
      'client/time-panel.html',
      'client/time-panel-template.coffee'
    ],
    'client'
  );

  api.add_files(
    [
      'server/time-panel-model.coffee'
    ],
    'server'
  );
});