import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  cardBlue: {
    backgroundColor: '#007bff',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  cardAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  iconText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});