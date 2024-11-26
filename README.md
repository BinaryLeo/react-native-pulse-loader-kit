# react-native-pulse-loader-kit

A customizable and reusable pulse loader component for React Native - Expo.

![Pulse Loader Demo](https://github.com/BinaryLeo/react-native-pulse-loader-kit/blob/main/assets/demo.gif?raw=true)

## Installation

You can install the package via npm:

```sh
npm install react-native-pulse-loader-kit
```

Or via yarn:
s

```sh
yarn add react-native-pulse-loader-kit
```

## Usage

Here's a basic example of how to use the `RNPulseLoaderKit` component in your React Native application:

```tsx
import React from "react";
import { View } from "react-native";
import { RNPulseLoaderKit } from "react-native-pulse-loader-kit";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <RNPulseLoaderKit isLoaderInAction={true} />
  </View>
);

export default App;
```

## Props

The `RNPulseLoaderKit` component accepts the following props:

| Prop               | Type                            | Default                             | Description                                                  |
| ------------------ | ------------------------------- | ----------------------------------- | ------------------------------------------------------------ |
| `dotColor`         | `string`                        | `#3D9C91`                           | The color of the dots.                                       |
| `dotCount`         | `number`                        | `3`                                 | The number of dots to be displayed.                          |
| `dotSize`          | `number`                        | `20`                                | The size of the dots in pixels.                              |
| `interval`         | `number`                        | `300`                               | The interval between the dots in milliseconds.               |
| `isLoaderInAction` | `boolean`                       | `false`                             | The state of the loader.                                     |
| `message`          | `string`                        | `undefined`                         | The message to be displayed below the loader.                |
| `messageColor`     | `string`                        | `#DD7C2E`                           | The color of the message.                                    |
| `pulseStages`      | `number[]`                      | `[4, 6, 8, 10, 12]`                 | The sizes of the pulse in pixels when `singlePulse` is true. |
| `singlePulse`      | `boolean`                       | `false`                             | If true, the loader will be a single pulse.                  |
| `isGradient`       | `boolean`                       | `false`                             | If true, the loader will be a gradient.                      |
| `gradientColors`   | `[string, string, ...string[]]` | `["#3D9C91", "#DD7C2E", "#3D9C2E"]` | The colors of the gradient.                                  |

## Example

Here's a more detailed example demonstrating various props:

### Single Pulse Example

```tsx
<RNPulseLoaderKit
  isLoaderInAction={true}
  singlePulse={true}
  pulseStages={[4, 6, 8, 10, 12]}
  dotColor="#FF0000"
  message="Loading single pulse..."
  messageColor="#000"
  isGradient={true}
  gradientColors={["#1E3A8A", "#3B82F6", "#81D4FA", "#42A5F5"]}
/>
```

### Multiple Pulses Example

```tsx
<RNPulseLoaderKit
  isLoaderInAction={true}
  dotCount={5}
  dotColor="#49C91C"
  message="Loading 5 dots..."
  messageColor="#000"
  dotSize={10}
  interval={300}
/>
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

### Opening an Issue

1. Go to the [Issues](https://github.com/BinaryLeo/react-native-pulse-loader-kit/issues) page.
2. Click on the "New Issue" button.
3. Provide a clear and descriptive title for the issue.
4. Describe the issue in detail, including steps to reproduce, expected behavior, and any relevant screenshots or code snippets.

### Submitting a Pull Request

1. Fork the repository by clicking the "Fork" button on the repository page.
2. Clone your forked repository to your local machine:
   ```sh
   git clone https://github.com/your-username/react-native-pulse-loader-kit.git
   ```
3. Create a new branch for your feature or bugfix:
   ```sh
   git checkout -b feature-or-bugfix-name
   ```
4. Make your changes and commit them with a clear and descriptive commit message:
   ```sh
   git commit -m "Description of the changes"
   ```
5. Push your changes to your forked repository:
   ```sh
   git push origin feature-or-bugfix-name
   ```
6. Open a pull request from your forked repository to the main repository. Provide a clear and descriptive title and description for your pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Author

Leonardo Moura - [binaryleo](https://github.com/binaryleo) - 2024
Find me on [LinkedIn](https://www.linkedin.com/in/leonardomoura-reactnative/)

## Acknowledgements

Thanks to all the contributors and the open-source community for their support.
