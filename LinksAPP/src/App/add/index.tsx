import {View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from './styles';
import {colors} from '@/styles/colors';

export function AddHeader() {
    return (
        <view style={styles.container}>
            <view style={styles.header}/>
        </view>
    )
}