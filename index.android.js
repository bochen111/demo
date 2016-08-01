/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  ProgressBarAndroid,
  DrawerLayoutAndroid,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Toast from 'react-native-root-toast'; 
import Swiper from 'react-native-swiper'; 

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Image source={require('./img/1.jpg')} />
      </View>
    );
  }
}
class TestInput extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#f4f4f4',flex:1}}>
          <TextInput 
              style={styles.style_user_input}
              placeholder='QQ号/手机号/邮箱'
              numberOfLines={1}
              autoFocus={true}
              underlineColorAndroid={'transparent'} 
              textAlign='center'
          />
          <View
              style={{height:1,backgroundColor:'#f4f4f4'}}
          />
          <TextInput 
              style={styles.style_pwd_input}
              placeholder='密码'
              numberOfLines={1}
              underlineColorAndroid={'transparent'} 
              secureTextEntry={true}
              textAlign='center'
          />
          <View 
              style={styles.style_view_commit}
           >
            <Text style={{color:'#fff'}}>
               登录
            </Text>
 
          </View>
 
          <View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
             <Text style={styles.style_view_unlogin}>
                 无法登录?
            </Text>
            <Text style={styles.style_view_register}>
                 新用户
            </Text>
          </View>
      </View>
    );
  }
}
const styles3 = StyleSheet.create({
  style_image:{
    borderRadius:35,
    height:70,
    width:70,
    marginTop:40,
    alignSelf:'center',
  },
  style_user_input:{  
      backgroundColor:'#fff',
      marginTop:10,
      height:35,
  },
   style_pwd_input:{  
      backgroundColor:'#fff',
      height:35,
  },
   style_view_commit:{  
      marginTop:15,
      marginLeft:10,
      marginRight:10,
      backgroundColor:'#63B8FF',
      height:35,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  style_view_unlogin:{
    fontSize:12,
    color:'#63B8FF',
    marginLeft:10,
  },
  style_view_register:{
    fontSize:12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign:'right',
  }
});
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function toastDe(params) {
  let toast = Toast.show(params, {
    duration: Toast.durations.LONG, // toast显示时长
    position: Toast.positions.BOTTOM, // toast位置
    shadow: true, // toast是否出现阴影
    animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
    hideOnPress: true, // 是否可以通过点击事件对toast进行隐藏
    delay: 0, // toast显示的延时
    onShow: () => { 
        // toast出现回调（动画开始时）
    },
    onShown: () => {
        // toast出现回调（动画结束时）
    },
    onHide: () => {
        // toast隐藏回调（动画开始时）
    },
    onHidden: () => {
        // toast隐藏回调（动画结束时）
    }
});

// 也可以通过调用Toast.hide(toast); 手动隐藏toast实例
// setTimeout(function () {
//     Toast.hide(toast);
// }, 50000);
}

class qqLogin extends Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#F4F4F4'}}>
         <Image style={{width:70,height:70,borderRadius:35,marginTop:40,alignSelf:'center'}} source={require('./img/1.jpg')} />
         <TextInput numberOfLines={1}  placeholder={'手机号码/邮箱'} underlineColorAndroid={'transparent'} autoFocus={true}  style={{backgroundColor:"#fff",marginTop:10,height:35,textAlign:'center'}} />
         <View style={{borderBottomWidth:1,borderBottomColor:'#EEEEEE'}} />
         <TextInput numberOfLines={1}  placeholder={'密码'} secureTextEntry={true} underlineColorAndroid={'transparent'} autoFocus={true}  style={{backgroundColor:"#fff",height:35,textAlign:'center'}} />
         <View style={{height:35,marginLeft:5,marginTop:10,marginRight:5,backgroundColor:"#63B7FF",borderRadius:5,alignItems:'center',justifyContent:'center'}}><Text style={{color:"#fff",alignSelf:'center'}}>登录</Text></View>
         <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',bottom:10,justifyContent:'space-between'}} >
         <Text onPress={()=>toastDe('日你妹')} style={{marginLeft:10}}>无法登录</Text>
         <Text onPress={()=>ToastAndroid.show('点击我好疼,长时间的~',ToastAndroid.LONG)} style={{marginRight:10}}>新用户</Text>
         </View>
      </View>
    );
  }
}
class bar extends Component{
  render(){
    return(
      <View>
        <Text>bar</Text>
        <ProgressBarAndroid styleAttr='Large' progress={3}/>
      </View>
    );
  }
}
class DrawerLayoutDemo extends Component {
  render() {
    var navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      drawerWidth={200}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>
   );
  }
}
var NUM_ITEMS = 20;
 
var ScrollViewSimpleExample = React.createClass({
  statics: {
    title: '<ScrollView>',
    description: 'Component that enables scrolling through child components.'
  },
  makeItems: function(nItems: number, styles): Array<any> {
    var items = [];
    for (var i = 0; i < nItems; i++) {
       items[i] = (
         <TouchableOpacity key={i} style={styles}>
           <Text>{'Item ' + i}</Text>
         </TouchableOpacity>
       );
    }
    return items;
  },
 
  render: function() {
    // One of the items is a horizontal scroll view
    var items = this.makeItems(NUM_ITEMS, styles.itemWrapper);
    items[4] = (
      <ScrollView key={'scrollView'} horizontal={true}>
        {this.makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
      </ScrollView>
    );
 
    var verticalScrollView = (
      <ScrollView style={styles.verticalScrollView}>
        {items}
      </ScrollView>
    );
 
    return verticalScrollView;
  }
});
 class ScrollViewSimpleExample1 extends Component{
  getItem(){
    let views=[];
    for(let i=0;i<200;i++)
    {
      views[i]=(
      <View key={i} style={{height:60,flexDirection:'row',margin:5,alignItems:'center'}}>
      <Image source={require('./img/1.jpg')} style={{width:50,height:50}} />
      <Text style={{flex:1,marginLeft:5,height:50}}>我地方萨芬放大范德萨纷纷大幅我地方萨芬放大范德萨纷纷大幅地我地方萨芬放大范德萨纷纷大幅地我地方萨芬放大范德萨纷纷大幅地地方福利第三倒是发了发酵大事了安放的拉萨放大范德萨范德萨大</Text>
      </View>
    );
    }
    return views;
  }
  render(){
    return(
      <View style={{flex:1}}>
      <ScrollView key={'scrollView'} style={{flex:1}} horizontal={false}>
        {this.getItem()}
      </ScrollView>
      </View>
    );
  }
} 

class swiper extends Component{
  render(){
    return(
      <Swiper style={styles.wrapper} height={200} horizontal={true} loop={true} index={0} autoplay={true} showsButtons={false}>
         <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}
var styles4= StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

const styles = StyleSheet.create({
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    flex: 1
  }
})

const renderPagination = (index, total, context) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: -25,
      right: 10
    }}>
      <Text>
        <Text style={{
          color: '#007aff',
          fontSize: 20
        }}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}
class NumberSample extends React.Component {
  render() {
    return (
      <View>
        <Swiper style={styles.wrapper} height={240}
          renderPagination={renderPagination}
          paginationStyle={{
            bottom: -23, left: null, right: 10,
          }} loop={false}>
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
          </View>
        </Swiper>
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ScrollViewSimpleExample1);
