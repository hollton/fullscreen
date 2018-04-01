# fullscreen
> The usage of the JavaScript Fullscreen API for cross-browser
> 
> 用于跨浏览器使用JavaScript Fullscreen API

## 使用

### npm
```bash
npm i el-fullscreen -S
import fullscreen from 'el-fullscreen'
```

### 浏览器
`window.fullscreen`

## Support
[Supported browsers](http://caniuse.com/fullscreen)

## API

### supported()
判断浏览器是否支持全屏

#### 参数：无
#### 返回：bool , true表支持，false表不支持
#### 实例
``` javascript
fullscreen.supported()
// true or false
```

### element()
当前处于全屏状态的dom

#### 参数：无
#### 返回：object , 全屏状态的dom
#### 实例
``` javascript
fullscreen.element()
```

### launch(el)
进入全屏

#### 参数：
* el：全屏操作的dom，默认为document.documentElement

#### 返回：undefined
#### 实例
``` javascript
fullscreen.launch()
```

### exit()
退出全屏

#### 参数：无
#### 返回：undefined
#### 实例
``` javascript
fullscreen.exit()
```

### onChange()
全屏状态改变事件

#### 参数
* handleChange：事件回调

#### 返回：undefined
#### 实例
``` javascript
fullscreen.onChange()
```

