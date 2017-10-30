# ember-time-enabled-pikaday

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-time-enabled-pikaday`
* `npm install`

## Usage
Standalone datepicker:
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}

<br>

Standalone timeEnabled datepicker:
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}

<br>

Standalone timeEnabled use24hour datepicker:
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true use24hour=true theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}

<br>

Standalone timeEnabled showMinutes=false datepicker:
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true showMinutes=false theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}

<br>

Standalone timeEnabled showSeconds=true datepicker:
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true showSeconds=true theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}

<br>

Standalone timeEnabled datepicker with timeLabel:
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true timeLabel='Time: ' theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}

<br>

timeEnabled Datepicker with bound and set value:
{{time-enabled-pikaday-input value=startDate timeEnabled=true onSelection=(action (mut startDate)) format='DD.MM.YYYY HH:mm'}}
{{startDate}}
<br>
<button {{action "clearStartDate"}}>Clear Date</button>
<br>

Inputless timeEnabled datepicker:
{{time-enabled-pikaday-inputless onSelection=(action (mut someDate))}}
{{time-enabled-pikaday-inputless timeEnabled=true onSelection=(action (mut someDate))}}
{{time-enabled-pikaday-inputless timeEnabled=true use24hour=true onSelection=(action (mut someDate))}}
{{someDate}}
