import React, {FC, ReactNode, useEffect, useState} from 'react';

import Modal from 'react-native-modal';

import {styles} from './Modal.styles';

export interface ModalProps {
  modalType?: 'center' | 'bottom';
  deviceWidth: number;
  deviceHeight: number;
  children: ReactNode;
  isVisible: boolean;
  onBackdropPress: () => void;
}

const ModalComp: FC<ModalProps> = ({
  modalType = 'center',
  deviceWidth,
  deviceHeight,
  children,
  isVisible,
  onBackdropPress,
}) => {
  return (
    <>
      <Modal
        onBackdropPress={onBackdropPress}
        style={styles[modalType].container}
        swipeDirection={['down']}
        isVisible={isVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}>
        {children}
      </Modal>
    </>
  );
};

export default ModalComp;
