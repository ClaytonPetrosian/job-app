import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

@withRouter
@connect(
  state=>state.chat
)
class NavLinkBar extends React.Component{
  static propsTypes = {
    selectAvatar:PropTypes.array.isRequired
  }
  constructor(props){
    super(props)
    this.state={
      title:'',
      desc:''
    }
  }


  render(){
    const navList = this.props.data.filter(v=>!v.hide)
    const {pathname} = this.props.location
    return (
      <TabBar >
        {navList.map(v=>(
          <TabBar.Item
            key={v.path}
            title={v.text}
            badge={v.path==='/msg'?this.props.unread:0}
            icon={{uri: require(`./img/${v.icon}.png`)}}
            selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
            selected={pathname===v.path}
            onPress={()=>{
              this.props.history.push(v.path)
            }}
          >
          </TabBar.Item>
        ))}
      </TabBar>


    )
  }
}
export default NavLinkBar
