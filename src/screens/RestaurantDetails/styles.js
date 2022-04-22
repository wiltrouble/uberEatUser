import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 30,
    left: 10,
  },
});
export default styles