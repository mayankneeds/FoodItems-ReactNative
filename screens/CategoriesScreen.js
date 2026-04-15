import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'
import { FlatList, StyleSheet, Button, View } from 'react-native';


function CategoriesScreen({ navigation }) {

    function renderCategoryItems(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id })
        }

        return <CategoryGridTile bgColor={itemData.item.color} onPress={pressHandler}>{itemData.item.title}</CategoryGridTile>
    }

    function goToFavorite() {
        navigation.navigate('Favorite')
    }

    return <FlatList data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItems}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 16, padding: 16 }}
        ListHeaderComponent={
            <View style={styles.footer}>
                <Button title="Favorite" onPress={goToFavorite} />
            </View>
        } />
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 16,
    }
});



export default CategoriesScreen;
