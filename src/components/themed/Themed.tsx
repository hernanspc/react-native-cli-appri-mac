import * as React from "react";
import { useColorScheme, View as DefaultView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "../../constants/colors";

export function ThemedView(props: any) {
  const theme = useColorScheme();
  const { style, ...otherProps } = props;

  // Verifica si theme es válido antes de acceder a Colors[theme]
  const backgroundColor = theme && Colors[theme]?.background;


  return (
    <DefaultView
      style={[
        { backgroundColor: backgroundColor, paddingHorizontal: 18 },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function ScrollView(props: any) {
  const theme = useColorScheme();
  const { style, children, ...otherProps } = props;
  // Verifica si theme es válido antes de acceder a Colors[theme]
  const backgroundColor = theme && Colors[theme]?.background;

  return (
    <KeyboardAwareScrollView
      style={[
        { backgroundColor: backgroundColor, paddingHorizontal: 18 },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
