# ember-time-enabled-pikaday

This README outlines the details of collaborating on this ember-time-enabled-pikaday addon.

## Installation

```bash
cd your-project-directory
ember install ember-time-enabled-pikaday
```

## Usage
Standalone datepicker:

```handlebars
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}
```

Standalone timeEnabled datepicker:

```handlebars
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}
```

Standalone timeEnabled use24hour datepicker:

```handlebars
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true use24hour=true theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}
```

Standalone timeEnabled showMinutes=false datepicker:

```handlebars
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true showMinutes=false theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}
```

Standalone timeEnabled showSeconds=true datepicker:
```handlebars
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true showSeconds=true theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}
```

Standalone timeEnabled datepicker with timeLabel:
```handlebars
{{time-enabled-pikaday-input format='dddd MMMM Do YYYY, h:mm:ss a' timeEnabled=true timeLabel='Time: ' theme='dark-theme' onSelection=(action 'doSomethingWithSelectedValue')}}
```


Inputless timeEnabled datepicker:
```handlebars
{{time-enabled-pikaday-inputless onSelection=(action (mut someDate))}}
{{time-enabled-pikaday-inputless timeEnabled=true onSelection=(action (mut someDate))}}
{{time-enabled-pikaday-inputless timeEnabled=true use24hour=true onSelection=(action (mut someDate))}}
{{someDate}}
```
