import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
    const onChangeText = (text) => {
        props.onInputChanged(props.id, text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {props.icon && (
                    <props.iconPack
                        name={props.icon}
                        size={24}
                        style={styles.icon}
                    />
                )}
                <TextInput
                    {...props}
                    onChangeText={onChangeText}
                    style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor='black' // Example color, replace with desired color
                />
            </View>
            {props.errorText && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText[0]}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'lightgray', // Example color, replace with desired color
        paddingHorizontal: 16, // Example size, replace with desired size
        paddingVertical: 12, // Example size, replace with desired size
        borderRadius: 12, // Example size, replace with desired size
        borderColor: 'blue', // Example color, replace with desired color
        borderWidth: 1,
        marginVertical: 5, // Example size, replace with desired size
        flexDirection: 'row',
    },
    icon: {
        marginRight: 10,
        color: 'blue', // Example color, replace with desired color
    },
    input: {
        color: 'blue', // Example color, replace with desired color
        flex: 1,
        fontFamily: 'regular', // Example font family, replace with desired font family
        paddingTop: 0,
    },
    errorContainer: {
        marginVertical: 4, // Example size, replace with desired size
    },
    errorText: {
        color: 'red', // Example color, replace with desired color
        fontSize: 12, // Example size, replace with desired size
    },
})

export default Input;
