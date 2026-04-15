import FoodItem from "../components/FoodItem";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";


function MealsOverViewScreen() {
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const route = useRoute()

    const categoryId = route.params.categoryId
    const dispalyedmeals = MEALS.filter((mealItem) => mealItem.categoryIds.includes(categoryId))

    function toggleFavoriteHandler(id) {
        if (favoriteMealsIds.includes(id)) {
            dispatch(removeFavorite({ id: id }))
        } else {
            dispatch(addFavorite({ id: id }))
        }
    }

    function renderMealItem(itemData) {
        const mealIsFavorite = favoriteMealsIds.includes(itemData.item.id)
        return <FoodItem
            title={itemData.item.title}
            desc={itemData.item.duration + " " + itemData.item.complexity + " " + itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
            isFavorite={mealIsFavorite}
            toggleFavoriteHandler={() => toggleFavoriteHandler(itemData.item.id)} />
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