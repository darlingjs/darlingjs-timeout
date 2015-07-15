var darling = require('darlingjs');

module.exports = darling.system({
  require: 'timeout',
  updateOne: function(entity, interval) {
    entity.timeout.interval -= interval;
    if (entity.timeout.interval < 0) {
      if (entity.timeout.callback) {
        entity.timeout.callback();
      }
      if (entity.timeout.modify) {
        modify(entity, entity.timeout.modify);
      }
      entity.remove('timeout');
    }
  }
});