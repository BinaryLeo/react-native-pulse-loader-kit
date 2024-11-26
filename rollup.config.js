import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        preferBuiltins: false,
        browser: true,
      }),
      commonjs({
        include: /node_modules/,
        transformMixedEsModules: true,
        sourceMap: true,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: true,
      }),
      babel({
        babelHelpers: "bundled",
        include: [
          "src/**/*",
          "node_modules/react-native/**/*",
          "node_modules/expo-linear-gradient/**/*",
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      }),
      terser(),
    ],
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      "react-native",
      "expo-linear-gradient",
    ],
  },
];