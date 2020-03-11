import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Layout, Modal, Text} from '@ui-kitten/components';

export const ModalSimpleUsageShowcase = () => {
 

  return (
    <Layout style={styles.container}>
      <Button onPress={toggleModal}>TOGGLE MODAL</Button>
      <Modal visible={visible}>{renderModalElement()}</Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 256,
    padding: 16,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 256,
    padding: 16,
  },
});
