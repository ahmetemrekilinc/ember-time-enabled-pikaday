/* eslint no-console: 0 */
import Controller from '@ember/controller';

export default Controller.extend({

  init(){
    this._super(...arguments);
    this.set('timeValue', new Date());
    this.set('dateValue', new Date());
  },

  actions: {

    onSelectionDate(dateValue){
      this.set("dateValue", dateValue);
    },

    onSelectionTime(timeValue){
      this.set("timeValue", timeValue);
    }

  }
});
