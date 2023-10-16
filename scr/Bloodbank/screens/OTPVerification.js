import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import PageContainer from '../components/PageContainer';
import { COLORS,FONTS } from '../constant/theme';
import Button from '../components/Button';

const OTPVerification = ({ navigation }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const otpInputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOTP(newOtp);

    if (index < otpInputRefs.current.length - 1 && value !== '') {
      otpInputRefs.current[index + 1].focus();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 22,
          }}
        >
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  style={{
                    width: 40,
                    height: 40,
                    margin: 5,
                    borderWidth: 1,
                    borderRadius: 6,
                    textAlign: 'center',
                  }}
                  maxLength={1}
                  onChangeText={(text) => handleOtpChange(index, text)}
                  value={value}
                  ref={(ref) => (otpInputRefs.current[index] = ref)}
                  keyboardType="numeric"
                />
              ))}
            </View>
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.primary,
                  textAlign: 'right',
                }}
              >
                Resend code
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            title="VERIFY"
            filled
            onPress={() => navigation.navigate('SuccessVerification')}
            style={{
              width: '100%',
              marginVertical: 12,
            }}
          />
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default OTPVerification;
