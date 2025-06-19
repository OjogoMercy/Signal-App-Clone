import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '@/constants/styles'
import Chatbox from '@/constants/Chatbox';
import ChatRooms from './../components/ChatR/ChatRooms';

const Chatroom1 = ChatRooms[0];
const ChatRoom2 = ChatRooms[1]

const index = () => {
  return (
    <View>
   <Chatbox ChatRoom = {Chatroom1}/>
   <Chatbox ChatRoom = {ChatRoom2}/>
    </View>
   
  )
}

export default index
