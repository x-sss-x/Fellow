const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

config.transformer.unstable_allowRequireContext = true;

config.resolver.sourceExts.push('mjs');

module.exports = withNativeWind(config, { input: './global.css' })