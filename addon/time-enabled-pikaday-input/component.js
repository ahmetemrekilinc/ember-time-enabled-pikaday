import { set } from '@ember/object';
import { isBlank } from '@ember/utils';
import Pikaday from 'ember-pikaday/components/pikaday-input';

export default Pikaday.extend({

    didInsertElement() {
      this._super(...arguments);
      let timeEnabled = (this.get('timeEnabled') === true);
      let use24hour = (this.get('use24hour') === true);
      let showMinutes = (this.get('showMinutes') !== false);
      let showSeconds = (this.get('showSeconds') === true);

      let timeLabel = '';
      if(!isBlank(this.get('timeLabel'))){
        timeLabel = this.get('timeLabel');
      }

      set(this.get('pikaday._o'), 'showTime', timeEnabled);
      set(this.get('pikaday._o'), 'showMinutes', showMinutes);
      set(this.get('pikaday._o'), 'showSeconds', showSeconds);
      set(this.get('pikaday._o'), 'use24hour', use24hour);
      set(this.get('pikaday._o'), 'timeLabel', timeLabel);

    }

});
