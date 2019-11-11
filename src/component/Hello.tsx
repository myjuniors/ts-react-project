import * as React from 'react';
// 引入样式
import './Hello.css'

// 在定义接口的时候要注意接口名首字母要大写
// 定义 Props 接口有那些字段名
interface Props {
  message: string
}
// 定义 State 接口有那些字段名
interface State {
  count: number
}

// 第一种类的方式创建组件：
class Hello extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    let { count } = this.state
    count ++
    this.updateCount(count)
  }

  decrement = () => {
    let { count } = this.state
    count --
    this.updateCount(count)
  }

  updateCount (count: number) {
    this.setState({
      count
    })
  }

  render () {
    const { message } = this.props
    const { count } = this.state

    return (
      <div>
        Hello { message }
        <p>你单击了 { count } 次</p>
        <button onClick={ this.increment }>加一</button>
        <br/>
        <br/>
        <button onClick={ this.decrement }>减一</button>
      </div>
    )
  }
}

/*// 第二种函数的方式来创建组件
function Hello({ message }: Props) {

  return (
    <div>
      hello { message }
    </div>
  )
}*/

export default Hello

