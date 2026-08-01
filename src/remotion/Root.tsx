import type { ComponentType } from 'react';
import { Composition } from 'remotion';
import { defaultParams } from '../fx/types';
import { manifest } from '../fx/manifest.gen';
import { FxAdapter } from './adapter';

type EffectProps = Record<string, unknown>;

const compositions = manifest.map((entry) => {
  const component: ComponentType<EffectProps> = (params) => (
    <FxAdapter meta={entry.meta} loadKernel={entry.load} params={params} />
  );

  return {
    component,
    defaultProps: defaultParams(entry.meta.params),
    meta: entry.meta,
  };
});

export function RemotionRoot() {
  return (
    <>
      {compositions.map(({ component, defaultProps, meta }) => (
        <Composition
          key={meta.id}
          id={meta.id}
          component={component}
          durationInFrames={180}
          fps={30}
          width={1280}
          height={720}
          defaultProps={defaultProps}
        />
      ))}
    </>
  );
}
