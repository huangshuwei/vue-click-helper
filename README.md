# vue-click-helper

A Vue directive  to distinguish between click and double click.

## Introduction

By default, two click interval of less than 300 ms will execute double click event, otherwise click events will execute click event


# Installation
```
npm i vue-click-helper -D
```

# Basic Usage
```javascript
import Vue from 'vue'
import vueClickHelper from 'vue-click-helper'

Vue.directive('click-helper', vueClickHelper)

export default{

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

```html
 <div v-click-helper="clickHelper">click me</div>
```

# Advanced

If you want to set, execute double click within 290 milliseconds,just:

```html
 <div v-click-helper:290="clickHelper">click me</div>
```

# License
http://www.opensource.org/licenses/mit-license.php