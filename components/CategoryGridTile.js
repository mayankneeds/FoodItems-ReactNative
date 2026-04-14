import { View, Text, StyleSheet } from "react-native";
import PressableView from "./PressableView";

function CategoryGridTile({ children, bgColor, style, onPress }) {
    return <PressableView style={[styles.gridItem, { backgroundColor: bgColor }, style]} onPress={onPress}>
        <View style={styles.innerContainer}>
            <Text style={styles.title}> {children}</Text>
        </View>
    </PressableView >
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        borderRadius: 8
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: { fontWeight: "bold", padding: 16 }
})