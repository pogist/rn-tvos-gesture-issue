import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{uri: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'}}
        controls
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
  },
});
