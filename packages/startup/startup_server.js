Meteor.startup = function (callback) {
  __meteor_bootstrap__.startup_hooks.push(callback);
};
__meteor_bootstrap__.startup_hooks.push(function() {
  console.log('Meteor server successfully fetched and loaded (branch:mrt-test)');
});
