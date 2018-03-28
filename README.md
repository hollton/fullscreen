# fullscreen
> The usage of the JavaScript Fullscreen API for cross-browser
> 
> 用于跨浏览器使用JavaScript Fullscreen API

## 使用

### 浏览器
`import imageViewer from 'xxx'` 或 `window.fullscreen`

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

### addCommonEventListener(el, eventName, handleBack, useCapture)
兼容事件绑定，用于监听全屏状态

#### 参数
* el：绑定dom
* eventName：绑定事件名
* handleBack：绑定回调
* useCapture：是否冒泡

#### 返回：undefined
#### 实例
``` javascript
fullscreen.addCommonEventListener(document, 'keydown', function(event){
    // 
})
```

### removeCommonEventListener(el, eventName, handleFn, useCapture)
兼容事件解绑

#### 参数
* el：解绑dom
* eventName：解绑事件名
* handleFn：指定要移除的函数
* useCapture：是否冒泡

#### 返回：undefined
#### 实例
``` javascript
fullscreen.removeCommonEventListener(document, 'keydown', handleFn)
```
