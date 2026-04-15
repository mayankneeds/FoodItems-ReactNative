import FoodItem from "../components/FoodItem";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";


function FavoriteScreen() {
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const displayedMeals = MEALS.filter((mealItem) => {
        return favoriteMealsIds.includes(mealItem.id);
    });

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
            toggleFavoriteHandler={() => toggleFavoriteHandler(itemData.item.id)}
        />
    }

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#351401'
    },
    container: {
        flex: 1,
    },
    listContainer: {
        gap: 16,
        padding: 16
    }
})