import React, { useEffect, useState } from "react";
import { Animated, Text, View, Easing, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface PulseLoaderProps {
  dotColor?: string; // The color of the dots
  dotCount?: number; // The number of dots to be displayed
  dotSize?: number; // The size of the dots in pixels
  interval?: number; // The interval between the dots in milliseconds
  isLoaderInAction?: boolean; // The state of the loader
  message?: string; // The message to be displayed below the loader
  messageColor?: string; // The color of the message
  pulseStages?: number[]; // The sizes of the pulse in pixels when singlePulse is true they will grow and shrink in this order
  singlePulse?: boolean; // If true, the loader will be a single pulse
  isGradient?: boolean; // If true, the loader will be a gradient
  gradientColors?: [string, string, ...string[]]; // The colors of the gradient
}

const PulseLoaderKit: React.FC<PulseLoaderProps> = ({
  isLoaderInAction,
  dotColor = "#3D9C91",
  dotSize = 20,
  message,
  messageColor = "#DD7C2E",
  dotCount = 3,
  interval = 300,
  singlePulse = false,
  pulseStages = [4, 6, 8, 10, 12],
  isGradient = false,
  gradientColors = ["#3D9C91", "#DD7C2E", "#3D9C2E"],
}: PulseLoaderProps) => {
  const [animations, setAnimations] = useState(
    new Array(dotCount).fill(0).map(() => new Animated.Value(0)),
  );
  const [progress, setProgress] = useState(new Animated.Value(0));
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    setAnimations(new Array(dotCount).fill(0).map(() => new Animated.Value(0)));
  }, [dotCount]);

  const timeOut = interval || 300;

  const animate = () => {
    const fadeInSequence = animations.map((animation, index) =>
      Animated.timing(animation, {
        toValue: 1,
        duration: timeOut,
        useNativeDriver: true,
        delay: index * timeOut,
      }),
    );
    const fadeOutSequence = animations.map((animation, index) =>
      Animated.timing(animation, {
        toValue: 0,
        duration: timeOut,
        useNativeDriver: true,
        delay: index * timeOut,
      }),
    );

    Animated.loop(
      Animated.sequence([
        Animated.sequence(fadeInSequence),
        Animated.delay(timeOut),
        Animated.sequence(fadeOutSequence),
        Animated.delay(timeOut),
      ]),
    ).start();
  };

  const singlePulseAnimation = () => {
    const pulseAnimations = pulseStages.map((size, index) =>
      Animated.timing(progress, {
        toValue: index + 1,
        duration: timeOut,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    );

    Animated.sequence([
      ...pulseAnimations,
      Animated.timing(progress, {
        toValue: pulseStages.length + 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(progress, {
        toValue: pulseStages.length + 2,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(progress, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ]).start(() => singlePulseAnimation());
  };

  useEffect(() => {
    if (isLoaderInAction) {
      if (singlePulse) {
        progress.setValue(0); // Reset progress value
        singlePulseAnimation();
      } else {
        animations.forEach((animation) => animation.setValue(0)); // Reset animations
        animate();
      }
    } else {
      animations.forEach((animation) => animation.setValue(0));
      progress.setValue(0);
    }
  }, [isLoaderInAction, animations, singlePulse]);

  const renderMessage = () => {
    if (isLoaderInAction && message) {
      return (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            color: messageColor,
          }}
        >
          {message}
        </Text>
      );
    }
    return null;
  };

  const renderDot = (animation: Animated.Value, i: number) => (
    <Animated.View
      key={i}
      style={{
        width: dotSize,
        height: dotSize,
        backgroundColor: dotColor,
        borderRadius: dotSize / 2,
        marginHorizontal: 5,
        opacity: animation,
      }}
    />
  );

  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingHorizontal: 20,
        height: 100,
      }}
    >
      {singlePulse ? (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              height: dotSize + 10,
            }}
          >
            <Animated.View
              style={{
                borderRadius: 10,
                width: progress.interpolate({
                  inputRange: [
                    0,
                    ...pulseStages.map((_, i) => i + 1),
                    pulseStages.length + 1,
                    pulseStages.length + 2,
                  ],
                  outputRange: [
                    dotSize,
                    ...pulseStages.map((size) => size),
                    screenWidth * 0.4,
                    screenWidth * 0.4,
                  ],
                }),
                height: progress.interpolate({
                  inputRange: [
                    0,
                    ...pulseStages.map((_, i) => i + 1),
                    pulseStages.length + 1,
                    pulseStages.length + 2,
                  ],
                  outputRange: [
                    dotSize,
                    ...pulseStages.map((size) => size),
                    dotSize,
                    dotSize,
                  ],
                }),
                backgroundColor: isGradient ? "transparent" : dotColor,
                overflow: "hidden",
              }}
            >
              {isGradient && (
                <LinearGradient
                  colors={gradientColors}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}
            </Animated.View>
          </View>
          <View style={{ height: 40 }}>{renderMessage()}</View>
        </View>
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            {animations.map((animation, i) => renderDot(animation, i))}
          </View>
          <View style={{ height: 40 }}>{renderMessage()}</View>
        </>
      )}
    </View>
  );
};

export default React.memo(PulseLoaderKit);
