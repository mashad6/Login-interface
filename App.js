import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const {width: WIDTH} = Dimensions.get('window');

const App = () => {
  // state={
  //   hidePass:true,
  //   press:false
  // }
  const [hidePass, sethidePass] = useState(true);
  const [press, setpress] = useState(false);

  showPassbtn = () => {
    if (press == false) {
      sethidePass(false), setpress(true);
    } else {
      sethidePass(true), setpress(false);
    }
  };

  return (
    <View style={styles.scrollView}>
      <View style={styles.LogoContainer}>
        <Text style={styles.LogoText}>LOGIN PAGE</Text>
      </View>

      <View style={styles.body}>
        <Icon
          name={'ios-person'}
          size={26}
          style={styles.Iconstyle}
          color={'rgba(0,0,0,0.3)'}
        />
        <TextInput
          style={styles.Input}
          placeholder={'username'}
          placeholderTextColor={'rgba(255,255,0.7)'}
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.body}>
        <Icon
          name={'md-lock'}
          size={26}
          color={'rgba(0,0,0,0.3)'}
          style={styles.Iconstyle}
        />
        <TextInput
          style={styles.Input}
          placeholder={'Password'}
          secureTextEntry={hidePass}
          placeholderTextColor={'rgba(255,255,0.7)'}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity style={styles.eyebtn} onPress={() => showPassbtn()}>
          <Icon
            name={press == false ? 'ios-eye' : 'ios-eye-off'}
            size={26}
            color={'rgba(0,0,0,0.3)'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.loginbtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupbtn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: 10,
  },
  LogoText: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
    opacity: 0.5,
  },
  LogoContainer: {
    alignItems: 'center',
    // padding:10
    marginBottom: 50,
  },
  Input: {
    width: WIDTH - 90,
    height: 40,
    borderRadius: 45,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 25,
  },
  Iconstyle: {
    position: 'absolute',
    top: 8,
    left: 37,
  },
  eyebtn: {
    position: 'absolute',
    top: 8,
    right: 37,
  },
  loginbtn: {
    width: WIDTH - 180,
    height: 40,
    borderRadius: 45,
    backgroundColor: '#008CBA',
    justifyContent: 'center',
    marginTop: 20,
  },

  signupbtn: {
    width: WIDTH - 180,
    height: 40,
    borderRadius: 45,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
