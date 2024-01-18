import featuresAt from './features_at';

export default function getFeatureAtAndSetCursors(event, ctx) {
  const features = featuresAt.click(event, null, ctx);
  return features[0];
}
