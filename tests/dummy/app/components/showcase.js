//BEGIN-SNIPPET showcase
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Showcase extends Component {

  @tracked timeValue = new Date();
  @tracked dateValue = new Date();
  timeEnabled = true;

  @action
  onSelectionDate(dateValue){
    this.dateValue = dateValue;
  }

  @action
  onSelectionTime(timeValue){
    this.timeValue = timeValue;
  }
}
//END-SNIPPET
