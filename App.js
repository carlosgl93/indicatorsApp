// Dependencies
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import Home from './Screens/Home.js'
import IndicatorDetails from './Screens/IndicatorDetails.js'
import IndicatorHistory from './Screens/IndicatorHistory.js'

const Stack = createStackNavigator();

// create function to request indicators for later use.
const requestIndicators = () => {
  console.log(fetch('https://mindicador.cl/api'));
}

useEffect(() => {
  
}, [input])

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Indicadores" component={Home} />
        <Stack.Screen name="Detalles" component={IndicatorDetails} />  
        <Stack.Screen name="Historial" component={IndicatorHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;