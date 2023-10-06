import * as React from 'react';

// ph:fork-knife-fill

// https://api.iconify.design/ph:fork-knife-fill.svg

// https://icon.ray.so/?fileName=extension_icon&icon=undefined&backgroundRadius=128&backgroundStrokeSize=0&backgroundStrokeColor=%23FFFFFF&backgroundRadialGlare=false&backgroundNoiseTexture=false&backgroundNoiseTextureOpacity=25&backgroundStrokeOpacity=100&iconColor=%23FFFFFF&iconSize=400&selectedPresetIndex=null&customSvg=%3Csvg+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22+width%3D%2232%22+height%3D%2232%22+viewBox%3D%220+0+256+256%22%3E%3Cpath+fill%3D%22currentColor%22+d%3D%22M216+40v184a8+8+0+0+1-16+0v-48h-48a8+8+0+0+1-8-8a268.75+268.75+0+0+1+7.22-56.88c9.78-40.49+28.32-67.63+53.63-78.47A8+8+0+0+1+216+40Zm-96.11-1.31a8+8+0+1+0-15.78+2.63L111.89+88H88V40a8+8+0+0+0-16+0v48H48.11l7.78-46.68a8+8+0+1+0-15.78-2.63l-8+48A8.17+8.17+0+0+0+32+88a48.07+48.07+0+0+0+40+47.32V224a8+8+0+0+0+16+0v-88.68A48.07+48.07+0+0+0+128+88a8.17+8.17+0+0+0-.11-1.31Z%22%2F%3E%3C%2Fsvg%3E&backgroundFillType=Solid&backgroundStartColor=%2316a34a&backgroundEndColor=%2315803d&backgroundAngle=90

interface LogoProps extends React.SVGProps<SVGSVGElement> {}
export const Logo = (props: LogoProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none" {...props}>
    <rect width={512} height={512} fill="#16a34a" paintOrder="stroke" rx={128} />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={400}
      height={400}
      x={56}
      y={56}
      alignmentBaseline="middle"
      style={{
        color: '#fff',
      }}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M216 40v184a8 8 0 0 1-16 0v-48h-48a8 8 0 0 1-8-8 268.75 268.75 0 0 1 7.22-56.88c9.78-40.49 28.32-67.63 53.63-78.47A8 8 0 0 1 216 40Zm-96.11-1.31a8 8 0 1 0-15.78 2.63L111.89 88H88V40a8 8 0 0 0-16 0v48H48.11l7.78-46.68a8 8 0 1 0-15.78-2.63l-8 48A8.17 8.17 0 0 0 32 88a48.07 48.07 0 0 0 40 47.32V224a8 8 0 0 0 16 0v-88.68A48.07 48.07 0 0 0 128 88a8.17 8.17 0 0 0-.11-1.31Z"
      />
    </svg>
  </svg>
);
