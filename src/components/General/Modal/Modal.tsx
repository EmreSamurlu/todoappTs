import React, {FC, ReactNode, useEffect, useState} from 'react';
import Modal from 'react-native-modal';

import {styles} from './Modal.styles';

export interface ModalProps {
  modalType?: 'center' | 'bottom';
  deviceWidth: number;
  deviceHeight: number;
  children: ReactNode;
  selectedVisibility: boolean;
}

const ModalComp: FC<ModalProps> = ({
  modalType = 'center',
  deviceWidth,
  deviceHeight,
  children,
  selectedVisibility = true,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (selectedVisibility) {
      setModalVisible(true);
    }
  }, [selectedVisibility]);

  return (
    <>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        style={styles[modalType].container}
        swipeDirection={['down']}
        isVisible={modalVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}>
        {children}
      </Modal>
    </>
  );
};

export default ModalComp;
