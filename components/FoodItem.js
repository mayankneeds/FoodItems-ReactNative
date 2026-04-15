import React, { useState } from "react";
import { Image, View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import PressableView from "./PressableView";
import { Ionicons } from '@expo/vector-icons';



function FoodItem({ imageUrl, title, desc, isFavorite, toggleFavoriteHandler }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <PressableView style={styles.container}>
            <View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                        onLoadStart={() => setIsLoading(true)}
                        onLoadEnd={() => setIsLoading(false)}
                    />
                    <View style={styles.starContainer}>
                        <Pressable
                            onPress={toggleFavoriteHandler}
                            style={({ pressed }) => [
                                styles.starButton,
                                pressed && styles.pressed
                            ]}
                        >
                            <Ionicons
                                name={isFavorite ? "star" : "star-outline"}
                                size={24}
                                color={isFavorite ? "#ffc107" : "white"}
                            />
                        </Pressable>
                    </View>
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
    starContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
    },
    starButton: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 6,
    },
    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.9 }],
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