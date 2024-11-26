import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

interface PulseLoaderOptionsProps {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  singlePulse: boolean;
  setSinglePulse: (value: boolean) => void;
  isGradient: boolean;
  setIsGradient: (value: boolean) => void;
}

const PulseLoaderOptions: React.FC<PulseLoaderOptionsProps> = ({
  isLoading,
  setIsLoading,
  singlePulse,
  setSinglePulse,
  isGradient,
  setIsGradient,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Text>Loading:</Text>
        <Switch value={isLoading} onValueChange={setIsLoading} />
      </View>
      <View style={styles.option}>
        <Text>Single Pulse:</Text>
        <Switch value={singlePulse} onValueChange={setSinglePulse} />
      </View>
      <View style={styles.option}>
        <Text>Gradient:</Text>
        <Switch value={isGradient} onValueChange={setIsGradient} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default PulseLoaderOptions;