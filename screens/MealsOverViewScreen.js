import FoodItem from "../components/FoodItem";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";

function MealsOverViewScreen() {
    const route = useRoute()
    const categoryId = route.params.categoryId

    const dispalyedmeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId))

    function renderMealItem(itemData) {
        return <FoodItem title={itemData.item.title} desc={itemData.item.duration + " " + itemData.item.complexity + " " + itemData.item.affordability} imageUrl={itemData.item.imageUrl} />
    }

    return <View style={styles.container}>
        <FlatList data={dispalyedmeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}
            contentContainerStyle={styles.listContainer} />
    </View>
}


export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        gap: 16,
        padding: 16
    }
})