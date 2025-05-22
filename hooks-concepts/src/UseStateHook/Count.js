import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import Button from '../components/Button'
import { scale } from 'react-native-size-matters'
import { startTransition, useState } from 'react'
import { reactIcon } from '../constants/Images';
import { Colors } from '../constants/Colors'
import { FontAwesome6 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
const Count = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false);

  const text = 'useState hook is state management hook that is used in functional components in react and react native. It takes a initial value of any type and returns array of 2 elements - value and function that is used to update the value';

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    if (count > 0) {
      setCount(count - 1)
    }
    else {
      setCount(0)
      console.log('Minimum limit reached')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.innerHeader}>
            <FontAwesome6 name="react" size={36} color="blue" />
            <Text style={styles.headerText}>Use State hook</Text>
          </View>
          <View style={styles.learnButton}>
            <Button label="Learn More" onPress={() => setToggle((prev) => !prev)} />
            {toggle && (
              <View style={styles.learnText}>
                <Text style={styles.text}>{text}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.additionalText}>The functionality is the increment and decrement of the count value by the change in the state variable provided by the useState</Text>
          <Text style={styles.countValue}>Count value : {count}</Text>
          <View style={styles.btnContainer}>
            <Button label="Increase Count" onPress={incrementCount} />
            <Button label="Decrease Count" onPress={decrementCount} />
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00FF66'
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  innerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(10),
  },
  icon: {
    width: scale(30),
    height: scale(30),
  },
  headerText: {
    fontSize: scale(36),
    fontWeight: 'bold',
    color: 'green',
  },
  learnButton: {
    width: '64%',
  },
  learnText: {
  },
  text: {
    fontSize: scale(14),
    fontWeight: 'bold',
  },
  countContainer: {
    alignItems: 'center',
    marginTop: scale(20),
  },
  additionalText: {
    fontSize: scale(14),
    textAlign: 'center',
    marginVertical: scale(10),
    fontWeight: 'bold',
    marginHorizontal: scale(20),
  },
  countValue: {
    fontSize: scale(16),
    fontWeight: 'bold',
  },
  btnContainer: {
    width: '50%',
  }

})

export default Count
