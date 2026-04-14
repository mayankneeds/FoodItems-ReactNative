import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data'
import { FlatList, StyleSheet } from 'react-native';


function CategoriesScreen({ navigation }) {

    function renderCategoryItems(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id })
        }

        return <CategoryGridTile bgColor={itemData.item.color} onPress={pressHandler}>{itemData.item.title}</CategoryGridTile>
    }



    return <FlatList data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItems}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 16, padding: 16 }} />
}



export default CategoriesScreen;
