ember-time-enabled-pikaday
==============================================================================

ember-time-enabled-pikaday is an addon that enables you creating time enabled `pikaday` components in your Ember.js application.
[ember-pikaday](https://github.com/adopted-ember-addons/ember-pikaday) is used in background.

Installation
------------------------------------------------------------------------------

```
cd your-project-directory
ember install ember-time-enabled-pikaday
```

Usage
------------------------------------------------------------------------------

You can pass your value as `value` parameter and handle action as `onSelection` parameter.
```hbs
{{time-enabled-pikaday-input onSelection=(action 'doSomethingWithSelectedValue') }}
```

You can set enabling time selection as `timeEnabled` parameter.
```hbs
{{time-enabled-pikaday-input timeEnabled=true }}
```

You can set 24 hour format as `use24hour` parameter.
```hbs
{{time-enabled-pikaday-input use24hour=true }}
```

You can enable/disable selecting minutes as `showMinutes` parameter.
```hbs
{{time-enabled-pikaday-input showMinutes=true }}
```

You can enable/disable selecting seconds as `showSeconds` parameter.
```hbs
{{time-enabled-pikaday-input showSeconds=true }}
```

You can enable/disable selecting weekends as `disableWeekends` parameter.
```hbs
{{time-enabled-pikaday-input disableWeekends=true }}
```

You can set custom time label as `timeLabel` parameter.
```hbs
{{time-enabled-pikaday-input timeLabel='My time: ' }}
```


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
