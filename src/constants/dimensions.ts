import { Dimensions } from 'react-native';

const windowDimensions = Dimensions.get('window');

export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;
export const HEADER_HEIGHT = WINDOW_HEIGHT * 0.15;
