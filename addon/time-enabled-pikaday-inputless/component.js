import Ember from 'ember';
import Pikaday from 'ember-pikaday/components/pikaday-inputless';

export default Pikaday.extend({

    didInsertElement() {
      this._super(...arguments);
      let timeEnabled = (this.get('timeEnabled') === true);
      let use24hour = (this.get('use24hour') === true);
      Ember.set(this.get('pikaday._o'), 'showTime', timeEnabled);
      Ember.set(this.get('pikaday._o'), 'use24hour', use24hour);
    }

});
