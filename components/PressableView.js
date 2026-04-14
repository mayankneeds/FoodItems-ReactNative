import { Pressable } from "react-native";

function PressableView({ children, style, ...props }) {
    return (
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={(state) => [
                style,
                state.pressed && { opacity: 0.7 }
            ]}
            {...props}
        >
            {children}
        </Pressable>
    );
}

export default PressableView;
