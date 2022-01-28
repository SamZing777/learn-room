import * as React from 'react';
import { View, StyleSheet, TextInput as RNTextInput,TextInputProps as RNTextInputProps, Text } from 'react-native';

import { useController, UseControllerProps, useFormContext  } from 'react-hook-form';
import { Colors } from "../../theme/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface TextInputProps extends RNTextInputProps, UseControllerProps {
    name: string,
    defaultValue?: string;
    label: string,
}

const ControlledInput =  (props: TextInputProps) => {
    const { name, rules, label, defaultValue, ...inputProps} = props;
    
    const { field } = useController({ name, rules, defaultValue });

    return (
        <View>
            <Text>
            
            </Text>
            <RNTextInput
                style={styles.formField}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                {...inputProps}
            />
        </View>
    )
}

export const TextInput = (props: TextInputProps) => {

    const { name } = props;
    
    const formContext = useFormContext();
    
    // Placeholder until input name is initialized
    if (!formContext || !name) {
      const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
        console.error(msg)
     // setFormError(true)
      return null
    }
    
    return <ControlledInput {...props} />;
    
};

const styles = StyleSheet.create(
    {
        formField:{
            borderColor:Colors.gray,
            borderWidth:0.5,
            height:50,
            marginTop:hp(1.2),
            borderRadius:5,
            paddingHorizontal:20,
            fontSize:hp(1.8)
          }
    }
)