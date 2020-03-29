import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 48,
    justifyContent: 'space-between'
  },

  incident: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 16,
    padding: 24
  },

  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 24
  },

  incidentValue: {
    color: '#737380',
    fontSize: 15,
    marginTop: 8
  },

  heroTitle: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30
  },

  heroDescription: {
    color: '#737380',
    fontSize: 15,
    marginTop: 16
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },

  action: {
    alignItems: 'center',
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    width: '48%'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});