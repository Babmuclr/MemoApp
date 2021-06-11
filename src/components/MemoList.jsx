import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Icon from './Icon';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemItemDate}>2021/05/27</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemItemDate}>2021/05/27</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemItemDate}>2021/05/27</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 19,
  },
  memoListItemItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
