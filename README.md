# fullscreen
> The usage of the JavaScript Fullscreen API for cross-browser
> 
> 用于跨浏览器使用JavaScript Fullscreen API

## 使用

### npm
```
npm i el-fullscreen -S
import fullscreen from 'el-fullscreen'
```

### script
挂载在全局变量 fullscreen 下
```
<script src="dist/fullscreen.min.js"></script>
window.fullscreen
```

## Support
[Supported browsers](http://caniuse.com/fullscreen)

## API

### supported()
判断浏览器是否支持全屏

#### params: 无
#### return: bool , true表支持，false表不支持
``` javascript
fullscreen.supported()
// true or false
```

### element()
当前处于全屏状态的dom

#### params: 无
#### return: object , 全屏状态的dom
``` javascript
fullscreen.element()
```

### launch(el)
进入全屏

#### params: 
* el：全屏操作的dom，默认为document.documentElement
#### return: undefined
``` javascript
fullscreen.launch()
```

### exit()
退出全屏

#### params：无
#### return: undefined
``` javascript
fullscreen.exit()
```

### onChange()
全屏状态改变事件

#### params：
* handleChange：事件回调
#### return: undefined
``` javascript
fullscreen.onChange()
```