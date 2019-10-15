/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native'
import App from './src/App.js'
import {name as appName} from './app.json'

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps'
    
])

AppRegistry.registerComponent(appName, () => App)
