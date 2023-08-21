import {View, Text} from 'react-native';
import React, {FC} from 'react';
import Modal from 'react-native-modal';

import styles from './Modal.styles';

export interface ModalProps {
  isModalVisible: boolean;
  deviceWidth: number;
  deviceHeight: number;
}

const ModalComp: FC<ModalProps> = ({
  isModalVisible = true,
  deviceWidth,
  deviceHeight,
}) => {
  return (
    <Modal
      style={styles.container}
      isVisible={isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}>
      <View style={styles.inner_container}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
};

export default ModalComp;
