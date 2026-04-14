import React, { useState } from "react";
import { Image, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import PressableView from "./PressableView";


function FoodItem({ imageUrl, title, desc, onPress }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <PressableView style={styles.container} onPress={onPress}>
            <View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        onLoadStart={() => setIsLoading(true)}
                        onLoadEnd={() => setIsLoading(false)}
                    />
                    {isLoading && (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="small" color="#351401" />
                        </View>
                    )}
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </PressableView>
    )
}

export default FoodItem;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e1e4e8' // Light grey placeholder
    },
    image: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        position: 'absolute',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 8,
        textAlign: 'center'
    },
    desc: {
        textAlign: 'center',
        paddingBottom: 16
    }
})