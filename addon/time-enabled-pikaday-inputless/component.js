import Ember from 'ember';
import Pikaday from 'ember-pikaday/components/pikaday-inputless';

export default Pikaday.extend({

    didInsertElement() {
      this._super(...arguments);
            let timeEnabled = (this.get('timeEnabled') === true);
            let use24hour = (this.get('use24hour') === true);
            let showMinutes = (this.get('showMinutes') !== false);
            let showSeconds = (this.get('showSeconds') === true);

            let timeLabel = '';
            if(!Ember.isBlank(this.get('timeLabel'))){
              timeLabel = this.get('timeLabel');
            }

            Ember.set(this.get('pikaday._o'), 'showTime', timeEnabled);
            Ember.set(this.get('pikaday._o'), 'showMinutes', showMinutes);
            Ember.set(this.get('pikaday._o'), 'showSeconds', showSeconds);
            Ember.set(this.get('pikaday._o'), 'use24hour', use24hour);
            Ember.set(this.get('pikaday._o'), 'timeLabel', timeLabel);
    }

});
