import * as React from 'react';
// 引入样式
import './Hello.css'

// 在定义接口的时候要注意接口名首字母要大写
// 定义 Props 接口有那些字段名
interface Props {
  count ? : number;
  onIncrement ? : () => void;
  onDecrement ? : () => void;
}

// 第二种函数的方式来创建组件
function Hello({ count = 1, onIncrement, onDecrement }: Props) {
  if (count <= 0) {
    throw new Error('你已经减到最小值了')
  }
  return (
    <div>
      <p>现在的数字是 { count }</p>
      <div>
        <button onClick={ onIncrement }>增加</button>
        <br/>
        <br/>
        <button onClick={ onDecrement }>减少</button>
      </div>
    </div>
  )
}

export default Hello

