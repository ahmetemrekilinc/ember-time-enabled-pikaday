ember-time-enabled-pikaday
==============================================================================

[![npm version](https://badge.fury.io/js/ember-time-enabled-pikaday.svg)](https://badge.fury.io/js/ember-time-enabled-pikaday.svg)
[![downloads](https://img.shields.io/npm/dm/ember-time-enabled-pikaday.svg?style=flat-square)](https://img.shields.io/npm/dm/ember-time-enabled-pikaday.svg?style=flat-square)
[![Build Status](https://travis-ci.org/ahmetemrekilinc/ember-time-enabled-pikaday.svg?branch=master)](https://travis-ci.org/ahmetemrekilinc/ember-time-enabled-pikaday.svg?branch=master)
[![Ember Observer Score](https://emberobserver.com/badges/ember-time-enabled-pikaday.svg)](https://emberobserver.com/badges/ember-time-enabled-pikaday.svg)
[![Dependency Status](https://david-dm.org/ahmetemrekilinc/ember-time-enabled-pikaday.svg)](https://david-dm.org/ahmetemrekilinc/ember-time-enabled-pikaday.svg)
[![devDependency Status](https://david-dm.org/ahmetemrekilinc/ember-time-enabled-pikaday/dev-status.svg)](https://david-dm.org/ahmetemrekilinc/ember-time-enabled-pikaday/dev-status.svg)
[![Code Climate](https://codeclimate.com/github/ahmetemrekilinc/ember-time-enabled-pikaday/badges/gpa.svg)](https://codeclimate.com/github/ahmetemrekilinc/ember-time-enabled-pikaday/badges/gpa.svg)

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
<TimeEnabledPikadayInput @value={{this.timeValue}} @onSelection={{this.doSomethingWithSelectedValue}} />
```

You can enable/disable time selection using `timeEnabled` parameter.
```hbs
<TimeEnabledPikadayInput @timeEnabled={{this.timeEnabled}} />
```

You can set 24 hour format using `use24hour` parameter.
```hbs
<TimeEnabledPikadayInput @use24hour=true />
```

You can enable/disable selecting minutes using `showMinutes` parameter.
```hbs
<TimeEnabledPikadayInput @showMinutes=true />
```

You can enable/disable selecting seconds using `showSeconds` parameter.
```hbs
<TimeEnabledPikadayInput @showSeconds=true />
```

You can enable/disable selecting weekends using `disableWeekends` parameter.
```hbs
<TimeEnabledPikadayInput @disableWeekends=true />
```

You can set custom time label using `timeLabel` parameter.
```hbs
<TimeEnabledPikadayInput @timeLabel='My time: ' />
```

Checkout live examples at [ember-time-enabled-pikaday demo page](https://ahmetemrekilinc.github.io/ember-time-enabled-pikaday-demo/)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
