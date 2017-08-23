# vue-click-helper

A Vue2 directive to handle click event and dblclick event on same element

## Introduction

By default, two click interval of less than 300 ms will execute double click event, otherwise click events will execute click event


# Installation
```
npm i vue-click-helper -D
```

# Basic Usage

```html
<template>
    <div v-click-helper="clickHelper">click me</div>
</template>

```

```javascript
import Vue from 'vue'
import vueClickHelper from 'vue-click-helper'

export default{
    directives: {
        'click-helper': vueClickHelper
    },
    methods:{

            clickHelper(e,isDoubleClick){

                if (isDoubleClick){

                    // execute double click logic...
                }else{

                    // execute normal click logic...
                }
            }
    }

}
```


# Advanced

If you want to set, execute double click within 290 milliseconds,just:

```html
<template>
    <div v-click-helper:290="clickHelper">click me</div>
</template>
```

# License
http://www.opensource.org/licenses/mit-license.php
