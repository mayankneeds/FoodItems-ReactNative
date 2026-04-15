import FoodItem from "../components/FoodItem";
import { MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoriteScreen() {
    const favoriteCtx = useContext(FavoritesContext);

    const dispalyedmeals = MEALS.filter((mealItem) => {
        return favoriteCtx.ids.includes(mealItem.id);
    });

    function toggleFavoriteHandler(id) {
        if (favoriteCtx.ids.includes(id)) {
            favoriteCtx.removeFavorite(id)
        } else {
            favoriteCtx.addFavorite(id)
        }
    }

    function renderMealItem(itemData) {
        const mealIsFavorite = favoriteCtx.ids.includes(itemData.item.id)
        return <FoodItem
            title={itemData.item.title}
            desc={itemData.item.duration + " " + itemData.item.complexity + " " + itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
            isFavorite={mealIsFavorite}
            toggleFavoriteHandler={() => toggleFavoriteHandler(itemData.item.id)}
        />
    }

    return <View style={styles.container}>
        <FlatList data={dispalyedmeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}
            contentContainerStyle={styles.listContainer} />
    </View>
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        gap: 16,
        padding: 16
    }
})