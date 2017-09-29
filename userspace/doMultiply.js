function go (taskobj) {
  /* do the sanity checks and exit accordingly */
  if (!(taskobj && taskobj.sink)) {
    process.exit(0);
    return;
  }

  taskobj.sink.call('multiply', 2).then(
    console.log.bind(console, 'RESULT OBTAINED FROM MULTIPLIER SERVICE:'),
    console.error.bind(console, 'ERROR:')
  );
}

module.exports = {
  sinkname: 'Multiplier',
  identity: {
    role: 'user',
    name: 'user'
  },
  task: {
    name: go
  }
};
