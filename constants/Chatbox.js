import { Text, SafeAreaView, StyleSheet,Image,View } from 'react-native';
import React from 'react'
import styles from './styles';

const Chatbox = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.contain}>
     <Image style={styles.image} source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}/>
     <View style={styles.numcon}><Text style={styles.num}>4</Text></View>
     <View style={styles.box}>
      <View style={styles.row}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.message}>Time</Text>
      </View>
     <Text numberOfLines={1}  style={styles.message}>Notification messages in the chatbox vewcgeveeve</Text>
     </View>
     </View>
    </SafeAreaView>
  )
}

export default Chatbox

const styles = StyleSheet.create({})