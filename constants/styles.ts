import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
      },
      contain:{
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
      },
      image:{
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:2,
        borderColor:'white'
      },
      numcon:{
        backgroundColor:'blue',
        alignItems:'center',
        height:25,
        width:25,
        borderRadius:15,
        position:'absolute',
        left:65,
        top:15,
        borderWidth:1,
        borderColor:'white'
      },
      num:{
        color:'white'
      },
      row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10
      },
      name:{
        fontSize:18,
        fontWeight:'bold',
      },
      message:{
        fontSize:12,
        color:'black',
        opacity:0.5
      },
      box:{
        marginLeft:15
      },
});
export default styles