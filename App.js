
import React from 'react';
import { StyleSheet,} from 'react-native';
import Navigation from './navigation';



// import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
  
    <Navigation/>
    // <Navigation style = {{flex : 1,width : '100%', height : '100%'}}></Navigation>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width : '100%',
    height : '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
