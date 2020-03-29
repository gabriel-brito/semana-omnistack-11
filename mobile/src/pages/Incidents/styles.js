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
    justifyContent: 'space-between'
  },

  headerText: {
    color: '#737380',
    fontSize: 15
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    color: '#13131a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 48
  },

  description: {
    color: '#737380',
    fontSize: 16,
    lineHeight: 24
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    padding: 24
  },

  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold'
  },

  incidentValue: {
    color: '#737380',
    fontSize: 15,
    marginBottom: 24,
    marginTop: 8
  },

  detailsButton: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 15,
    fontWeight: 'bold',
  }
});