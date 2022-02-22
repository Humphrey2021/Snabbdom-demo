import { init } from 'snabbdom/build/package/init'
import { h } from 'snabbdom/build/package/h'

const patch = init([])

// 设置子元素
let vnode = h('div#container', [
    h('h1', 'Hello World'),
    h('p', 'this is p')
])

let app = document.querySelector('#app')

let oldVNode = patch(app, vnode)

setTimeout(() => {
    // vnode = h('div#container', [
    //     h('h1', 'Hello World'),
    //     h('p', 'this is small p')
    // ])
    // patch(oldVNode, vnode)

    // 清除div中的内容
    patch(oldVNode, h('!'))
}, 2000)
