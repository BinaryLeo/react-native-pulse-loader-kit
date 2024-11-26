import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RNPulseLoader from "./components/RNPulseLoader";
import PulseLoaderOptions from "./components/PulseLoaderOptions";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [singlePulse, setSinglePulse] = React.useState(false);
  const [isGradient, setIsGradient] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pulse Loader Demo App</Text>
      <PulseLoaderOptions
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        singlePulse={singlePulse}
        setSinglePulse={setSinglePulse}
        isGradient={isGradient}
        setIsGradient={setIsGradient}
      />
      <View style={styles.loaderContainer}>
        <RNPulseLoader
          dotColor="#FF0000"
          message={
            singlePulse ? " Loading single pulse..." : " Loading 5 dots..."
          }
          dotCount={5}
          isLoaderInAction={isLoading}
          dotSize={10}
          interval={300}
          messageColor="#000"
          singlePulse={singlePulse}
          pulseStages={[4, 6, 8, 10, 12]}
          key={singlePulse ? "singlePulse" : "multiplePulses"} // Add key to force re-render
          isGradient={isGradient}
          gradientColors={["#1E3A8A", "#3B82F6", "#81D4FA", "#42A5F5"]}
        />
        {!singlePulse && (
          <RNPulseLoader
            dotColor="#49C91C"
            message=" Loading 3 dots..."
            dotCount={3}
            isLoaderInAction={isLoading}
            dotSize={10}
            interval={300}
            messageColor="#000"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    alignItems: "center",
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  loaderContainer: {
    marginTop: 20,
  },
});